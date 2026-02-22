import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';

const LakeScene = ({ socket, onLanternClick, updateLanternCount, onLoaded }) => { 
    const mountRef = useRef(null);
    
    const onLanternClickRef = useRef(onLanternClick);
    const updateLanternCountRef = useRef(updateLanternCount);
    const onLoadedRef = useRef(onLoaded);

    useEffect(() => {
        onLanternClickRef.current = onLanternClick;
        updateLanternCountRef.current = updateLanternCount;
        onLoadedRef.current = onLoaded;
    }, [onLanternClick, updateLanternCount, onLoaded]);

    useEffect(() => {
        let animationId;

        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x000000, 0.005); 

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 5000);
        camera.position.set(0, 0, 40); 

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000); 
        renderer.toneMapping = THREE.ReinhardToneMapping; 
        mountRef.current.appendChild(renderer.domElement);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;

        const renderScene = new RenderPass(scene, camera);
        
        const bloomPass = new UnrealBloomPass(
            new THREE.Vector2(window.innerWidth, window.innerHeight),
            0.6,   
            0.4,   
            0.2    
        );

        const composer = new EffectComposer(renderer);
        composer.addPass(renderScene);
        composer.addPass(bloomPass);

        const starGeometry = new THREE.BufferGeometry();
        const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.15, transparent: true, opacity: 0.8 });
        const starVertices = [];
        for(let i = 0; i < 8000; i++) {
            starVertices.push((Math.random() - 0.5) * 4000, (Math.random() - 0.5) * 4000, (Math.random() - 0.5) * 4000);
        }
        starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
        const stars = new THREE.Points(starGeometry, starMaterial);
        scene.add(stars);

        const lanterns = []; 

        const createBillboard = (text, yOffset, fontSize, color, canvasWidth = 512, spriteWidth = 6) => {
            const canvas = document.createElement('canvas');
            canvas.width = canvasWidth;
            canvas.height = 128;
            const context = canvas.getContext('2d');
            
            context.font = `Bold ${fontSize}px Arial`;
            context.fillStyle = color;
            context.textAlign = 'center';
            context.shadowColor = 'rgba(0,0,0,1)'; 
            context.shadowBlur = 8;
            context.fillText(text, canvasWidth / 2, 64); 
            
            const texture = new THREE.CanvasTexture(canvas);
            texture.needsUpdate = true;
            const spriteMaterial = new THREE.SpriteMaterial({ map: texture, transparent: true });
            const sprite = new THREE.Sprite(spriteMaterial);
            sprite.scale.set(spriteWidth, 1.5, 1); 
            sprite.position.y = yOffset;
            return sprite;
        };

        const loader = new GLTFLoader();
        
        const backupGeo = new THREE.CylinderGeometry(0.5, 0.5, 1.5, 16);
        const backupMat = new THREE.MeshBasicMaterial({ color: 0xffcc00 }); 
        const backupPrefab = new THREE.Mesh(backupGeo, backupMat);

        loader.load(
            './lantern.glb', 
            (gltf) => {
                const loadedModelPrefab = gltf.scene;
                
                loadedModelPrefab.traverse((child) => {
                    if (child.isMesh) {
                        child.material.transparent = true;
                        child.material.opacity = 0.85;
                        child.material.side = THREE.DoubleSide;
                        
                        // FIX: We make the lantern material self-glowing (Emissive)
                        // This removes the need for heavy PointLights!
                        child.material.emissive = new THREE.Color(0xffaa00);
                    }
                });

                startSockets(loadedModelPrefab);
                if (onLoadedRef.current) onLoadedRef.current();
            }, 
            undefined, 
            (error) => {
                console.warn("Could not find lantern.glb. Using backup cylinder.");
                startSockets(backupPrefab);
                if (onLoadedRef.current) onLoadedRef.current();
            }
        );

        function startSockets(modelToUse) {
            if (socket) {
                socket.off('new_wish');
                socket.off('initial_wishes');
                socket.off('total_count'); // Make sure to clean up the new listener too!

                // Listen for the TRUE database count
                socket.on('total_count', (trueTotal) => {
                    if (updateLanternCountRef.current) updateLanternCountRef.current(trueTotal);
                });

                socket.on('new_wish', (data) => {
                    spawnLantern(data.message, data.author, data.createdAt, true, modelToUse);
                    if (updateLanternCountRef.current) updateLanternCountRef.current(prevCount => prevCount + 1);
                });

                socket.on('initial_wishes', (wishes) => {
                    wishes.forEach(w => spawnLantern(w.message, w.author, w.createdAt, false, modelToUse));
                    // ❌ WE DELETED the line that counted the array length here!
                });
            }
        }

        const spawnLantern = (message, author, timestamp, isNewLiveLantern = false, loadedModelPrefab) => {
            const lanternGroup = new THREE.Group();
            
            // ❌ WE DELETED THE POINTLIGHT HERE to save your GPU!

            const customModel = loadedModelPrefab.clone();
            const flickerMaterials = []; // Keep track of materials so we can flicker them

            customModel.traverse((child) => {
                if (child.isMesh) {
                    // Clone the material so each lantern can flicker independently
                    child.material = child.material.clone();
                    flickerMaterials.push(child.material);
                }
            });

            lanternGroup.add(customModel);

            const safeAuthor = author || "Anonymous";
            const safeMessage = message || "A silent wish...";
            
            const dateObj = timestamp ? new Date(timestamp) : new Date();
            const localTimeString = dateObj.toLocaleString(undefined, { 
                weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' 
            });

            const nameSprite = createBillboard(safeAuthor, 1.6, 40, '#ffaa00'); 
            const timeSprite = createBillboard(localTimeString, -1.4, 24, '#aaaaaa', 1024, 12); 

            lanternGroup.add(nameSprite);
            lanternGroup.add(timeSprite);

            if (isNewLiveLantern) {
                const distance = 20;
                const direction = new THREE.Vector3();
                camera.getWorldDirection(direction);
                lanternGroup.position.copy(camera.position).add(direction.multiplyScalar(distance));
                lanternGroup.position.y -= 3;
            } else {
                lanternGroup.position.set(
                    (Math.random() - 0.5) * 400,
                    (Math.random() - 0.5) * 200,
                    (Math.random() - 0.5) * 400,
                );
            }
            
            lanternGroup.userData = { 
                message: safeMessage,
                author: safeAuthor,
                time: localTimeString, 
                materials: flickerMaterials, // Save the materials for the animate loop
                floatSpeed: Math.random() * 0.03 + 0.01, 
                swaySpeed: Math.random() * 0.02 + 0.01, 
                swayOffset: Math.random() * Math.PI * 2,
                flickerSpeed: Math.random() * 8 + 4,
            }; 
            
            scene.add(lanternGroup);
            lanterns.push(lanternGroup);

            if (lanterns.length > 500) {
                const oldestLantern = lanterns.shift();
                scene.remove(oldestLantern);

                oldestLantern.traverse((child) => {
                    if (child.isMesh) {
                        child.geometry.dispose();
                        if (child.material.map) child.material.map.dispose();
                        child.material.dispose();
                    }
                });
            }
        };

        const animate = () => {
            animationId = requestAnimationFrame(animate); 
            controls.update();
            const time = Date.now() * 0.001;

            lanterns.forEach(group => {
                group.position.y += group.userData.floatSpeed;
                group.position.x += Math.sin(time * group.userData.swaySpeed + group.userData.swayOffset) * 0.02;

                if (group.position.y > 250) {
                    group.position.y = -150;
                    group.position.x = (Math.random() - 0.5) * 400;
                    group.position.z = (Math.random() - 0.5) * 400;
                }

                // FIX: Make the material's glow flicker instead of a heavy PointLight!
                const flicker = Math.sin(time * group.userData.flickerSpeed) * 0.5 + Math.cos(time * 3) * 0.2;
                group.userData.materials.forEach(mat => {
                    mat.emissiveIntensity = 1.5 + flicker; 
                });
            });

            stars.rotation.y += 0.0001;
            stars.rotation.x += 0.00005;
            
            composer.render();
        };
        animate();

        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();
        const canvasElement = renderer.domElement;

        const onClick = (event) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObjects(lanterns, true);

            if (intersects.length > 0) {
                let hitObject = intersects[0].object;
                while (hitObject.parent && hitObject.parent.type !== 'Scene') {
                    if (hitObject.userData.message) break;
                    hitObject = hitObject.parent;
                }

                if (hitObject && hitObject.userData.message) {
                    if (onLanternClickRef.current) {
                        onLanternClickRef.current(`"${hitObject.userData.message}"\n— ${hitObject.userData.author}\n(${hitObject.userData.time})`);
                    }
                }
            }
        };

        canvasElement.addEventListener('click', onClick);

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            composer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            canvasElement.removeEventListener('click', onClick);
            
            cancelAnimationFrame(animationId);
            
            if (mountRef.current && mountRef.current.contains(renderer.domElement)) {
                mountRef.current.removeChild(renderer.domElement);
            }
            if (socket) {
                socket.off('new_wish');
                socket.off('initial_wishes');
            }
            
            renderer.forceContextLoss();
            composer.dispose();
            renderer.dispose(); 
        };
        
    }, [socket]); 

    return <div ref={mountRef} style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh' }} />;
};

export default LakeScene;
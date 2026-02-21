import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const LakeScene = ({ socket, onLanternClick, updateLanternCount }) => { 
    const mountRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x000000, 0.005); 

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 5000);
        camera.position.set(0, 0, 40); 

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000); 
        mountRef.current.appendChild(renderer.domElement);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;

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

        // --- UPGRADED: Billboard Generator (Now supports custom widths for long dates) ---
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
            // Center the text based on whatever width we pass in
            context.fillText(text, canvasWidth / 2, 64); 
            
            const texture = new THREE.CanvasTexture(canvas);
            const spriteMaterial = new THREE.SpriteMaterial({ map: texture, transparent: true });
            const sprite = new THREE.Sprite(spriteMaterial);
            sprite.scale.set(spriteWidth, 1.5, 1); 
            sprite.position.y = yOffset;
            return sprite;
        };

        const spawnLantern = (message, author, timestamp, isNewLiveLantern = false) => {
            const lanternGroup = new THREE.Group();

            const lanternGeo = new THREE.CylinderGeometry(0.5, 0.5, 1.5, 16);
            const lanternMat = new THREE.MeshBasicMaterial({ color: 0xffaa00, transparent: true, opacity: 0.9 });
            const lanternMesh = new THREE.Mesh(lanternGeo, lanternMat);
            const light = new THREE.PointLight(0xffaa00, 2, 10);

            const safeAuthor = author || "Anonymous";
            const safeMessage = message || "A silent wish...";
            
            // --- UPGRADED: Full Date Formatting ---
            const dateObj = timestamp ? new Date(timestamp) : new Date();
            const localTimeString = dateObj.toLocaleString(undefined, { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric', 
                hour: '2-digit', 
                minute: '2-digit' 
            });

            // Name uses standard width (512px). Time uses double width (1024px) so it fits!
            const nameSprite = createBillboard(safeAuthor, 1.6, 40, '#ffaa00'); 
            const timeSprite = createBillboard(localTimeString, -1.4, 24, '#aaaaaa', 1024, 12); 

            lanternGroup.add(lanternMesh);
            lanternGroup.add(light);
            lanternGroup.add(nameSprite);
            lanternGroup.add(timeSprite);

            if (isNewLiveLantern) {
                const distance = 20;
                const direction = new THREE.Vector3();
                camera.getWorldDirection(direction); 
                lanternGroup.position.copy(camera.position).add(direction.multiplyScalar(distance));
                lanternGroup.position.y -= 3; 
            } else {
                lanternGroup.position.set((Math.random() - 0.5) * 150, (Math.random() - 0.5) * 150, (Math.random() - 0.5) * 150);
            }
            
            lanternGroup.userData = { 
                message: safeMessage,
                author: safeAuthor,
                time: localTimeString, 
                floatSpeed: Math.random() * 0.03 + 0.01, 
                swaySpeed: Math.random() * 0.02 + 0.01, 
                swayOffset: Math.random() * Math.PI * 2 
            }; 
            
            scene.add(lanternGroup);
            lanterns.push(lanternGroup);
        };

        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            const time = Date.now() * 0.001;

            lanterns.forEach(group => {
                group.position.y += group.userData.floatSpeed;
                group.position.x += Math.sin(time * group.userData.swaySpeed + group.userData.swayOffset) * 0.02;
                if (group.position.y > 100) group.position.y = -100;
            });

            stars.rotation.y += 0.0001;
            stars.rotation.x += 0.00005;
            renderer.render(scene, camera);
        };
        animate();

        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();
        const canvasElement = renderer.domElement;

        const onClick = (event) => {
            const clientX = event.touches ? event.touches[0].clientX : event.clientX;
            const clientY = event.touches ? event.touches[0].clientY : event.clientY;

            mouse.x = (clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(clientY / window.innerHeight) * 2 + 1;

            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObjects(lanterns, true);

            if (intersects.length > 0) {
                const hitObject = intersects[0].object;
                const parentGroup = hitObject.parent;

                if (parentGroup && parentGroup.userData.message) {
                    const msg = parentGroup.userData.message;
                    const auth = parentGroup.userData.author;
                    const time = parentGroup.userData.time;
                    
                    onLanternClick(`"${msg}"\n— ${auth}\n(${time})`); 
                }
            } else {
                onLanternClick(null); 
            }
        };

        canvasElement.addEventListener('click', onClick);
        canvasElement.addEventListener('touchstart', onClick, { passive: false });

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        if (socket) {
            socket.on('new_wish', (data) => {
                spawnLantern(data.message, data.author, data.createdAt, true);
                // Safe check before calling UI updates
                if (typeof updateLanternCount === 'function') {
                    updateLanternCount(prevCount => prevCount + 1);
                }
            });

            socket.on('initial_wishes', (wishes) => {
                wishes.forEach(w => spawnLantern(w.message, w.author, w.createdAt, false));
                if (typeof updateLanternCount === 'function') {
                    updateLanternCount(wishes.length);
                }
            });
        }

        return () => {
            window.removeEventListener('resize', handleResize);
            canvasElement.removeEventListener('click', onClick);
            canvasElement.removeEventListener('touchstart', onClick);
            if (mountRef.current && mountRef.current.contains(renderer.domElement)) {
                mountRef.current.removeChild(renderer.domElement);
            }
            if (socket) {
                socket.off('new_wish');
                socket.off('initial_wishes');
            }
            renderer.dispose(); 
        };
    // --- THE FIX: We ONLY depend on socket. React will no longer destroy your world! ---
    }, [socket]); 

    return <div ref={mountRef} style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh' }} />;
};

export default LakeScene;
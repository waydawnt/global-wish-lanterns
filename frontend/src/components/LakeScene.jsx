import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// 修正 1 (Shūsei 1 - Fix 1): We need to pass 'socket' and 'onLanternClick' as props
const LakeScene = ({ socket, onLanternClick }) => { 
    const mountRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 5, 15);

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.maxPolarAngle = Math.PI / 2 - 0.05;

        const waterGeometry = new THREE.PlaneGeometry(300, 300);
        const waterMaterial = new THREE.MeshBasicMaterial({ color: 0x001e0f });
        const water = new THREE.Mesh(waterGeometry, waterMaterial);
        water.rotation.x = -Math.PI / 2;
        scene.add(water);

        const starGeometry = new THREE.BufferGeometry();
        const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });
        const starVertices = [];
        for(let i = 0; i < 2000; i++) {
            const x = (Math.random() - 0.5) * 300;
            const y = Math.random() * 100 + 5;
            const z = (Math.random() - 0.5) * 300;
            starVertices.push(x, y, z);
        }
        starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
        const stars = new THREE.Points(starGeometry, starMaterial);
        scene.add(stars);

        // 修正 2 (Shūsei 2 - Fix 2): We need an array to store lanterns for the Raycaster later
        const lanterns = []; 

        const spawnLantern = (x, y, z, message) => {
            const lanternGeo = new THREE.CylinderGeometry(0.5, 0.5, 1.5, 16);
            const lanternMat = new THREE.MeshBasicMaterial({ color: 0xffaa00, transparent: true, opacity: 0.85 });
            const lantern = new THREE.Mesh(lanternGeo, lanternMat);
            
            const light = new THREE.PointLight(0xffaa00, 2, 10);
            lantern.add(light);

            lantern.position.set(x, y, z);
            
            // 修正 3 (Shūsei 3 - Fix 3): Store the message inside the 3D object so we can read it when clicked!
            lantern.userData = { message: message || "A silent wish..." }; 
            
            scene.add(lantern);
            lanterns.push(lantern); // Add to our array
        };

        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };
        animate();

        // --- G. CLICK/TOUCH DETECTION (Raycasting) ---
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();

        const onClick = (event) => {
            // Convert click position to "Normalized Device Coordinates" (-1 to +1)
            // This tells Three.js exactly where on the 3D screen you tapped
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

            // Update the ray with the camera and mouse position
            raycaster.setFromCamera(mouse, camera);

            // See if the ray hits any of our lanterns
            const intersects = raycaster.intersectObjects(lanterns);

            if (intersects.length > 0) {
                // We hit a lantern! Grab the message we saved in userData
                const clickedMessage = intersects[0].object.userData.message;
                
                // Pass the message back up to the React App.jsx UI
                onLanternClick(clickedMessage);
            }
        };

        window.addEventListener('click', onClick);
        // Also add touch support for mobile!
        window.addEventListener('touchstart', (e) => onClick(e.touches[0]));

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        // 修正 4 (Shūsei 4 - Fix 4): Move the socket listeners ABOVE the return statement!
        if (socket) {
            socket.on('new_wish', (data) => {
                spawnLantern(data.x, data.y, data.z, data.message);
            });

            socket.on('initial_wishes', (wishes) => {
                wishes.forEach(w => spawnLantern(w.x, w.y, w.z, w.message));
            });
        }

        // 修正 5 (Shūsei 5 - Fix 5): The return statement inside useEffect must be the VERY LAST thing.
        return () => {
            window.removeEventListener('resize', handleResize);
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
            // Good practice: turn off socket listeners when the component unmounts
            if (socket) {
                window.removeEventListener('resize', handleResize);
                window.removeEventListener('click', onClick); // NEW
                window.removeEventListener('touchstart', onClick);
                socket.off('new_wish');
                socket.off('initial_wishes');
            }
        };

    // 修正 6 (Shūsei 6 - Fix 6): Add 'socket' to the dependency array
    }, [socket]); 

    return <div ref={mountRef} style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }} />;
};

export default LakeScene;
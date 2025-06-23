document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize AOS (Animate on Scroll) with more elegant settings
    AOS.init({
        duration: 1200, // Longer duration for smoother animations
        once: true,
        easing: 'ease-in-out-cubic', // A smoother easing function
    });

    // --- Advanced 3D Particle Background using Three.js ---
    const container = document.getElementById('particles-js');
    if (container) {
        let scene, camera, renderer, points;
        let mouseX = 0, mouseY = 0;

        function init() {
            // Scene
            scene = new THREE.Scene();

            // Camera
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
            camera.position.z = 1000;

            // Particle Geometry
            const particles = 5000;
            const geometry = new THREE.BufferGeometry();
            const positions = [];
            const colors = [];

            const color = new THREE.Color();
            const palette = ['#4285F4', '#EA4335', '#FBBC05', '#34A853', '#ffffff'];

            for (let i = 0; i < particles; i++) {
                // Positions
                const x = Math.random() * 2000 - 1000;
                const y = Math.random() * 2000 - 1000;
                const z = Math.random() * 2000 - 1000;
                positions.push(x, y, z);

                // Colors
                const c = palette[Math.floor(Math.random() * palette.length)];
                color.set(c);
                colors.push(color.r, color.g, color.b);
            }

            geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
            geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
            
            // Material
            const material = new THREE.PointsMaterial({
                size: 3,
                vertexColors: true,
                transparent: true,
                opacity: 0.8,
                sizeAttenuation: true
            });

            // Points
            points = new THREE.Points(geometry, material);
            scene.add(points);

            // Renderer
            renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setClearColor(0x000000, 0); // Transparent background
            container.appendChild(renderer.domElement);

            // Event Listeners
            document.addEventListener('mousemove', onMouseMove, false);
            window.addEventListener('resize', onWindowResize, false);
            document.addEventListener('scroll', onScroll, false);
        }

        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        function onMouseMove(event) {
            mouseX = (event.clientX - window.innerWidth / 2);
            mouseY = (event.clientY - window.innerHeight / 2);
        }
        
        function onScroll() {
            // Animate camera on scroll for a parallax effect
            camera.position.z = 1000 - window.scrollY * 0.5;
        }

        function animate() {
            requestAnimationFrame(animate);
            render();
        }

        function render() {
            const time = Date.now() * 0.00005;

            // Subtle camera movement based on mouse position
            camera.position.x += (mouseX - camera.position.x) * 0.0005;
            camera.position.y += (-mouseY - camera.position.y) * 0.0005;
            camera.lookAt(scene.position);

            // Animate particles
            points.rotation.x = time * 0.25;
            points.rotation.y = time * 0.5;

            renderer.render(scene, camera);
        }

        init();
        animate();
    }

    // --- Interactive Card Glow Effect ---
    const cards = document.querySelectorAll('.content-card, .service-card, .portfolio-item, .skill');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-in-out',
    });

    // Initialize Particles.js
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

    // About Section Animation - Connected Nodes Network
    function initAboutAnimation() {
        const canvas = document.getElementById('about-animation');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        
        const nodes = [];
        const connections = [];
        const numNodes = 15;
        
        // Create nodes
        for (let i = 0; i < numNodes; i++) {
            nodes.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 3 + 2,
                pulse: Math.random() * Math.PI * 2
            });
        }
        
        // Create connections between nearby nodes
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const distance = Math.sqrt(
                    Math.pow(nodes[i].x - nodes[j].x, 2) + 
                    Math.pow(nodes[i].y - nodes[j].y, 2)
                );
                if (distance < 150) {
                    connections.push({ from: i, to: j, distance: distance });
                }
            }
        }
        
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Update nodes
            nodes.forEach(node => {
                node.x += node.vx;
                node.y += node.vy;
                node.pulse += 0.05;
                
                // Bounce off edges
                if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
                if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
                
                // Draw node
                const pulseSize = Math.sin(node.pulse) * 0.5 + 1;
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius * pulseSize, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(0, 170, 255, ${0.6 + Math.sin(node.pulse) * 0.2})`;
                ctx.fill();
            });
            
            // Draw connections
            connections.forEach(conn => {
                const from = nodes[conn.from];
                const to = nodes[conn.to];
                const opacity = Math.max(0, 1 - conn.distance / 150);
                
                ctx.beginPath();
                ctx.moveTo(from.x, from.y);
                ctx.lineTo(to.x, to.y);
                ctx.strokeStyle = `rgba(0, 170, 255, ${opacity * 0.3})`;
                ctx.lineWidth = 1;
                ctx.stroke();
            });
            
            requestAnimationFrame(animate);
        }
        
        animate();
        
        // Handle resize
        window.addEventListener('resize', () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        });
    }

    // Service Animations - Data Patterns
    function initServiceAnimations() {
        const serviceTypes = [
            'data-analysis',    // Análisis de datos - puntos que se agrupan
            'automation',       // Automatización - líneas que se conectan
            'prediction',       // Predicción - ondas que se propagan
            'consulting'        // Consultoría - nodos que se expanden
        ];
        
        serviceTypes.forEach((type, index) => {
            const canvas = document.getElementById(`service-animation-${index + 1}`);
            if (!canvas) return;
            
            const ctx = canvas.getContext('2d');
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            
            let particles = [];
            let time = 0;
            
            // Initialize particles based on service type
            function initParticles() {
                particles = [];
                const numParticles = type === 'data-analysis' ? 20 : 15;
                
                for (let i = 0; i < numParticles; i++) {
                    particles.push({
                        x: Math.random() * canvas.width,
                        y: Math.random() * canvas.height,
                        vx: (Math.random() - 0.5) * 2,
                        vy: (Math.random() - 0.5) * 2,
                        size: Math.random() * 4 + 2,
                        type: type,
                        angle: Math.random() * Math.PI * 2,
                        speed: Math.random() * 0.02 + 0.01
                    });
                }
            }
            
            function animate() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                time += 0.02;
                
                particles.forEach((particle, i) => {
                    // Update position based on type
                    switch (particle.type) {
                        case 'data-analysis':
                            // Clustering effect
                            const centerX = canvas.width / 2;
                            const centerY = canvas.height / 2;
                            const dx = centerX - particle.x;
                            const dy = centerY - particle.y;
                            particle.x += dx * 0.01;
                            particle.y += dy * 0.01;
                            break;
                            
                        case 'automation':
                            // Connecting lines
                            particle.x += particle.vx;
                            particle.y += particle.vy;
                            if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
                            if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
                            break;
                            
                        case 'prediction':
                            // Wave propagation
                            particle.angle += particle.speed;
                            particle.x = canvas.width / 2 + Math.cos(particle.angle) * (50 + time * 10);
                            particle.y = canvas.height / 2 + Math.sin(particle.angle) * (30 + time * 5);
                            break;
                            
                        case 'consulting':
                            // Expanding nodes
                            particle.x += Math.cos(particle.angle) * 0.5;
                            particle.y += Math.sin(particle.angle) * 0.5;
                            particle.size = Math.sin(time + particle.angle) * 2 + 4;
                            break;
                    }
                    
                    // Draw particle
                    ctx.beginPath();
                    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(0, 170, 255, ${0.4 + Math.sin(time + i) * 0.2})`;
                    ctx.fill();
                    
                    // Draw connections for automation
                    if (particle.type === 'automation') {
                        particles.forEach((other, j) => {
                            if (i !== j) {
                                const distance = Math.sqrt(
                                    Math.pow(particle.x - other.x, 2) + 
                                    Math.pow(particle.y - other.y, 2)
                                );
                                if (distance < 80) {
                                    ctx.beginPath();
                                    ctx.moveTo(particle.x, particle.y);
                                    ctx.lineTo(other.x, other.y);
                                    ctx.strokeStyle = `rgba(0, 170, 255, ${0.2 * (1 - distance / 80)})`;
                                    ctx.lineWidth = 1;
                                    ctx.stroke();
                                }
                            }
                        });
                    }
                });
                
                requestAnimationFrame(animate);
            }
            
            initParticles();
            animate();
        });
    }

    // Portfolio Animations - Data Flow Visualization
    function initPortfolioAnimations() {
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        
        portfolioItems.forEach((item, index) => {
            const canvas = item.querySelector('.portfolio-canvas');
            if (!canvas) return;
            
            const ctx = canvas.getContext('2d');
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            
            const particles = [];
            const numParticles = 20;
            
            // Create particles
            for (let i = 0; i < numParticles; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 2,
                    vy: (Math.random() - 0.5) * 2,
                    size: Math.random() * 3 + 1,
                    life: Math.random() * 100 + 50,
                    maxLife: Math.random() * 100 + 50
                });
            }
            
            function animate() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
                particles.forEach(particle => {
                    particle.x += particle.vx;
                    particle.y += particle.vy;
                    particle.life--;
                    
                    // Reset particle if it goes off screen or dies
                    if (particle.x < 0 || particle.x > canvas.width || 
                        particle.y < 0 || particle.y > canvas.height || 
                        particle.life <= 0) {
                        particle.x = Math.random() * canvas.width;
                        particle.y = Math.random() * canvas.height;
                        particle.life = particle.maxLife;
                    }
                    
                    // Draw particle
                    const opacity = particle.life / particle.maxLife;
                    ctx.beginPath();
                    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(0, 170, 255, ${opacity * 0.6})`;
                    ctx.fill();
                });
                
                requestAnimationFrame(animate);
            }
            
            animate();
            
            // Handle resize
            window.addEventListener('resize', () => {
                canvas.width = canvas.offsetWidth;
                canvas.height = canvas.offsetHeight;
            });
        });
    }

    // Skills Animation - Clustering Points
    function initSkillsAnimation() {
        const canvas = document.getElementById('skills-animation');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        
        const skillGroups = {
            'python': { x: canvas.width * 0.2, y: canvas.height * 0.3, color: '#3776ab' },
            'r': { x: canvas.width * 0.8, y: canvas.height * 0.3, color: '#276dc3' },
            'sql': { x: canvas.width * 0.2, y: canvas.height * 0.7, color: '#e48e00' },
            'git': { x: canvas.width * 0.8, y: canvas.height * 0.7, color: '#f05032' },
            'pandas': { x: canvas.width * 0.5, y: canvas.height * 0.2, color: '#130654' },
            'scikit': { x: canvas.width * 0.5, y: canvas.height * 0.8, color: '#f7931e' },
            'analysis': { x: canvas.width * 0.1, y: canvas.height * 0.5, color: '#00aaff' },
            'ml': { x: canvas.width * 0.9, y: canvas.height * 0.5, color: '#ff6b35' }
        };
        
        const particles = [];
        let time = 0;
        
        // Create particles for each skill
        Object.keys(skillGroups).forEach(skill => {
            const group = skillGroups[skill];
            for (let i = 0; i < 5; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    targetX: group.x + (Math.random() - 0.5) * 40,
                    targetY: group.y + (Math.random() - 0.5) * 40,
                    color: group.color,
                    size: Math.random() * 3 + 2,
                    speed: Math.random() * 0.02 + 0.01,
                    skill: skill
                });
            }
        });
        
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            time += 0.02;
            
            particles.forEach((particle, index) => {
                // Move towards target
                const dx = particle.targetX - particle.x;
                const dy = particle.targetY - particle.y;
                particle.x += dx * particle.speed;
                particle.y += dy * particle.speed;
                
                // Draw particle
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = particle.color;
                ctx.fill();
                
                // Draw connections within groups
                particles.forEach((other, j) => {
                    if (index !== j && particle.skill === other.skill) {
                        const distance = Math.sqrt(
                            Math.pow(particle.x - other.x, 2) + 
                            Math.pow(particle.y - other.y, 2)
                        );
                        if (distance < 50) {
                            ctx.beginPath();
                            ctx.moveTo(particle.x, particle.y);
                            ctx.lineTo(other.x, other.y);
                            ctx.strokeStyle = `${particle.color}40`;
                            ctx.lineWidth = 1;
                            ctx.stroke();
                        }
                    }
                });
            });
            
            requestAnimationFrame(animate);
        }
        
        animate();
        
        // Handle skill hover effects
        document.querySelectorAll('.skill').forEach(skill => {
            skill.addEventListener('mouseenter', () => {
                const skillType = skill.dataset.skill;
                particles.forEach(particle => {
                    if (particle.skill === skillType) {
                        particle.size *= 1.5;
                    }
                });
            });
            
            skill.addEventListener('mouseleave', () => {
                const skillType = skill.dataset.skill;
                particles.forEach(particle => {
                    if (particle.skill === skillType) {
                        particle.size = Math.random() * 3 + 2;
                    }
                });
            });
        });
    }

    // Initialize all animations
    initAboutAnimation();
    initServiceAnimations();
    initPortfolioAnimations();
    initSkillsAnimation();
    
    // Handle window resize for all canvases
    window.addEventListener('resize', () => {
        setTimeout(() => {
            initAboutAnimation();
            initServiceAnimations();
            initPortfolioAnimations();
            initSkillsAnimation();
        }, 100);
    });
});

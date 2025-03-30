(function () {
    const opt = {
        particles: 100,
        noiseScale: 0.02,
        angle: (Math.PI / 180) * -90,
        strokeWeight: 1.5,
        tail: 3,
    };

    let globalAngle = Math.random() * Math.PI;
    let particles = [];
    let animationRunning = false;  // Track if animation is running

    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.vx = 0;
            this.vy = 0;
            this.ax = 0;
            this.ay = 0;
            this.pastPositions = Array(opt.tail).fill({x: this.x, y: this.y});
        }

        update(width, height) {
            this.follow();
            this.vx += this.ax;
            this.vy += this.ay;
            this.x += this.vx;
            this.y += this.vy;
            this.ax = 0;
            this.ay = 0;

            this.pastPositions.unshift({x: this.x, y: this.y});
            if (this.pastPositions.length > opt.tail + 1) {
                this.pastPositions.pop();
            }

            let offset = 15;
            if (this.x > width + offset || this.x < -offset || this.y > height + offset || this.y < -offset) {
                this.regen(width, height);
            }
        }

        follow() {
            let angle = globalAngle + opt.angle;
            let curveFactor = Math.sin(angle);
            this.ax = Math.cos(angle + curveFactor) * 0.01;
            this.ay = Math.sin(angle + curveFactor) * 0.01;
        }

        render(context) {
            context.strokeStyle = 'tomato';
            context.lineWidth = opt.strokeWeight;

            for (let i = 0; i < this.pastPositions.length - 1; i++) {
                context.beginPath();
                context.moveTo(this.pastPositions[i].x, this.pastPositions[i].y);
                context.lineTo(this.pastPositions[i + 1].x, this.pastPositions[i + 1].y);
                context.globalAlpha = Math.max(1 - i / this.pastPositions.length, 0);
                context.stroke();
            }
            context.globalAlpha = 1;
        }

        regen(width, height) {
            let side = Math.floor(Math.random() * 4);
            switch (side) {
                case 0:
                    this.x = Math.random() * width;
                    this.y = 0;
                    break;
                case 1:
                    this.x = width;
                    this.y = Math.random() * height;
                    break;
                case 2:
                    this.x = Math.random() * width;
                    this.y = height;
                    break;
                case 3:
                    this.x = 0;
                    this.y = Math.random() * height;
                    break;
            }
            this.vx = this.vy = this.ax = this.ay = 0;
            this.pastPositions = Array(opt.tail).fill({x: this.x, y: this.y});
        }
    }

    function generateParticles() {
        particles = [];
        for (let i = 0; i < opt.particles; i++) {
            particles.push(new Particle(Math.random() * window.innerWidth, Math.random() * window.innerHeight));
        }
    }

    function startAnimation() {
        if (animationRunning) return;  // Prevent starting a new animation
        animationRunning = true;
        generateParticles();
        setInterval(() => {
            globalAngle += (Math.PI / 180) * (Math.random() > 0.5 ? 1 : -1);
            opt.angle += (Math.PI / 180) * (Math.random() > 0.5 ? 1 : -1);
        }, 1);
        window.addEventListener('click', () => {
            globalAngle = Math.random() * Math.PI * 2;
        });
    }

    function getTheme() {
        const computedStyle = getComputedStyle(document.documentElement);
        return computedStyle.getPropertyValue('--color-base-100') || 'white';
    }

    function render() {
        const canvas = document.getElementById('particleCanvas');
        if (!canvas) return;
        const context = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        function animate() {
            context.fillStyle = getTheme();
            context.fillRect(0, 0, canvas.width, canvas.height);
            particles.forEach(particle => {
                particle.update(canvas.width, canvas.height);
                particle.render(context);
            });
            setTimeout(animate, 1000 / 60);
        }

        animate();
    }

    window.onload = function () {
        if ('requestIdleCallback' in window) {
            requestIdleCallback(() => startAnimation());
        } else {
            setTimeout(startAnimation, 3_000);
        }
        render();
    };

})();
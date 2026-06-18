// JavaScript for Akshay Anilkumar's Developer Portfolio
// Supports: Light/Dark theme, Dual-mode Canvas (Particles / Matrix Rain), Simulated Terminal, Usable Zero-Gravity Bobbing Physics, and Glitch animations.

let isMatrixActive = false;
let isZeroGActive = false;
let floatElements = [];
let floatAnimationId = null;

document.addEventListener('DOMContentLoaded', () => {
    // 1. Theme Toggle System
    initThemeToggle();

    // 2. Dual-Mode Canvas (Particles & Matrix Rain)
    initCanvasBackground();

    // 3. Typewriter Effect
    initTypewriter();

    // 4. Navbar Scrolling & Mobile Toggle
    initNavbar();

    // 5. Skills Grid Filter
    initSkillsFilter();

    // 6. Copy Email Link Clipboard
    initCopyEmail();

    // 7. Contact Form mock API
    initContactForm();

    // 8. Simulated Console Terminal
    initTerminal();

    // 9. Premium Zero-Gravity Bouncing & Sway Engine (Zero-G Mode)
    initZeroG();
});

/* =========================================================================
   1. Theme Toggle System
   ========================================================================= */
function initThemeToggle() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const moonIcon = document.getElementById('theme-icon-moon');
    const sunIcon = document.getElementById('theme-icon-sun');

    if (!themeToggleBtn || !moonIcon || !sunIcon) return;

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        moonIcon.classList.add('hidden');
        sunIcon.classList.remove('hidden');
    }

    themeToggleBtn.addEventListener('click', () => {
        const isLight = document.body.classList.toggle('light-theme');
        
        if (isLight) {
            localStorage.setItem('theme', 'light');
            moonIcon.classList.add('hidden');
            sunIcon.classList.remove('hidden');
        } else {
            localStorage.setItem('theme', 'dark');
            moonIcon.classList.remove('hidden');
            sunIcon.classList.add('hidden');
        }
    });
}

/* =========================================================================
   2. Dual-Mode Canvas Background
   ========================================================================= */
function initCanvasBackground() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particlesArray = [];
    const maxParticles = 55;
    const connectionDistance = 115;
    let mouse = { x: null, y: null, radius: 130 };

    window.addEventListener('mousemove', (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
    });

    window.addEventListener('mouseout', () => {
        mouse.x = null;
        mouse.y = null;
    });

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
        constructor(x, y, dx, dy, size, color) {
            this.x = x;
            this.y = y;
            this.dx = dx;
            this.dy = dy;
            this.size = size;
            this.color = color;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
        update() {
            if (this.x > canvas.width || this.x < 0) this.dx = -this.dx;
            if (this.y > canvas.height || this.y < 0) this.dy = -this.dy;
            
            this.x += this.dx;
            this.y += this.dy;
            this.draw();
        }
    }

    function initParticles() {
        particlesArray = [];
        for (let i = 0; i < maxParticles; i++) {
            let size = (Math.random() * 1.5) + 1;
            let x = Math.random() * (canvas.width - size * 2) + size;
            let y = Math.random() * (canvas.height - size * 2) + size;
            let dx = (Math.random() * 0.3) - 0.15;
            let dy = (Math.random() * 0.3) - 0.15;
            let color = document.body.classList.contains('light-theme') 
                ? 'rgba(79, 70, 229, 0.15)' 
                : 'rgba(99, 102, 241, 0.3)';
            particlesArray.push(new Particle(x, y, dx, dy, size, color));
        }
    }

    function connectParticles() {
        let opacityValue = 1;
        const strokeColor = document.body.classList.contains('light-theme')
            ? '79, 70, 229'
            : '99, 102, 241';

        for (let a = 0; a < particlesArray.length; a++) {
            for (let b = a; b < particlesArray.length; b++) {
                let dx = particlesArray[a].x - particlesArray[b].x;
                let dy = particlesArray[a].y - particlesArray[b].y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < connectionDistance) {
                    opacityValue = 1 - (distance / connectionDistance);
                    ctx.strokeStyle = `rgba(${strokeColor}, ${opacityValue * 0.12})`;
                    ctx.lineWidth = 0.8;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                    ctx.stroke();
                }
            }

            if (mouse.x !== null && mouse.y !== null) {
                let dxMouse = particlesArray[a].x - mouse.x;
                let dyMouse = particlesArray[a].y - mouse.y;
                let distanceMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
                if (distanceMouse < mouse.radius) {
                    opacityValue = 1 - (distanceMouse / mouse.radius);
                    const mouseColor = document.body.classList.contains('light-theme') ? '79, 70, 229' : '236, 72, 153';
                    ctx.strokeStyle = `rgba(${mouseColor}, ${opacityValue * 0.2})`;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                }
            }
        }
    }

    // Matrix Code Drops
    const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ$#@%&*+=?@".split("");
    const fontSize = 15;
    let columns = Math.floor(canvas.width / fontSize);
    let drops = [];

    function initMatrix() {
        columns = Math.floor(canvas.width / fontSize);
        drops = [];
        for (let i = 0; i < columns; i++) {
            drops[i] = Math.random() * -120;
        }
    }

    window.addEventListener('resize', () => {
        initMatrix();
        initParticles();
    });

    initParticles();
    initMatrix();

    function draw() {
        requestAnimationFrame(draw);

        if (isMatrixActive) {
            ctx.fillStyle = 'rgba(10, 7, 20, 0.08)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = '#10b981'; // Sleek premium green phosphor
            ctx.font = fontSize + 'px monospace';
            
            for (let i = 0; i < drops.length; i++) {
                const char = characters[Math.floor(Math.random() * characters.length)];
                ctx.fillText(char, i * fontSize, drops[i] * fontSize);
                
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const isLight = document.body.classList.contains('light-theme');
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].color = isLight ? 'rgba(79, 70, 229, 0.15)' : 'rgba(99, 102, 241, 0.3)';
                particlesArray[i].update();
            }
            connectParticles();
        }
    }

    draw();
}

/* =========================================================================
   3. Typewriter Effect
   ========================================================================= */
function initTypewriter() {
    const typewriter = document.getElementById('typewriter');
    if (!typewriter) return;

    const jobs = [
        "Lead Software Engineer",
        "Frappe / ERPNext Developer", 
        "API Integration Specialist", 
        "Open Source Contributor"
    ];
    let wordIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let speed = 90;

    function type() {
        const text = jobs[wordIdx];
        if (isDeleting) {
            typewriter.textContent = text.substring(0, charIdx - 1);
            charIdx--;
            speed = 40;
        } else {
            typewriter.textContent = text.substring(0, charIdx + 1);
            charIdx++;
            speed = 90;
        }

        if (!isDeleting && charIdx === text.length) {
            speed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            wordIdx = (wordIdx + 1) % jobs.length;
            speed = 400;
        }

        setTimeout(type, speed);
    }

    setTimeout(type, 700);
}

/* =========================================================================
   4. Navbar Scrolling & Mobile Toggle
   ========================================================================= */
function initNavbar() {
    const header = document.getElementById('main-header');
    const navToggle = document.getElementById('nav-toggle');
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    // Scroll styling
    window.addEventListener('scroll', () => {
        if (window.scrollY > 30) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Dynamic Active Highlight
        let currentId = '';
        const scrollOffset = window.scrollY + 160;

        sections.forEach(sec => {
            if (scrollOffset >= sec.offsetTop && scrollOffset < sec.offsetTop + sec.offsetHeight) {
                currentId = sec.getAttribute('id');
            }
        });

        if (currentId) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentId}`) {
                    link.classList.add('active');
                }
            });
        }
    });

    // Mobile hamburger actions dropdown toggle
    if (navToggle && navbar) {
        navToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navToggle.classList.toggle('open');
            navbar.classList.toggle('open');
        });

        // Close on links
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('open');
                navbar.classList.remove('open');
            });
        });

        // Close outside click
        document.addEventListener('click', (e) => {
            if (!navbar.contains(e.target) && !navToggle.contains(e.target)) {
                navToggle.classList.remove('open');
                navbar.classList.remove('open');
            }
        });
    }
}

/* =========================================================================
   5. Skills Grid Filter
   ========================================================================= */
function initSkillsFilter() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const skillCards = document.querySelectorAll('.skill-card');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const tab = btn.getAttribute('data-tab');

            skillCards.forEach(card => {
                const cat = card.getAttribute('data-category');
                if (tab === 'all' || cat === tab) {
                    card.classList.remove('hidden');
                    card.style.opacity = '0';
                    setTimeout(() => {
                        card.style.opacity = '1';
                    }, 50);
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
}

/* =========================================================================
   6. Copy Email Link Clipboard
   ========================================================================= */
function initCopyEmail() {
    const copyBtn = document.getElementById('copy-email-btn');
    const emailVal = document.getElementById('email-text');
    const tooltip = copyBtn ? copyBtn.querySelector('.copy-tooltip') : null;

    if (!copyBtn || !emailVal || !tooltip) return;

    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(emailVal.textContent).then(() => {
            tooltip.textContent = 'Copied!';
            copyBtn.style.color = '#10b981';
            
            setTimeout(() => {
                tooltip.textContent = 'Copy';
                copyBtn.style.color = '';
            }, 2000);
        });
    });
}

/* =========================================================================
   7. Contact Form mock API
   ========================================================================= */
function initContactForm() {
    const form = document.getElementById('contact-form');
    const feedback = document.getElementById('form-feedback');
    const submitBtn = document.getElementById('form-submit-btn');

    if (!form || !feedback) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('form-name').value;
        const email = document.getElementById('form-email').value;
        const subject = document.getElementById('form-subject').value;
        const message = document.getElementById('form-message').value;

        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending Message...';
        feedback.classList.add('hidden');
        feedback.className = 'form-feedback';

        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
            
            feedback.classList.remove('hidden');
            feedback.innerHTML = `✓ Message sent successfully! (Or <a href="mailto:akshayy.anill@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("From: " + name + " <" + email + ">\n\n" + message)}" style="color: var(--accent-cyan); text-decoration: underline; font-weight: 700;">click here</a> to open mail client directly).`;
            
            form.reset();
        }, 1100);
    });
}

/* =========================================================================
   8. Simulated Console Terminal
   ========================================================================= */
function initTerminal() {
    const termInput = document.getElementById('terminal-input');
    const termBody = document.getElementById('terminal-body');

    if (!termInput || !termBody) return;

    const cmdHistory = [];
    let histIndex = -1;

    const actions = {
        'help': () => {
            return `Console commands:
  <span class="highlight">help</span>           Display guidance actions list
  <span class="highlight">about</span>          Akshay Anilkumar summary info
  <span class="highlight">skills</span>         Lists technologies and stacks
  <span class="highlight">experience</span>     Detailed timeline of corporate software engineering
  <span class="highlight">contributions</span>  Ecosystem pull requests and issue files
  <span class="highlight">bench migrate</span>  Trigger animated Frappe bench updates patches sync
  <span class="highlight">zero-g</span>         Toggle Zero-Gravity bobbing/sway float mode (usable!)
  <span class="highlight">matrix</span>         Toggle vertical hacker cascading green canvas rain
  <span class="highlight">glitch</span>         Simulate screen CRT alignment glitch
  <span class="highlight">contact</span>        Get emails, links and physical address locations
  <span class="highlight">clear</span>          Clear stdout logs buffer`;
        },
        'about': () => {
            return `Akshay Anilkumar -- Profile Summary:
-------------------------------------
* Focus: Lead Software Engineer / Frappe ERPNext Backend Specialist
* Mindset: Relational database tuning, multi-channel API integrations, clean modular structures
* Background: Civil Engineering analytics transitioned to full-stack systems engineering.`;
        },
        'skills': () => {
            return `Technical Stacks:
-----------------
* Core languages: Python, JavaScript (ES6+), SQL, HTML5/CSS3
* Web frameworks: Frappe Framework, ERPNext customizations, Flask, FastAPI
* Databases: MariaDB, MySQL, PostgreSQL, Redis caching, Database Design
* Frontend modules: Vue.js (Vue 3), Tailwind CSS, Jinja templates
* DevOps / Automation: Git, GitHub Actions, Docker containers, Vercel deployments, Ruff, ESLint`;
        },
        'experience': () => {
            return `Journey History:
----------------
1. <span class="accent">Lead Software Engineer @ Arijentek Solutions | Dec 2025 - Present</span>
   - Built Gold ERP for retail jewelry (Frappe / Vue 3 / Tailwind CSS).
   - Designed repairs pos, appraisal memo contracts, metal BOM workflows.
   - Authored biometric HRMS, leaves, automated payslips.
   
2. <span class="accent">Frappe Developer @ Gravity Inc. (E-commerce Operations) | 2023 - Present</span>
   - Engineered Shopify & Amazon SP-API channels (Sync errors down to 2%).
   - Automated reconciliations reducing manual operation loads by 60%.
   - Database profiling (+35% speedup in P95 queries via selective caches).`;
        },
        'contributions': () => {
            return `Open Source Merged Code:
---------------------------
* <span class="highlight">frappe/frappe</span> -- Issue #38252
  Resolved DuplicateEntryError when submitting shortcuts to desk desktop, and fixed toasts.
* <span class="highlight">frappe/hrms</span> -- PR #3993
  Fixed redirection loop bugs and 403 authorization leaks for website-role employees.`;
        },
        'contact': () => {
            return `Contact Options:
----------------
* Email:    akshayy.anill@gmail.com
* Phone:    +91 79045 45352
* GitHub:   github.com/Akshay-Arijentek
* Location: Coimbatore, Tamil Nadu, India`;
        },
        'zero-g': () => {
            toggleZeroGMode();
            return `Zero-G Mode: <span class="accent">${isZeroGActive ? "ENABLED" : "DISABLED"}</span>. Floating cards bob gently in space while remaining fully clickable and aligned.`;
        },
        'zerog': () => {
            return actions['zero-g']();
        },
        'float': () => {
            return actions['zero-g']();
        },
        'matrix': () => {
            isMatrixActive = !isMatrixActive;
            return `Matrix backdrop rain: <span class="accent">${isMatrixActive ? "ENABLED" : "DISABLED"}</span>. Canvas overlay updated.`;
        },
        'glitch': () => {
            triggerScreenGlitch();
            return `Hardware glitch shaker overlay started (3 seconds).`;
        },
        'bench': () => {
            return `Bench argument required. Run: <span class="highlight">bench migrate</span>`;
        },
        'bench migrate': () => {
            const logs = [
                "Synchronizing database site1.local ...",
                "Loading frappe updates: [====================] 100%",
                "Loading erpnext updates: [====================] 100%",
                "Running patches: executing frappe.patches.v16.fix_desktop_duplicate_entry ... done",
                "Running patches: executing hrms.patches.v16.check_app_permission_for_website_users ... done",
                "<span class='accent'>Success: Bench schema synchronization successfully completed in 2.18s!</span>"
            ];
            let i = 0;
            function add() {
                if (i < logs.length) {
                    const line = document.createElement('div');
                    line.className = 'terminal-line';
                    line.innerHTML = logs[i];
                    termBody.insertBefore(line, termInput.parentElement);
                    termBody.scrollTop = termBody.scrollHeight;
                    i++;
                    setTimeout(add, 180 + Math.random() * 100);
                }
            }
            setTimeout(add, 50);
            return null;
        },
        'clear': () => {
            const lines = termBody.querySelectorAll('.terminal-line');
            lines.forEach(l => l.remove());
            return '';
        }
    };

    termInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const val = termInput.value.trim();
            termInput.value = '';

            if (val === '') return;

            cmdHistory.push(val);
            histIndex = cmdHistory.length;

            const echo = document.createElement('div');
            echo.className = 'terminal-line';
            echo.innerHTML = `<span class="terminal-prompt"><span class="prompt-long">akshay@arijentek-dev:~/portfolio</span><span class="prompt-short">akshay</span>$</span> ${val}`;
            termBody.insertBefore(echo, termInput.parentElement);

            const inputNormalized = val.toLowerCase();
            let res = '';

            if (actions[inputNormalized]) {
                res = actions[inputNormalized]();
            } else {
                res = `bash: command not found: ${val}. Type <span class="highlight">help</span> for guidance instructions.`;
            }

            if (res !== null && res !== undefined) {
                const line = document.createElement('div');
                line.className = 'terminal-line';
                line.innerHTML = res;
                termBody.insertBefore(line, termInput.parentElement);
            }

            termBody.scrollTop = termBody.scrollHeight;
        }

        if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (histIndex > 0) {
                histIndex--;
                termInput.value = cmdHistory[histIndex];
            }
        }
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (histIndex < cmdHistory.length - 1) {
                histIndex++;
                termInput.value = cmdHistory[histIndex];
            } else {
                histIndex = cmdHistory.length;
                termInput.value = '';
            }
        }
    });

    // Body clicks focus term
    const cont = termBody.parentElement;
    cont.addEventListener('click', (e) => {
        if (e.target.tagName !== 'A') {
            termInput.focus();
        }
    });
}

/* =========================================================================
   9. Premium Zero-Gravity Bouncing & Sway Engine (Antigravity Mode)
   ========================================================================= */
function initZeroG() {
    const toggleBtn = document.getElementById('zerog-toggle');
    if (!toggleBtn) return;

    toggleBtn.addEventListener('click', () => {
        toggleZeroGMode();
    });
}

function toggleZeroGMode() {
    const toggleBtn = document.getElementById('zerog-toggle');
    isZeroGActive = !isZeroGActive;

    if (isZeroGActive) {
        if (toggleBtn) toggleBtn.classList.add('active');
        startZeroGPhysics();
    } else {
        if (toggleBtn) toggleBtn.classList.remove('active');
        stopZeroGPhysics();
    }
}

function startZeroGPhysics() {
    const selectors = [
        '.glass-card',
        '.skill-card',
        '.timeline-content',
        '.avatar-container',
        '.hero-title',
        '.hero-subtitle',
        '.glow-tag',
        '.contrib-badge',
        '.timeline-dot'
    ];

    const elements = document.querySelectorAll(selectors.join(','));
    floatElements = [];

    elements.forEach((el, index) => {
        el.classList.add('floating-element');
        
        // Bounded sway parameters - bobbing gently around origin coordinates
        floatElements.push({
            dom: el,
            phaseX: Math.random() * 10,
            phaseY: Math.random() * 10,
            phaseR: Math.random() * 10,
            speedX: 0.001 + Math.random() * 0.0008,
            speedY: 0.0009 + Math.random() * 0.0008,
            speedR: 0.0006 + Math.random() * 0.0006,
            ampX: 10 + Math.random() * 12, // Bounded offset X (max 22px)
            ampY: 12 + Math.random() * 16, // Bounded offset Y (max 28px)
            ampR: 1.5 + Math.random() * 2, // Rotation bounds (max 3.5deg)
            index: index
        });
    });

    function updateFloating(time) {
        if (!isZeroGActive) return;

        floatElements.forEach(item => {
            // Calculate gentle sinusoidal floating displacements
            const x = Math.sin(time * item.speedX + item.phaseX) * item.ampX;
            const y = Math.cos(time * item.speedY + item.phaseY) * item.ampY;
            const r = Math.sin(time * item.speedR + item.phaseR) * item.ampR;

            item.dom.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px) rotate(${r.toFixed(2)}deg)`;
        });

        floatAnimationId = requestAnimationFrame(updateFloating);
    }

    floatAnimationId = requestAnimationFrame(updateFloating);
}

function stopZeroGPhysics() {
    if (floatAnimationId) {
        cancelAnimationFrame(floatAnimationId);
        floatAnimationId = null;
    }

    // Return smooth back to base structure
    floatElements.forEach(item => {
        item.dom.classList.remove('floating-element');
        item.dom.style.transition = 'transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        item.dom.style.transform = 'translate(0px, 0px) rotate(0deg)';
        
        setTimeout(() => {
            if (!isZeroGActive) {
                item.dom.style.transition = '';
                item.dom.style.transform = '';
            }
        }, 850);
    });

    floatElements = [];
}

/* =========================================================================
   Glitch Simulator Function
   ========================================================================= */
function triggerScreenGlitch() {
    document.body.classList.add('glitch-active');
    setTimeout(() => {
        document.body.classList.remove('glitch-active');
    }, 3000);
}

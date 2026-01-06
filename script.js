document.addEventListener('DOMContentLoaded', function() {
    // Terminal typing animation
    const commands = [
        'nmap -sS target.com',
        'sqlmap -u "http://target.com/login"',
        'hydra -l admin -P passwords.txt ssh://target.com',
        'nikto -h target.com',
        'gobuster dir -u target.com -w wordlist.txt'
    ];
    
    let commandIndex = 0;
    let charIndex = 0;
    const typingElement = document.querySelector('.typing-animation');
    
    function typeCommand() {
        if (charIndex < commands[commandIndex].length) {
            typingElement.textContent += commands[commandIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeCommand, 100);
        } else {
            setTimeout(() => {
                typingElement.textContent = '';
                charIndex = 0;
                commandIndex = (commandIndex + 1) % commands.length;
                setTimeout(typeCommand, 500);
            }, 2000);
        }
    }
    
    setTimeout(typeCommand, 1000);
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Matrix rain effect
    function createMatrixRain() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.zIndex = '-2';
        canvas.style.opacity = '0.1';
        document.body.appendChild(canvas);
        
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
        const charArray = chars.split('');
        const fontSize = 14;
        const columns = canvas.width / fontSize;
        const drops = [];
        
        for (let i = 0; i < columns; i++) {
            drops[i] = 1;
        }
        
        function draw() {
            ctx.fillStyle = 'rgba(1, 4, 9, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = '#00ff41';
            ctx.font = fontSize + 'px monospace';
            
            for (let i = 0; i < drops.length; i++) {
                const text = charArray[Math.floor(Math.random() * charArray.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }
        
        setInterval(draw, 50);
        
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    }
    
    createMatrixRain();
    
    // Glitch effect on hover for skill tags
    document.querySelectorAll('.skill-tag').forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.animation = 'glitch 0.3s ease-in-out';
        });
        
        tag.addEventListener('animationend', function() {
            this.style.animation = '';
        });
    });
    
    // Add glitch animation to CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes glitch {
            0% { transform: translate(0); }
            20% { transform: translate(-2px, 2px); }
            40% { transform: translate(-2px, -2px); }
            60% { transform: translate(2px, 2px); }
            80% { transform: translate(2px, -2px); }
            100% { transform: translate(0); }
        }
    `;
    document.head.appendChild(style);
    
    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(13, 17, 23, 0.98)';
        } else {
            navbar.style.background = 'rgba(13, 17, 23, 0.95)';
        }
    });
    
    // Security badge rotation
    const securityBadge = document.querySelector('.security-badge');
    if (securityBadge) {
        setInterval(() => {
            securityBadge.style.transform = `rotate(${Math.random() * 10 - 5}deg)`;
        }, 2000);
    }
    
    // Add scan lines effect
    function createScanLines() {
        const scanLines = document.createElement('div');
        scanLines.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: repeating-linear-gradient(
                0deg,
                transparent,
                transparent 2px,
                rgba(0, 255, 65, 0.03) 2px,
                rgba(0, 255, 65, 0.03) 4px
            );
            pointer-events: none;
            z-index: 1000;
            animation: scanlines 0.1s linear infinite;
        `;
        
        const scanlineStyle = document.createElement('style');
        scanlineStyle.textContent = `
            @keyframes scanlines {
                0% { transform: translateY(0); }
                100% { transform: translateY(4px); }
            }
        `;
        document.head.appendChild(scanlineStyle);
        document.body.appendChild(scanLines);
    }
    
    createScanLines();
});

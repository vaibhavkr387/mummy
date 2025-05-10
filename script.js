document.addEventListener('DOMContentLoaded', () => {
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');
    
    // Set initial volume
    bgMusic.volume = 0.3;

    // Add click event to start playing (required by most browsers)
    document.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.play().catch(err => {
                console.log('Playback failed:', err);
            });
        }
    }, { once: true });

    // Music toggle button handler
    musicToggle.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.play();
            musicToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
        } else {
            bgMusic.pause();
            musicToggle.innerHTML = '<i class="fas fa-volume-mute"></i>';
        }
    });

    const floatingHearts = document.getElementById('floating-hearts');

    // Create floating hearts
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.innerHTML = '❤️';
        
        // Random starting position
        const startPos = Math.random() * window.innerWidth;
        heart.style.left = `${startPos}px`;
        
        // Random size variation
        const size = 14 + Math.random() * 16; // sizes between 14px and 30px
        heart.style.fontSize = `${size}px`;
        
        // Add to container
        floatingHearts.appendChild(heart);
        
        // Remove the heart element after animation completes
        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }

    // Adjust interval for better performance
    setInterval(createHeart, 500); // Changed from 300ms to 500ms for better performance

    // Animate floating messages
    const messages = document.querySelectorAll('.floating-text');
    let currentMessage = 0;

    function showNextMessage() {
        messages.forEach(msg => msg.style.opacity = '0');
        messages[currentMessage].style.opacity = '1';
        currentMessage = (currentMessage + 1) % messages.length;
    }

    setInterval(showNextMessage, 2000);
});

function showMessage() {
    const surpriseMessage = document.getElementById('surpriseMessage');
    surpriseMessage.classList.remove('d-none');
    surpriseMessage.classList.add('animate__animated', 'animate__bounceIn');

    // Enhanced fireworks
    const container = document.getElementById('fireworks-container');
    const fireworks = new Fireworks.default(container, {
        rocketsPoint: 50,
        intensity: 30,
        opacity: 0.9,
        lineWidth: {
            explosion: { min: 1, max: 3 },
            trace: { min: 1, max: 2 }
        },
        acceleration: 1.05,
        friction: 0.97,
        gravity: 1.5,
        particles: 100,
        traceLength: 3,
        flickering: 50,
    });

    fireworks.start();
    setTimeout(() => fireworks.stop(), 7000);
}
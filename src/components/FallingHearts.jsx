import { useEffect } from 'react';
import './FallingHearts.css';

const FallingHearts = () => {
    useEffect(() => {
        const createHeart = () => {
            const container = document.getElementById('falling-hearts-container');
            if (!container) return;

            const heart = document.createElement('div');
            heart.className = 'falling-heart';

            // Random starting position
            heart.style.left = `${Math.random() * 100}%`;

            // Random animation duration (slower fall)
            const duration = Math.random() * 4 + 8;
            heart.style.animationDuration = `${duration}s, 3s`;

            // Random delay
            heart.style.animationDelay = `${Math.random() * 3}s`;

            // Bigger, more visible hearts
            const size = Math.random() * 15 + 25;
            heart.style.fontSize = `${size}px`;

            // More opaque
            heart.style.opacity = Math.random() * 0.3 + 0.7;

            // Random heart emoji
            const hearts = ['❤️', '💕', '💖', '💗', '💝', '💓', '💞'];
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];

            container.appendChild(heart);

            // Remove after animation
            setTimeout(() => {
                heart.remove();
            }, (duration + parseFloat(heart.style.animationDelay || '0')) * 1000 + 1000);
        };

        // Create initial batch of hearts
        for (let i = 0; i < 50; i++) {
            setTimeout(() => createHeart(), i * 100);
        }

        // Continuously create new hearts
        const interval = setInterval(createHeart, 400);

        return () => {
            clearInterval(interval);
            const container = document.getElementById('falling-hearts-container');
            if (container) {
                container.innerHTML = '';
            }
        };
    }, []);

    return <div id="falling-hearts-container" className="falling-hearts-container" />;
};

export default FallingHearts;

import { useEffect } from 'react';
import './FloatingHearts.css';

const FloatingHearts = () => {
    useEffect(() => {
        const createHearts = () => {
            const container = document.getElementById('floating-hearts-container');
            if (!container) return;

            const heartSymbols = ['❤️', '💕', '💖', '💗', '💝', '💓', '💞'];

            // Create 15 floating hearts
            for (let i = 0; i < 15; i++) {
                const heart = document.createElement('div');
                heart.className = 'floating-heart';
                heart.style.fontSize = `${Math.random() * 30 + 20}px`;
                heart.style.left = `${Math.random() * 100}%`;
                heart.style.animationDuration = `${Math.random() * 10 + 15}s`;
                heart.style.animationDelay = `${Math.random() * 5}s`;
                heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
                container.appendChild(heart);
            }
        };

        createHearts();
    }, []);

    return <div id="floating-hearts-container" className="hearts-container" />;
};

export default FloatingHearts;

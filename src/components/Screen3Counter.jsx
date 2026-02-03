import { useState, useEffect } from 'react';
import './Screen3Counter.css';

const Screen3Counter = ({ active, onContinue }) => {
    const [count, setCount] = useState(0);
    const [showExplosion, setShowExplosion] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const targetCount = 1234; // Over 1000 reasons!

    useEffect(() => {
        if (!active) return;

        // Counter animation
        let currentCount = 0;
        const interval = setInterval(() => {
            currentCount += Math.floor(Math.random() * 50) + 10;
            if (currentCount >= targetCount) {
                currentCount = targetCount;
                clearInterval(interval);

                // Trigger heart explosion
                setTimeout(() => {
                    setShowExplosion(true);
                    createHeartExplosion();
                }, 500);

                // Show final message
                setTimeout(() => {
                    setShowMessage(true);
                }, 2000);

                // Auto progress to next screen
                setTimeout(() => {
                    onContinue();
                }, 5000);
            }
            setCount(currentCount);
        }, 30);

        return () => clearInterval(interval);
    }, [active, onContinue]);

    const createHeartExplosion = () => {
        const container = document.querySelector('.counter-screen');
        if (!container) return;

        const heartSymbols = ['❤️', '💕', '💖', '💗', '💝', '💓', '💞', '💘'];

        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.className = 'explosion-heart';
                heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

                const angle = (360 / 30) * i;
                const radius = 150 + Math.random() * 100;
                const x = Math.cos(angle * Math.PI / 180) * radius;
                const y = Math.sin(angle * Math.PI / 180) * radius;

                heart.style.setProperty('--tx', `${x}px`);
                heart.style.setProperty('--ty', `${y}px`);
                heart.style.fontSize = `${Math.random() * 30 + 20}px`;

                container.appendChild(heart);

                setTimeout(() => heart.remove(), 2000);
            }, i * 50);
        }
    };

    return (
        <div className={`screen counter-screen ${active ? 'active' : ''}`}>
            <div className="content-wrapper">
                <div className="counter-container">
                    <h2 className="counter-title">
                        There are
                    </h2>

                    <div className={`counter-display ${showExplosion ? 'pulse-glow' : ''}`}>
                        {count.toLocaleString()}
                    </div>

                    <h2 className="counter-subtitle">
                        reasons why I love you...
                    </h2>

                    {showMessage && (
                        <div className="final-message fade-in">
                            <div className="message-divider">
                                <span>💖</span>
                                <span>✨</span>
                                <span>💖</span>
                            </div>
                            <p className="message-text">
                                But here are my top 10
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Screen3Counter;

import { useEffect } from 'react';
import './Screen2.css';

const Screen2 = ({ active, onContinue }) => {
    useEffect(() => {
        if (active) {
            createHeartBurst();
        }
    }, [active]);

    const createHeartBurst = () => {
        const screen = document.querySelector('.screen2-container');
        if (!screen) return;

        const heartSymbols = ['❤️', '💕', '💖', '💗', '💝', '💓', '💞'];

        for (let i = 0; i < 20; i++) {
            const heart = document.createElement('div');
            heart.className = 'burst-heart';
            heart.style.fontSize = `${Math.random() * 40 + 30}px`;
            heart.style.left = `${Math.random() * 100}%`;
            heart.style.top = `${Math.random() * 100}%`;
            heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

            screen.appendChild(heart);

            setTimeout(() => {
                heart.style.opacity = '1';
                heart.style.transform = `scale(1.2) rotate(${Math.random() * 360}deg)`;
            }, i * 100);

            setTimeout(() => {
                heart.style.opacity = '0';
                setTimeout(() => heart.remove(), 1000);
            }, 3000 + i * 100);
        }
    };

    return (
        <div className={`screen screen2-container ${active ? 'active' : ''}`}>
            <div className="content-wrapper">
                <div className="card-container">
                    <div className="animated-hearts">
                        <div className="heart heart-1">❤️</div>
                        <div className="heart heart-2">💕</div>
                        <div className="heart heart-3">💖</div>
                        <div className="heart heart-4">💗</div>
                        <div className="heart heart-5">💝</div>
                    </div>
                    <div className="romantic-card">
                        <div className="card-shine"></div>
                        <h1 className="card-title pulse">I'm Sorry</h1>
                        <div className="heart-divider">
                            <span>❤️</span>
                            <span>💕</span>
                            <span>❤️</span>
                        </div>
                        <h2 className="card-subtitle">I Love You</h2>
                        <p className="card-message">
                            Thank you for forgiving me. You're my everything,
                            and I promise to cherish you always.
                        </p>
                        <button className="btn btn-continue" onClick={onContinue}>
                            Read My Heart
                            <span className="arrow">→</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Screen2;

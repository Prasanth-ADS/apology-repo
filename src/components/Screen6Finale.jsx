import { useState, useEffect } from 'react';
import './Screen6Finale.css';

const Screen6Finale = ({ active, onRestart }) => {
    const [isPlaying, setIsPlaying] = useState(true);
    const [showHugAnimation, setShowHugAnimation] = useState(false);

    useEffect(() => {
        if (active) {
            setIsPlaying(true);
        }
    }, [active]);

    const handleSendHug = () => {
        setShowHugAnimation(true);
        createConfetti();

        setTimeout(() => {
            setShowHugAnimation(false);
            onRestart();
        }, 3000);
    };

    const createConfetti = () => {
        const container = document.querySelector('.finale-screen');
        if (!container) return;

        const emojis = ['💖', '💕', '💝', '✨', '🌟', '💫', '🎊', '🎉'];

        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.textContent = emojis[Math.floor(Math.random() * emojis.length)];
                confetti.style.left = `${Math.random() * 100}%`;
                confetti.style.animationDelay = `${Math.random() * 0.3}s`;
                confetti.style.fontSize = `${Math.random() * 20 + 15}px`;

                container.appendChild(confetti);

                setTimeout(() => confetti.remove(), 3000);
            }, i * 30);
        }
    };

    return (
        <div className={`screen finale-screen ${active ? 'active' : ''}`}>
            <div className="content-wrapper">
                <div className="finale-container">
                    {showHugAnimation ? (
                        <div className="hug-animation">
                            <div className="hug-emoji">🤗</div>
                            <h1 className="hug-text">Sending you the biggest hug! 💝</h1>
                        </div>
                    ) : (
                        <>
                            {/* Music Player Visual */}
                            <div className="music-player">
                                <div className="player-header">
                                    <div className="album-art">
                                        <div className="album-gradient">
                                            <span className="album-heart">💖</span>
                                        </div>
                                        {isPlaying && <div className="vinyl-disc"></div>}
                                    </div>
                                </div>

                                <div className="player-info">
                                    <h2 className="song-title">Our Song</h2>
                                    <p className="artist-name">A Romantic Melody</p>
                                </div>

                                <div className="progress-bar">
                                    <div className="progress-fill"></div>
                                </div>

                                <div className="time-display">
                                    <span>0:00</span>
                                    <span>∞</span>
                                </div>

                                <div className="equalizer">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <div key={i} className={`bar bar-${i} ${isPlaying ? 'playing' : ''}`}></div>
                                    ))}
                                </div>
                            </div>

                            {/* Final Message */}
                            <div className="final-message">
                                <div className="message-hearts">
                                    <span>💖</span>
                                    <span>✨</span>
                                    <span>💖</span>
                                </div>
                                <h1 className="message-title">Thank You for Being You</h1>
                                <p className="message-text">
                                    Every moment with you is a gift. You've changed my life in ways
                                    I never thought possible, and I'm so grateful to have you.
                                    I promise to always cherish you, to make you smile, and to love
                                    you with all my heart. Forever and always. 💕
                                </p>
                            </div>

                            {/* Action Buttons */}
                            <div className="finale-actions">
                                <button className="action-btn btn-restart" onClick={onRestart}>
                                    <span className="btn-icon">🔄</span>
                                    Start Over
                                </button>
                                <button className="action-btn btn-hug" onClick={handleSendHug}>
                                    <span className="btn-icon">🤗</span>
                                    Send a Hug
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Screen6Finale;

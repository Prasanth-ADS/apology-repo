import { useState, useRef } from 'react';
import './Screen1.css';

const Screen1 = ({ active, onYesClick }) => {
    const [noButtonPos, setNoButtonPos] = useState({ x: null, y: null });
    const [noButtonMoves, setNoButtonMoves] = useState(0);
    const [noButtonVisible, setNoButtonVisible] = useState(true);
    const noButtonRef = useRef(null);

    const moveNoButton = () => {
        if (noButtonMoves >= 5) {
            setNoButtonVisible(false);
            return;
        }

        const maxX = window.innerWidth - 200;
        const maxY = window.innerHeight - 100;

        const newX = Math.random() * maxX;
        const newY = Math.random() * maxY;

        setNoButtonPos({ x: newX, y: newY });
        setNoButtonMoves(prev => prev + 1);
    };

    const handleNoHover = () => {
        moveNoButton();
    };

    const handleYesClick = () => {
        onYesClick();
    };

    const noButtonStyle = noButtonPos.x !== null ? {
        position: 'fixed',
        left: `${noButtonPos.x}px`,
        top: `${noButtonPos.y}px`,
        opacity: noButtonVisible ? 1 : 0,
        display: noButtonVisible ? 'block' : 'none'
    } : {};

    return (
        <div className={`screen ${active ? 'active' : ''}`}>
            <div className="content-wrapper">
                <div className="apology-box">
                    <h1 className="main-title glow-text">I'm So Sorry...</h1>
                    <p className="apology-text">
                        I know I messed up, and my heart aches knowing I hurt you.
                        You mean the world to me, and I can't bear the thought of us being apart.
                    </p>
                    <h2 className="question">Can you forgive me?</h2>
                    <div className="button-container">
                        <button className="btn btn-yes" onClick={handleYesClick}>
                            Yes
                            <span className="sparkle">✨</span>
                        </button>
                        <button
                            ref={noButtonRef}
                            className="btn btn-no"
                            style={noButtonStyle}
                            onMouseEnter={handleNoHover}
                            onTouchStart={(e) => {
                                e.preventDefault();
                                handleNoHover();
                            }}
                        >
                            No
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Screen1;

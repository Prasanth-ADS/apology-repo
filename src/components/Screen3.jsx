import { useEffect, useRef } from 'react';
import ReasonCard from './ReasonCard';
import './Screen3.css';

const reasons = [
    {
        number: '01',
        title: 'You Accept Me Completely',
        text: 'You love me for exactly who I am - flaws, quirks, mistakes and all. You never try to change me or make me feel like I need to be someone else. With you, I can be my authentic self without fear of judgment, and that freedom is priceless.'
    },
    {
        number: '02',
        title: 'Your Love is Unconditional',
        text: 'The way you love me is pure and deep. I feel it in every look, every word, every action. Your love isn\'t based on conditions or what I can give you - you just love me, genuinely and wholeheartedly, and I\'ve never felt more secure.'
    },
    {
        number: '03',
        title: 'Your Honesty (Even When You\'re Mean)',
        text: 'Yes, sometimes you say things that sound harsh, but I know you never mean to hurt me. Your honesty, even when it stings a little, comes from a place of love. You keep it real with me, and I\'d rather have your brutal truth than sweet lies any day.'
    },
    {
        number: '04',
        title: 'You Light Up My World',
        text: 'The moment I see you, everything just feels better. My mood instantly lifts, my worries fade away, and suddenly the world seems brighter. Your presence alone has the power to turn my worst days into good ones.'
    },
    {
        number: '05',
        title: 'You Make Life Feel Wonderful',
        text: 'Before you, life was just... existing. Now, every day feels meaningful and beautiful. You\'ve shown me what it means to truly live, to feel deeply, and to find joy in the simple moments we share together.'
    },
    {
        number: '06',
        title: 'You Gave Me Purpose',
        text: 'You\'ve inspired me to set goals and actually chase them. You made me realize I have potential and a future worth working toward. Because of you, I have dreams I want to achieve and a reason to become the best version of myself.'
    },
    {
        number: '07',
        title: 'You Bring Out the Best in Me',
        text: 'Around you, I want to be better. You inspire me to work harder, think bigger, and reach higher. You\'ve awakened ambitions in me I didn\'t even know existed, and you make me believe I can actually achieve them.'
    },
    {
        number: '08',
        title: 'Your Fierce Love Protects Me',
        text: 'Even when your words come out harsh, I know it\'s because you care so deeply. You\'re protective, passionate, and you\'d do anything for the people you love. That fierce loyalty means everything to me.'
    },
    {
        number: '09',
        title: 'You Make Me Feel Alive',
        text: 'Every moment with you is vibrant and real. You\'ve taught me to feel deeply - the highs, the lows, all of it. Life with you isn\'t bland or boring; it\'s a beautiful adventure filled with genuine emotion.'
    },
    {
        number: '10',
        title: 'You\'re My Reason to Keep Going',
        text: 'On days when I feel like giving up, I think of you. You\'re my motivation, my inspiration, my why. You\'ve given my life direction and meaning, and I want to build a future that makes you proud.'
    }
];

const Screen3 = ({ active }) => {
    const cardRefs = useRef([]);

    useEffect(() => {
        if (!active) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            },
            { threshold: 0.1 }
        );

        cardRefs.current.forEach((card) => {
            if (card) observer.observe(card);
        });

        return () => observer.disconnect();
    }, [active]);

    return (
        <div className={`screen screen3-container ${active ? 'active' : ''}`}>
            <div className="content-wrapper scroll-container">
                <div className="letter-container">
                    <h1 className="letter-title">10 Reasons Why I Love You</h1>
                    <p className="letter-intro">
                        Words can't fully express how much you mean to me, but here's my heart laid bare...
                    </p>

                    <div className="reasons-grid">
                        {reasons.map((reason, index) => (
                            <div
                                key={index}
                                ref={(el) => (cardRefs.current[index] = el)}
                            >
                                <ReasonCard
                                    number={reason.number}
                                    title={reason.title}
                                    text={reason.text}
                                    delay={index * 0.1}
                                />
                            </div>
                        ))}
                    </div>

                    <div className="letter-footer">
                        <p className="footer-text">Forever yours,</p>
                        <p className="signature">With all my love ❤️</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Screen3;

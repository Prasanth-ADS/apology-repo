import { useState } from 'react';
import './Screen5Quiz.css';

const quizQuestions = [
    {
        question: "What's your favorite color?",
        options: ["Pink", "Blue", "Purple", "Green"],
        correctAnswer: "Blue",
        emoji: "🎨"
    },
    {
        question: "What's your favorite food?",
        options: ["Pasta", "Pizza", "Sushi", "Tacos"],
        correctAnswer: "Pizza",
        emoji: "🍕"
    },
    {
        question: "Favorite musician?",
        options: ["Taylor Swift", "Zechariah", "Ed Sheeran", "Ariana Grande"],
        correctAnswer: "Zechariah",
        emoji: "🎵"
    },
    {
        question: "Favorite movie genre?",
        options: ["Action", "Comedy", "Romance", "Horror"],
        correctAnswer: "Romance",
        emoji: "🎬"
    },
    {
        question: "What makes you happiest?",
        options: ["Shopping", "Spending time together", "Traveling", "Reading"],
        correctAnswer: "Spending time together",
        emoji: "💝"
    }
];

const Screen5Quiz = ({ active, onContinue }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState(Array(quizQuestions.length).fill(null));
    const [showResults, setShowResults] = useState(false);
    const [hearts, setHearts] = useState([]);

    const handleAnswerSelect = (answer) => {
        const newAnswers = [...selectedAnswers];
        newAnswers[currentQuestion] = answer;
        setSelectedAnswers(newAnswers);

        // Create heart animation for correct answer
        if (answer === quizQuestions[currentQuestion].correctAnswer) {
            createHeartBurst();
        }
    };

    const createHeartBurst = () => {
        const newHearts = [];
        for (let i = 0; i < 5; i++) {
            newHearts.push({
                id: Date.now() + i,
                x: Math.random() * 100,
                y: Math.random() * 100
            });
        }
        setHearts(newHearts);
        setTimeout(() => setHearts([]), 1000);
    };

    const handleNext = () => {
        if (currentQuestion < quizQuestions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const handleSubmit = () => {
        setShowResults(true);
        setTimeout(() => {
            onContinue();
        }, 4000);
    };

    const allQuestionsAnswered = selectedAnswers.every(answer => answer !== null);
    const correctAnswers = selectedAnswers.filter((answer, index) =>
        answer === quizQuestions[index].correctAnswer
    ).length;

    if (showResults) {
        return (
            <div className={`screen quiz-screen ${active ? 'active' : ''}`}>
                <div className="content-wrapper">
                    <div className="results-container">
                        <div className="results-hearts">
                            <span className="result-heart">💖</span>
                            <span className="result-heart">✨</span>
                            <span className="result-heart">💖</span>
                        </div>
                        <h1 className="results-title">Of course I know you perfectly!</h1>
                        <p className="results-score">
                            I got {correctAnswers} out of {quizQuestions.length} correct
                        </p>
                        <p className="results-message">
                            Because I pay attention to everything about you 💕
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    const question = quizQuestions[currentQuestion];

    return (
        <div className={`screen quiz-screen ${active ? 'active' : ''}`}>
            <div className="content-wrapper">
                <div className="quiz-container">
                    <div className="quiz-header">
                        <h1 className="quiz-title">How Well Do I Know You?</h1>
                        <div className="question-progress">
                            Question {currentQuestion + 1} of {quizQuestions.length}
                        </div>
                    </div>

                    <div className="question-card">
                        <div className="question-emoji">{question.emoji}</div>
                        <h2 className="question-text">{question.question}</h2>

                        <div className="options-grid">
                            {question.options.map((option, index) => (
                                <button
                                    key={index}
                                    className={`option-btn ${selectedAnswers[currentQuestion] === option ? 'selected' : ''
                                        } ${selectedAnswers[currentQuestion] === option &&
                                            option === question.correctAnswer ? 'correct' : ''
                                        }`}
                                    onClick={() => handleAnswerSelect(option)}
                                >
                                    {option}
                                    {selectedAnswers[currentQuestion] === option &&
                                        option === question.correctAnswer && (
                                            <span className="checkmark">✓</span>
                                        )}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="quiz-navigation">
                        <button
                            className="nav-btn btn-prev"
                            onClick={handlePrevious}
                            disabled={currentQuestion === 0}
                        >
                            ← Previous
                        </button>

                        {currentQuestion === quizQuestions.length - 1 ? (
                            <button
                                className="nav-btn btn-submit"
                                onClick={handleSubmit}
                                disabled={!allQuestionsAnswered}
                            >
                                Submit Quiz ✨
                            </button>
                        ) : (
                            <button
                                className="nav-btn btn-next"
                                onClick={handleNext}
                                disabled={selectedAnswers[currentQuestion] === null}
                            >
                                Next →
                            </button>
                        )}
                    </div>

                    {/* Floating hearts for correct answers */}
                    {hearts.map(heart => (
                        <div
                            key={heart.id}
                            className="floating-quiz-heart"
                            style={{
                                left: `${heart.x}%`,
                                top: `${heart.y}%`
                            }}
                        >
                            💖
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Screen5Quiz;

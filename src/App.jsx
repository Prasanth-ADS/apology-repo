import { useState, useEffect } from 'react';
import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';
import Screen3Counter from './components/Screen3Counter';
import Screen4 from './components/Screen4';
import Screen5Quiz from './components/Screen5Quiz';
import Screen6Finale from './components/Screen6Finale';
import FallingHearts from './components/FallingHearts';
import './App.css';

function App() {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [sparkles, setSparkles] = useState([]);

  // Cursor sparkle effect
  useEffect(() => {
    let lastSparkleTime = 0;

    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastSparkleTime > 100) {
        const newSparkle = {
          id: Date.now(),
          x: e.clientX,
          y: e.clientY
        };
        setSparkles(prev => [...prev, newSparkle]);

        // Remove sparkle after animation
        setTimeout(() => {
          setSparkles(prev => prev.filter(s => s.id !== newSparkle.id));
        }, 800);

        lastSparkleTime = now;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const goToScreen = (screenNumber) => {
    setCurrentScreen(screenNumber);
  };

  const restartExperience = () => {
    setCurrentScreen(1);
  };

  return (
    <div className="app">
      <FallingHearts />

      {/* Cursor Sparkles */}
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="sparkle"
          style={{
            left: `${sparkle.x}px`,
            top: `${sparkle.y}px`
          }}
        />
      ))}

      {/* All 6 Screens */}
      <Screen1
        active={currentScreen === 1}
        onYesClick={() => goToScreen(2)}
      />
      <Screen2
        active={currentScreen === 2}
        onContinue={() => goToScreen(3)}
      />
      <Screen3Counter
        active={currentScreen === 3}
        onContinue={() => goToScreen(4)}
      />
      <Screen4
        active={currentScreen === 4}
        onContinue={() => goToScreen(5)}
      />
      <Screen5Quiz
        active={currentScreen === 5}
        onContinue={() => goToScreen(6)}
      />
      <Screen6Finale
        active={currentScreen === 6}
        onRestart={restartExperience}
      />
    </div>
  );
}

export default App;

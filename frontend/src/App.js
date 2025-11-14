import React, { useState, useEffect } from 'react';
import '@/App.css';
import { AnimatedBackground } from './components/AnimatedBackground';
import { BackgroundMusic } from './components/BackgroundMusic';
import { Welcome } from './components/Welcome';
import { QuizCard } from './components/QuizCard';
import { LevelComplete } from './components/LevelComplete';
import { AllLetters } from './components/AllLetters';
import { quizData, letters } from './data/quizData';
import { Toaster } from './components/ui/sonner';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';

// Fisher-Yates shuffle algorithm
const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

function App() {
  const [gameState, setGameState] = useState('welcome'); // welcome, playing, levelComplete, allLetters
  const [currentLevel, setCurrentLevel] = useState(1);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [unlockedLetters, setUnlockedLetters] = useState([]);
  const [shuffledQuestions, setShuffledQuestions] = useState({});

  // Shuffle options for all questions when starting a new level
  const prepareLevel = (level) => {
    const questions = quizData[level];
    const shuffled = questions.map(q => ({
      ...q,
      options: shuffleArray(q.options)
    }));
    setShuffledQuestions(prev => ({ ...prev, [level]: shuffled }));
  };

  const currentQuestions = shuffledQuestions[currentLevel] || [];
  const currentQuestion = currentQuestions[currentQuestionIndex];

  const handleStart = () => {
    setGameState('playing');
    setCurrentLevel(1);
    setCurrentQuestionIndex(0);
    setScore(0);
    setCorrectAnswers(0);
    setUnlockedLetters([]);
    setShuffledQuestions({});
    prepareLevel(1);
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
      setCorrectAnswers(correctAnswers + 1);
      
      // Celebration toast with emoji
      toast.success('Correct! 🎉', {
        description: 'You know Jennifer so well!',
        duration: 2000,
      });
    } else {
      // Encouraging toast
      toast.error('Oops! 💫', {
        description: 'Keep trying, you\'ll get the next one!',
        duration: 2000,
      });
    }

    // Move to next question or complete level
    if (currentQuestionIndex < currentQuestions.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }, 1500);
    } else {
      // Level complete
      setTimeout(() => {
        if (correctAnswers + (isCorrect ? 1 : 0) >= 3) {
          // Unlock letter if at least 3 correct
          const newLetter = {
            level: currentLevel,
            content: letters[currentLevel]
          };
          setUnlockedLetters([...unlockedLetters, newLetter]);
          setGameState('levelComplete');
        } else {
          // Restart level if less than 3 correct
          toast.info('Almost there! 🌟', {
            description: 'You need 3 correct answers. Let\'s try again!',
            duration: 3000,
          });
          setCurrentQuestionIndex(0);
          setCorrectAnswers(0);
          prepareLevel(currentLevel); // Reshuffle for retry
        }
      }, 1500);
    }
  };

  const handleContinue = () => {
    if (currentLevel < 3) {
      setCurrentLevel(currentLevel + 1);
      setCurrentQuestionIndex(0);
      setCorrectAnswers(0);
      prepareLevel(currentLevel + 1);
      setGameState('playing');
    } else {
      setGameState('allLetters');
    }
  };

  const handleRestart = () => {
    setGameState('welcome');
    setCurrentLevel(1);
    setCurrentQuestionIndex(0);
    setScore(0);
    setCorrectAnswers(0);
    setUnlockedLetters([]);
    setShuffledQuestions({});
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <BackgroundMusic />
      
      <div className="relative z-10 container mx-auto px-4 py-8 md:py-12">
        <AnimatePresence mode="wait">
          {gameState === 'welcome' && (
            <motion.div
              key="welcome"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Welcome onStart={handleStart} />
            </motion.div>
          )}

          {gameState === 'playing' && currentQuestion && (
            <motion.div
              key={`question-${currentLevel}-${currentQuestionIndex}`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
            >
              <QuizCard
                question={currentQuestion.question}
                options={currentQuestion.options}
                onAnswer={handleAnswer}
                currentQuestion={currentQuestionIndex + 1}
                totalQuestions={currentQuestions.length}
                level={currentLevel}
              />
            </motion.div>
          )}

          {gameState === 'levelComplete' && (
            <motion.div
              key="levelComplete"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <LevelComplete
                level={currentLevel}
                score={correctAnswers}
                onContinue={handleContinue}
                letter={letters[currentLevel]}
              />
            </motion.div>
          )}

          {gameState === 'allLetters' && (
            <motion.div
              key="allLetters"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <AllLetters
                letters={unlockedLetters}
                onRestart={handleRestart}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;
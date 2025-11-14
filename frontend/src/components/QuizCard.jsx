import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';

export const QuizCard = ({ 
  question, 
  options, 
  onAnswer, 
  currentQuestion, 
  totalQuestions,
  level 
}) => {
  const progressValue = (currentQuestion / totalQuestions) * 100;

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        type: "spring",
        stiffness: 260,
        damping: 20 
      }}
    >
      <Card className="p-8 shadow-glow bg-card/95 backdrop-blur-sm border-2 border-primary/20 rounded-3xl max-w-2xl mx-auto">
        {/* Level Badge */}
        <motion.div 
          className="flex justify-center mb-6"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-gradient-to-r from-primary to-secondary px-6 py-2 rounded-full shadow-soft">
            <span className="text-white font-display font-semibold text-lg">
              Level {level} 🎮
            </span>
          </div>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-muted-foreground">
              Question {currentQuestion} of {totalQuestions}
            </span>
            <span className="text-sm font-medium text-primary">
              {Math.round(progressValue)}%
            </span>
          </div>
          <Progress value={progressValue} className="h-2" />
        </div>

        {/* Question */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6 text-center leading-relaxed">
            {question}
          </h2>
        </motion.div>

        {/* Options */}
        <div className="space-y-4">
          {options.map((option, index) => (
            <motion.div
              key={index}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={() => onAnswer(option.isCorrect)}
                variant="outline"
                className="w-full h-auto py-4 px-6 text-left justify-start text-base md:text-lg font-medium border-2 hover:border-primary hover:bg-primary/10 transition-all rounded-2xl group"
              >
                <span className="flex items-center gap-3 w-full">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-display font-semibold group-hover:bg-primary group-hover:text-white transition-colors">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="flex-1">{option.text}</span>
                </span>
              </Button>
            </motion.div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
};
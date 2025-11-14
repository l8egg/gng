import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Sparkles, Heart } from 'lucide-react';

export const LevelComplete = ({ level, score, onContinue, letter }) => {
  const [showLetter, setShowLetter] = React.useState(false);

  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ 
        type: "spring",
        stiffness: 200,
        damping: 15
      }}
      className="max-w-2xl mx-auto"
    >
      {!showLetter ? (
        <Card className="p-8 md:p-12 shadow-glow bg-card/95 backdrop-blur-sm border-2 border-primary/20 rounded-3xl text-center">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ 
              duration: 0.5,
              repeat: 3
            }}
            className="text-8xl mb-6"
          >
            🎉
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Level {level} Complete!
          </h2>

          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-primary" />
            <p className="text-xl md:text-2xl font-semibold text-primary">
              Score: {score}/3
            </p>
            <Sparkles className="w-6 h-6 text-primary" />
          </div>

          {letter && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="bg-gradient-to-r from-accent to-secondary/50 p-6 rounded-2xl mb-6 border-2 border-accent/30">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Heart className="w-5 h-5 text-destructive fill-current" />
                  <p className="text-lg font-display font-semibold text-foreground">
                    A special letter has been unlocked!
                  </p>
                  <Heart className="w-5 h-5 text-destructive fill-current" />
                </div>
              </div>

              <Button
                onClick={() => setShowLetter(true)}
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-display font-semibold px-8 py-6 text-lg rounded-2xl shadow-medium mb-4"
              >
                Read the Letter 💌
              </Button>
            </motion.div>
          )}

          <Button
            onClick={onContinue}
            variant="outline"
            className="w-full md:w-auto px-8 py-6 text-lg font-display font-semibold border-2 border-primary rounded-2xl hover:bg-primary hover:text-white transition-all"
          >
            {level < 3 ? 'Next Level ➡️' : 'View All Letters 📬'}
          </Button>
        </Card>
      ) : (
        <Card className="p-8 md:p-12 shadow-glow bg-card/95 backdrop-blur-sm border-2 border-primary/20 rounded-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center mb-6">
              <motion.div
                animate={{ 
                  rotate: [0, -10, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 1,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
                className="text-6xl"
              >
                💌
              </motion.div>
            </div>

            <h3 className="text-2xl md:text-3xl font-display font-bold text-center text-foreground mb-6">
              Letter from Level {level}
            </h3>

            <div className="bg-gradient-to-br from-muted/50 to-accent/20 p-6 rounded-2xl mb-6 border border-border">
              <p className="text-base md:text-lg text-foreground leading-relaxed whitespace-pre-wrap">
                {letter}
              </p>
            </div>

            <div className="flex gap-4 justify-center flex-wrap">
              <Button
                onClick={() => setShowLetter(false)}
                variant="outline"
                className="px-6 py-3 font-display font-semibold border-2 border-primary rounded-xl hover:bg-primary hover:text-white transition-all"
              >
                ← Back
              </Button>
              <Button
                onClick={onContinue}
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-display font-semibold px-6 py-3 rounded-xl shadow-medium"
              >
                {level < 3 ? 'Next Level ➡️' : 'View All Letters 📬'}
              </Button>
            </div>
          </motion.div>
        </Card>
      )}
    </motion.div>
  );
};
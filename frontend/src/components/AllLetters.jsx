import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Heart } from 'lucide-react';

export const AllLetters = ({ letters, onRestart }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <Card className="p-8 md:p-12 shadow-glow bg-card/95 backdrop-blur-sm border-2 border-primary/20 rounded-3xl">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="text-center mb-8"
        >
          <div className="text-7xl mb-4">🎊</div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
            Congratulations!
          </h1>
          <p className="text-xl text-muted-foreground font-medium">
            You've completed all levels!
          </p>
        </motion.div>

        <div className="space-y-6 mb-8">
          {letters.map((letter, index) => (
            <motion.div
              key={index}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="p-6 bg-gradient-to-br from-muted/50 to-accent/20 border-2 border-primary/20 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    animate={{ 
                      rotate: [0, -10, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 1,
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                    className="text-4xl"
                  >
                    💌
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-foreground flex items-center gap-2">
                      Level {letter.level} Letter
                      <Heart className="w-5 h-5 text-destructive fill-current" />
                    </h3>
                  </div>
                </div>
                <div className="bg-card/50 p-4 rounded-xl border border-border">
                  <p className="text-base text-foreground leading-relaxed whitespace-pre-wrap">
                    {letter.content}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-4 flex-wrap">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={onRestart}
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-display font-semibold px-8 py-6 text-lg rounded-2xl shadow-medium"
            >
              Play Again 🔄
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 text-center"
        >
          <p className="text-lg text-muted-foreground italic">
            Thank you for playing! 💖
          </p>
        </motion.div>
      </Card>
    </motion.div>
  );
};
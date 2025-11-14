import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Mail } from 'lucide-react';

export const AllLetters = ({ letters, onRestart }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <Card className="p-8 md:p-12 shadow-glow bg-card/90 backdrop-blur-sm border-2 border-primary/30 rounded-3xl">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="text-center mb-8"
        >
          <div className="text-7xl mb-4">🌟</div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
            Welcome to Dreamland!
          </h1>
          <p className="text-xl text-muted-foreground font-medium">
            You've completed the journey through the night
          </p>
          <p className="text-base text-muted-foreground italic mt-2">
            The sleepy bunny has arrived, guided by the blue butterfly 😴🐰 🦋
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
              <Card className="p-6 bg-muted/40 border-2 border-primary/30 rounded-2xl hover:border-primary/50 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    animate={{ 
                      rotate: [0, -10, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 1,
                      repeat: Infinity,
                      repeatDelay: 3 + index
                    }}
                    className="text-4xl"
                  >
                    💌
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-foreground flex items-center gap-2">
                      {letter.level === 1 && '🌙'}
                      {letter.level === 2 && '⭐'}
                      {letter.level === 3 && '💫'}
                      {' '}Level {letter.level} Letter
                      <Mail className="w-5 h-5 text-primary" />
                    </h3>
                    <p className="text-sm text-muted-foreground italic">
                      ~ from Jennifer ~
                    </p>
                  </div>
                </div>
                <div className="bg-card/50 p-4 rounded-xl border border-primary/20">
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
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-display font-semibold px-8 py-6 text-lg rounded-2xl shadow-glow"
            >
              Journey Again 🔄
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 text-center space-y-4"
        >
          <div className="flex items-center justify-center gap-4 text-4xl">
            <motion.span
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              😴🐰
            </motion.span>
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              💕
            </motion.span>
            <motion.span
              animate={{ 
                y: [-5, 5, -5],
                rotate: [-5, 5, -5]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{ filter: 'hue-rotate(200deg)' }}
            >
              🦋
            </motion.span>
          </div>
          <p className="text-lg text-muted-foreground italic">
            Thank you for playing! Sweet dreams 🌙✨
          </p>
        </motion.div>
      </Card>
    </motion.div>
  );
};
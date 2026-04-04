// @ts-nocheck

'use client';

import React, { type JSX } from 'react';
import { motion, HTMLMotionProps } from 'motion/react';
import { cn } from '@/lib/utils';

type Direction = 'up' | 'down' | 'left' | 'right';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const generateVariants = (
  direction: Direction
): { hidden: any; visible: any } => {
  const axis = direction === 'left' || direction === 'right' ? 'X' : 'Y';
  const value = direction === 'right' || direction === 'down' ? 100 : -100;

  return {
    hidden: {
      filter: 'blur(10px)',
      opacity: 0,
      [`translate${axis}`]: value,
    },
    visible: {
      filter: 'blur(0px)',
      opacity: 1,
      [`translate${axis}`]: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };
};

const defaultViewport = { amount: 0.3, margin: '0px 0px 0px 0px' };

const TextAnimation = ({
  as = 'h1',
  text,
  classname = '',
  viewport = defaultViewport,
  variants,
  direction = 'down',
  letterAnime = false,
  lineAnime = false,
  customStyle,
}: {
  text: string;
  classname?: string;
  as?: keyof JSX.IntrinsicElements;
  viewport?: {
    amount?: number;
    margin?: string;
    once?: boolean;
  };
  variants?: {
    hidden?: any;
    visible?: any;
  };
  direction?: Direction;
  letterAnime?: boolean;
  lineAnime?: boolean;
  customStyle?: React.CSSProperties;
}) => {
  const baseVariants = variants || generateVariants(direction);
  const modifiedVariants = {
    hidden: baseVariants.hidden,
    visible: {
      ...baseVariants.visible,
    },
  };

  const MotionComponent = motion[
    as as keyof typeof motion
  ] as React.ComponentType<HTMLMotionProps<any>>;

  // Helper to apply gradient to Bihan'25 or BIHAN'25
  const renderTextWithGradient = (text: string) => {
    const bihanRegex = /(Bihan'25|BIHAN'25)/g;
    const parts = text.split(bihanRegex);
    
    return parts.map((part, index) => {
      if (part === "Bihan'25" || part === "BIHAN'25") {
        return (
          <span
            key={`gradient-${index}`}
            style={{
              background: 'linear-gradient(135deg, #ffc300 0%, #ff1f00 35%, #2d00ff 70%, #ffebeb 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <MotionComponent
      whileInView='visible'
      initial='hidden'
      variants={containerVariants}
      viewport={viewport}
      className={cn(
        `inline-block dark:text-white text-black uppercase`,
        classname
      )}
      style={customStyle}
    >
      {lineAnime ? (
        <motion.span className={`inline-block`} variants={modifiedVariants}>
          {renderTextWithGradient(text)}
        </motion.span>
      ) : (
        <>
          {text.split(' ').map((word: string, index: number) => {
            const wordContainsBihan = /Bihan'25|BIHAN'25/.test(word);
            
            return (
              <motion.span
                key={index}
                className={`inline-block`}
                variants={letterAnime === false ? modifiedVariants : {}}
              >
                {letterAnime ? (
                  <>
                    {wordContainsBihan ? (
                      // Render the whole word with gradient if it contains Bihan
                      <motion.span variants={modifiedVariants}>
                        {renderTextWithGradient(word)}
                      </motion.span>
                    ) : (
                      // Otherwise animate letter by letter
                      word.split('').map((letter: string, letterIndex: number) => (
                        <motion.span
                          key={letterIndex}
                          className={`inline-block`}
                          variants={modifiedVariants}
                        >
                          {letter}
                        </motion.span>
                      ))
                    )}
                    &nbsp;
                  </>
                ) : (
                  <>{renderTextWithGradient(word)}&nbsp;</>
                )}
              </motion.span>
            );
          })}
        </>
      )}
    </MotionComponent>
  );
};

export default TextAnimation;

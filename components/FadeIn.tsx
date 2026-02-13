import React from 'react';
import { motion } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
  fullWidth?: boolean;
}

export const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  direction = "up", 
  className = "",
  fullWidth = false
}) => {
  const directions = {
    up: { y: 50, opacity: 0 },
    down: { y: -50, opacity: 0 },
    left: { x: -50, opacity: 0 },
    right: { x: 50, opacity: 0 },
  };

  return (
    <motion.div
      initial={directions[direction]}
      whileInView={{ y: 0, x: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
      className={`${className} ${fullWidth ? 'w-full' : ''}`}
    >
      {children}
    </motion.div>
  );
};
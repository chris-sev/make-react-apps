import React from 'react';
import { motion } from 'framer-motion';

export default function Animator({ children }) {
  return (
    <motion.div
      style={{ position: 'absolute' }}
      initial={{ x: 200, scale: 0.8, opacity: 0 }}
      animate={{ x: 0, scale: 1, opacity: 1 }}
      exit={{ x: -200, scale: 0.8, opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}

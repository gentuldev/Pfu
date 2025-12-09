// components/Countdown.tsx
'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState(7);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  if (timeLeft > 0) {
    return (
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: timeLeft > 0 ? 1 : 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#1a0006]"
      >
        <div className="text-center">
          <h1 className="text-8xl md:text-9xl font-black text-yellow-400 tracking-tighter">PFU</h1>
          <p className="text-4xl md:text-6xl text-yellow-400 mt-12">
            DROP IN 00:00:0{timeLeft}
          </p>
        </div>
      </motion.div>
    );
  }
  return null;
}

'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = '';
    }, 2800);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0f2027]"
        >
          {/* Background image peek */}
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/hero-bg.jpg"
              alt=""
              fill
              className="object-cover"
              style={{ animation: 'loader-pulse 3s ease-in-out infinite' }}
            />
            <div className="absolute inset-0 bg-[#0f2027]/85" />
          </div>

          {/* Logo with fill animation */}
          <div className="relative w-48 h-48 sm:w-64 sm:h-64">
            {/* Ghost logo (faded) */}
            <Image
              src="/logo.png"
              alt="Safty"
              width={256}
              height={256}
              priority
              className="absolute inset-0 w-full h-full object-contain opacity-15"
            />
            {/* Logo that fills up */}
            <motion.div
              initial={{ clipPath: 'inset(100% 0 0 0)' }}
              animate={{ clipPath: 'inset(0% 0 0 0)' }}
              transition={{ duration: 2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute inset-0"
            >
              <Image
                src="/logo.png"
                alt="Safty"
                width={256}
                height={256}
                priority
                className="w-full h-full object-contain drop-shadow-[0_0_40px_rgba(224,123,57,0.5)]"
              />
            </motion.div>
          </div>

          {/* Loading bar */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-48">
            <div className="h-[2px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 2.3, delay: 0.3, ease: 'easeInOut' }}
                className="h-full bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] rounded-full"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

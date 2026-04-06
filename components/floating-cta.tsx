'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'

export function FloatingCTA() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden"
        >
          <a
            href="https://app.medilog.in"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-full shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all"
          >
            <span>Abhi Try Karo</span>
            <span>→</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

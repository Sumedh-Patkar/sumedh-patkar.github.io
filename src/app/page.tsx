'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useMode } from '@/context/ModeContext'
import Nav from '@/components/Nav'
import ModeToggle from '@/components/ModeToggle'
import Professional from '@/components/Professional'
import Personal from '@/components/Personal'

export default function Home() {
  const { mode } = useMode()

  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5"
        style={{
          backgroundColor: 'var(--background)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <span
          className="font-semibold tracking-tight text-lg"
          style={{ color: 'var(--text-primary)' }}
        >
          Sumedh Patkar
        </span>
        <Nav />
        <ModeToggle />
      </header>

      <div className="pt-20">
        <AnimatePresence mode="wait">
          {mode === 'professional' ? (
            <motion.div
              key="professional"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <Professional />
            </motion.div>
          ) : (
            <motion.div
              key="personal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <Personal />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  )
}

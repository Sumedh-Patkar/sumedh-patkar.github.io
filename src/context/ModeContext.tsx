'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Mode = 'professional' | 'personal'

interface ModeContextType {
  mode: Mode
  toggle: () => void
}

const ModeContext = createContext<ModeContextType | null>(null)

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<Mode>('professional')

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-mode',
      mode === 'personal' ? 'personal' : ''
    )
  }, [mode])

  const toggle = () =>
    setMode((m) => (m === 'professional' ? 'personal' : 'professional'))

  return (
    <ModeContext.Provider value={{ mode, toggle }}>
      {children}
    </ModeContext.Provider>
  )
}

export function useMode() {
  const ctx = useContext(ModeContext)
  if (!ctx) throw new Error('useMode must be used within ModeProvider')
  return ctx
}

'use client'

import { useMode } from '@/context/ModeContext'

export default function ModeToggle() {
  const { mode, toggle } = useMode()

  return (
    <button
      onClick={toggle}
      className="text-xs tracking-widest uppercase px-3 py-1.5 rounded-full"
      style={{
        color: 'var(--text-secondary)',
        border: '1px solid var(--border)',
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.color = 'var(--text-primary)')
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.color = 'var(--text-secondary)')
      }
    >
      {mode === 'professional' ? 'Personal' : 'Professional'}
    </button>
  )
}

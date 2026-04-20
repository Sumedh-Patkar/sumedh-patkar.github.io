'use client'

import { useMode } from '@/context/ModeContext'

const professionalLinks = ['Experience', 'Projects', 'Skills', 'Talks', 'Education', 'Resume']
const personalLinks = ['Blog', 'Music', 'Interests']

export default function Nav() {
  const { mode } = useMode()
  const links = mode === 'professional' ? professionalLinks : personalLinks

  return (
    <nav className="flex gap-8">
      {links.map((link) => (
        <a
          key={link}
          href={`#${link.toLowerCase()}`}
          className="text-sm tracking-wide"
          style={{ color: 'var(--text-secondary)' }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.color = 'var(--text-primary)')
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = 'var(--text-secondary)')
          }
        >
          {link}
        </a>
      ))}
    </nav>
  )
}

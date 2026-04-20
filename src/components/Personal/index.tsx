'use client'

import { motion, type MotionProps } from 'framer-motion'

const TWITTER = 'https://twitter.com/PatkarSumedh'

const fadeUp: MotionProps = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' },
}

const divider = { borderTop: '1px solid var(--border)' }

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.7rem',
  letterSpacing: '0.15em',
  textTransform: 'uppercase',
  color: 'var(--text-secondary)',
  marginBottom: '3rem',
}

function TwitterIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.623L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const iconLinkStyle: React.CSSProperties = { color: 'var(--text-secondary)', display: 'flex', alignItems: 'center' }

export default function Personal() {
  return (
    <div className="max-w-4xl mx-auto px-8">

      {/* Hero */}
      <section className="pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '3rem' }}>
            {/* Left: text */}
            <div style={{ flex: 1 }}>
              <span style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', display: 'block', marginBottom: '1.5rem' }}>
                Beyond the code
              </span>
              <h1 className="font-bold tracking-tight leading-none mb-6" style={{ fontSize: '4.5rem', color: 'var(--text-primary)' }}>
                Hi, I'm<br />Sumedh
              </h1>
              <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)', maxWidth: '360px' }}>
                Music, writing, and everything else that keeps life interesting.
              </p>
              <a href={TWITTER} target="_blank" rel="noopener noreferrer" style={iconLinkStyle}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                <TwitterIcon />
              </a>
            </div>

            {/* Right: avatar */}
            <img
              src="/avatar.jpg"
              alt="Sumedh Patkar"
              style={{ width: '148px', height: '148px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0, marginTop: '0.5rem' }}
            />
          </div>
        </motion.div>
      </section>

      {/* Blog */}
      <section id="blog" className="py-24" style={divider}>
        <motion.div {...fadeUp}>
          <span style={labelStyle}>Blog</span>
          <p style={{ color: 'var(--text-secondary)' }}>Coming soon.</p>
        </motion.div>
      </section>

      {/* Music */}
      <section id="music" className="py-24" style={divider}>
        <motion.div {...fadeUp}>
          <span style={labelStyle}>Music</span>
          <p style={{ color: 'var(--text-secondary)' }}>Coming soon.</p>
        </motion.div>
      </section>

      {/* Interests */}
      <section id="interests" className="py-24" style={divider}>
        <motion.div {...fadeUp}>
          <span style={labelStyle}>Interests</span>
          <p style={{ color: 'var(--text-secondary)' }}>Coming soon.</p>
        </motion.div>
      </section>

    </div>
  )
}

'use client'

import { motion, type MotionProps } from 'framer-motion'

const LINKEDIN = 'https://www.linkedin.com/in/sumedh-patkar/'
const GITHUB = 'https://github.com/Sumedh-Patkar'
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

function OracleLogo() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#F80000" style={{ flexShrink: 0 }}>
      <path d="M16.412 4.412h-8.82a7.588 7.588 0 0 0-.008 15.176h8.828a7.588 7.588 0 0 0 0-15.176zm-.193 12.502H7.786a4.915 4.915 0 0 1 0-9.828h8.433a4.914 4.914 0 1 1 0 9.828z" />
    </svg>
  )
}

function SiemensLogo() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#009999" style={{ flexShrink: 0 }}>
      <path d="M1.478 10.016c.24 0 .59.046 1.046.14v.726a2.465 2.465 0 0 0-.946-.213c-.41 0-.615.118-.615.354 0 .088.041.16.124.216.069.045.258.14.568.286.446.208.743.388.89.541.176.182.264.417.264.705 0 .415-.172.73-.516.949-.279.176-.64.264-1.085.264-.375 0-.753-.046-1.133-.139v-.755c.41.135.774.203 1.09.203.437 0 .655-.121.655-.362a.302.302 0 0 0-.095-.227c-.065-.065-.232-.155-.5-.27-.481-.208-.795-.384-.94-.53a.999.999 0 0 1-.284-.73c0-.377.137-.666.413-.864.272-.196.626-.294 1.064-.294zm21.19 0c.246 0 .565.04.956.123l.09.016v.727a2.471 2.471 0 0 0-.948-.213c-.409 0-.612.118-.612.354 0 .088.04.16.123.216.066.043.256.139.57.286.443.208.74.388.889.541.176.182.264.417.264.705 0 .415-.172.73-.514.949-.28.176-.643.264-1.087.264-.376 0-.754-.046-1.134-.139v-.755c.407.135.77.203 1.09.203.437 0 .655-.121.655-.362 0-.09-.03-.166-.092-.227-.066-.065-.233-.155-.503-.27-.48-.206-.793-.382-.94-.53a.997.997 0 0 1-.284-.732c0-.376.137-.664.413-.862.272-.196.627-.294 1.064-.294zm-12.674.066l.92 2.444.942-2.444h1.257v3.825h-.968v-2.708l-1.072 2.747h-.632l-1.052-2.747v2.708H8.67v-3.825zm-5.587 0v3.825H3.386v-3.825zm3.554 0v.692H6.327v.864H7.75v.63H6.327v.908h1.677v.73h-2.66v-3.824zm8.707 0v.692h-1.634v.864h1.422v.63h-1.422v.908h1.677v.73H14.05v-3.824zm1.898 0l1.255 2.56v-2.56h.719v3.825h-1.15l-1.288-2.595v2.595h-.72v-3.825z" />
    </svg>
  )
}

function MarvellLogo() {
  return (
    <svg width="20" height="20" viewBox="0 0 288 288" fill="currentColor" style={{ flexShrink: 0, overflow: 'hidden' }}>
      <path d="M111.9,111.1l30.1,30.8c0.7,0.7,1.4,1.1,2,1.1c0.6,0,1.3-0.4,2-1.1l30.1-30.8c0.7-0.7,1.1-1.4,1.1-2c0-1-0.5-1.4-1.6-1.4h-63.1c-1.1,0-1.6,0.5-1.6,1.4C110.8,109.7,111.2,110.4,111.9,111.1L111.9,111.1z M288,1.6c0-1.1-0.5-1.6-1.5-1.6c-0.6,0-1.2,0.3-1.8,0.9l-24.7,25v236l0,0l24.7,25.2c0.6,0.6,1.2,0.9,1.8,0.9c1,0,1.5-0.5,1.5-1.6V1.6z M0,286.4c0,1.1,0.5,1.6,1.5,1.6c0.6,0,1.2-0.3,1.8-0.9l24.7-25.2l0,0v-236L3.3,0.9C2.7,0.3,2,0,1.5,0C0.5,0,0,0.5,0,1.6V286.4z M64.2,62.8h159.7L246.3,40c0.6-0.6,0.9-1.2,0.9-1.8c0-1-0.5-1.5-1.6-1.5H42.4c-1.1,0-1.6,0.5-1.6,1.5c0,0.6,0.3,1.2,0.9,1.8L64.2,62.8z M41.7,248c-0.6,0.6-0.9,1.2-0.9,1.8c0,1,0.5,1.4,1.6,1.4h203.1c1.1,0,1.6-0.5,1.6-1.4c0-0.6-0.3-1.2-0.9-1.8l-22.4-22.8H64.2L41.7,248z M211.8,213c0.6,0.6,1.2,0.9,1.8,0.9c1,0,1.4-0.5,1.4-1.6l0,0V75.7c0-1.1-0.5-1.6-1.4-1.6c-0.6,0-1.2,0.3-1.8,0.9l-23.4,23.8v90.5L211.8,213z M99.6,189.2V98.8L76.2,75c-0.6-0.6-1.2-0.9-1.8-0.9c-1,0-1.4,0.6-1.4,1.6v136.6l0,0c0,1.1,0.5,1.6,1.4,1.6c0.6,0,1.2-0.3,1.8-0.9L99.6,189.2z" />
    </svg>
  )
}

function WhileOneLogo() {
  return (
    <svg width="22" height="22" viewBox="0 0 200 200" style={{ flexShrink: 0, borderRadius: '4px' }}>
      <path d="M0 0 C66 0 132 0 200 0 C200 66 200 132 200 200 C134 200 68 200 0 200 C0 134 0 68 0 0 Z " fill="#343434" transform="translate(0,0)"/>
      <path d="M0 0 C5.14121796 1.73910121 7.18207296 4.93779353 9.59765625 9.5625 C15.23907468 21.1131257 13.58869683 34.24224822 10.0546875 46.16796875 C6.87766231 55.26721564 2.88570232 63.43541131 -5.58203125 68.5546875 C-10.82529653 70.73805329 -16.53912528 71.09678983 -22.15234375 71.625 C-22.15234375 71.955 -22.15234375 72.285 -22.15234375 72.625 C-20.11233402 72.84897733 -18.07018186 73.05348537 -16.02734375 73.25 C-14.32191406 73.42402344 -14.32191406 73.42402344 -12.58203125 73.6015625 C-8.96257925 73.6262968 -6.49557113 72.95167753 -3.15234375 71.625 C-2.06953125 71.2228125 -2.06953125 71.2228125 -0.96484375 70.8125 C1.06829599 69.66838596 1.06829599 69.66838596 2.34765625 67.125 C3.84765625 64.625 3.84765625 64.625 5.91015625 63.8125 C8.00522762 62.81282373 8.00522762 62.81282373 8.4765625 60.765625 C8.80248392 59.31822593 9.09657896 57.86322188 9.35546875 56.40234375 C9.51789063 55.81582031 9.6803125 55.22929688 9.84765625 54.625 C10.50765625 54.295 11.16765625 53.965 11.84765625 53.625 C12.56925049 51.98136866 13.24117046 50.31449614 13.84765625 48.625 C14.50765625 48.625 15.16765625 48.625 15.84765625 48.625 C15.84765625 65.785 15.84765625 82.945 15.84765625 100.625 C-23.09234375 100.625 -62.03234375 100.625 -102.15234375 100.625 C-102.15234375 91.385 -102.15234375 82.145 -102.15234375 72.625 C-99.18234375 72.13 -99.18234375 72.13 -96.15234375 71.625 C-96.46284101 70.18706608 -96.77582135 68.7496682 -97.08984375 67.3125 C-97.35087891 66.11173828 -97.35087891 66.11173828 -97.6171875 64.88671875 C-98.15120534 62.479599 -98.15120534 62.479599 -99.15234375 59.625 C-101.1464128 42.0317579 -93.62506121 24.98614387 -83.26171875 11.08984375 C-79.5877941 6.68912097 -76.15215652 3.07315507 -70.25 2.19140625 C-59.71652437 2.17784965 -59.71652437 2.17784965 -55.15234375 6.625 C-51.79012033 11.4441869 -51.2488326 15.94216822 -52.15234375 21.625 C-54.32786393 29.0110253 -57.10640012 35.76079524 -62.15234375 41.625 C-62.81234375 41.625 -63.47234375 41.625 -64.15234375 41.625 C-63.53874276 38.01444262 -62.50741993 34.93114876 -61.08984375 31.5625 C-58.89760843 25.65786618 -58.12112415 19.87734949 -59.15234375 13.625 C-60.55739435 11.06642021 -61.33108175 9.88903492 -64.1328125 8.98828125 C-68.55632791 8.88650125 -71.6362244 9.43042693 -75.21484375 12.125 C-83.07588313 19.84454067 -87.68114694 32.08667311 -90.15234375 42.625 C-90.33410156 43.25792969 -90.51585937 43.89085937 -90.703125 44.54296875 C-91.25891967 47.11895623 -91.35933469 49.5531948 -91.40234375 52.1875 C-91.428125 53.13753906 -91.45390625 54.08757812 -91.48046875 55.06640625 C-91.33204541 57.60824922 -91.33204541 57.60824922 -90.046875 59.4296875 C-85.48268541 62.30936175 -79.27833586 61.2857079 -74.15234375 60.625 C-70.29505928 59.20077189 -67.35823093 57.17407127 -64.15234375 54.625 C-62.73115234 53.54025391 -62.73115234 53.54025391 -61.28125 52.43359375 C-57.41098045 49.32316907 -57.41098045 49.32316907 -54.15234375 45.625 C-54.23717734 42.50050965 -54.23717734 42.50050965 -55.15234375 39.625 C-55.33796875 38.84125 -55.52359375 38.0575 -55.71484375 37.25 C-55.85921875 36.71375 -56.00359375 36.1775 -56.15234375 35.625 C-53.15234375 35.625 -53.15234375 35.625 -50.96484375 37.625 C-50.36671875 38.285 -49.76859375 38.945 -49.15234375 39.625 C-45.92839205 38.20960657 -43.79567583 36.51085072 -41.33984375 34 C-40.71464844 33.36835937 -40.08945313 32.73671875 -39.4453125 32.0859375 C-37.55389078 30.05596189 -35.73414059 27.99415779 -33.921875 25.89453125 C-30.00554546 21.39779152 -25.86585153 17.15477657 -21.65234375 12.9375 C-20.93175781 12.20466797 -20.21117188 11.47183594 -19.46875 10.71679688 C-7.22583036 -1.55933141 -7.22583036 -1.55933141 0 0 Z " fill="#F5F5F5" transform="translate(142.15234375,63.375)"/>
      <path d="M0 0 C43.56 0 87.12 0 132 0 C132.04030303 35.31889232 132.04030303 35.31889232 132.04882812 50.07226562 C132.05477133 60.27580261 132.06177357 70.47933137 132.07543945 80.68286133 C132.08538568 88.11266255 132.09185328 95.54245713 132.09408849 102.97226483 C132.09539571 106.9087332 132.09848221 110.84518253 132.10573006 114.78164482 C132.11248931 118.48253327 132.11461716 122.18339475 132.11310768 125.88428879 C132.11351638 127.89870802 132.11891207 129.91312427 132.12442017 131.92753601 C132.1230455 133.1153064 132.12167084 134.30307678 132.12025452 135.52684021 C132.12163721 137.08513125 132.12163721 137.08513125 132.12304783 138.67490292 C132 141 132 141 131 142 C129.30441297 142.09619441 127.6047916 142.12187659 125.90647888 142.12025452 C124.25449446 142.12232076 124.25449446 142.12232076 122.56913662 142.12442875 C120.73365057 142.11903159 120.73365057 142.11903159 118.86108398 142.11352539 C117.56246713 142.11364593 116.26385027 142.11376646 114.92588139 142.11389065 C111.40167691 142.11411713 107.87750613 142.10830622 104.35330963 142.10128021 C101.05068553 142.0956004 97.74806298 142.09531792 94.44543457 142.09460449 C84.77611855 142.08934966 75.10680886 142.07538861 65.4375 142.0625 C43.843125 142.041875 22.24875 142.02125 0 142 C0 95.14 0 48.28 0 0 Z M7 7 C7 49.24 7 91.48 7 135 C45.94 135 84.88 135 125 135 C125 92.76 125 50.52 125 7 C86.06 7 47.12 7 7 7 Z " fill="#ECEDEC" transform="translate(33,29)"/>
    </svg>
  )
}

const logoMap: Record<string, React.ReactNode> = {
  Oracle: <OracleLogo />,
  'WhileOne Techsoft': <WhileOneLogo />,
  'Siemens Digital Industries Software': <SiemensLogo />,
  'Marvell Semiconductor': <MarvellLogo />,
}

const experience = [
  {
    company: 'Oracle',
    location: 'Santa Clara, CA',
    role: 'Software Engineer',
    period: 'Feb 2025 – Present',
    summary:
      'Full-stack feature development on enterprise data grid products, focused on performance, editing UX, and analytics at scale.',
  },
  {
    company: 'WhileOne Techsoft',
    location: 'Pune, India',
    role: 'Software Engineering Intern',
    period: 'May 2023 – Aug 2023',
    summary:
      'ML-powered CPU performance prediction for AWS Graviton, with full-stack tooling for on-demand inference and data pipeline automation.',
  },
  {
    company: 'Siemens Digital Industries Software',
    location: 'Pune, India',
    role: 'Software Engineer',
    period: 'Jun 2020 – Jul 2022',
    summary:
      'Automation and React development for a PLM enterprise platform serving 4,700+ global customers, including WCAG 2.1 accessibility compliance.',
  },
  {
    company: 'Marvell Semiconductor',
    location: 'Pune, India',
    role: 'Software Engineering Intern',
    period: 'Jul 2019 – Jun 2020',
    summary:
      'Built FACTs, a benchmarking data visualization platform that automated 90% of the team\'s workflow, used by 100+ engineers internally.',
  },
]

const projects = [
  {
    name: 'Benchmarking Diff Tool',
    tech: ['Python'],
    summary: 'Tool for comparing and diffing performance benchmark results across runs.',
    link: 'https://github.com/Sumedh-Patkar/BenchmarkingDiffTool',
    context: null,
  },
  {
    name: 'FoodieVerse',
    tech: ['React', 'Django', 'SQLite3', 'AWS'],
    summary: 'Full-stack blog application with a GitHub Actions pipeline for automated Docker deployment on AWS.',
    link: 'https://github.com/Sumedh-Patkar/FoodieVerse-App',
    context: null,
  },
  {
    name: 'FoodChain',
    tech: ['React', 'Blockchain'],
    summary: 'Blockchain-based supply chain solution for agriculture built to improve food traceability and reduce costs.',
    link: null,
    context: 'IEEE HAC Asia',
  },
  {
    name: 'Lung Cancer Diagnosis',
    tech: ['3D CNN', 'Django REST', 'Vue.js', 'PostgreSQL'],
    summary: 'End-to-end ML pipeline for lung cancer nodule detection and classification, achieving 92.88% accuracy.',
    link: null,
    context: 'Capstone Project',
  },
]

const skills = [
  { category: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'Go'] },
  { category: 'Web', items: ['React', 'Next.js', 'Django', 'Node.js', 'Express', 'GraphQL', 'Kafka', 'gRPC'] },
  { category: 'Databases', items: ['MySQL', 'PostgreSQL', 'MongoDB'] },
  { category: 'DevOps', items: ['Docker', 'Kubernetes', 'AWS', 'Jenkins', 'Ansible'] },
]

const talks = [
  {
    title: 'Navigating AI Regulation',
    event: 'AI RTP',
    year: '2024',
    summary:
      'A survey of AI regulation frameworks across the US, UK, China, and EU — and a case for complex adaptive systems as a regulatory model.',
  },
]

const education = [
  {
    school: 'NC State University',
    degree: 'Master of Science, Computer Science',
    period: 'Aug 2022 – May 2024',
    detail: 'GPA 3.57 / 4.0',
  },
  {
    school: 'Savitribai Phule Pune University',
    degree: 'Bachelor of Engineering, Computer Engineering',
    period: 'Aug 2016 – May 2020',
    detail: 'CGPA 9.24 / 10',
  },
]

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.623L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function ExternalLinkIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function iconLinkStyle(base: React.CSSProperties = {}): React.CSSProperties {
  return { color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', ...base }
}

export default function Professional() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8">

      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="flex flex-col-reverse md:flex-row md:justify-between items-center md:items-start gap-8 md:gap-12">
            {/* Left: text */}
            <div className="flex-1 w-full">
              <span style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-secondary)', display: 'block', marginBottom: '1.5rem' }}>
                Jr. Software Architect
              </span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none mb-6" style={{ color: 'var(--text-primary)' }}>
                Sumedh<br />Patkar
              </h1>
              <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)', maxWidth: '360px' }}>
                Building software. Open to new opportunities.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <a
                  href="/SumedhPatkar_Resume.pdf"
                  download
                  className="inline-block text-sm font-medium px-6 py-3 rounded-full"
                  style={{ backgroundColor: 'var(--text-primary)', color: 'var(--background)' }}
                >
                  Download Resume
                </a>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  {[
                    { href: LINKEDIN, icon: <LinkedInIcon /> },
                    { href: GITHUB, icon: <GitHubIcon /> },
                    { href: TWITTER, icon: <TwitterIcon /> },
                  ].map(({ href, icon }) => (
                    <a key={href} href={href} target="_blank" rel="noopener noreferrer" style={iconLinkStyle()}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: avatar */}
            <img
              src="/avatar.jpg"
              alt="Sumedh Patkar"
              className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover flex-shrink-0 md:mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-16 md:py-24" style={divider}>
        <motion.div {...fadeUp}>
          <span style={labelStyle}>Experience</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {experience.map(exp => (
              <div key={exp.company}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-1 gap-1">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    {logoMap[exp.company]}
                    <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>{exp.company}</span>
                  </div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{exp.period}</span>
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.6rem' }}>
                  {exp.role} · {exp.location}
                </div>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>{exp.summary}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 md:py-24" style={divider}>
        <motion.div {...fadeUp}>
          <span style={labelStyle}>Projects</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {projects.map(proj => (
              <div key={proj.name}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>{proj.name}</span>
                    {proj.link && (
                      <a href={proj.link} target="_blank" rel="noopener noreferrer" style={iconLinkStyle()}
                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                      >
                        <ExternalLinkIcon />
                      </a>
                    )}
                  </div>
                  {proj.context && (
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontStyle: 'italic' }}>{proj.context}</span>
                  )}
                </div>
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                  {proj.tech.map(t => (
                    <span key={t} style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', border: '1px solid var(--border)', borderRadius: '999px', padding: '0.15rem 0.55rem' }}>
                      {t}
                    </span>
                  ))}
                </div>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>{proj.summary}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-16 md:py-24" style={divider}>
        <motion.div {...fadeUp}>
          <span style={labelStyle}>Skills</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {skills.map(group => (
              <div key={group.category} className="flex flex-col md:grid md:items-start gap-2 md:gap-4" style={{ gridTemplateColumns: '110px 1fr' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', paddingTop: '0.2rem' }}>{group.category}</span>
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                  {group.items.map(item => (
                    <span key={item} style={{ fontSize: '0.8rem', color: 'var(--text-primary)', border: '1px solid var(--border)', borderRadius: '999px', padding: '0.2rem 0.7rem' }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Talks */}
      <section id="talks" className="py-16 md:py-24" style={divider}>
        <motion.div {...fadeUp}>
          <span style={labelStyle}>Talks</span>
          {talks.map(talk => (
            <div key={talk.title}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.2rem' }}>
                <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>{talk.title}</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{talk.event} · {talk.year}</span>
              </div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>{talk.summary}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Education */}
      <section id="education" className="py-16 md:py-24" style={divider}>
        <motion.div {...fadeUp}>
          <span style={labelStyle}>Education</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {education.map(edu => (
              <div key={edu.school}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.2rem' }}>
                  <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>{edu.school}</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{edu.period}</span>
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  {edu.degree} · {edu.detail}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Resume */}
      <section id="resume" className="py-16 md:py-24" style={divider}>
        <motion.div {...fadeUp}>
          <span style={labelStyle}>Resume</span>
          <a
            href="/SumedhPatkar_Resume.pdf"
            download
            className="inline-block text-sm font-medium px-6 py-3 rounded-full"
            style={{ backgroundColor: 'var(--text-primary)', color: 'var(--background)' }}
          >
            Download Resume PDF
          </a>
        </motion.div>
      </section>

    </div>
  )
}

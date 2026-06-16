import { motion, useScroll, useTransform } from 'framer-motion'

/* Fonda suzayotgan sayyoralar — scroll bo'yicha parallaks (har biri har xil tezlikda). */
function Saturn() {
  return (
    <svg viewBox="0 0 220 170" width="100%" height="100%" aria-hidden="true">
      <defs>
        <radialGradient id="sat-body" cx="38%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#fff0cf" />
          <stop offset="50%" stopColor="#e6b06a" />
          <stop offset="100%" stopColor="#9c6326" />
        </radialGradient>
        <linearGradient id="sat-ring" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#d9b98a" stopOpacity="0.25" />
          <stop offset="50%" stopColor="#ffe7bd" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#caa978" stopOpacity="0.25" />
        </linearGradient>
        <clipPath id="sat-front">
          <rect x="0" y="86" width="220" height="84" />
        </clipPath>
      </defs>
      {/* halqa orqa qismi */}
      <g transform="rotate(-20 110 86)">
        <ellipse cx="110" cy="86" rx="104" ry="27" fill="none" stroke="url(#sat-ring)" strokeWidth="9" />
        <ellipse cx="110" cy="86" rx="80" ry="20" fill="none" stroke="url(#sat-ring)" strokeWidth="3" opacity="0.6" />
      </g>
      {/* sayyora */}
      <circle cx="110" cy="86" r="50" fill="url(#sat-body)" />
      {/* yengil chiziqlar */}
      <ellipse cx="110" cy="78" rx="50" ry="6" fill="#fff" opacity="0.10" />
      <ellipse cx="110" cy="98" rx="48" ry="5" fill="#5b3410" opacity="0.12" />
      {/* halqa old qismi */}
      <g transform="rotate(-20 110 86)" clipPath="url(#sat-front)">
        <ellipse cx="110" cy="86" rx="104" ry="27" fill="none" stroke="url(#sat-ring)" strokeWidth="9" />
      </g>
    </svg>
  )
}

function GasGiant() {
  return (
    <svg viewBox="0 0 120 120" width="100%" height="100%" aria-hidden="true">
      <defs>
        <radialGradient id="gg-body" cx="36%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#bfe9ff" />
          <stop offset="55%" stopColor="#5b9dff" />
          <stop offset="100%" stopColor="#2f4ea8" />
        </radialGradient>
        <clipPath id="gg-clip"><circle cx="60" cy="60" r="50" /></clipPath>
      </defs>
      <circle cx="60" cy="60" r="50" fill="url(#gg-body)" />
      <g clipPath="url(#gg-clip)" opacity="0.35">
        <ellipse cx="60" cy="40" rx="60" ry="6" fill="#dff1ff" />
        <ellipse cx="60" cy="58" rx="60" ry="8" fill="#2a3f86" />
        <ellipse cx="60" cy="76" rx="60" ry="5" fill="#dff1ff" />
        <circle cx="44" cy="66" r="7" fill="#ffd9c2" opacity="0.7" />
      </g>
    </svg>
  )
}

function RedPlanet() {
  return (
    <svg viewBox="0 0 100 100" width="100%" height="100%" aria-hidden="true">
      <defs>
        <radialGradient id="rp-body" cx="36%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#ffd0a8" />
          <stop offset="55%" stopColor="#ff8a5b" />
          <stop offset="100%" stopColor="#a83c1f" />
        </radialGradient>
        <clipPath id="rp-clip"><circle cx="50" cy="50" r="42" /></clipPath>
      </defs>
      <circle cx="50" cy="50" r="42" fill="url(#rp-body)" />
      <g clipPath="url(#rp-clip)" opacity="0.4">
        <circle cx="38" cy="40" r="8" fill="#7a2a14" />
        <circle cx="62" cy="58" r="6" fill="#7a2a14" />
        <circle cx="52" cy="32" r="4" fill="#fff" opacity="0.5" />
      </g>
    </svg>
  )
}

export default function Planets() {
  const { scrollYProgress } = useScroll()
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -260])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 180])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -120])
  const rot = useTransform(scrollYProgress, [0, 1], [0, 25])

  return (
    <div className="planets" aria-hidden="true">
      <motion.div className="planet p-saturn" style={{ y: y1, rotate: rot }}>
        <Saturn />
      </motion.div>
      <motion.div className="planet p-gas" style={{ y: y2 }}>
        <GasGiant />
      </motion.div>
      <motion.div className="planet p-red" style={{ y: y3 }}>
        <RedPlanet />
      </motion.div>
    </div>
  )
}

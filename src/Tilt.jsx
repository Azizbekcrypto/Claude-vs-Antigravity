import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

/* Sichqoncha tomon 3D egiluvchi karta + ichki yorug'lik (sheen). */
export default function Tilt({ children, className = '', max = 9 }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [max, -max]), { stiffness: 180, damping: 18 })
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-max, max]), { stiffness: 180, damping: 18 })

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    x.set(px - 0.5)
    y.set(py - 0.5)
    e.currentTarget.style.setProperty('--mx', px * 100 + '%')
    e.currentTarget.style.setProperty('--my', py * 100 + '%')
  }
  const onLeave = () => { x.set(0); y.set(0) }

  return (
    <motion.div
      className={`tilt ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000, transformStyle: 'preserve-3d' }}
    >
      {children}
    </motion.div>
  )
}

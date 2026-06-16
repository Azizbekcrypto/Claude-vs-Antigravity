import { useEffect, useRef } from 'react'

/* Kursorni kuzatuvchi yumshoq aurora nuri — kinematik his beradi. */
export default function MouseGlow() {
  const ref = useRef(null)
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    const el = ref.current
    let raf = 0
    const move = (e) => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`
        el.style.opacity = '1'
        raf = 0
      })
    }
    window.addEventListener('pointermove', move, { passive: true })
    return () => window.removeEventListener('pointermove', move)
  }, [])
  return <div ref={ref} className="mouse-glow" aria-hidden="true" />
}

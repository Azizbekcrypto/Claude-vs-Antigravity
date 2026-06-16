import { useEffect, useRef } from 'react'

// 3 qatlamli parallaks yulduzlar maydoni — sichqoncha va scrollga reaksiya beradi.
export default function Starfield() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let raf
    let w = 0
    let h = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const layers = [
      { count: 90, size: 0.7, speed: 0.012, color: 'rgba(255,255,255,', depth: 0.15 },
      { count: 55, size: 1.2, speed: 0.025, color: 'rgba(190,180,255,', depth: 0.4 },
      { count: 28, size: 2.0, speed: 0.05, color: 'rgba(255,200,170,', depth: 0.9 },
    ]
    let stars = []

    const build = () => {
      stars = []
      for (const layer of layers) {
        for (let i = 0; i < layer.count; i++) {
          stars.push({
            x: Math.random(),
            y: Math.random(),
            r: layer.size * (0.5 + Math.random()),
            tw: Math.random() * Math.PI * 2,
            tws: 0.02 + Math.random() * 0.04,
            layer,
          })
        }
      }
    }

    const resize = () => {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    let mx = 0
    let my = 0
    let tmx = 0
    let tmy = 0
    let scrollY = 0
    let comets = []
    let nextComet = 1800
    let last = performance.now()

    const onMove = (e) => {
      tmx = (e.clientX / w - 0.5) * 2
      tmy = (e.clientY / h - 0.5) * 2
    }
    const onScroll = () => { scrollY = window.scrollY || 0 }

    const draw = (now = performance.now()) => {
      const dt = Math.min(now - last, 60)
      last = now
      ctx.clearRect(0, 0, w, h)
      mx += (tmx - mx) * 0.05
      my += (tmy - my) * 0.05

      for (const s of stars) {
        const d = s.layer.depth
        const px = s.x * w + mx * 30 * d
        const py = (s.y * h + scrollY * s.layer.speed * 8) % (h + 40)
        const yy = py < 0 ? py + h + 40 : py - my * 18 * d
        s.tw += s.tws
        const alpha = reduce ? 0.6 : 0.35 + Math.sin(s.tw) * 0.35
        ctx.beginPath()
        ctx.arc(px, ((yy % (h + 40)) + h + 40) % (h + 40), s.r, 0, Math.PI * 2)
        ctx.fillStyle = s.layer.color + Math.max(0, alpha).toFixed(2) + ')'
        ctx.fill()
      }

      // Kometalar — vaqti-vaqti bilan diagonal uchib o'tadi
      if (!reduce) {
        nextComet -= dt
        if (nextComet <= 0) {
          comets.push({
            x: Math.random() * w * 0.7,
            y: -30,
            vx: 2.4 + Math.random() * 2.2,
            vy: 3.2 + Math.random() * 2.2,
            len: 130 + Math.random() * 160,
          })
          nextComet = 3500 + Math.random() * 5000
        }
        comets = comets.filter((c) => c.y < h + 60 && c.x < w + 60)
        for (const c of comets) {
          c.x += c.vx * dt * 0.06
          c.y += c.vy * dt * 0.06
          const ang = Math.atan2(c.vy, c.vx)
          const tx = c.x - Math.cos(ang) * c.len
          const ty = c.y - Math.sin(ang) * c.len
          const g = ctx.createLinearGradient(c.x, c.y, tx, ty)
          g.addColorStop(0, 'rgba(255,240,220,0.9)')
          g.addColorStop(0.4, 'rgba(200,180,255,0.35)')
          g.addColorStop(1, 'rgba(255,240,220,0)')
          ctx.strokeStyle = g
          ctx.lineWidth = 2
          ctx.beginPath()
          ctx.moveTo(c.x, c.y)
          ctx.lineTo(tx, ty)
          ctx.stroke()
          ctx.beginPath()
          ctx.arc(c.x, c.y, 1.9, 0, Math.PI * 2)
          ctx.fillStyle = 'rgba(255,252,245,0.95)'
          ctx.fill()
        }
      }

      raf = requestAnimationFrame(draw)
    }

    resize()
    build()
    draw()
    window.addEventListener('resize', resize)
    if (!reduce) window.addEventListener('mousemove', onMove)
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return <canvas ref={canvasRef} className="starfield" aria-hidden="true" />
}

import { useEffect, useState } from 'react'

/* O'ng tomonda bo'limlar bo'yicha navigatsiya nuqtalari — faol bo'lim yoritiladi. */
const items = [
  { id: 'top', label: '★' },
  { id: 'snapshot', label: '⚡' },
  { id: 'intro', label: '01' },
  { id: 'claude', label: 'C' },
  { id: 'antigravity', label: 'A' },
  { id: 'diff', label: '04' },
  { id: 'table', label: '05' },
  { id: 'price', label: '06' },
  { id: 'limit', label: '07' },
  { id: 'verdict', label: '08' },
  { id: 'outro', label: '∞' },
]

export default function SideNav() {
  const [active, setActive] = useState('top')

  useEffect(() => {
    const onScroll = () => {
      const mid = window.innerHeight / 2
      let best = items[0].id
      let bestD = Infinity
      for (const it of items) {
        const el = document.getElementById(it.id)
        if (!el) continue
        const r = el.getBoundingClientRect()
        const d = Math.abs(r.top + r.height / 2 - mid)
        if (d < bestD) { bestD = d; best = it.id }
      }
      setActive(best)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav className="sidenav" aria-label="Bo'limlar">
      {items.map((it) => (
        <button
          key={it.id}
          className={`sidedot ${active === it.id ? 'active' : ''}`}
          onClick={() => go(it.id)}
          aria-label={it.id}
          aria-current={active === it.id ? 'true' : undefined}
        >
          <span className="sidedot-label">{it.label}</span>
        </button>
      ))}
    </nav>
  )
}

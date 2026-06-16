import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring, useInView } from 'framer-motion'
import Starfield from './Starfield.jsx'
import Planets from './Planets.jsx'
import Tilt from './Tilt.jsx'
import MouseGlow from './MouseGlow.jsx'
import SideNav from './SideNav.jsx'
import { translations } from './i18n.js'

/* Scroll-reveal o'rovchi */
function Reveal({ children, delay = 0, y = 40, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

/* Raqam count-up */
function CountUp({ to, prefix = '', duration = 1.4 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!inView) return
    let raf
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min((now - start) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(Math.round(eased * to))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to, duration])
  return <span ref={ref}>{prefix}{val}</span>
}

/* Aylanma emblema vizuali */
function Emblem({ kind, letter }) {
  return (
    <div className={`emblem ${kind}`}>
      <div className="ring r1"><div className="sat" /></div>
      <div className="ring r2" />
      <div className="ring r3" />
      <div className="core">{letter}</div>
    </div>
  )
}

export default function App() {
  const [lang, setLang] = useState(() => localStorage.getItem('cva-lang') || 'uz')
  const [theme, setTheme] = useState(() => localStorage.getItem('cva-theme') || 'night')
  const t = translations[lang]

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 90, damping: 25, restDelta: 0.001 })

  useEffect(() => {
    document.documentElement.lang = lang
    localStorage.setItem('cva-lang', lang)
  }, [lang])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('cva-theme', theme)
  }, [theme])

  return (
    <>
      {/* Fon */}
      <div className="cosmos" />
      <div className="sun" />
      <div className="nebula a" />
      <div className="nebula b" />
      <div className="nebula c" />
      <Starfield />
      <Planets />
      <MouseGlow />
      <div className="grain" aria-hidden="true" />
      <SideNav />

      {/* Progress + topbar */}
      <motion.div className="progress" style={{ scaleX, transformOrigin: '0%', right: 'auto', width: '100%' }} />
      <header className="topbar">
        <div className="brand">
          <span className="dot">●</span> Claude <span style={{ opacity: 0.5 }}>×</span> Antigravity <span className="dot2">●</span>
        </div>
        <div className="controls">
          <button
            className="theme-toggle"
            onClick={() => setTheme((p) => (p === 'night' ? 'day' : 'night'))}
            aria-label={theme === 'night' ? 'Kunduzgi rejim' : 'Kechki rejim'}
            title={theme === 'night' ? 'Kunduzgi rejim' : 'Kechki rejim'}
          >
            <span className="theme-ic">{theme === 'night' ? '☀️' : '🌙'}</span>
          </button>
          <div className="lang-switch" role="group" aria-label="Til / Язык">
            {['uz', 'ru'].map((l) => (
              <button
                key={l}
                className={lang === l ? 'active' : ''}
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="hero" id="top">
        <div className="hero-halo" />
        <div className="hero-orbs">
          <div className="orb c" />
          <div className="orb a" />
        </div>
        <motion.div
          className="hero-kicker glow-border"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t.hero.kicker}
        </motion.div>
        <h1 className="hero-title">
          <motion.span className="word-c"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}>
            {t.hero.title1}
          </motion.span>
          <motion.span className="hero-vs"
            initial={{ opacity: 0, scale: 0.3, rotate: -30 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, delay: 0.5, type: 'spring', stiffness: 200 }}>
            {t.hero.vs}
          </motion.span>
          <motion.span className="word-a"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}>
            {t.hero.title2}
          </motion.span>
        </h1>
        <motion.p className="hero-sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}>
          {t.hero.subtitle}
        </motion.p>
        <motion.div className="scroll-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}>
          <div className="scroll-mouse"><span /></div>
          {t.hero.scroll}
        </motion.div>
      </section>

      {/* ===== BIR QARASHDA (tezkor javob) ===== */}
      <section className="section snapshot" id="snapshot">
        <Reveal><div className="kicker">{t.snapshot.kicker}</div></Reveal>
        <Reveal delay={0.05}><h2 className="h-title grad-text">{t.snapshot.title}</h2></Reveal>
        <Reveal delay={0.1}><p className="lead snap-verdict">{t.snapshot.verdict}</p></Reveal>
        <div className="snap-grid">
          <Reveal delay={0.15}>
            <Tilt className="snap-card c glass">
              <div className="snap-tag">{t.snapshot.claude.tag}</div>
              <div className="snap-stat">
                <span className="cur">$</span><CountUp to={t.snapshot.claude.stat} />
                <span className="per">{t.snapshot.claude.statLabel}</span>
              </div>
              <div className="snap-super">{t.snapshot.claude.super}</div>
              <div className="snap-for">{t.snapshot.claude.who}</div>
            </Tilt>
          </Reveal>
          <div className="snap-vs">VS</div>
          <Reveal delay={0.25}>
            <Tilt className="snap-card a glass">
              <div className="snap-tag">{t.snapshot.anti.tag}</div>
              <div className="snap-stat">
                <span className="free-tag">{t.price.free}</span>
              </div>
              <div className="snap-super">{t.snapshot.anti.super}</div>
              <div className="snap-for">{t.snapshot.anti.who}</div>
            </Tilt>
          </Reveal>
        </div>
      </section>

      {/* ===== 01 INTRO ===== */}
      <section className="section" id="intro">
        <Reveal><div className="kicker">{t.intro.kicker}</div></Reveal>
        <Reveal delay={0.05}><h2 className="h-title grad-text">{t.intro.title}</h2></Reveal>
        <Reveal delay={0.1}><p className="lead">{t.intro.lead}</p></Reveal>
        <div className="points">
          {t.intro.points.map((p, i) => (
            <Reveal key={i} delay={0.15 + i * 0.12}>
              <Tilt className="point glass">
                <div className="n">{p.n}</div>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== 02 CLAUDE ===== */}
      <section className="section" id="claude">
        <div className="whatis">
          <div>
            <Reveal><div className="kicker">{t.claude.kicker}</div></Reveal>
            <Reveal delay={0.05}>
              <span className="tag-pill c">{t.claude.tag}</span>
              <h2 className="h-title">{t.claude.title}</h2>
            </Reveal>
            <Reveal delay={0.1}><p className="lead">{t.claude.desc}</p></Reveal>
            <Reveal delay={0.15}>
              <ul className="bullets c">
                {t.claude.bullets.map((b, i) => (
                  <li key={i}><span className="chk">✓</span>{b}</li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="visual-wrap">
            <Tilt max={14}><Emblem kind="c" letter="C" /></Tilt>
          </Reveal>
        </div>
      </section>

      {/* ===== 03 ANTIGRAVITY ===== */}
      <section className="section" id="antigravity">
        <div className="whatis reverse">
          <div>
            <Reveal><div className="kicker">{t.antigravity.kicker}</div></Reveal>
            <Reveal delay={0.05}>
              <span className="tag-pill a">{t.antigravity.tag}</span>
              <h2 className="h-title">{t.antigravity.title}</h2>
            </Reveal>
            <Reveal delay={0.1}><p className="lead">{t.antigravity.desc}</p></Reveal>
            <Reveal delay={0.15}>
              <ul className="bullets a">
                {t.antigravity.bullets.map((b, i) => (
                  <li key={i}><span className="chk">✓</span>{b}</li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="visual-wrap">
            <Tilt max={14}><Emblem kind="a" letter="A" /></Tilt>
          </Reveal>
        </div>
      </section>

      {/* ===== 04 DIFF ===== */}
      <section className="section" id="diff">
        <Reveal><div className="kicker">{t.diff.kicker}</div></Reveal>
        <Reveal delay={0.05}><h2 className="h-title grad-text">{t.diff.title}</h2></Reveal>
        <Reveal delay={0.1}><p className="lead">{t.diff.lead}</p></Reveal>
        <div className="diff-grid">
          <Reveal delay={0.15}>
            <Tilt className="diff-col c glass">
              <h3>{t.diff.left.name}</h3>
              <ul>{t.diff.left.items.map((x, i) => <li key={i}>{x}</li>)}</ul>
            </Tilt>
          </Reveal>
          <Reveal delay={0.25}>
            <Tilt className="diff-col a glass">
              <h3>{t.diff.right.name}</h3>
              <ul>{t.diff.right.items.map((x, i) => <li key={i}>{x}</li>)}</ul>
            </Tilt>
          </Reveal>
        </div>
      </section>

      {/* ===== 05 TABLE ===== */}
      <section className="section" id="table">
        <Reveal><div className="kicker">{t.table.kicker}</div></Reveal>
        <Reveal delay={0.05}><h2 className="h-title grad-text">{t.table.title}</h2></Reveal>
        <Reveal delay={0.1}><p className="lead">{t.table.lead}</p></Reveal>
        <Reveal delay={0.13}><div className="factline glow-border">{t.table.fact}</div></Reveal>
        <Reveal delay={0.15}>
          <div className="cmp-table glass">
            <div className="row head">
              <span className="feat">{t.table.head.feature}</span>
              <span className="col-c">{t.table.head.claude}</span>
              <span className="col-a">{t.table.head.antigravity}</span>
            </div>
            {t.table.rows.map((r, i) => (
              <motion.div className="row" key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}>
                <span className="feat">{r.f}</span>
                <span className="col-c">{r.c}</span>
                <span className="col-a">{r.a}</span>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ===== 06 PRICE ===== */}
      <section className="section" id="price">
        <Reveal><div className="kicker">{t.price.kicker}</div></Reveal>
        <Reveal delay={0.05}><h2 className="h-title grad-text">{t.price.title}</h2></Reveal>
        <Reveal delay={0.1}><p className="lead">{t.price.lead}</p></Reveal>
        <div className="price-grid">
          <Reveal delay={0.15}>
            <Tilt className="price-card c glass">
              <h3><span className="dot" />{t.price.claudeCard.name}</h3>
              {t.price.claudeCard.plans.map((p, i) => (
                <div className="plan" key={i}>
                  <div>
                    <div className="pname">{p.p}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div className="pval"><span className="cur">$</span><CountUp to={p.v} /></div>
                  </div>
                  <div className="pdesc">{p.d}</div>
                </div>
              ))}
              <div className="api-line">{t.price.claudeCard.api}</div>
              <div className="note-line">{t.price.claudeCard.note}</div>
            </Tilt>
          </Reveal>
          <Reveal delay={0.25}>
            <Tilt className="price-card a glass">
              <h3><span className="dot" />{t.price.antiCard.name}</h3>
              {t.price.antiCard.plans.map((p, i) => (
                <div className="plan" key={i}>
                  <div>
                    <div className="pname">{p.p}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    {p.v === 0
                      ? <div className="pval free">{t.price.free}</div>
                      : <div className="pval"><span className="cur">$</span><CountUp to={p.v} /></div>}
                  </div>
                  <div className="pdesc">{p.d}</div>
                </div>
              ))}
              <div className="api-line">{t.price.antiCard.api}</div>
              <div className="note-line">{t.price.antiCard.note}</div>
            </Tilt>
          </Reveal>
        </div>
      </section>

      {/* ===== 07 LIMIT ===== */}
      <section className="section" id="limit">
        <Reveal><div className="kicker">{t.limit.kicker}</div></Reveal>
        <Reveal delay={0.05}><h2 className="h-title grad-text">{t.limit.title}</h2></Reveal>
        <Reveal delay={0.1}><p className="lead">{t.limit.lead}</p></Reveal>
        <div className="limit-grid">
          {t.limit.cards.map((c, i) => (
            <Reveal key={i} delay={0.15 + i * 0.12}>
              <Tilt className="limit-card glass">
                <div className="ic">{c.icon}</div>
                <h3>{c.t}</h3>
                <p>{c.d}</p>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== 08 VERDICT ===== */}
      <section className="section" id="verdict">
        <Reveal><div className="kicker">{t.verdict.kicker}</div></Reveal>
        <Reveal delay={0.05}><h2 className="h-title grad-text">{t.verdict.title}</h2></Reveal>
        <Reveal delay={0.1}><p className="lead">{t.verdict.lead}</p></Reveal>
        <div className="verdict-grid">
          {t.verdict.cases.map((c, i) => (
            <Reveal key={i} delay={0.15 + i * 0.1}>
              <Tilt className="case glass">
                <span className="when">{c.when}</span>
                <span className={`pick ${c.pick.toLowerCase().includes('claude') ? 'claude' : 'anti'}`}>{c.pick}</span>
                <span className="why">{c.why}</span>
              </Tilt>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <div className="students glow-border">
            <h3 className="grad-text">{t.verdict.students.title}</h3>
            <p>{t.verdict.students.text}</p>
          </div>
        </Reveal>
      </section>

      {/* ===== OUTRO ===== */}
      <section className="section outro" id="outro">
        <Reveal><h2 className="h-title grad-text">{t.outro.title}</h2></Reveal>
        <Reveal delay={0.1}><p className="lead">{t.outro.text}</p></Reveal>
        <Reveal delay={0.2}>
          <div className="made">{t.outro.made} <span className="heart">♥</span></div>
        </Reveal>
      </section>
    </>
  )
}

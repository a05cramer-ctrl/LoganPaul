import { useState, useEffect } from 'react'
import heroImage from './B46DE64D-32E1-43A0-9761-7D0585B326B6.png'
import bgEmoji from './image-removebg-preview.png'
import photoYakub from './loganpaul-yakub.png'
import photoOar from './oar2.jpg'

const BG_POSITIONS = [
  { top: '8%', left: '5%', size: 72 }, { top: '15%', right: '8%', left: 'auto', size: 56 },
  { top: '25%', left: '12%', size: 64 }, { top: '35%', right: '3%', left: 'auto', size: 48 },
  { top: '45%', left: '2%', size: 60 }, { top: '55%', right: '10%', left: 'auto', size: 52 },
  { top: '65%', left: '8%', size: 44 }, { top: '75%', right: '5%', left: 'auto', size: 68 },
  { top: '85%', left: '15%', size: 56 }, { top: '12%', left: '85%', size: 48 },
  { top: '22%', right: '15%', left: 'auto', size: 60 }, { top: '42%', left: '90%', size: 52 },
  { top: '58%', right: '18%', left: 'auto', size: 64 }, { top: '72%', left: '92%', size: 56 },
  { top: '88%', right: '12%', left: 'auto', size: 48 },
]

function App() {
  const [apologyCount, setApologyCount] = useState(0)
  const [copied, setCopied] = useState(false)

  const copyCA = () => {
    navigator.clipboard.writeText('0x0000000000000000000000000000000000000000')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  useEffect(() => {
    const timer = setInterval(() => setApologyCount(c => c + 1), 2847)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="memecoin">
      {/* BACKGROUND EMOJIS */}
      <div className="bg-emojis" aria-hidden="true">
        {BG_POSITIONS.map((pos, i) => (
          <img
            key={i}
            src={bgEmoji}
            alt=""
            className="bg-emoji"
            style={{
              top: pos.top,
              left: pos.right ? 'auto' : pos.left,
              right: pos.right || 'auto',
              width: pos.size,
              height: pos.size,
            }}
          />
        ))}
      </div>

      <div className="memecoin-content">
      {/* HEADER */}
      <header className="site-header">
        <span className="header-logo">$LOGAN</span>
        <div className="header-actions">
          <button className="header-btn copy-ca" onClick={copyCA}>
            {copied ? 'COPIED!' : 'COPY CA'}
          </button>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="header-btn x-btn">
            X
          </a>
        </div>
      </header>

      {/* BREAKING BANNER */}
      <div className="breaking-banner">
        <span className="breaking-flash">BREAKING</span>
        <span className="breaking-text">CONTROVERSY TOKEN HITS NEW ATH — APOLOGY #{(apologyCount % 47) + 1} INCOMING</span>
        <span className="breaking-flash">BREAKING</span>
      </div>

      {/* HERO */}
      <section className="hero">
        <div className="hero-image-wrapper">
          <img src={heroImage} alt="" className="hero-image" />
        </div>
        <div className="glitch-wrapper">
          <h1 className="glitch" data-text="I THINK SOMEONE IS HANGING RIGHT THERE">I THINK SOMEONE IS HANGING RIGHT THERE</h1>
        </div>
        <p className="subheadline">Built on controversy. Powered by attention.</p>
        <div className="cta-grid">
          <button className="cta cta-1">Buy the Backlash</button>
          <button className="cta cta-2">Enter the Comeback Arc</button>
        </div>
      </section>

      {/* SPINNING DRAMA HEADLINES */}
      <div className="headline-ticker">
        <div className="ticker-track">
          <span>• CANCELLED FOR THE 47TH TIME</span>
          <span>• REDEMPTION ARC CONFIRMED</span>
          <span>• PODCAST REBRAND INCOMING</span>
          <span>• BOXING MATCH ANNOUNCED</span>
          <span>• "I'VE CHANGED" — SOURCES SAY</span>
          <span>• TOKEN PUMP 400%</span>
          <span>• CANCELLED FOR THE 47TH TIME</span>
          <span>• REDEMPTION ARC CONFIRMED</span>
        </div>
      </div>

      {/* SCANDAL TIMELINE */}
      <section className="section scandal-timeline">
        <h2>📜 Scandal Timeline</h2>
        <p className="section-tagline">(Satirical. Fictional. Probably.)</p>
        <div className="timeline">
          <div className="timeline-item">
            <span className="timeline-date">Q1 2024</span>
            <span className="timeline-dot"></span>
            <div className="timeline-content">
              <h3>Incident #47</h3>
              <p>Did a thing. Everyone mad. Token -60%. Apology video drops. Token +120%.</p>
            </div>
          </div>
          <div className="timeline-item">
            <span className="timeline-date">Q4 2023</span>
            <span className="timeline-dot"></span>
            <div className="timeline-content">
              <h3>The Pivot</h3>
              <p>Announced "new chapter." Launched podcast. Sold merch. Nobody remembers the old thing.</p>
            </div>
          </div>
          <div className="timeline-item">
            <span className="timeline-date">Q2 2023</span>
            <span className="timeline-dot"></span>
            <div className="timeline-content">
              <h3>Redemption Arc™</h3>
              <p>Fought someone. "He's actually matured." Forbes cover. Brand deals restored.</p>
            </div>
          </div>
          <div className="timeline-item">
            <span className="timeline-date">Q1 2023</span>
            <span className="timeline-dot"></span>
            <div className="timeline-content">
              <h3>Peak Cancellation</h3>
              <p>Everything on fire. Subscribers leaving. Token at all-time low. Perfect buy zone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SCANDAL LIST */}
      <section className="section scandal-list">
        <h2>📋 Scandal List</h2>
        <ul className="scandal-items">
          <li>Forest incident — filmed something he shouldn't have</li>
          <li>Taser + dead rat — "new chapter" lasted 24 hours</li>
          <li>Tide Pod tweet — engagement farming gone wrong</li>
          <li>CryptoZoo — promised game, delivered lawsuit</li>
          <li>PRIME caffeine — schools banned it, kids still wanted it</li>
          <li>KSI fight — lost, then fought Mayweather anyway</li>
          <li>Dillon Danis — won by DQ when opponent tried to wrestle</li>
        </ul>
      </section>

      {/* ATTENTION ECONOMY */}
      <section className="section attention-economy">
        <h2>👁️ The Attention Economy</h2>
        <div className="attention-content">
          <p className="attention-lead">
            In the attention economy, controversy isn't a bug — it's the feature. Every cancellation is a liquidity event. Every apology is a token unlock. Every comeback is a pump.
          </p>
          <div className="attention-stats">
            <div className="attention-stat">
              <span>🔥</span>
              <span>Negative engagement = 3x more valuable than positive</span>
            </div>
            <div className="attention-stat">
              <span>📉📈</span>
              <span>Crash + recovery = perfect narrative for "redemption"</span>
            </div>
            <div className="attention-stat">
              <span>🔄</span>
              <span>The cycle never ends. Neither do the gains.</span>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM PHOTOS */}
      <section className="section bottom-photos">
        <div className="bottom-photos-grid">
          <img src={photoYakub} alt="" className="bottom-photo" />
          <img src={photoOar} alt="" className="bottom-photo" />
        </div>
      </section>

      {/* FOOTER CTA */}
      <footer className="footer">
        <p className="footer-tagline">CANCELLED. REBRANDED. MOONING.</p>
      </footer>
      </div>
    </div>
  )
}

export default App

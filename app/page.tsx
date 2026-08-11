const cases = [
  {
    number: "01",
    eyebrow: "Platform launch · Intuit",
    title: "Turning a fragmented launch into a measurable growth engine",
    challenge: "Product and Engineering entered a revenue-critical launch with competing priorities, late scope pressure, and dependencies spread across teams.",
    move: "Built a shared operating plan, made customer and revenue tradeoffs explicit, and used a weekly steerco plus decision log to keep the core launch protected.",
    outcome: "5,000+ accountant signups in the first quarter, with adoption, drop-off, SLA, and revenue signals visible in one executive view.",
    stat: "5,000+",
    label: "Q1 signups",
  },
  {
    number: "02",
    eyebrow: "M&A integration · Chegg",
    title: "Converting acquisition strategy into realized value",
    challenge: "Mathway needed to be integrated without losing momentum across product, technology, and operating teams.",
    move: "Orchestrated the cross-functional roadmap, surfaced critical dependencies early, and established a governance rhythm anchored in business outcomes.",
    outcome: "$8M in value delivered within the first year while creating a repeatable integration model for future acquisitions.",
    stat: "$8M",
    label: "first-year value",
  },
  {
    number: "03",
    eyebrow: "AI adoption · Intuit",
    title: "Moving AI from curiosity to practical execution",
    challenge: "Program leaders needed useful, repeatable ways to apply AI—not another abstract transformation message.",
    move: "Drove an AI-focused Program Management community serving ~400 practitioners, established an AI Champion network, and delivered 14 practical speaker sessions.",
    outcome: "Created a scalable peer-learning system that accelerated experimentation, shared practices, and day-to-day adoption.",
    stat: "400",
    label: "practitioners served",
  },
];

const principles = [
  ["01", "Make tradeoffs visible", "Translate competing asks into customer, revenue, effort, dependency, and risk choices leaders can act on."],
  ["02", "Build systems, not status", "Design operating mechanisms that accelerate decisions and expose outcomes—not meetings that merely report activity."],
  ["03", "Create shared ownership", "Align Product, Engineering, Data, and Business around one roadmap, one success definition, and clear decision rights."],
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="monogram" href="#top" aria-label="Geetha Kuppuswamy home">GK</a>
        <div className="navlinks">
          <a href="#impact">Impact</a><a href="#work">Selected work</a><a href="#approach">Approach</a>
        </div>
        <a className="nav-cta" href="mailto:geetha.kuppuswamy@gmail.com">Let’s talk <span>↗</span></a>
      </nav>

      <section className="hero shell" id="top">
        <div className="availability"><span /> Leadership portfolio · Technology, transformation &amp; scale</div>
        <h1>I turn complex<br/>technology bets into<br/><em>business outcomes.</em></h1>
        <div className="hero-bottom">
          <p>Two decades connecting product vision, engineering execution, and operating systems to deliver measurable outcomes at scale.</p>
          <div className="hero-actions">
            <a className="button primary" href="#work">Explore my work <span>↓</span></a>
            <a className="button secondary" href="https://www.linkedin.com/in/geetha-kuppuswamy" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
        </div>
      </section>

      <section className="metric-band" id="impact">
        <div className="shell metrics">
          <div><strong>20+</strong><span>Years leading change</span></div>
          <div><strong>~400</strong><span>Engineers in portfolio scope</span></div>
          <div><strong>$125M+</strong><span>Business impact</span></div>
          <div><strong>10</strong><span>TPMs led</span></div>
        </div>
      </section>

      <section className="intro shell section">
        <p className="kicker">What I do</p>
        <div className="intro-copy">
          <h2>Strategy is only valuable<br/>when teams can <em>execute it.</em></h2>
          <p>I build the connective tissue that ambitious organizations need: shared priorities, transparent decisions, durable operating rhythms, and teams empowered to deliver. My experience spans AI, platform, compliance, M&amp;A, and revenue-critical products at Intuit, Chegg, and PayPal.</p>
        </div>
      </section>

      <section className="work section" id="work">
        <div className="shell section-head"><p className="kicker">Selected work</p><p>Three examples of how I lead through ambiguity, align organizations, and deliver measurable results.</p></div>
        <div className="shell case-list">
          {cases.map((item) => <article className="case" key={item.number}>
            <div className="case-num">{item.number}</div>
            <div className="case-main"><p className="eyebrow">{item.eyebrow}</p><h3>{item.title}</h3>
              <div className="case-detail"><div><b>Context</b><p>{item.challenge}</p></div><div><b>Leadership move</b><p>{item.move}</p></div><div><b>Result</b><p>{item.outcome}</p></div></div>
            </div>
            <div className="case-stat"><strong>{item.stat}</strong><span>{item.label}</span></div>
          </article>)}
        </div>
      </section>

      <section className="approach shell section" id="approach">
        <div className="approach-title"><p className="kicker">How I lead</p><h2>Clarity.<br/>Momentum.<br/><em>Trust.</em></h2></div>
        <div className="principles">{principles.map(([n,t,d]) => <div className="principle" key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></div>)}</div>
      </section>

      <section className="career section"><div className="shell"><p className="kicker">Career highlights</p><div className="timeline">
        <div><span>2021—2026</span><h3>Intuit</h3><p>TPM Leader · AI, platform, compliance &amp; revenue-critical portfolios</p></div>
        <div><span>2018—2020</span><h3>Chegg</h3><p>PMO Leader · M&amp;A integration &amp; enterprise prioritization</p></div>
        <div><span>Earlier</span><h3>PayPal · WaMu</h3><p>Transformation, global platforms &amp; large-scale migrations</p></div>
      </div><p className="footnote">Also: Northeastern University lecturer · U.S. patent holder</p></div></section>

      <section className="contact shell section"><p className="kicker">Continue the conversation</p><h2>Complexity becomes progress<br/>when clarity creates momentum.</h2><p>This portfolio captures a career spent turning ambitious ideas into durable systems, aligned teams, and measurable business results.</p><div className="contact-actions"><a href="mailto:geetha.kuppuswamy@gmail.com">geetha.kuppuswamy@gmail.com ↗</a><a href="https://www.linkedin.com/in/geetha-kuppuswamy" target="_blank" rel="noreferrer">Connect on LinkedIn ↗</a></div></section>
      <footer className="shell"><span>Geetha Kuppuswamy</span><span>San Jose, California</span><span>© 2026</span></footer>
    </main>
  );
}

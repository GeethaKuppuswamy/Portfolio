const cases = [
  {
    number: "01", eyebrow: "Platform launch · Intuit", title: "Launching Intuit Accountant Suite as a measurable growth engine",
    challenge: "A revenue-critical replacement for the legacy accountant experience faced competing priorities, late scope pressure, and dependencies across teams.",
    move: "Built the integrated operating plan, instituted a reusable Go/No-Go framework, and aligned Product and Engineering through explicit tradeoffs, a weekly steerco, and decision logs.",
    outcome: "Launched successfully with 5,000+ accountant signups in the first quarter and one executive view of adoption, drop-off, SLA, and revenue signals.", stat: "5,000+", label: "Q1 signups",
  },
  {
    number: "02", eyebrow: "Cross-org operating model · Intuit", title: "Turning Mid-Market demand chaos into a repeatable system",
    challenge: "I was specifically brought in to resolve a high-stakes cross-org situation: 70–90+ unranked initiatives, blank owners, moving requirements, side-channel negotiations, and a hard commitment deadline.",
    move: "Stepped into the ambiguity, created a single intake, forced a 1-to-N stack rank, led technical deep dives, and established mirrored owners, hotspot resolution, and a repeatable weekly cadence.",
    outcome: "Closed 185+ requests in one week, moved 11 capability programs from 4 aligned to 10 aligned and 1 partially aligned, and reduced escalations by approximately 6×.", stat: "185+", label: "requests closed in one week",
  },
  {
    number: "03", eyebrow: "AI adoption · Intuit", title: "Building an AI-native operating culture—not a training campaign",
    challenge: "Program leaders needed repeatable ways to apply AI to real work, with adoption measured through behavior rather than course completion.",
    move: "Ran hands-on workshops, built reusable workflows and prompt libraries, launched an AI Champion network, and scaled learning through 14 practical sessions for approximately 400 practitioners.",
    outcome: "10 of 11 TPMs built Claude agents within two weeks of general availability; 80%+ used GenAI weekly, and reusable workflows saved 100+ PMO hours.", stat: "100+", label: "PMO hours saved",
  },
  {
    number: "04", eyebrow: "0→1 enterprise bet · Intuit", title: "Translating AI + Human Intelligence strategy into execution",
    challenge: "An enterprise-scale bet combining agentic AI with expert services needed to move from an ambitious idea to sequenced, measurable execution.",
    move: "Connected product vision to engineering plans, operating cadences, dependencies, and outcome measures across the portfolio.",
    outcome: "Built the execution foundation that advanced AI + HI from strategy to a 0-to-1 enterprise-scale program, aligning teams around a sequenced roadmap, clear dependencies, and measurable outcomes.", stat: "0→1", label: "enterprise-scale program",
  },
  {
    number: "05", eyebrow: "M&A integration · Chegg", title: "Converting acquisition strategy into realized value",
    challenge: "Mathway needed to be integrated without losing momentum across product, technology, and operating teams.",
    move: "Orchestrated the cross-functional roadmap, surfaced critical dependencies early, and established governance anchored in business outcomes.",
    outcome: "$8M in value delivered within the first year while creating a repeatable integration model for future acquisitions.", stat: "$8M", label: "first-year value",
  },
  {
    number: "06", eyebrow: "Enterprise transformation · PayPal", title: "Scaling faster, safer launches across a global platform",
    challenge: "Inconsistent launch practices and uneven Agile adoption slowed execution across a large, distributed technology organization.",
    move: "Designed PayPal’s first cross-functional Launch Process Review and led Scrum adoption across 58 teams.",
    outcome: "The review became a company standard; PayPal Giving Fund launch time fell from weeks to two days and manual verification effort dropped 35%.", stat: "58", label: "teams transformed",
  },
];

const principles = [
  ["01", "Make tradeoffs visible", "Translate competing asks into customer, revenue, effort, dependency, and risk choices leaders can act on."],
  ["02", "Build systems, not status", "Design operating mechanisms that accelerate decisions and expose outcomes—not meetings that merely report activity."],
  ["03", "Create shared ownership", "Align Product, Engineering, Data, and Business around one roadmap, one success definition, and clear decision rights."],
];

export default function Home() {
  return <main>
    <nav className="nav shell" aria-label="Primary navigation"><a className="monogram" href="#top" aria-label="Geetha Kuppuswamy home">GK</a><div className="navlinks"><a href="#impact">Impact</a><a href="#work">Selected work</a><a href="#approach">How I lead</a><a href="#career">Career</a></div><a className="nav-cta" href="https://www.linkedin.com/in/geetha-kuppuswamy" target="_blank" rel="noreferrer" aria-label="View Geetha Kuppuswamy on LinkedIn">LinkedIn <span>↗</span></a></nav>
    <section className="hero shell" id="top">
      <div className="availability"><span /> Executive TPM leadership · Technology, transformation &amp; scale</div>
      <h1>I turn complex<br/>technology bets into<br/><em>business outcomes.</em></h1>
      <div className="hero-bottom"><p>Two decades connecting product vision, engineering execution, and operating systems to deliver measurable outcomes at scale.</p><div className="hero-actions"><a className="button primary" href="#work">Explore my work <span>↓</span></a><a className="button secondary" href="https://www.linkedin.com/in/geetha-kuppuswamy" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div>
      <div className="hero-metrics" id="impact"><div><strong>$125M+</strong><span>Portfolio led</span></div><div><strong>~400</strong><span>Engineers in scope</span></div><div><strong>10</strong><span>TPMs led</span></div><div><strong>5,000+</strong><span>Accountant signups</span></div><div><strong>100+</strong><span>PMO hours saved with AI</span></div><div><strong>20+</strong><span>Years leading change</span></div></div>
    </section>
    <section className="intro shell section"><p className="kicker">How I lead</p><div className="intro-copy"><h2>Strategy is only valuable<br/>when teams can <em>execute it.</em></h2><p>I bring clarity to ambiguous, high-stakes work—connecting strategy to execution, aligning leaders around explicit tradeoffs, and building operating systems that outlast the moment. My experience spans AI, platform, compliance, M&amp;A, and revenue-critical products at Intuit, Chegg, and PayPal.</p></div></section>
    <section className="work section" id="work"><div className="shell section-head"><p className="kicker">Selected work</p><p>Six examples of how I lead through ambiguity, align organizations, create durable systems, and deliver measurable results.</p></div><div className="shell case-list">{cases.map(item=><article className="case" key={item.number}><div className="case-num">{item.number}</div><div className="case-main"><p className="eyebrow">{item.eyebrow}</p><h3>{item.title}</h3><div className="case-detail"><div><b>Context</b><p>{item.challenge}</p></div><div><b>Leadership move</b><p>{item.move}</p></div><div><b>Result</b><p>{item.outcome}</p></div></div></div><div className="case-stat"><strong>{item.stat}</strong><span>{item.label}</span></div></article>)}</div></section>
    <section className="approach shell section" id="approach"><div className="approach-title"><p className="kicker">Leadership signature</p><h2>Clarity.<br/>Momentum.<br/><em>Trust.</em></h2></div><div className="principles">{principles.map(([n,t,d])=><div className="principle" key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></div>)}</div></section>
    <section className="career section" id="career"><div className="shell"><p className="kicker">Career highlights</p><div className="timeline"><div><span>2021—2026</span><h3>Intuit</h3><p>TPM Leader · AI, platform, Mid-Market, compliance &amp; revenue-critical portfolios</p></div><div><span>2018—2021</span><h3>Chegg</h3><p>PMO Leader · M&amp;A integration &amp; enterprise prioritization</p></div><div><span>Earlier</span><h3>PayPal · WaMu</h3><p>Transformation, global platforms &amp; large-scale migrations</p></div></div><div className="distinctions"><div><span>Educator</span><h3>Part-time Faculty</h3><p>Taught Graduate Agile Project Management at Northeastern University.</p></div><div><span>Inventor</span><h3>U.S. Patent #11,392,681</h3><p>Co-inventor of “Authentication Based on Object Recognition,” a location-aware, image-based MFA system.</p></div></div></div></section>
    <section className="contact shell section"><p className="kicker">Continue the conversation</p><h2>Complexity becomes progress<br/>when clarity creates momentum.</h2><p>This portfolio captures a career spent turning ambitious ideas into durable systems, aligned teams, and measurable business results.</p><div className="contact-actions"><a href="mailto:geetha.kuppuswamy@gmail.com">geetha.kuppuswamy@gmail.com ↗</a><a href="https://www.linkedin.com/in/geetha-kuppuswamy" target="_blank" rel="noreferrer">Connect on LinkedIn ↗</a></div></section>
    <footer className="shell"><span>Geetha Kuppuswamy</span><span>San Jose, California</span><span>© 2026</span></footer>
  </main>;
}

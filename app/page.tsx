const projects = [
  {
    number: "01",
    title: "Healthcare ERP Suite",
    description:
      "A connected set of custom Odoo workflows for hospital, laboratory, and pharmacy operations—from patient records and billing to inventory and reporting.",
    tags: ["Odoo", "Python", "PostgreSQL", "Healthcare"],
  },
  {
    number: "02",
    title: "HCM & Employee Operations",
    description:
      "Employee records, attendance, leave management, approvals, and role-based access designed to simplify day-to-day HR operations.",
    tags: ["Odoo", "HR", "Automation", "Security"],
  },
  {
    number: "03",
    title: "Co-operative Society ERP",
    description:
      "Member management, savings, loans, and financial workflows brought together in a structured ERP system with clear approvals and reporting.",
    tags: ["Odoo", "Finance", "Workflows", "Reports"],
  },
  {
    number: "04",
    title: "Retail & Hospitality Systems",
    description:
      "POS, inventory, hotel booking, and billing customizations for high-volume retail and hospitality environments.",
    tags: ["POS", "Inventory", "Booking", "Billing"],
  },
];

const capabilities = [
  "Custom Odoo module development",
  "ERP workflow automation",
  "Third-party API integration",
  "PostgreSQL query optimization",
  "XML views and access control",
  "Technical support and documentation",
];

export default function Home() {
  return (
    <main>
      <nav className="nav container">
        <a className="brand" href="#top" aria-label="Sarang T home">
          <span className="brand-mark">ST</span>
          <span>Sarang T</span>
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-cta" href="/Sarang-T-Resume.pdf" download>
          Download CV <span aria-hidden="true">↗</span>
        </a>
      </nav>

      <section className="hero container" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Python · Odoo · ERP Engineering</p>
          <h1>Building better business systems, one workflow at a time.</h1>
          <p className="hero-text">
            I&apos;m Sarang, a Python–Odoo Developer focused on turning complex business processes into
            reliable, efficient, and scalable ERP solutions.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">Explore my work <span aria-hidden="true">↘</span></a>
            <a className="text-link" href="#contact">Let&apos;s connect <span aria-hidden="true">→</span></a>
          </div>
        </div>
        <div className="hero-card" aria-label="Professional summary">
          <div className="card-topline"><span>PROFILE / 01</span><span>2026</span></div>
          <div className="monogram">ST</div>
          <div className="hero-card-bottom">
            <span>Kannur, Kerala</span>
            <span className="status-dot">Available for opportunities</span>
          </div>
        </div>
      </section>

      <section className="signal-band">
        <div className="container signal-grid">
          <div><strong>6+</strong><span>Odoo versions</span></div>
          <div><strong>2+</strong><span>Years of experience</span></div>
          <div><strong>6</strong><span>Business domains</span></div>
          <div><strong>∞</strong><span>Curiosity to solve</span></div>
        </div>
      </section>

      <section className="section container" id="about">
        <div className="section-label">/ 01 — About</div>
        <div className="about-grid">
          <h2>Technical depth with a business-first mindset.</h2>
          <div className="about-copy">
            <p>
              I specialize in Odoo customization, module development, workflow automation, and
              third-party integrations. My work spans healthcare, retail, HR, finance, hospitality,
              and public-facing services.
            </p>
            <p>
              From a clean XML view to a carefully optimized PostgreSQL query, I care about the
              details that make an ERP system easier for people to use and easier for teams to grow.
            </p>
            <a className="text-link" href="mailto:sarusarang02@gmail.com">Start a conversation <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>

      <section className="section section-soft" id="work">
        <div className="container">
          <div className="section-heading">
            <div className="section-label">/ 02 — Selected work</div>
            <p>Selected systems and workflows developed across different business domains.</p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project" key={project.number}>
                <span className="project-number">{project.number}</span>
                <div className="project-main">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-list">
                    {project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
                  </div>
                </div>
                <span className="project-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section container capabilities">
        <div className="section-label">/ 03 — Capabilities</div>
        <div className="capability-grid">
          {capabilities.map((capability, index) => (
            <div className="capability" key={capability}>
              <span>0{index + 1}</span>
              <p>{capability}</p>
            </div>
          ))}
        </div>
        <div className="tech-stack">
          <span>Working toolkit</span>
          <p>Python / Odoo 12–19 / PostgreSQL / XML / JavaScript / REST API / Git / HTML / CSS</p>
        </div>
      </section>

      <section className="experience-section">
        <div className="container experience-grid">
          <div className="section-label">/ 04 — Experience</div>
          <div>
            <div className="experience-item">
              <div><span className="experience-date">Aug 2024 — May 2026</span><h3>Python–Odoo Developer</h3><p>Inexoft Technologies Pvt Ltd</p></div>
              <span className="experience-arrow">↗</span>
            </div>
            <div className="experience-item">
              <div><span className="experience-date">Mar 2024 — Aug 2024</span><h3>Python–Odoo Developer Intern</h3><p>Business Technology Research &amp; Analytics Centre</p></div>
              <span className="experience-arrow">↗</span>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="container contact-inner">
          <p className="eyebrow">Have a system to improve?</p>
          <h2>Let&apos;s make your workflow work better.</h2>
          <a className="contact-email" href="mailto:sarusarang02@gmail.com">sarusarang02@gmail.com <span aria-hidden="true">↗</span></a>
          <div className="contact-links">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="https://github.com" target="_blank" rel="noreferrer">GitHub ↗</a>
            <span>Kannur, Kerala, India</span>
          </div>
        </div>
      </section>

      <footer className="footer container">
        <span>© 2026 Sarang T</span>
        <span>Built with Next.js</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}

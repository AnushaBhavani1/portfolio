const internships = [
  {
  role: 'Intern',
  company: 'Infosys Springboard',
  period: 'Sep 2025 – Nov 2025',
  desc: 'Completed a virtual internship focusing on real-world problem solving using SDLC methodologies. Applied clean coding practices and debugging techniques to build scalable software in a simulated environment. Collaborated on technical documentation and requirement analysis to ensure project alignment with industry standards.',
  tags: ['SDLC', 'Debugging', 'Clean Code', 'Software Engineering'],
}
]

export default function Internship() {
  return (
    <div className="page" style={{ background: 'var(--bg)' }}>
      <div className="container-sm">
        <h2 className="sec-title fade-up delay-1"> <span>Internship</span></h2>
        <p className="sec-sub fade-up delay-2">My professional journey so far</p>

        <div className="timeline">
          {internships.map((item, i) => (
            <div key={i} className="timeline-item fade-up" style={{ animationDelay: `${0.2 + i * 0.15}s`, opacity: 0 }}>
              <div className="timeline-dot" />
              <div className="t-card">
                <div className="t-top">
                  <h3>{item.role}</h3>
                  <span className="t-badge">{item.period}</span>
                </div>
                <div className="t-company">{item.company}</div>
                <p className="t-desc">{item.desc}</p>
                <div className="t-tags">
                  {item.tags.map(t => <span key={t} className="tag" style={{ fontSize: '0.75rem' }}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

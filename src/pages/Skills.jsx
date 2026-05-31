const skillData = [
  {
    icon: 'fa-solid fa-code',
    title: 'Programming Languages',
    desc: 'Strong foundation in core programming languages.',
    tags: ['Java', 'Python', 'C'],
  },
  {
    icon: 'fa-brands fa-react',
    title: 'Frontend Development',
    desc: 'Building responsive and interactive user interfaces.',
    tags: ['React.js', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    icon: 'fa-solid fa-server',
    title: 'Backend Development',
    desc: 'Creating scalable server-side applications and APIs.',
    tags: ['Node.js', 'Express.js', 'Django'],
  },
  {
    icon: 'fa-solid fa-database',
    title: 'Databases',
    desc: 'Working with relational and NoSQL databases.',
    tags: ['MongoDB', 'MySQL'],
  },
  {
    icon: 'fa-solid fa-screwdriver-wrench',
    title: 'Tools & Platforms',
    desc: 'Development tools and collaboration platforms.',
    tags: ['Git', 'GitHub', 'VS Code', 'Postman'],
  },
  {
    icon: 'fa-solid fa-book',
    title: 'Core Subjects',
    desc: 'Strong CS fundamentals for problem solving.',
    tags: ['Data Structures & Algorithms', 'OOPs', 'DBMS','CN'],
  },
]

export default function Skills() {
  return (
    <div className="page" style={{ background: 'var(--bg)' }}>
      <div className="container">

        <h2 className="sec-title fade-up delay-1">
          My <span>Skills</span>
        </h2>

        <p className="sec-sub fade-up delay-2">
          Technologies and concepts I work with
        </p>

        <div className="skills-grid">
          {skillData.map((s, i) => (
            <div
              key={s.title}
              className="skill-card fade-up"
              style={{
                animationDelay: `${0.1 + i * 0.08}s`,
                opacity: 0,
              }}
            >
              <div className="skill-card-header">
                <div className="skill-icon">
                  <i className={s.icon} />
                </div>
                <h3>{s.title}</h3>
              </div>

              <p>{s.desc}</p>

              <div className="skill-tags">
                {s.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
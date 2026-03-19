import { profile, projects } from '../data/portfolioData'
import { Link } from 'react-router-dom'
import {
  FaBookReader,
  FaEnvelope,
  FaExternalLinkAlt,
  FaFileDownload,
  FaGithub,
  FaGraduationCap,
  FaLinkedin,
  FaLaptopCode,
  FaMapMarkerAlt,
  FaMusic,
  FaPhoneAlt,
  FaTrophy,
} from 'react-icons/fa'

export function HomePage() {
  const avatarInitials = profile.name
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .slice(0, 2)
    .join('')
  const facts = [
    { label: 'Location', value: profile.location, icon: <FaMapMarkerAlt /> },
    { label: 'Education', value: profile.education, icon: <FaGraduationCap /> },
  ]
  const hobbyIcons = [<FaLaptopCode />, <FaMusic />, <FaBookReader />]
  const hobbiesWithIcons = profile.hobbies.map((hobby, index) => ({
    label: hobby,
    icon: hobbyIcons[index % hobbyIcons.length],
  }))

  return (
    <div className="page">
      <section id="home" className="hero-section">
        <div className="avatar">{avatarInitials}</div>
        <h1 className="hero-name">{profile.name}</h1>
        <h2 className="hero-role">{profile.role}</h2>
        <p className="lead">{profile.intro}</p>
        <div className="skills">
          {profile.skills.map((skill) => (
            <span key={skill} className="chip">
              {skill}
            </span>
          ))}
        </div>
        <div className="actions">
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn btn-secondary">
            Contact Me
          </a>
        </div>
      </section>

      <h2 id="about" className="section-heading">
        About Me
      </h2>

      <section className="about-layout">
        <aside className="left-stack">
          <article className="card stack">
            <h3>Quick Facts</h3>
            {facts.map((fact) => (
              <div key={fact.label} className="fact-item">
                <span className="icon-badge">{fact.icon}</span>
                <p>
                  <strong>{fact.label}</strong>
                  <br />
                  {fact.value}
                </p>
              </div>
            ))}
          </article>

          <article className="card stack">
            <h3>When I&apos;m Not Coding</h3>
            <ul className="hobby-list">
              {hobbiesWithIcons.map((hobby) => (
                <li key={hobby.label}>
                  <span className="icon-badge">{hobby.icon}</span>
                  <span>{hobby.label}</span>
                </li>
              ))}
            </ul>
          </article>
        </aside>

        <div className="right-stack">
          <article className="card stack">
            <h3>My Journey</h3>
            <p>{profile.journey}</p>
          </article>

          <article className="card stack">
            <h3>My Approach</h3>
            <p>{profile.approach}</p>
          </article>
        </div>
      </section>

      <Link to="/projects" className="scroll-cue">
        <span>Let&apos;s go to my projects</span>
        <span className="mouse-icon" aria-hidden="true">
          <span className="mouse-wheel"></span>
        </span>
      </Link>

      <section id="projects" className="stack nav-target-section">
        <h2 className="section-heading">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.title} className="card stack">
              {project.featured ? <span className="badge">Featured</span> : null}
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="skills">
                {project.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="actions">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  <FaExternalLinkAlt />
                  <span>Live Demo</span>
                </a>
                <a
                  href={project.sourceCode}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                >
                  <FaGithub />
                  <span>Source Code</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="achievements" className="stack nav-target-section">
        <h2 className="section-heading">Achievements</h2>
        <article className="card">
          <ul className="hobby-list">
            {profile.achievements.map((item) => (
              <li key={item}>
                <FaTrophy />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section id="resume" className="stack nav-target-section">
        <h2 className="section-heading">Resume</h2>
        <article className="card stack">
          <p>Download my latest resume for detailed experience and projects.</p>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            <FaFileDownload />
            <span>Open Resume</span>
          </a>
        </article>
      </section>

      <section id="contact" className="stack nav-target-section">
        <h2 className="section-heading">Contact</h2>
        <article className="card stack">
          <p>
            <FaEnvelope />
            <strong>Email:</strong>{' '}
            <a href={`mailto:${profile.contact.email}`}>{profile.contact.email}</a>
          </p>
          <p>
            <FaPhoneAlt />
            <strong>Phone:</strong>{' '}
            <a href={`tel:${profile.contact.phone}`}>{profile.contact.phone}</a>
          </p>
          <p>
            <FaLinkedin />
            <strong>LinkedIn:</strong>{' '}
            <a href={profile.contact.linkedin} target="_blank" rel="noreferrer">
              {profile.contact.linkedin}
            </a>
          </p>
          <p>
            <FaGithub />
            <strong>GitHub:</strong>{' '}
            <a href={profile.contact.github} target="_blank" rel="noreferrer">
              {profile.contact.github}
            </a>
          </p>
        </article>
      </section>
    </div>
  )
}

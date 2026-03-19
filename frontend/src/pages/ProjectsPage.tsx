import { Link } from 'react-router-dom'
import { projects } from '../data/portfolioData'

export function ProjectsPage() {
  return (
    <div className="page">
      <section className="stack">
        <h1>Featured Projects</h1>
        <p className="lead">
          A showcase of work spanning web applications, APIs, and responsive
          interfaces.
        </p>
      </section>

      <section className="projects-grid">
        {projects.map((project) => (
          <article key={project.title} className="card stack">
            {project.featured ? (
              <span className="badge">Featured</span>
            ) : null}
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
              <a href={project.liveDemo} target="_blank" rel="noreferrer" className="btn btn-primary">
                Live Demo
              </a>
              <a
                href={project.sourceCode}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                Source Code
              </a>
            </div>
          </article>
        ))}
      </section>

      <section className="card stack">
        <h3>Interested in working together?</h3>
        <p>I am always open to discussing ideas and collaboration opportunities.</p>
        <div>
          <Link to="/contact" className="btn btn-primary">
            Let&apos;s Connect
          </Link>
        </div>
      </section>
    </div>
  )
}

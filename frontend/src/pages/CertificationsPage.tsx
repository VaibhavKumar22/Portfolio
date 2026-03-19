import { FaAward } from 'react-icons/fa'
import { certifications } from '../data/portfolioData'

export function CertificationsPage() {
  const certificationsByLatest = [...certifications].sort((a, b) => {
    const aTime = Date.parse(a.issuedOn)
    const bTime = Date.parse(b.issuedOn)
    return bTime - aTime
  })

  return (
    <div className="page">
      <section className="stack">
        <h1>Certifications</h1>
        <p className="lead">A record of certifications I have earned across development and problem solving.</p>
      </section>

      <section className="projects-grid">
        {certificationsByLatest.map((item) => (
          <a
            key={`${item.title}-${item.issuedOn}`}
            href={item.credentialUrl}
            target="_blank"
            rel="noreferrer"
            className="cert-card-link"
          >
            <article className="card stack certification-card">
              <div className="cert-top-row">
                <p className="cert-date">{new Date(item.issuedOn).toLocaleDateString()}</p>
                {item.credentialId ? <span className="cert-id">ID: {item.credentialId}</span> : null}
              </div>
              <h3>{item.title}</h3>
              <p className="cert-issuer">{item.issuer}</p>
              <div className="btn btn-secondary">
                <FaAward />
                <span>View Credential</span>
              </div>
            </article>
          </a>
        ))}
      </section>
    </div>
  )
}

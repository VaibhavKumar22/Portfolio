import { useMemo, useState, type ReactNode } from 'react'
import { skillItems } from '../data/portfolioData'
import { FaCode, FaJava, FaPlug, FaUserShield } from 'react-icons/fa'
import {
  SiBootstrap,
  SiC,
  SiCplusplus,
  SiCloudinary,
  SiCss,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNetlify,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiVercel,
  SiXampp,
} from 'react-icons/si'

export function SkillsPage() {
  const [activeSkillCategory, setActiveSkillCategory] = useState<string>('All Skills')

  const skillCategories = useMemo(
    () => ['All Skills', ...Array.from(new Set(skillItems.map((skill) => skill.category)))],
    [],
  )

  const filteredSkills = useMemo(
    () =>
      activeSkillCategory === 'All Skills'
        ? skillItems
        : skillItems.filter((skill) => skill.category === activeSkillCategory),
    [activeSkillCategory],
  )

  const getSkillIcon = (
    name: string,
  ): { icon: ReactNode; color: string; bg: string; border: string } => {
    const iconMap: Record<string, { icon: ReactNode; color: string; bg: string; border: string }> = {
      'C++ (Major)': {
        icon: <SiCplusplus />,
        color: '#00599C',
        bg: 'rgba(0, 89, 156, 0.18)',
        border: 'rgba(0, 89, 156, 0.4)',
      },
      Java: {
        icon: <FaJava />,
        color: '#F89820',
        bg: 'rgba(248, 152, 32, 0.16)',
        border: 'rgba(248, 152, 32, 0.38)',
      },
      Python: {
        icon: <SiPython />,
        color: '#FFD43B',
        bg: 'rgba(255, 212, 59, 0.16)',
        border: 'rgba(255, 212, 59, 0.36)',
      },
      C: {
        icon: <SiC />,
        color: '#A8B9CC',
        bg: 'rgba(168, 185, 204, 0.16)',
        border: 'rgba(168, 185, 204, 0.36)',
      },
      JavaScript: {
        icon: <SiJavascript />,
        color: '#F7DF1E',
        bg: 'rgba(247, 223, 30, 0.16)',
        border: 'rgba(247, 223, 30, 0.35)',
      },
      PHP: {
        icon: <SiPhp />,
        color: '#777BB4',
        bg: 'rgba(119, 123, 180, 0.18)',
        border: 'rgba(119, 123, 180, 0.38)',
      },
      'React.js': {
        icon: <SiReact />,
        color: '#61DAFB',
        bg: 'rgba(97, 218, 251, 0.16)',
        border: 'rgba(97, 218, 251, 0.4)',
      },
      HTML: {
        icon: <SiHtml5 />,
        color: '#E34F26',
        bg: 'rgba(227, 79, 38, 0.15)',
        border: 'rgba(227, 79, 38, 0.4)',
      },
      CSS: {
        icon: <SiCss />,
        color: '#1572B6',
        bg: 'rgba(21, 114, 182, 0.16)',
        border: 'rgba(21, 114, 182, 0.4)',
      },
      'Tailwind CSS': {
        icon: <SiTailwindcss />,
        color: '#06B6D4',
        bg: 'rgba(6, 182, 212, 0.16)',
        border: 'rgba(6, 182, 212, 0.4)',
      },
      Bootstrap: {
        icon: <SiBootstrap />,
        color: '#7952B3',
        bg: 'rgba(121, 82, 179, 0.16)',
        border: 'rgba(121, 82, 179, 0.4)',
      },
      'Node.js': {
        icon: <SiNodedotjs />,
        color: '#68A063',
        bg: 'rgba(104, 160, 99, 0.16)',
        border: 'rgba(104, 160, 99, 0.38)',
      },
      'Express.js': {
        icon: <SiExpress />,
        color: '#EDEDED',
        bg: 'rgba(237, 237, 237, 0.12)',
        border: 'rgba(237, 237, 237, 0.32)',
      },
      'REST API Integration': {
        icon: <FaPlug />,
        color: '#5EEAD4',
        bg: 'rgba(94, 234, 212, 0.16)',
        border: 'rgba(94, 234, 212, 0.35)',
      },
      Authentication: {
        icon: <FaUserShield />,
        color: '#38BDF8',
        bg: 'rgba(56, 189, 248, 0.16)',
        border: 'rgba(56, 189, 248, 0.35)',
      },
      RBAC: {
        icon: <FaUserShield />,
        color: '#A78BFA',
        bg: 'rgba(167, 139, 250, 0.16)',
        border: 'rgba(167, 139, 250, 0.35)',
      },
      'PHP (Backend)': {
        icon: <SiPhp />,
        color: '#777BB4',
        bg: 'rgba(119, 123, 180, 0.18)',
        border: 'rgba(119, 123, 180, 0.38)',
      },
      MySQL: {
        icon: <SiMysql />,
        color: '#00758F',
        bg: 'rgba(0, 117, 143, 0.16)',
        border: 'rgba(0, 117, 143, 0.35)',
      },
      MongoDB: {
        icon: <SiMongodb />,
        color: '#47A248',
        bg: 'rgba(71, 162, 72, 0.16)',
        border: 'rgba(71, 162, 72, 0.38)',
      },
      PostgreSQL: {
        icon: <SiPostgresql />,
        color: '#336791',
        bg: 'rgba(51, 103, 145, 0.16)',
        border: 'rgba(51, 103, 145, 0.35)',
      },
      Git: {
        icon: <SiGit />,
        color: '#F05032',
        bg: 'rgba(240, 80, 50, 0.16)',
        border: 'rgba(240, 80, 50, 0.4)',
      },
      GitHub: {
        icon: <SiGithub />,
        color: '#E8E8E8',
        bg: 'rgba(232, 232, 232, 0.12)',
        border: 'rgba(232, 232, 232, 0.3)',
      },
      XAMPP: {
        icon: <SiXampp />,
        color: '#FB7A24',
        bg: 'rgba(251, 122, 36, 0.16)',
        border: 'rgba(251, 122, 36, 0.36)',
      },
      Cloudinary: {
        icon: <SiCloudinary />,
        color: '#3448C5',
        bg: 'rgba(52, 72, 197, 0.16)',
        border: 'rgba(52, 72, 197, 0.35)',
      },
      Vercel: {
        icon: <SiVercel />,
        color: '#EDEDED',
        bg: 'rgba(237, 237, 237, 0.12)',
        border: 'rgba(237, 237, 237, 0.32)',
      },
      Netlify: {
        icon: <SiNetlify />,
        color: '#00C7B7',
        bg: 'rgba(0, 199, 183, 0.16)',
        border: 'rgba(0, 199, 183, 0.35)',
      },
      'VS Code': {
        icon: <FaCode />,
        color: '#007ACC',
        bg: 'rgba(0, 122, 204, 0.16)',
        border: 'rgba(0, 122, 204, 0.35)',
      },
      Postman: {
        icon: <SiPostman />,
        color: '#FF6C37',
        bg: 'rgba(255, 108, 55, 0.16)',
        border: 'rgba(255, 108, 55, 0.35)',
      },
    }

    return (
      iconMap[name] ?? {
        icon: <FaCode />,
        color: '#9ed7b8',
        bg: 'rgba(158, 215, 184, 0.14)',
        border: 'rgba(158, 215, 184, 0.35)',
      }
    )
  }

  return (
    <div className="page">
      <section id="skills" className="skills-section stack">
        <h2 className="section-heading">Technical Skills</h2>
        <p className="lead skills-lead">
          A collection of technologies and tools I use to build reliable and scalable
          applications.
        </p>
        <div className="skill-filter-row">
          {skillCategories.map((category) => (
            <button
              type="button"
              key={category}
              className={category === activeSkillCategory ? 'skill-filter active-filter' : 'skill-filter'}
              onClick={() => setActiveSkillCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="skill-card-grid">
          {filteredSkills.map((skill) => {
            const iconMeta = getSkillIcon(skill.name)
            return (
              <article key={`${skill.category}-${skill.name}`} className="skill-card">
              <div className="skill-card-head">
                <span
                  className="skill-icon"
                  style={{
                    color: iconMeta.color,
                    background: iconMeta.bg,
                    borderColor: iconMeta.border,
                  }}
                >
                  {iconMeta.icon}
                </span>
                <div className="skill-main">
                  <div className="skill-row">
                    <h4>{skill.name}</h4>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-meter">
                    <div className="skill-meter-fill" style={{ width: `${skill.level}%` }} />
                  </div>
                </div>
              </div>
              <p className="skill-category">{skill.category}</p>
              </article>
            )
          })}
        </div>
      </section>

      <section className="card stack learning-journey-section">
        <h3>Learning Journey</h3>
        <p className="lead">
          My technical skill set is constantly evolving as I explore new tools and
          frameworks to expand my development capabilities. Currently learning and
          experimenting with:
        </p>
        <div className="learning-tags">
          <span className="chip">Spring Boot</span>
          <span className="chip">TypeScript</span>
          <span className="chip">Next.js</span>
          <span className="chip">Laravel</span>
          <span className="chip">Angular</span>
        </div>
      </section>
    </div>
  )
}

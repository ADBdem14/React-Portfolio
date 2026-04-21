import { portfolioData } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="section card reveal reveal-up">
      <h2>Projects</h2>
      <div className="project-grid">
        {portfolioData.projects.map((project) => (
          <article key={project.name} className="project-card reveal reveal-up">
            <div className="project-header">
              <h3>{project.name}</h3>
              <span className="project-status">{project.status}</span>
            </div>
            <p>{project.description}</p>
            <ul className="project-outcomes">
              {project.outcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
            <p className="project-tech">Tech: {project.tech.join(" • ")}</p>
            <a href={project.link} target="_blank" rel="noreferrer">
              Open Project
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

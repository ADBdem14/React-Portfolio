import { portfolioData } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="section card">
      <h2>Skills</h2>
      <ul className="skills-grid">
        {portfolioData.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

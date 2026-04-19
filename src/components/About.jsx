import { portfolioData } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="section card">
      <h2>About Me</h2>
      <p>{portfolioData.about}</p>
      <p className="meta-line">{portfolioData.education}</p>
      <p className="meta-line">{portfolioData.location}</p>
    </section>
  );
}

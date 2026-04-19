import { portfolioData } from "../data/portfolioData";

export default function Intro() {
  return (
    <section id="intro" className="section intro">
      <p className="intro-kicker">Hello, I&apos;m</p>
      <h1>{portfolioData.name}</h1>
      <p className="intro-title">{portfolioData.title}</p>
      <p className="intro-headline">{portfolioData.headline}</p>
      <div className="button-row">
        <a href="#projects" className="button primary">
          View Projects
        </a>
        <a href="#contact" className="button ghost">
          Contact Me
        </a>
      </div>
    </section>
  );
}

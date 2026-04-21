import { portfolioData } from "../data/portfolioData";
import profilePhoto from "../assets/profile-photo.png";

export default function Intro() {
  return (
    <section id="intro" className="section intro">
      <div className="intro-content reveal reveal-left">
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
      </div>

      <div className="intro-photo-wrap reveal reveal-right" aria-hidden="true">
        <img src={profilePhoto} alt="Aaron smiling and giving two thumbs up" className="intro-photo" />
      </div>
    </section>
  );
}

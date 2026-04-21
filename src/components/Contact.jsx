import { portfolioData } from "../data/portfolioData";

export default function Contact() {
  return (
    <section id="contact" className="section card reveal reveal-up">
      <h2>Contact</h2>
      <p>
        Email: <a href={`mailto:${portfolioData.email}`}>{portfolioData.email}</a>
      </p>
      <p>Phone: {portfolioData.phone}</p>
      <div className="social-row">
        {portfolioData.social.map((network) => (
          <a key={network.label} href={network.href} target="_blank" rel="noreferrer">
            {network.label}
          </a>
        ))}
      </div>
    </section>
  );
}

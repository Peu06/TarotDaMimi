import Section from "./Section.jsx";
import { STEPS } from "../config/site.js";

export default function HowItWorks() {
  return (
    <Section id="como" eyebrow="Como funciona" title="Três passos simples">
      <div className="grid">
        {STEPS.map((s, i) => (
          <article className="card" key={s.title}>
            <div className="step-number">{i + 1}</div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

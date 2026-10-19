import Section from "./Section.jsx";
import { READINGS } from "../config/site.js";

export default function Readings() {
  return (
    <Section id="leituras" eyebrow="Leituras" title="Escolha o tipo de leitura" alt>
      <div className="grid">
        {READINGS.map((r) => (
          <article className="card" key={r.name}>
            <div className="card__icon">{r.icon}</div>
            <h3>{r.name}</h3>
            <p>{r.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

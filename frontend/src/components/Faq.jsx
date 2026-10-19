import Section from "./Section.jsx";
import { FAQ } from "../config/site.js";

export default function Faq() {
  return (
    <Section id="duvidas" eyebrow="Dúvidas" title="Perguntas frequentes">
      {FAQ.map((item) => (
        <details className="faq" key={item.q}>
          <summary>{item.q}</summary>
          <p>{item.a}</p>
        </details>
      ))}
    </Section>
  );
}

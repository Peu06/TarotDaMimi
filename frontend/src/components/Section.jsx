export default function Section({ id, eyebrow, title, subtitle, alt = false, children }) {
  return (
    <section id={id} className={alt ? "section section--alt" : "section"}>
      <div className="wrap">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2>{title}</h2>
        {subtitle && <p className="sub">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}

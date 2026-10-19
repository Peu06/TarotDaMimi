import { useState } from "react";
import { SITE } from "../config/site.js";

const LINKS = [
  { href: "#leituras", label: "Leituras" },
  { href: "#como", label: "Como funciona" },
  { href: "#duvidas", label: "Dúvidas" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="header">
      <div className="wrap">
        <nav className="nav" aria-label="Principal">
          <a className="logo" href="#topo">✦ {SITE.name}</a>
          <button
            className="burger"
            aria-label="Abrir menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            ☰
          </button>
          <div className={open ? "nav__links nav__links--open" : "nav__links"}>
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
            ))}
            <a className="btn" href="#agendar" onClick={close}>Agendar</a>
          </div>
        </nav>
      </div>
    </header>
  );
}

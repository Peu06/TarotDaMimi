import { SITE } from "../config/site.js";

export default function Footer() {
  return (
    <footer className="footer">
      ✦ {SITE.name} · A leitura de tarô é um momento de reflexão e autoconhecimento, e não substitui
      orientação médica, jurídica ou financeira.
    </footer>
  );
}

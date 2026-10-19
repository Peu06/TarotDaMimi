export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero__cards" aria-hidden="true">
          <div className="tarot-card">☾</div>
          <div className="tarot-card">✦</div>
          <div className="tarot-card">☀</div>
        </div>
        <p className="eyebrow">Leituras de cartas de tarô</p>
        <h1>Clareza para os seus próximos passos</h1>
        <p className="sub sub--center">
          Uma conversa acolhedora, com as cartas sobre a mesa, para olhar para o seu momento com mais calma.
          Escolha o dia e o horário e a Mi entra em contato com você.
        </p>
        <a className="btn" href="#agendar">Agendar minha leitura</a>
      </div>
    </section>
  );
}

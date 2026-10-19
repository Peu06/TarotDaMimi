import { useMemo, useState } from "react";
import Section from "./Section.jsx";
import ChipGroup from "./ChipGroup.jsx";
import { READINGS, SCHEDULE } from "../config/site.js";
import { getAvailableDates, formatLongDate } from "../utils/dates.js";
import { sendBooking } from "../services/booking.js";

const EMPTY = { name: "", phone: "", email: "", reading: READINGS[0].name, date: "", time: "", message: "" };

export default function Booking() {
  const [form, setForm] = useState(EMPTY);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const dateOptions = useMemo(
    () => getAvailableDates().map((d) => ({ value: d.iso, label: d.day, hint: d.weekday })),
    []
  );
  const timeOptions = SCHEDULE.times.map((t) => ({ value: t, label: t }));

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  const pick = (field) => (value) => setForm((f) => ({ ...f, [field]: value }));

  function validate() {
    if (!form.name.trim() || !form.phone.trim() || !form.email.trim()) return "Preencha nome, WhatsApp e e-mail.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return "Confira se o e-mail está correto.";
    if (!form.date || !form.time) return "Escolha um dia e um horário.";
    return "";
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const problem = validate();
    setError(problem);
    if (problem) return;
    setLoading(true);
    try {
      await sendBooking({ ...form, dateLabel: formatLongDate(form.date) });
      setSent(true);
    } catch {
      setError("Não foi possível enviar agora. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Section
      id="agendar"
      eyebrow="Agendamento"
      title="Reserve o seu horário"
      subtitle="O horário só fica confirmado depois que a Mi entrar em contato com você."
      alt
    >
      {sent ? (
        <div className="card success" role="status">
          <div className="success__icon">✓</div>
          <h3>Pedido preparado!</h3>
          <p>
            Seu aplicativo de e-mail foi aberto com o pedido pronto. Basta apertar em enviar.
            A Mi responde assim que possível.
          </p>
          <button className="btn" onClick={() => { setForm(EMPTY); setSent(false); }}>
            Fazer outro agendamento
          </button>
        </div>
      ) : (
        <form className="form" onSubmit={handleSubmit} noValidate>
          <label htmlFor="name">Seu nome</label>
          <input id="name" value={form.name} onChange={update("name")} autoComplete="name" placeholder="Como posso te chamar?" />

          <div className="form__row">
            <div>
              <label htmlFor="phone">WhatsApp</label>
              <input id="phone" type="tel" value={form.phone} onChange={update("phone")} autoComplete="tel" placeholder="(11) 90000-0000" />
            </div>
            <div>
              <label htmlFor="email">E-mail</label>
              <input id="email" type="email" value={form.email} onChange={update("email")} autoComplete="email" placeholder="voce@email.com" />
            </div>
          </div>

          <label htmlFor="reading">Tipo de leitura</label>
          <select id="reading" value={form.reading} onChange={update("reading")}>
            {READINGS.map((r) => <option key={r.name}>{r.name}</option>)}
          </select>

          <ChipGroup label="Escolha o dia" options={dateOptions} value={form.date} onChange={pick("date")} />
          <ChipGroup label="Escolha o horário" options={timeOptions} value={form.time} onChange={pick("time")} />

          <label htmlFor="message">Quer contar algo antes? (opcional)</label>
          <textarea id="message" rows="3" value={form.message} onChange={update("message")} placeholder="Tema da leitura, dúvidas, o que for importante." />

          {form.date && form.time && (
            <div className="summary">Você escolheu: {formatLongDate(form.date)} às {form.time}</div>
          )}
          {error && <p className="form__error" role="alert">{error}</p>}

          <button className="btn form__submit" type="submit" disabled={loading}>
            {loading ? "Enviando..." : "Enviar pedido de agendamento"}
          </button>
        </form>
      )}
    </Section>
  );
}

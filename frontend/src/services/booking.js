import { SITE } from "../config/site.js";

/**
 * Envia o pedido de agendamento.
 * Versão atual: abre o app de e-mail do cliente (mailto).
 *
 * Para envio automático, substitua o corpo desta função por EmailJS ou Formspree, por exemplo:
 *   await fetch("https://formspree.io/f/SEU_ID", { method: "POST", body: JSON.stringify(data), ... })
 */
export async function sendBooking(data) {
  const subject = `Novo agendamento de tarô: ${data.name}`;
  const body = [
    "Novo pedido de leitura:",
    "",
    `Nome: ${data.name}`,
    `WhatsApp: ${data.phone}`,
    `E-mail: ${data.email}`,
    `Leitura: ${data.reading}`,
    `Data: ${data.dateLabel}`,
    `Horário: ${data.time}`,
    data.message ? `\nMensagem: ${data.message}` : "",
  ].join("\n");

  window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

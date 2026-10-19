import { SCHEDULE } from "../config/site.js";

const pad = (n) => String(n).padStart(2, "0");

export const toISO = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

const fromISO = (iso) => {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);
};

/** Lista os próximos dias em que a Mi atende. */
export function getAvailableDates() {
  const today = new Date();
  const dates = [];
  for (let i = 1; i <= SCHEDULE.daysAhead; i++) {
    const d = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i);
    if (!SCHEDULE.weekdays.includes(d.getDay())) continue;
    dates.push({
      iso: toISO(d),
      day: d.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" }),
      weekday: d.toLocaleDateString("pt-BR", { weekday: "short" }).replace(".", ""),
    });
  }
  return dates;
}

export const formatLongDate = (iso) =>
  fromISO(iso).toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "long" });

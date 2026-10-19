// Tudo que a Mi pode querer mudar fica aqui.

export const SITE = {
  name: "Tarô com a Mi",
  email: "email-da-mi@exemplo.com", // e-mail que recebe os pedidos
};

export const SCHEDULE = {
  weekdays: [2, 3, 4, 5, 6], // 0 = domingo, 1 = segunda ... 6 = sábado
  times: ["09:00", "10:30", "14:00", "15:30", "17:00", "19:00"],
  daysAhead: 21, // quantos dias à frente aparecem para escolher
};

export const READINGS = [
  { icon: "☾", name: "Leitura rápida", description: "Três cartas para uma pergunta objetiva sobre o seu momento." },
  { icon: "✦", name: "Leitura completa", description: "Tiragem ampla para olhar passado, presente e caminhos possíveis." },
  { icon: "♡", name: "Leitura de relacionamentos", description: "Um olhar sobre vínculos, sentimentos e o que pede atenção." },
  { icon: "☀", name: "Leitura de trabalho e vida", description: "Cartas para decisões, mudanças e novos ciclos." },
];

export const STEPS = [
  { title: "Escolha", text: "Selecione o tipo de leitura, o dia e o horário disponível." },
  { title: "Envie", text: "Preencha seus dados. O pedido chega por e-mail para a Mi." },
  { title: "Converse", text: "Ela entra em contato com você para confirmar a leitura." },
];

export const FAQ = [
  { q: "Como é feita a leitura?", a: "A Mi combina com você o formato quando entrar em contato para confirmar o horário." },
  { q: "Preciso pagar para agendar?", a: "O pedido de agendamento não tem custo. Valores e formas de pagamento são combinados diretamente com a Mi." },
  { q: "Posso remarcar?", a: "Pode sim. Avise a Mi com antecedência pelo mesmo contato que você informou." },
  { q: "Minhas informações ficam seguras?", a: "Seus dados são usados apenas para a Mi entrar em contato com você sobre a leitura." },
];

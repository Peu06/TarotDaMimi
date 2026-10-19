# Tarô com a Mi — Landing page

Landing page de leituras de tarô com agendamento por e-mail. Front-end com **React 18 + Vite**.

## Como rodar

```bash
npm install
npm run dev       # desenvolvimento em http://localhost:5173
npm run build     # gera a pasta dist/ para publicar
npm run preview   # testa o build localmente
```

## Onde editar

| O quê | Arquivo |
| --- | --- |
| E-mail da Mi, dias, horários, leituras, FAQ | `src/config/site.js` |
| Textos de cada seção | `src/components/` |
| Cores e fontes | `src/styles/variables.css` |
| Forma de envio do e-mail | `src/services/booking.js` |

## Estrutura

```
src/
├── components/   componentes de interface (Header, Hero, Booking...)
├── config/       dados editáveis do site
├── services/     envio do agendamento
├── utils/        funções de data
└── styles/       CSS separado por área
```

## Envio de e-mail

Por padrão, o envio abre o app de e-mail do cliente com a mensagem pronta (`mailto:`).
Para envio automático, troque o conteúdo de `sendBooking` em `src/services/booking.js`
por uma chamada ao **EmailJS** ou **Formspree** (ambos funcionam só com front-end).

## Publicar

Rode `npm run build` e envie a pasta `dist/` para Netlify, Vercel, GitHub Pages ou outra hospedagem estática.

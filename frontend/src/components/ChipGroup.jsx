/** Grupo de botões selecionáveis (usado para dia e horário). */
export default function ChipGroup({ label, options, value, onChange }) {
  return (
    <div role="group" aria-label={label}>
      <div className="field-label">{label}</div>
      <div className="chips">
        {options.map((o) => (
          <button
            type="button"
            key={o.value}
            className="chip"
            aria-pressed={value === o.value}
            onClick={() => onChange(o.value)}
          >
            {o.label}
            {o.hint && <small>{o.hint}</small>}
          </button>
        ))}
      </div>
    </div>
  );
}

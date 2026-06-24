interface ScoreRow {
  label: string;
  value: number;
}

export default function HeatScoreBar({ heatScore, buildScore, valueScore }: { heatScore: number; buildScore: number; valueScore: number }) {
  const rows: ScoreRow[] = [
    { label: "Heat Performance", value: heatScore },
    { label: "Build Quality", value: buildScore },
    { label: "Value for Money", value: valueScore },
  ].filter((r) => r.value > 0);

  return (
    <div className="flex flex-col gap-3 my-5">
      {rows.map((row, i) => (
        <div key={row.label} className="flex items-center gap-3">
          <span className="font-sans text-[10px] uppercase tracking-[0.12em] text-muted w-36 shrink-0">{row.label}</span>
          <div className="flex-1 h-1 bg-divider relative overflow-hidden">
            <div
              className="heat-bar-fill h-full bg-accent"
              style={{ width: `${row.value}%`, animationDelay: `${i * 150}ms` }}
            />
          </div>
          <span className="font-sans text-xs font-medium text-ink w-7 text-right">{row.value}</span>
        </div>
      ))}
    </div>
  );
}

export function KpiCard({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint: string;
}) {
  return (
    <div className="rounded-[1.6rem] border border-black/8 bg-white p-5 shadow-sm">
      <p className="text-xs font-black uppercase tracking-[0.16em] text-black/35">
        {label}
      </p>
      <p className="mt-3 text-3xl font-black tracking-[-0.05em]">{value}</p>
      <p className="mt-2 text-xs leading-5 text-black/45">{hint}</p>
    </div>
  );
}

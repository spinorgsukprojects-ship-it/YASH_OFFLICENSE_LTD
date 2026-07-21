import { company } from "@/data/company";

export function CompanyDetails() {
  const rows = [
    ["Registered Name", company.registeredName],
    ["Trading Name", company.tradingName],
    ["Company Number", company.number],
    ["Trading Address", company.addressLines.join("\n")],
    ["Registered Address", company.addressLines.join("\n")],
    ["Email", company.email],
    ["Phone", company.phone]
  ];

  return (
    <div className="card overflow-hidden">
      {rows.map(([label, value]) => (
        <div key={label} className="grid gap-2 border-b border-slate-200 p-5 last:border-b-0 md:grid-cols-[220px_1fr]">
          <dt className="font-heading font-extrabold">{label}</dt>
          <dd className="whitespace-pre-line break-words text-slateText">{value}</dd>
        </div>
      ))}
    </div>
  );
}

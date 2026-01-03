import { ReactNode } from "react";

export default function StatRow({
  icon,
  color,
  label,
  value,
}: {
  icon: ReactNode;
  color: string;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`h-10 w-10 rounded-lg flex items-center justify-center ${color}`}
      >
        {icon}
      </div>

      <div>
        <div className="text-sm font-medium text-[#534F5A]">
          {value}
        </div>
        <div className="text-xs text-[#79767E]">
          {label}
        </div>
      </div>
    </div>
  );
}

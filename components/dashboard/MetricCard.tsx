import { MoreVertical } from "lucide-react";
import React from "react";

type MetricCardProps = {
  icon: React.ReactNode;
  title: string;
  value: string;
  delta: string;
  deltaPositive?: boolean;
  subtitle: string;
  iconBg?: string;
};

const MetricCard = ({
  icon,
  title,
  value,
  delta,
  deltaPositive = true,
  subtitle,
  iconBg
}: MetricCardProps) => {
  return (
    <div className="bg-white rounded-lg p-4  w-full shadow-sm relative">
      <div className="flex items-start justify-between">
        <div
        className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${
            iconBg ?? "bg-blue-500"
        }`}
        >
            {icon}
        </div>


        <MoreVertical className="w-5 h-5 text-gray-400" />
      </div>

      <div className="flex flex-col gap-1.5 mt-4">
  <p className="text-sm text-[#79767E] font-semibold">
    {title}
  </p>

  <div />

  <div className="flex items-center gap-2">
    <h3 className="text-2xl font-medium text-[#4B465C]">
      {value}
    </h3>

    <span
      className={`text-sm font-medium ${
        deltaPositive ? "text-green-500" : "text-red-500"
      }`}
    >
      {delta}
    </span>
  </div>

  <p className="text-sm font-normal text-[#79767E]">
    {subtitle}
  </p>
</div>

    </div>
  );
};

export default MetricCard;

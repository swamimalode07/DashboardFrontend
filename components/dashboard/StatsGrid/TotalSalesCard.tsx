import Image from "next/image";
import { FaAngleUp } from "react-icons/fa";

export default function TotalSalesCard() {
  return (
    <div className="flex justify-between w-full bg-white rounded-lg p-4 shadow-sm">
      <div className="flex flex-col justify-between">
        <h3 className="text-lg font-semibold text-[#534F5A]">
          Total Sales
        </h3>

        <div className="space-y-2">
          <p className="text-sm text-[#79767E]">
            Calculated in last 7 days
          </p>

          <div className="flex items-center gap-2">
            <span className="text-2xl font-medium text-[#534F5A]">
              $25,980
            </span>

            <span className="text-sm font-medium text-[#56CA00] flex items-center gap-1">
              <FaAngleUp className="text-base" />
              15.6%
            </span>
          </div>
        </div>
      </div>

      <div className="relative h-32 w-32 shrink-0">
        <Image
          src="/assets/totalsalesgraph.png"
          alt="Sales progress"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}

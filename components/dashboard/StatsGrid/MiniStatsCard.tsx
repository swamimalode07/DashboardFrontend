import Image from "next/image";

type MiniStatsCardProps = {
  value: string;
  label: string;
  imageSrc: string;
  imageAlt?: string;
};

export default function MiniStatsCard({
  value,
  label,
  imageSrc,
  imageAlt = "stat graph",
}: MiniStatsCardProps) {
  return (
    <div className="w-full rounded-lg bg-white shadow-sm p-4 flex flex-col gap-2">

      <div className="text-2xl font-medium text-[#534F5A]">
        {value}
      </div>

      <div className="flex justify-center">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={140}
          height={20}
          className="object-contain"
          priority
        />
      </div>
      <div className="text-sm font-medium text-[#534F5A] text-center">
        {label}
      </div>
    </div>
  );
}

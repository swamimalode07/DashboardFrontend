import { ReactNode } from "react";

type SidebarItemProps = {
  title: string;
  icon: ReactNode;
  rightIcon?: ReactNode;
  selected?: boolean;
  onClick?: () => void;
  badge?: ReactNode; 
};

export function SidebarItem({
  title,
  icon,
  rightIcon,
  selected = false,
  onClick,
  badge,
}: SidebarItemProps) {
  return (
    <div onClick={onClick} className="relative group cursor-pointer">

      <div
        className={`
    absolute inset-y-0 -left-4 right-0
    rounded-r-full rounded-l-none
    transition-all duration-300
    ${
      selected
        ? "bg-gradient-to-r from-[#C6A7FE] to-[#9155FD]"
        : "bg-[#EDEDFC] opacity-0 group-hover:bg-[#ECEDF3] group-hover:opacity-100"
    }
  `}
      />

      <div
        className={`
          relative z-10 flex items-center justify-between
          pr-4 py-2 text-sm
          ${selected ? "text-white" : "text-[#4B465C]"}
        `}
      >
        <div className="flex items-center gap-3">
          <span className={selected ? "text-white" : "text-[#524E59]"}>
            {icon}
          </span>
          <span>{title}</span>
           {badge && (
              <span className="rounded-full bg-[#FF4C51] px-3 py-1 text-xs font-normal text-white">
                {badge}
              </span>
            )}
        </div>

        {rightIcon && (
          <span className={selected ? "text-white" : "text-[#6F6B7D]"}>
            {rightIcon}
          </span>
        )}
      </div>
    </div>
  );
}

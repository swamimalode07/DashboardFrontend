import { ReactNode, useState } from "react";
import { ChevronRight } from "lucide-react";
import { SidebarItem } from "./SidebarItem";

type SidebarDropdownProps = {
  title: string;
  icon: ReactNode;
  items: { title: string }[];
};

export function SidebarDropdown({
  title,
  icon,
  items,
}: SidebarDropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <SidebarItem
        title={title}
        icon={icon}
        rightIcon={
          <ChevronRight
            size={16}
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          />
        }
        onClick={() => setOpen(!open)}
      />

      {open && (    
        <div className=" space-y-1">
          {items.map((item) => (
            <div
              key={item.title}
              className=" text-sm text-[#6F6B7D] rounded-lg hover:bg-[#ECEDF3] cursor-pointer"
            >
              {item.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

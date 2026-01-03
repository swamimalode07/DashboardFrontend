"use client";

import Image from "next/image";
import { useState } from "react";
import {  Grid} from "lucide-react";
import { FaLaptop, FaRegCalendar, FaRegCheckCircle, FaRegCircle, FaRegClipboard, FaRegUser } from "react-icons/fa";
import { MdChevronRight, MdLockOpen, MdOutlineChatBubbleOutline, MdOutlineContentCopy, MdOutlineCreditCard, MdOutlineEmail, MdOutlineHome, MdOutlinePieChart, MdTextFields } from "react-icons/md";

import { SidebarItem } from "../sideBar/SidebarItem";
import { SectionDivider } from "../sideBar/SidebarDivider";
import { FaRegCircleDot } from "react-icons/fa6";
import { IoMdStarOutline } from "react-icons/io";
import { GrSync } from "react-icons/gr";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoChevronDownSharp } from "react-icons/io5";


const dashboardDropdown = ["CRM", "Analytics", "eCommerce"];

const appsPages = [
  { title: "Email", icon: <MdOutlineEmail size={20} /> },
  { title: "Chat", icon: <MdOutlineChatBubbleOutline size={20} /> },
  { title: "Calendar", icon: <FaRegCalendar size={20} /> },
  {
    title: "Invoice",
    icon: <FaRegClipboard size={20} />,
    children: ["List", "Preview", "Edit", "Add"],
  },
  {
    title: "User",
    icon: <FaRegUser size={20} />,
    children: ["List", "View", "Edit"],
  },
  {
    title: "Roles & Permissions",
    icon: <MdLockOpen size={20} />,
    children: ["Roles", "Permissions"],
  },
  { title: "Pages", icon: <FaRegClipboard size={20} /> },
  { title: "Dialog Examples", icon: <MdOutlineContentCopy  size={20} /> },
];

const uiSection = [
  { title: "Typography", icon: <MdTextFields size={20} /> },
  { title: "Icons", icon: <IoMdStarOutline size={20} /> },
  { title: "Cards", icon: <MdOutlineCreditCard size={20} /> },
  { title: "Components", icon: <GrSync size={20} /> },
];

const formsTables = [
  { title: "Form Elements", icon: <FaRegCircleDot size={20} /> },
  { title: "Form Layout", icon: <FaLaptop size={20} /> },
  { title: "Form Validation", icon: <FaRegCheckCircle size={20} /> },
  { title: "Form Wizard", icon: <HiOutlineDotsHorizontal size={20} /> },
  { title: "Table", icon: <Grid size={20} /> },
  { title: "Mui DataGrid", icon: <Grid size={20} /> },
];

const chartsMisc = [
  { title: "Charts", icon: <MdOutlinePieChart size={20} /> },
  { title: "Others", icon: <HiOutlineDotsHorizontal  size={20} /> },
];

export default function Sidebar() {
  const [open, setOpen] = useState<string | null>(null);
  const [active, setActive] = useState<string | null>(null);

  const renderGroup = (
    items: {
      title: string;
      icon: React.ReactNode;
      children?: string[];
    }[]
  ) =>
    items.map((item) => {
      const isOpen = open === item.title;

      return (
        <div key={item.title}>
          <SidebarItem
            title={item.title}
            icon={item.icon}
            selected={active === item.title}
            rightIcon={
              item.children ? (
                <MdChevronRight
                  size={16}
                />
              ) : null
            }
            onClick={() => {
              setActive(item.title);
              if (item.children) {
                setOpen(isOpen ? null : item.title);
              }
            }}
          />

          {item.children && isOpen && (
            <div className="mt-1 space-y-1">
              {item.children.map((child) => (
                <SidebarItem
                  key={child}
                  title={child}
                  icon={<FaRegCircle size={12} />}
                  selected={active === child}
                  onClick={() => setActive(child)}
                />
              ))}
            </div>
          )}
        </div>
      );
    });

  return (
    <aside className="w-62 bg-[#F4F5FA] px-4 py-4 overflow-y-auto">
      <div className="flex justify-between items-center mb-4 px-2 h-8">
        <div className="flex items-center gap-2">
            <Image src="/logos/logo.png" alt="Logo" width={28} height={28} />
            <span className="font-semibold text-xl text-[#4B465C]">
            MATERIO
            </span>
        </div>
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.33333 4.16667C6.03333 4.16667 4.16667 6.03333 4.16667 8.33333C4.16667 10.6333 6.03333 12.5 8.33333 12.5C10.6333 12.5 12.5 10.6333 12.5 8.33333C12.5 6.03333 10.6333 4.16667 8.33333 4.16667ZM8.33333 0C3.73333 0 0 3.73333 0 8.33333C0 12.9333 3.73333 16.6667 8.33333 16.6667C12.9333 16.6667 16.6667 12.9333 16.6667 8.33333C16.6667 3.73333 12.9333 0 8.33333 0ZM8.33333 15C4.65 15 1.66667 12.0167 1.66667 8.33333C1.66667 4.65 4.65 1.66667 8.33333 1.66667C12.0167 1.66667 15 4.65 15 8.33333C15 12.0167 12.0167 15 8.33333 15Z" fill="#3A3541" fillOpacity="0.87"/>
        </svg>

    </div>

      <SidebarItem
        title="Dashboards"
        icon={<MdOutlineHome size={22} />}
        selected={open === "Dashboards"}
        rightIcon={
          <IoChevronDownSharp
            size={16}
            className={`transition-transform ${
              open === "Dashboards" ? "rotate-180" : ""
            }`}
          />
        }
        badge="New"
        onClick={() =>
          setOpen(open === "Dashboards" ? null : "Dashboards")
        }
      />

      {open === "Dashboards" && (
        <div className="mt-1 space-y-1">
          {dashboardDropdown.map((d) => (
            <SidebarItem
              key={d}
              title={d}
              icon={<FaRegCircle size={12} />}
              selected={active === d}
              onClick={() => setActive(d)}
            />
          ))}
        </div>
      )}

      <SectionDivider text="APPS & PAGES" />
      {renderGroup(appsPages)}

      <SectionDivider text="USER INTERFACE" />
      {renderGroup(uiSection)}

      <SectionDivider text="FORMS & TABLES" />
      {renderGroup(formsTables)}

      <SectionDivider text="CHARTS & MISC" />
      {renderGroup(chartsMisc)}
    </aside>
  );
}

import Image from "next/image";
import React from "react";
import { MdPictureAsPdf } from "react-icons/md";

const ActivityLeftCard = () => {
  return (
    <div>
      <div className="w-full rounded-lg shadow-sm bg-white overflow-hidden">
        <div className="relative h-[200px] w-full overflow-hidden">
          <Image
            src="/assets/activitytimelinecover.png"
            alt="Header"
            fill
            className="object-cover"
          />
        </div>
        <div className="px-6 py-4">
          <h2 className="text-lg font-semibold text-[#534F5A] mb-5">
            Activity Timeline
          </h2>

          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex flex-col items-center relative">
                <div className="relative flex items-center justify-center">
                  <span className="absolute h-5 w-5 rounded-full bg-[#FF4C51]/10 animate-pulse" />
                  <span className="relative h-3 w-3 rounded-full bg-[#FF4C51] z-10" />
                </div>

                <div className="w-[1px] flex-1 bg-[#D1D5DB] mt-2 mb-2 min-h-[40px]" />
              </div>

              <div className="flex-1 -mt-1">
                <div className="flex justify-between">
                  <p className="font-medium text-sm text-[#3F3F46]">
                    8 Invoices have been paid
                  </p>
                  <span className="text-xs text-[#A1A1AA]">Wednesday</span>
                </div>
                <p className="text-xs text-[#71717A] mt-1">
                  Invoices have been paid to the company.
                </p>
                <div className="mt-2 flex items-center gap-2 text-sm text-[#3B82F6]">
                    <MdPictureAsPdf className="inline w-5 h-5 text-red-500" />
                  <span className="text-[#79767E] font-semibold">invoice.pdf</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center relative">
                <div className="relative flex items-center justify-center">
                  <span className="absolute h-5 w-5 rounded-full bg-[#9155FD]/10 animate-pulse" />
                  <span className="relative h-3 w-3 rounded-full bg-[#9155FD] z-10" />
                </div>

                <div className="w-[1px] flex-1 bg-[#D1D5DB] mt-2 mb-2 min-h-[40px]" />
              </div>

              <div className="flex-1 -mt-1">
                <div className="flex justify-between">
                  <p className="font-medium text-sm text-[#3F3F46]">
                    Create a new project for client 😎
                  </p>
                  <span className="text-xs text-[#A1A1AA]">April, 18</span>
                </div>
                <p className="text-xs text-[#71717A] mt-1">
                  Invoices have been paid to the company.
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <Image src="/assets/avatar.png" alt="avatar1" width={24} height={24} className="rounded-full"/>
                  <span className="text-xs font-semibold text-[#79767E]">
                    John Doe (Client)
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center relative">
                <div className="relative flex items-center justify-center">
                  <span className="absolute h-5 w-5 rounded-full bg-[#16B1FF]/10 animate-pulse" />
                  <span className="relative h-3 w-3 rounded-full bg-[#16B1FF] z-10" />
                </div>

                <div className="w-[1px] flex-1 bg-[#D1D5DB] mt-2 mb-2 min-h-[20px]" />
              </div>

              <div className="flex-1 -mt-1">
                <div className="flex justify-between">
                  <p className="font-medium text-sm text-[#3F3F46]">
                    Order #37745 from September
                  </p>
                  <span className="text-xs text-[#A1A1AA]">January, 10</span>
                </div>
                <p className="text-xs text-[#71717A] mt-1">
                  Invoices have been paid to the company.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityLeftCard;
import Image from "next/image";
import { FiMoreVertical } from "react-icons/fi";
import { FaRegStar, FaStar } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";

const AvailabilityChip = ({ label }: { label: string }) => {
  return (
    <span className="rounded-full bg-[#F1F1F2] px-3 py-1 text-xs text-[#8A8D93]">
      {label}
    </span>
  );
};

const ActivityRightCard = () => {
  return (
    <div className="w-full rounded-lg h-full bg-white shadow-sm">

      <div className="relative h-[200px] w-full">
        <Image
          src="/assets/activitytimelinerightcover.png"
          alt="Cafe"
          fill
          className="object-cover rounded-t-lg"
        />
      </div>

      <div className="px-4 py-4">

        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold text-[#3F3F46]">
            Cafe Badilico
          </h3>
          <FiMoreVertical className="text-[#71717A]" />
        </div>

        <div className="mt-1 flex items-center gap-2 text-sm">
          <div className="flex gap-0.5 text-[#FFB400]">
            <IoIosStar />
            <IoIosStar/>
            <IoIosStar/>
            <IoIosStar/>
            <IoIosStar className="text-[#D1D0D3]" />
          </div>
          <span className="text-[#79767E] text-xs">4 Star (12.4k)</span>
        </div>

        <p className="mt-2 text-sm text-[#79767E]">Italian Cafe</p>

        <p className="mt-1 text-sm text-[#79767E] leading-relaxed">
          The refrigerated dairy aisle of your local grocery store can be a
          great source tasty, convenient selections for your.
        </p>

        <hr className="my-2 border-[#E6E6EB]" />

        <p className="mb-3 text-xs text-[#71717A]">
          Tonight’s availability
        </p>

        <div className="flex gap-2">
          <AvailabilityChip label="5:30PM" />
          <AvailabilityChip label="7:00PM" />
          <AvailabilityChip label="7:15PM" />
        </div>

        <button className="mt-4  text-sm font-medium text-[#9155FD]">
          BOOK NOW
        </button>
      </div>
    </div>
  );
};

export default ActivityRightCard;

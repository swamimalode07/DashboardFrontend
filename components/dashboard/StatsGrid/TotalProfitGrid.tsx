import Image from 'next/image'
import React from 'react'
import StatRow from './StatRow'
import { FaRegUser } from 'react-icons/fa'
import { BiLaptop } from 'react-icons/bi'
import { Button } from '@/components/ui/button'
import { FaArrowTrendUp } from 'react-icons/fa6'

const TotalProfitGrid = () => {
  return (
    <div className="w-full">
      <div className=" grid grid-cols-1  lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]  bg-white rounded-2xl shadow-sm overflow-hidden">
      <div className="p-4 flex flex-col">
        <h3 className="text-lg font-semibold text-[#534F5A] mb-4">
          Total Profit
        </h3>

  <div className="w-full max-h-[290px] flex items-center justify-center">
    <Image
      src="/assets/totalprofitcover.png"
      alt="Total Profit Bar Chart"
      width={400}
      height={290}
      className="w-full h-auto max-h-full object-contain"
      priority
    />
  </div>
</div>



        <div className="
          border-t lg:border-t-0 lg:border-l 
          border-gray-200 
          p-6 flex flex-col justify-between
        ">
          <div className="space-y-6">
            <div>
              <div className="text-2xl font-semibold text-[#534F5A]">
                $482.85k
              </div>
              <div className="text-sm text-[#79767E]">
                Last month balance $234.40k
              </div>
            </div>

            <div className="space-y-4">
              <StatRow
                icon={<FaArrowTrendUp className="w-5 h-5 text-[#56CA00]" />}
                color="bg-[#56CA00]/10"
                label="Total Profit"
                value="$48,568.20"
              />

              <StatRow
                icon={<FaRegUser className="w-5 h-5 text-[#9155FD]" />}
                color="bg-[#9155FD]/10"
                label="Total Income"
                value="$38,453.25"
              />

              <StatRow
                icon={<BiLaptop className="w-5 h-5 text-[#8A8D93]" />}
                color="bg-[#8A8D93]/10"
                label="Total Expense"
                value="$2,453.45"
              />
            </div>
          </div>

          <Button className=" mt-6 w-full rounded-sm bg-[#9155FD] py-3  text-sm font-medium text-white hover:bg-[#7a43e0]">
            View Report
          </Button>
        </div>
      </div>
    </div>
  )
}

export default TotalProfitGrid

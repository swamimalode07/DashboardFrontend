import React from 'react'
import GreetingCard from './GreetingCard'
import MetricCard from './MetricCard'
import { TrendingUp } from 'lucide-react'
import TotalProfitGrid from './StatsGrid/TotalProfitGrid'
import TotalSalesCard from './StatsGrid/TotalSalesCard'
import MiniStatsCard from './StatsGrid/MiniStatsCard'
import { BsCurrencyDollar } from 'react-icons/bs'

const Dashboard = () => {
  return (
    <div>
    <div className='grid grid-cols-12 pl-4 pr-4 bg-[#F4F5FA] text-black gap-4'>
        <div className='col-span-8'>    
            <GreetingCard/>
        </div>
        <div className='col-span-4 flex flex-row gap-4'>
            <MetricCard
                icon={<TrendingUp className="w-5 h-5" />}
                iconBg='bg-[#14A0E6]'
                title="Transactions"    
                value="1.2k"
                delta="+38%"
                subtitle="Daily Transactions"
            />
            <MetricCard
                icon={<BsCurrencyDollar className="w-5 h-5" />}
                iconBg='bg-[#56CA00]'
                title="Revenue"
                value="$95.2k"
                delta="+12%"
                subtitle="Revenue Increase"
            />
        </div>
    </div>
    <div className='grid grid-cols-12 p-4 bg-[#F4F5FA] text-black gap-4'>
        <div className='col-span-8'>
            <TotalProfitGrid/>
        </div>
        <div className='col-span-4'>
            <div className='flex flex-col gap-4'>
                <TotalSalesCard/>
                <div className='flex flex-row gap-4'>
                <MiniStatsCard
                  value="$35.4k"
                  label="Total Revenue"
                  imageSrc="/assets/ministatscard1.png"
                />
                <MiniStatsCard
                  value="135k"
                  label="Total Sales"
                  imageSrc="/assets/ministatscard2.png"
                />
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Dashboard
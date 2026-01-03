import { Bell, Moon, Search } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { FaRegBell } from 'react-icons/fa'
import { FiMoon } from 'react-icons/fi'
import { IoMdSearch } from 'react-icons/io'

const Header = () => {
  return (
    <header className="h-16 w-full bg-[#F4F5FA] text-white flex items-center justify-between px-6">
      <div className="flex items-center gap-3">
        <IoMdSearch className="w-6 h-6 text-[#524E59]" />
      </div>
      <div className="flex items-center gap-5">
        <Image src="/assets/usaFlag.png" alt="US Flag" width={24} height={24} />
        <FiMoon className="w-5 h-5 text-[#524E59]" />
        <FaRegBell className="w-5 h-5 text-[#524E59]" />
        <div className="relative w-8 h-8">
        <Image
            src="/assets/avatar.png"
            alt="User Avatar"
            width={34}
            height={34}
            className="rounded-full"
        />

        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"/>
        </div>
      </div>
    </header>

  )
}

export default Header
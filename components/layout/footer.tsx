import React from 'react'
import { FcLike } from 'react-icons/fc'

const Footer = () => {
  return (
    <footer className="w-full bg-[#F4F5FA] mt-4">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 text-sm text-[#75737C]">
    <div className="flex items-center gap-1 whitespace-nowrap">
  <span>© 2022, Made with</span>
  <span className=" inline-flex">
    <FcLike />
  </span>
  <span>by</span>
  <a
    href="https://themeselection.com"
    className="font-normal text-[#9155FD] hover:underline"
    target="_blank"
    rel="noopener noreferrer"
  >
    ThemeSelection
  </a>
</div>


    <div className="flex items-center gap-6">
      <a href="#" className="text-[#9155FD]">License</a>
      <a href="#" className="text-[#9155FD]">More Themes</a>
      <a href="#" className="text-[#9155FD]">Documentation</a>
      <a href="#" className="text-[#9155FD]">Support</a>
    </div>
  </div>
</footer>

  )
}

export default Footer
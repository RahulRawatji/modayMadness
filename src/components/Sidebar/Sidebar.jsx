import React from "react"
import { CiSearch } from "react-icons/ci"
import { IoMdTime } from "react-icons/io"
import { IoSettingsOutline } from "react-icons/io5"
import { MdAddCircleOutline } from "react-icons/md"
import { FaRegClipboard } from "react-icons/fa"

const Sidebar = () => {
  return (
    <div className="w-1/6 border h-screen ">
      <h4>Monday</h4>
      <div className="mt-2 flex flex-col gap-1">
        <div className="flex gap-2 items-center pl-4 py-1 hover:bg-slate-200 hover:cursor-pointer">
          <CiSearch size={18} />
          Search
        </div>
        <div className="flex gap-2 items-center pl-4 py-1 hover:bg-slate-200 hover:cursor-pointer">
          {" "}
          <IoMdTime size={18} />
          Updates
        </div>
        <div className="flex gap-2 items-center pl-4 py-1 hover:bg-slate-200 hover:cursor-pointer">
          <IoSettingsOutline size={18} />
          Settings & Members
        </div>
        <div className="flex gap-2 items-center pl-4 py-1 hover:bg-slate-200 hover:cursor-pointer">
          <MdAddCircleOutline size={18} />
          New Page
        </div>
      </div>
      <div className="mt-4">
        <div className="flex gap-2 items-center pl-4 py-1 hover:bg-slate-200 hover:cursor-pointer">
          <FaRegClipboard size={18} />
          Task Board
        </div>
      </div>
    </div>
  )
}

export default Sidebar

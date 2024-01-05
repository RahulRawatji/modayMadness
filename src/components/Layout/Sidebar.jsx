import React from "react"
import { NavLink } from "react-router-dom"

import { CiSearch } from "react-icons/ci"
import { IoMdTime } from "react-icons/io"
import { IoSettingsOutline } from "react-icons/io5"
import { MdAddCircleOutline } from "react-icons/md"
import { FaRegClipboard } from "react-icons/fa"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { GiBlackBook } from "react-icons/gi"

const Sidebar = () => {
  return (
    <div className="w-1/6 border h-screen ">
      <div className="flex items-center gap-4 p-5">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h4>Monday</h4>
      </div>
      <div className="mt-2 flex flex-col gap-1">
        <NavLink className="flex gap-2 items-center pl-4 py-1 hover:bg-slate-200 hover:cursor-pointer">
          <CiSearch size={18} />
          Search
        </NavLink>
        <NavLink className="flex gap-2 items-center pl-4 py-1 hover:bg-slate-200 hover:cursor-pointer">
          {" "}
          <IoMdTime size={18} />
          Updates
        </NavLink>
        <NavLink className="flex gap-2 items-center pl-4 py-1 hover:bg-slate-200 hover:cursor-pointer">
          <IoSettingsOutline size={18} />
          Settings & Members
        </NavLink>
        <NavLink className="flex gap-2 items-center pl-4 py-1 hover:bg-slate-200 hover:cursor-pointer">
          <MdAddCircleOutline size={18} />
          New Page
        </NavLink>
      </div>
      <div className="mt-4">
        <NavLink
          className="flex gap-2 items-center pl-4 py-1 hover:bg-slate-200 hover:cursor-pointer"
          to="/board"
        >
          <FaRegClipboard size={18} />
          Task Board
        </NavLink>
        <NavLink
          className="flex gap-2 items-center pl-4 py-1 hover:bg-slate-200 hover:cursor-pointer"
          to="/"
        >
          <GiBlackBook size={18} />
          Notes
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar

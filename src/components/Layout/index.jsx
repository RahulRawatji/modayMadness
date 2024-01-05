import React from "react"
import Sidebar from "./Sidebar"

const Layout = ({ children }) => {
  return (
    <div className="flex relative">
      <Sidebar />
      <div className="relative w-5/6">{children}</div>
    </div>
  )
}

export default Layout

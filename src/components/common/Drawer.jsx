import React from "react"
import { createPortal } from "react-dom"

const Drawer = ({ close, children }) => {
  return (
    <>
      {createPortal(
        <div
          className="w-full left-0 right-0 top-0 bottom-0 absolute"
          style={{
            backgroundColor: "rgba(52, 52, 52, 0.2)",
            pointerEvents: "disabled",
          }}
          onClick={close}
        >
          <div
            className="bg-white h-full w-2/6 absolute right-0 top-0 p-10"
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>,
        document.body
      )}
    </>
  )
}

export default Drawer

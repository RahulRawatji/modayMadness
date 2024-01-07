import React from "react"
import { useDroppable } from "@dnd-kit/core"

export default function Droppable(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  })
  const style = {
    color: isOver ? "green" : undefined,
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="border flex flex-col gap-4 p-3 w-[250px] rounded-md bg-slate-100"
      onClick={() => console.log("click")}
    >
      {props.children}
    </div>
  )
}

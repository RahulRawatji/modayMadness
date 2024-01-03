import React from "react"
import { useDroppable } from "@dnd-kit/core"

export default function Droppable(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
    data: props.data,
  })
  const style = {
    color: isOver ? "green" : undefined,
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="border mt-10 bg-slate-300 flex flex-col gap-4 p-3"
    >
      {props.children}
    </div>
  )
}

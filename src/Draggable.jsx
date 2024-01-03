import React from "react"
import { useDraggable } from "@dnd-kit/core"

export default function Draggable(props) {
  const { attributes, listeners, setNodeRef, transform, setActivatorNodeRef } =
    useDraggable({
      id: props.data.id,
      data: {
        data: props.data,
        fromCol: props.id,
      },
    })
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined

  return (
    <button
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="border p-2 bg-orange-300 text-white flex "
    >
      {props.children}
    </button>
  )
}

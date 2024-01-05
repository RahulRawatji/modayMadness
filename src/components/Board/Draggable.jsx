import React from "react"
import { useDraggable } from "@dnd-kit/core"

export default function Draggable(props) {
  const { attributes, listeners, setNodeRef, transform, setActivatorNodeRef } =
    useDraggable({
      id: props?.data?.id,
      data: {
        data: props?.data,
        fromCol: props?.id,
      },
    })
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="border p-2 flex shadow-md "
      onClick={() => console.log(props.data.id)}
    >
      {props.children}
    </div>
  )
}

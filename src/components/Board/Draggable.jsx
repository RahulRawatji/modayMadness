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

  const customPointer = (e) => {
    if (e.target.id === "no_drag") {
      e.stopPropagation()
    } else {
      listeners.onPointerDown(e)
    }
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      // {...listeners}
      {...attributes}
      onPointerDown={customPointer}
      className="border p-2 flex shadow-md bg-white rounded"
      onClick={(e) => console.log(e, props.data.id)}
    >
      {props.children}
    </div>
  )
}

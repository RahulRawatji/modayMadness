import React, { useState } from "react"
import { DndContext, DragOverlay } from "@dnd-kit/core"

import Draggable from "./Draggable"
import Droppable from "./Droppable"
import { data, statuses } from "./constant"

export default function Board() {
  const [todo, setTodo] = useState(data)
  const [inProgress, setInProgress] = useState([])

  function handleDragEnd(event) {
    if (event.over && event.over.id === "1") {
      setTodo((prev) => [...prev, { ...event.active.data.current }])
      setInProgress((prev) =>
        prev.filter((d) => d.id !== event.active.data.current.id)
      )
    } else {
      setInProgress((prev) => [...prev, { ...event.active.data.current }])
      setTodo((prev) =>
        prev.filter((d) => d.id !== event.active.data.current.id)
      )
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex h-96 gap-5">
        <Droppable id={"1"} data={todo}>
          <h3 className="text-center">Todo</h3>

          {todo.map((d) => (
            <Draggable key={d.id} id={d.id} data={d}>
              <span>{d.title}</span>
              <div>{d.icon}</div>
            </Draggable>
          ))}
        </Droppable>

        <Droppable id="2">
          <h3 className="text-center">In Progress</h3>
          {inProgress.length > 0 &&
            inProgress.map((d) => (
              <Draggable key={d.id} id={d.id} data={d}>
                {d.title}
              </Draggable>
            ))}
        </Droppable>
      </div>
    </DndContext>
  )
}

import React, { useState } from "react"
import { DndContext, DragOverlay } from "@dnd-kit/core"

import Draggable from "./Draggable"
import Droppable from "./Droppable"
import { data, statuses } from "./constant"
import { MdOutlineAdd } from "react-icons/md"
import { cloneDeep } from "lodash"

export default function Board() {
  const [boardData, setBoardData] = useState(data)
  const [movingElement, setMovingElement] = useState({})
  const [startCol, setStartCol] = useState({})

  function handleDragEnd(event) {
    const temp = cloneDeep(boardData)
    if (event.over) {
      const { current } = event.active.data
      const newD = [{ ...current.data }, ...temp[event.over.id]]
      const prevArrData = temp[startCol].filter(
        (item) => item.id !== event.active.id
      )
      setBoardData((prev) => ({
        ...prev,
        [event.over.id]: newD,
        [startCol]: prevArrData,
      }))
    }
  }

  function handleDragStart(e) {
    setStartCol(e.active.data.current.fromCol)
  }

  return (
    <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
      <div className="flex h-96 gap-5">
        {Object.keys(boardData).map((colTitle) => (
          <Droppable id={colTitle} key={colTitle} data={boardData[colTitle]}>
            <h3 className="text-center">{colTitle}</h3>

            {boardData[colTitle].map((d) => (
              <Draggable key={d.id} id={colTitle} data={d}>
                <span>{d.title}</span>
                <div>{d.icon}</div>
              </Draggable>
            ))}
          </Droppable>
        ))}
        <MdOutlineAdd size={22} />
      </div>
    </DndContext>
  )
}

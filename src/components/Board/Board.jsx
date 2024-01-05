import React, { useState } from "react"
import { DndContext } from "@dnd-kit/core"
import { v4 as uuidv4 } from "uuid"
import Draggable from "./Draggable"
import Droppable from "./Droppable"
import { data } from "./constant/constant"
import { MdOutlineAdd } from "react-icons/md"
import { cloneDeep } from "lodash"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { IoIosReturnLeft } from "react-icons/io"
import Layout from "../Layout"

export default function Board() {
  const [boardData, setBoardData] = useState(data)
  const [movingElement, setMovingElement] = useState({})
  const [startCol, setStartCol] = useState({})
  const [showNewCard, setShowNewCard] = useState({ visible: false, col: null })
  const [showAddNewCol, setShowAddNewCol] = useState(false)
  const [newTask, setNewTask] = useState("")
  function handleDragEnd(event) {
    const temp = cloneDeep(boardData)

    if (event.over && startCol !== event.over.id) {
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
    setMovingElement(e.active.data.current)
  }

  const handleAddList = () => {
    setShowAddNewCol(true)
    setBoardData((prev) => ({ ...prev, ["Backlog"]: [] }))
  }

  const addNewCard = (colTitle) => {
    setShowNewCard((prev) => ({ visible: true, col: colTitle }))
    const newCardData = {
      id: 10,
      icon: "⭕️",
      status: "open",
      title: "",
      content: "",
    }
  }

  const saveNewTask = (colTitle) => {
    const tempBoardData = cloneDeep(boardData)
    if (newTask !== "") {
      tempBoardData[colTitle] = [
        ...tempBoardData[colTitle],
        { id: uuidv4(), title: newTask, content: "Get an anniversary gift" },
      ]

      setBoardData((prev) => tempBoardData)
    }
    setShowNewCard((prev) => ({ ...prev, visible: false }))
  }
  return (
    <Layout>
      <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
        <div className="flex flex-col gap-3">
          <h3 className="p-3 text-2xl font-semibold">Task Board</h3>
          <div className="flex gap-5 ml-8 mt-10">
            {Object.keys(boardData).map((colTitle) => (
              <Droppable
                id={colTitle}
                key={colTitle}
                data={boardData[colTitle]}
              >
                <h3 className="text-center font-bold">{colTitle}</h3>

                {boardData[colTitle].map((d) => (
                  <Draggable key={d.id} id={colTitle} data={d}>
                    <div className="flex flex-col w-full">
                      <div className="flex justify-center items-center ">
                        <h2 className="font-semibold text-sm">{d.title}</h2>
                        <span className="">{d.icon}</span>
                      </div>
                      <p className="text-sm mt-2 text-center">{d.content}</p>
                    </div>
                  </Draggable>
                ))}
                {showNewCard.visible && showNewCard.col === colTitle && (
                  <Input
                    onBlur={() => saveNewTask(colTitle)}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Enter"
                  />
                )}

                <button
                  className="flex gap-3 items-center hover:scale-105 w-full"
                  onClick={() => addNewCard(colTitle)}
                >
                  <MdOutlineAdd size={18} />
                  New
                </button>
              </Droppable>
            ))}
            <div>
              <Dialog>
                <DialogTrigger>
                  <MdOutlineAdd size={22} />
                </DialogTrigger>
                <DialogContent>
                  <div className="flex gap-4 pr-4">
                    <Input placeholder="Status" />
                    <Button variant="outline">
                      <span className="pr-2"> Add</span>{" "}
                      <IoIosReturnLeft size={18} />
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </DndContext>
    </Layout>
  )
}

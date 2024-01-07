import React, { useState } from "react"
import { DndContext } from "@dnd-kit/core"
import { v4 as uuidv4 } from "uuid"
import dayjs from "dayjs"
import Draggable from "./Draggable"
import Droppable from "./Droppable"
import { data } from "./constant/constant"
import { MdOutlineAdd } from "react-icons/md"
import { cloneDeep } from "lodash"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { IoIosReturnLeft } from "react-icons/io"
import { MdOutlineEditNote } from "react-icons/md"
import { IoCloseOutline } from "react-icons/io5"
import Layout from "../Layout"
import Drawer from "../common/Drawer"

export default function Board() {
  const [boardData, setBoardData] = useState(data)
  const [movingElement, setMovingElement] = useState({})
  const [colTitle, setColTitle] = useState("")
  const [startCol, setStartCol] = useState({})
  const [showNewCard, setShowNewCard] = useState({ visible: false, col: null })
  const [showAddNewCol, setShowAddNewCol] = useState(false)
  const [showDrawer, setShowDrawer] = useState(false)
  const [newTask, setNewTask] = useState("")
  const [drawerData, setDrawerData] = useState({})

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

  const addCol = () => {
    if (colTitle !== "") setBoardData((prev) => ({ ...prev, [colTitle]: [] }))
  }

  const saveNewTask = (colTitle) => {
    const tempBoardData = cloneDeep(boardData)
    if (newTask !== "") {
      tempBoardData[colTitle] = [
        ...tempBoardData[colTitle],
        {
          id: uuidv4(),
          title: newTask,
          content: "",
          created_at: dayjs().format("MMM DD,YYYY hh:mm A"),
        },
      ]

      setBoardData((prev) => tempBoardData)
    }
    setShowNewCard((prev) => ({ ...prev, visible: false }))
  }

  const editTaskHandler = (e, title) => {
    e.preventDefault()
    setDrawerData({
      title,
    })
    setShowDrawer(true)
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
                    <div className="flex flex-col w-full gap-2">
                      <div className="flex justify-between text-start">
                        <div className="w-2/3">
                          <h2 className="font-semibold text-sm break-words">
                            {d.title}
                          </h2>
                        </div>

                        <MdOutlineEditNote
                          size={24}
                          onClick={(e) => editTaskHandler(e, d.title)}
                          className="hover:scale-105 hover:bg-slate-300 m-1"
                          id="no_drag"
                        />
                      </div>
                      <div className="text-[12px] mt-2">{d?.created_at}</div>
                      <p className="text-sm mt-2 text-start break-words ">
                        {d.content}
                      </p>
                    </div>
                  </Draggable>
                ))}
                {showNewCard.visible && showNewCard.col === colTitle && (
                  <div>
                    <Input
                      onBlur={() => saveNewTask(colTitle)}
                      onChange={(e) => setNewTask(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") saveNewTask(colTitle)
                      }}
                      placeholder="Give a title"
                    />
                  </div>
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
                <DialogTrigger className="flex gap-2">
                  <MdOutlineAdd size={22} /> Add Block
                </DialogTrigger>
                <DialogContent>
                  <div className="flex gap-4 pr-4">
                    <Input
                      placeholder="Status"
                      onChange={(e) => setColTitle(e.target.value)}
                    />
                    <Button variant="outline" onClick={() => addCol()}>
                      <span className="pr-2">Add</span>{" "}
                      <IoIosReturnLeft size={18} />
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </DndContext>
      {showDrawer && (
        <Drawer close={() => setShowDrawer(false)} className="m-2">
          <div className="flex justify-between">
            <input
              placeholder="United"
              className="text-3xl"
              value={drawerData.title}
            />
            <IoCloseOutline
              size={24}
              onClick={() => setShowDrawer(false)}
              className="hover:cursor-pointer"
            />
          </div>
        </Drawer>
      )}
    </Layout>
  )
}

import React, { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { MdOutlineAdd } from "react-icons/md"
import { Button } from "@/components/ui/button"

import Layout from "../Layout"
import NoteCard from "./NoteCard"
import { NOTES_DATA } from "./constant/constant"
import CreateNote from "./CreateNote"

const Notes = () => {
  const [tabList, setTabList] = useState([])
  const [activeTab, setActiveTab] = useState(null)
  const [activeTabData, setActiveTabData] = useState([])
  const [openDrawer, setOpenDrawer] = useState(false)
  const getData = () => {
    const tempTabData = Object.keys(NOTES_DATA)
    setTabList(tempTabData)
    setActiveTab(tempTabData[0])
  }

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    setActiveTabData(NOTES_DATA[activeTab])
  }, [activeTab])

  if (tabList.length == 0) return

  return (
    <Layout>
      <div className="p-4">
        <h4 className="text-2xl font-bold">My Notes</h4>
        <div className="mt-10">
          <Tabs defaultValue={activeTab}>
            <div className="flex gap-5 overflow-hidden">
              <TabsList className="gap-6">
                {tabList.map((tab) => {
                  return (
                    <TabsTrigger
                      key={tab}
                      value={tab}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab.toUpperCase()}
                    </TabsTrigger>
                  )
                })}
              </TabsList>
              <Button
                variant="ghost"
                onClick={() => setTabList((prev) => [...prev, "fire"])}
              >
                <MdOutlineAdd size={20} />
                Add
              </Button>
            </div>
            <div className="mt-8">
              <TabsContent value={activeTab} className="flex gap-4 flex-wrap">
                <Card
                  className="w-[300px] h-[300px] border border-dashed"
                  onClick={() => setOpenDrawer(true)}
                >
                  <CardContent className="flex justify-center items-center h-full hover:cursor-pointer">
                    <div className="flex flex-col gap-3 items-center">
                      <MdOutlineAdd size={30} />
                      <h3 className="font-semibold">Add New Note</h3>
                    </div>
                  </CardContent>
                </Card>
                {activeTabData &&
                  activeTabData.map((data) => <NoteCard key={data.id} />)}
              </TabsContent>
            </div>
            {openDrawer && (
              <CreateNote
                open={openDrawer}
                close={() => setOpenDrawer(false)}
                activeTab={activeTab}
              />
            )}
          </Tabs>
        </div>
      </div>
    </Layout>
  )
}

export default Notes

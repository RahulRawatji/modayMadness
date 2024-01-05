import React from "react"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerClose,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

const CreateNote = ({ open, close }) => {
  return (
    <Drawer open={open}>
      <DrawerContent onInteractOutside={close} className="h-[600px]">
        <div className="flex justify-end mr-6 gap-6">
          <Button>Save</Button>
          <DrawerClose>
            <Button variant="outline" onClick={close}>
              Close
            </Button>
          </DrawerClose>
        </div>
        <DrawerDescription className="px-10 flex flex-col gap-6">
          <Input
            className="flex w-[300px] text-3xl  border-b-2 outline-none focus:shadow-none"
            placeholder="Title"
          />
          <Textarea placeholder="Description" className="w-4/6" />
        </DrawerDescription>
      </DrawerContent>
    </Drawer>
  )
}

export default CreateNote

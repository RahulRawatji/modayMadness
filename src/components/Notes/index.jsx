import React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Layout from "../Layout"

const Notes = () => {
  return (
    <Layout>
      <div className="p-4">
        <h4 className="text-2xl font-bold">My Notes</h4>
        <div className="mt-10">
          <Tabs defaultValue="account">
            <div className="flex gap-5">
              <TabsList className="gap-6">
                <TabsTrigger value="account">General</TabsTrigger>
                <TabsTrigger value="ideas">Ideas</TabsTrigger>
                <TabsTrigger value="important">Important</TabsTrigger>
              </TabsList>
              <button>Add</button>
            </div>
            <div className="mt-8">
              <TabsContent value="account" className="flex gap-4 flex-wrap">
                <Card className="w-[350px]">
                  <CardHeader>
                    <CardTitle>Create project</CardTitle>
                    <CardDescription>
                      Deploy your new project in one-click.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form>
                      <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5"></div>
                        <div className="flex flex-col space-y-1.5"></div>
                      </div>
                    </form>
                  </CardContent>
                  <CardFooter className="flex justify-between"></CardFooter>
                </Card>
                <Card className="w-[350px]">
                  <CardHeader>
                    <CardTitle>Create project</CardTitle>
                    <CardDescription>
                      Deploy your new project in one-click.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form>
                      <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5"></div>
                        <div className="flex flex-col space-y-1.5"></div>
                      </div>
                    </form>
                  </CardContent>
                  <CardFooter className="flex justify-between"></CardFooter>
                </Card>
                <Card className="w-[350px]">
                  <CardHeader>
                    <CardTitle>Create project</CardTitle>
                    <CardDescription>
                      Deploy your new project in one-click.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form>
                      <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5"></div>
                        <div className="flex flex-col space-y-1.5"></div>
                      </div>
                    </form>
                  </CardContent>
                  <CardFooter className="flex justify-between"></CardFooter>
                </Card>
                <Card className="w-[350px]">
                  <CardHeader>
                    <CardTitle>Create project</CardTitle>
                    <CardDescription>
                      Deploy your new project in one-click.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form>
                      <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5"></div>
                        <div className="flex flex-col space-y-1.5"></div>
                      </div>
                    </form>
                  </CardContent>
                  <CardFooter className="flex justify-between"></CardFooter>
                </Card>
                <Card className="w-[350px]">
                  <CardHeader>
                    <CardTitle>Create project</CardTitle>
                    <CardDescription>
                      Deploy your new project in one-click.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form>
                      <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5"></div>
                        <div className="flex flex-col space-y-1.5"></div>
                      </div>
                    </form>
                  </CardContent>
                  <CardFooter className="flex justify-between"></CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="ideas">
                Change your password here.
              </TabsContent>
              <TabsContent value="important">
                Change your password here.
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </Layout>
  )
}

export default Notes

import { createBrowserRouter } from "react-router-dom"
import Notes from "../components/Notes"
import Board from "../components/Board/Board"
import { RouterProvider } from "react-router-dom"

const Router = () => {
  const router = new createBrowserRouter([
    {
      path: "/",
      element: <Notes />,
    },
    {
      path: "/board",
      element: <Board />,
    },
  ])

  return <RouterProvider router={router} />
}

export default Router

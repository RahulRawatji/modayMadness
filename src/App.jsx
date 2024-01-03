import "./App.css"
import Board from "./Board"
import Sidebar from "./components/Sidebar/Sidebar"

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Board />
    </div>
  )
}
export default App

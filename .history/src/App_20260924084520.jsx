import { useState } from "react"


const App = () => {

  const [Title, setTitle] = useState("")
  const [Details, setDetails] = useState("")
  const [task, setTask] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    const copyTask = [...task];

    setTitle("")
    setDetails("")
  }
  return (
    <div className="flex h-screen bg-black text-white">
      <form className="flex flex-col items-center gap-6 border-none w-1/2 h-full shadow-md/10 p-4 shadow-olive-100" onSubmit={(e) => {
        handleSubmit(e)
      }}>
    <h1 className="text-4xl">Add Notes</h1>
        <label className="flex gap-2.5 font-bold p-2 bg-transparent">
          Title
          <input
            type="text"
            className="outline-none"
            placeholder="Enter the task"
            value={Title}
            onChange={(e) => {
              setTitle(e.target.value)
            }}
            name=""
            id="" />
        </label>
        <label className="flex font-bold gap-2">
          Task Details
          <textarea
            placeholder="Enter the task details"
            className="flex justify-center items-center outline-none"
            type="text"
            value={Details}
            name=""
            onChange={(e) => {
              setDetails(e.target.value)
            }}
            id="" />
        </label>
        <button className="border-none hover:bg-cyan-300 " type="submit">Submit</button>
      </form>
      <div className="flex flex-col h-full p-4 w-1/2 border-l-4 overflow-x-auto">
        <h1 className="text-4xl">Recent Notes</h1>
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col gap-4 mt-4 h-80 flex-wrap w-70 p-4 text-white">
            <h1 className="text-2xl">Title : {Title}</h1>
            <p className="text-2xl">Details : {Details}</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App

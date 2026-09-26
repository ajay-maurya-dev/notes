import { useState } from "react"
import { X } from "lucide-react"

const App = () => {
  const [Title, setTitle] = useState("")
  const [Details, setDetails] = useState("")
  const [task, setTask] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    const copyTask = [...task]
    copyTask.push({ Title, Details })

    setTask(copyTask)

    setTitle("")
    setDetails("")
  }

  const deleted = (idx) => {
    setTask(task.filter((_, index) => index !== idx))
  }

  return (
    <div className="flex h-screen bg-black text-white">

      {/* Form */}
      <form
        className="flex flex-col items-center gap-6 w-1/2 h-full p-4 shadow-md"
        onSubmit={handleSubmit}
      >
        <h1 className="text-4xl">Add Notes</h1>

        <label className="flex gap-2.5 font-bold p-2">
          Title

          <input
            type="text"
            className="outline-none text-black"
            placeholder="Enter the task"
            value={Title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label className="flex font-bold gap-2">
          Task Details

          <textarea
            placeholder="Enter the task details"
            className="outline-none text-black"
            value={Details}
            onChange={(e) => setDetails(e.target.value)}
          />
        </label>

        <button
          className="border-none hover:bg-cyan-300 rounded-4xl px-4 active:scale-95"
          type="submit"
        >
          Submit
        </button>
      </form>

      {/* Notes */}
      <div className="flex flex-col h-full p-4 w-1/2 border-l-4 overflow-x-auto">
        <h1 className="text-4xl">Recent Notes</h1>

        <div className="flex flex-wrap gap-4">
          {task.map((elem, idx) => (
            <div
              className="relative flex flex-col gap-4 mt-4 h-80 w-70 p-10 text-black rounded-4xl overflow-hidden bg-yellow-200"
              key={idx}
            >
              {/* Delete button */}
              <button
                type="button"
                onClick={() => deleted(idx)}
                className="absolute right-3 top-3 cursor-pointer hover:text-red-600 active:scale-90"
              >
                <X />
              </button>

              <h1 className="text-2xl font-bold leading-tight">
                {elem.Title}
              </h1>

              <p className="text-medium leading-relaxed w-full text-gray-500">
                {elem.Details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App

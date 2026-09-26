import { useState } from "react"
import { X } from 'lucide-react';


const App = () => {
  
  const [Title, setTitle] = useState("")
  const [Details, setDetails] = useState("")
  const [task, setTask] = useState([])
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const copyTask = [...task];
    copyTask.push({ Title, Details })
    
    setTask(copyTask)
    
    
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
            }} />
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
        <button className="border-none hover:bg-cyan-300 rounded-4xl px-4 active:scale-95" type="submit">Submit</button>
      </form>
      <div className="flex flex-col h-full p-4 w-1/2 border-l-4 overflow-x-auto">
        <h1 className="text-4xl">Recent Notes</h1>
        <div className="flex flex-wrap gap-4">
          {
            task.map(function (elem, idx) {
              return <div className="relative flex flex-col gap-4 mt-4 h-80 flex-wrap w-70 p-10 text-black rounded-4xl overflow-x-auto overflow-y-hidden bg-[url('https://imgs.search.brave.com/p2VirxELPDEsr8YbxT5bZGx7wpRhcGewhV7xBstKXW8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2VmL2Uw/L2ZmL2VmZTBmZmRi/NWI2OThlZTcxZWQx/MmM0ZTRiZTA2MWZi/LmpwZw')] bg-cover" key={idx}>
                <button onClick={() => function deteled(){
                  co
                }} className="left-50 absolute cursor-pointer active:scale-0 top-3"><X /></button>
                <h1 className="text-2xl font-bold leading-tight">{elem.Title}</h1>
                <p className="text-medium leading-relaxed w-full text-gray-500 ">{elem.Details}</p>
              </div>

            })
          }

        </div>

      </div>
    </div>
  )
}

export default App

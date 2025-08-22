import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    if (!localStorage.getItem("notes")) {
      localStorage.setItem("notes", "Type Something Here!");
    }


  }, []);

  const notes = localStorage.getItem("notes");

  return (
    <div className='w-full h-screen flex flex-col items-center'>
      <h1 className='w-full text-center p-4 text-4xl bg-blue-100 dark:bg-blue-950 dark:text-white'>Todo App</h1>
      <textarea onChange={(event) => localStorage.setItem("notes", event.target.value)} className='w-full h-full bg-blue-50 dark:bg-gray-800 dark:text-white outline-hidden text-2xl p-10'>
        {notes}
      </textarea>
    </div>
  )
}

export default App

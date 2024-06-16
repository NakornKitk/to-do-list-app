
import './App.css';
import TaskList from './component/Task-list'
import AddTaskBar from './component/Add-bar'
import {useState} from 'react'

function App() {
  const [AllTask, setAllTask] = useState([])

  const createTask = (task) => {
    if (task === "") {
      alert("Please insert task name")
    } else {
      const updateTask = [...AllTask,
        {
          id: Math.round(Math.random()*9999),
          task
        }
      ]
      setAllTask(updateTask)
    }
  }

  const deleteTaskbyId = (id) => {
    const updateTask = AllTask.filter((task) => {
      return task.id !== id;
    })

    setAllTask(updateTask)
  }

  return (
    <div>
        <h1>Things to do:</h1>
        <AddTaskBar onCreate={createTask}/>
        <hr></hr>
        <TaskList className="tasklist" tasks={AllTask} onDelete={deleteTaskbyId}/>
    </div>
  )
}


export default App;

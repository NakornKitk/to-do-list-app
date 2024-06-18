
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


  const editTaskbyId = (id, newTask) => {
    if (newTask === undefined) {
      alert("Please insert task name")
    } else {
      const updateTask = AllTask.map((task) => {
        if (task.id===id) {
            return {...AllTask, task: newTask}
        }
        return task;
      })
      
      setAllTask(updateTask)
    }

  }

  return (
    <div>
        <h1>Things to do:</h1>
        <AddTaskBar onCreate={createTask}/>
        <hr></hr>
        <p>Click on the task name to edit.</p>
        <TaskList className="tasklist" tasks={AllTask} onDelete={deleteTaskbyId} onEdit={editTaskbyId}/>
    </div>
  )
}


export default App;

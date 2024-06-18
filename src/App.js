
import './App.css';
import TaskList from './component/Task-list'
import AddTaskBar from './component/Add-bar'
import {useState} from 'react'

function App() {
  const [allTaskArr, setAllTask] = useState([])

  const createTask = (task) => {
    if (task === "") {
      alert("Please insert task name")
    } else {
      const updateTask = [...allTaskArr,
        {
          id: Math.round(Math.random()*9999),
          taskName: task
        }
      ]
      setAllTask(updateTask)
    }
  }

  const deleteTaskbyId = (id) => {
    const updateTask = allTaskArr.filter((task) => {
      return task.id !== id;
    })

    setAllTask(updateTask)
  }


  const editTaskbyId = (id, newTask) => {
    if (newTask === "") {
      alert("Please insert taskname")
    } else {
      const updateTask = allTaskArr.map((task) => {
        if (task.id===id) {
            return  {...task, taskName: newTask}
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
        <TaskList className="tasklist" allTaskArr={allTaskArr} onDelete={deleteTaskbyId} onEdit={editTaskbyId}/>
    </div>
  )
}


export default App;

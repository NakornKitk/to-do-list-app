import {useState} from 'react'
import useStore from '../store/store';

function AddTaskBar () {
    const {createTaskstr} = useStore();
    const [task, setTask] = useState('')

    const createTask = (task) => {
        if (task === "") {
          alert("Please insert task name")
        } else {
          const newTask = {
              id: Math.round(Math.random()*9999),
              taskName: task
            }
          createTaskstr(newTask)
        }
      }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        createTask(task)
        setTask('')
    }

    const handleOnChange = (event) => {
        setTask(event.target.value)
    }

    return (
        <div className="addbar">
            <form onSubmit={handleFormSubmit}>
                <input value={task} onChange={handleOnChange} maxlength="23" placeholder='Please insert task here...'></input>
                <button>New Task</button>
            </form>
        </div>
    )
}


export default AddTaskBar
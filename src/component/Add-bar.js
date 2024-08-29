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
        <div className="" Style="padding: 10px 0px">
            <form className="d-flex justify-content-between" onSubmit={handleFormSubmit}>
                <input className="w-100 border rounded me-2 p-2" value={task} onChange={handleOnChange} maxlength="23" placeholder='Please insert task here...'></input>
                <button className="w-50 border rounded p-2">New Task</button>
            </form>
        </div>
    )
}


export default AddTaskBar
import {useState} from 'react'
import useStore from '../store/store';

function TaskEdit ({task,onSubmit}) {
    const {updateTaskstr} = useStore();
    const [newTaskName, setnewTaskName] = useState("");


    const editTaskbyId = (id, newTask) => {
        if (newTask === "") {
          alert("Please insert taskname")
        } else {
          updateTaskstr(id,newTask)
        }
      }

    const handleChange = (event) =>{
        setnewTaskName(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        editTaskbyId(task.id, newTaskName)
        onSubmit()
    }

    return(
        <form onSubmit={handleSubmit} className="edit-form">
            <input value={newTaskName} onChange={handleChange} maxlength="23"/>
            <button><span className="material-symbols-outlined">edit</span></button>
        </form>
    )
}


export default TaskEdit
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
        <form onSubmit={handleSubmit} className="d-flex">
            <input className="border border-secondary rl" value={newTaskName} onChange={handleChange} maxlength="23"/>
            <button className="border border-secondary rr"><span className="material-symbols-outlined">edit</span></button>
        </form>
    )
}


export default TaskEdit
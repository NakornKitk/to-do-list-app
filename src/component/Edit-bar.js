import {useState} from 'react'

function TaskEdit ({task, onSubmit}) {
    const [newTaskName, setnewTaskName] = useState("");

    const handleChange = (event) =>{
        setnewTaskName(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit(task.id, newTaskName)
    }

    return(
        <form onSubmit={handleSubmit} className="edit-form">
            <input value={newTaskName} onChange={handleChange} maxlength="23"/>
            <button><span className="material-symbols-outlined">edit</span></button>
        </form>
    )
}


export default TaskEdit
import {useState} from 'react'

function TaskEdit ({task, onSubmit}) {
    const [taskName, setTaskName] = useState(task.title);

    const handleChange = (event) =>{
        setTaskName(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit(task.id, taskName)
    }

    return(
        <form onSubmit={handleSubmit} className="edit-form">
            <input value={taskName} onChange={handleChange} maxlength="23"/>
            <button><span className="material-symbols-outlined">edit</span></button>
        </form>
    )
}


export default TaskEdit
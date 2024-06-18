import {useState} from 'react'

function AddTaskBar ({onCreate}) {
    const [task, setTask] = useState('')

    const handleFormSubmit = (event) => {
        event.preventDefault();

        onCreate(task)
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
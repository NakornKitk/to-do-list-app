import {useState} from 'react';
import TaskEdit from './Edit-bar';

function TaskShow ({taskName,onDelete, onEdit}) {
    const deleteBtn = () => {
        onDelete(taskName.id)
    }

    const [isActive, setIsActive] = useState(false);

    const toggleClass = () => {
        setIsActive(!isActive); 
    };


    const [isEdit, setIsEdit] = useState(false);

    const editBtn = () => {
        setIsEdit(!isEdit)
    }

    const handleEditClick = (id, title) => {
        onEdit(id, title)
        setIsEdit(false)
    }

    if (isEdit) {
        taskName.task = <TaskEdit onSubmit={handleEditClick} task={taskName} />
    }


    return (
        <div className={isActive ? 'active-tg' : 'taskshow'}>
            <div>
                <span onClick={editBtn}>{taskName.task}</span>
            </div>
            <div className="taskbtn">
                <button onClick={toggleClass} className="finish">
                    <span className="material-symbols-outlined">check</span>
                </button>
                <button onClick={deleteBtn} className="delete">
                    <span className="material-symbols-outlined">delete_forever</span>
                </button>
            </div>
        </div>
    )
}


export default TaskShow
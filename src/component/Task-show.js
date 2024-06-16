import {useState} from 'react';

function TaskShow ({taskName,onDelete}) {
    const deleteBtn = () => {
        onDelete(taskName.id)
    }

    const [isActive, setIsActive] = useState(false);

    const toggleClass = () => {
        setIsActive(!isActive); 
    };


    return (
        <div className={isActive ? 'active-tg' : 'taskshow'}>
            <div>
                <span onClick={toggleClass}>{taskName.task}</span>
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
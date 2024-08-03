import {useState} from 'react';
import TaskEdit from './Edit-bar';
import useStore from '../store/store';

function TaskShow ({task}) {

    const { deleteTaskstr} = useStore();

    const deleteBtn = () => {
        deleteTaskstr(task.id)
    }

    const [isActive, setIsActive] = useState(false);

    const toggleClass = () => {
        setIsActive(!isActive); 
    };


    const [isEdit, setIsEdit] = useState(false);

    const editBtn = () => {
        setIsEdit(!isEdit)
    }

    const handleEditClick = () => {
        setIsEdit(false)
    }


    if (isEdit) {
        task.taskName = <TaskEdit onSubmit={handleEditClick} task={task}/>
    }


    return (
        <div className={isActive ? 'active-tg' : 'taskshow'}>
            <div>
                <span onClick={editBtn}>{task.taskName}</span>
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
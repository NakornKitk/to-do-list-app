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
        <div className={isActive ? 'd-flex justify-content-between bg-transparent py-2 px-3 my-2 rounded border text-decoration-line-through' : 'd-flex justify-content-between bg-light py-2 px-3 my-2 rounded'}>
            <div className = "my-auto">
                <span onClick={editBtn}>{task.taskName}</span>
            </div>
            <div className="">
                <button onClick={toggleClass} className="rounded text-success me-1">
                    <span className="material-symbols-outlined">check</span>
                </button>
                <button onClick={deleteBtn} className="rounded text-danger">
                    <span className="material-symbols-outlined">delete_forever</span>
                </button>
            </div>
        </div>
    )
}


export default TaskShow
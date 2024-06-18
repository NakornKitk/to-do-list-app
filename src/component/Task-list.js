import TaskShow from './Task-show'

function TaskList ({allTaskArr, onDelete, onEdit}) {
    
    const AllTask = allTaskArr.map((task) => {
        return <TaskShow task={task} key={task.id} onDelete={onDelete} onEdit={onEdit}/>
    })
    
    return <div className = "tasklist">{AllTask}</div>
    
}



export default TaskList
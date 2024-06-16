import TaskShow from './Task-show'

function TaskList ({tasks, onDelete}) {
    
    const AllTask = tasks.map((task) => {
        return <TaskShow taskName={task} key={task.id} onDelete={onDelete}/>
    })
    
    return <div className = "tasklist">{AllTask}</div>
    
}



export default TaskList
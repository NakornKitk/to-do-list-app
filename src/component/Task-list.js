import TaskShow from './Task-show'
import useStore from '../store/store';

function TaskList () {
    const { allTaskArr } = useStore();
    
    const AllTask = allTaskArr.map((task) => {
        return <TaskShow task={task} key={task.id}/>
    })
    
    return <div className = "tasklist">{AllTask}</div>
    
}



export default TaskList
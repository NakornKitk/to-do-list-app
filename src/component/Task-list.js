import TaskShow from './Task-show'
import useStore from '../store/store';

function TaskList () {
    const { allTaskArr, searchTerm } = useStore();
    
    const AllTask = allTaskArr.filter((item) => {
        if (searchTerm == "") {
          return item;
        } else if (item.taskName.toLowerCase().includes(searchTerm.toLowerCase())) {
          return item;
        }
      }).map((task) => {
        return <TaskShow task={task} key={task.id}/>
    })
    
    return <div className = "text-dark">{AllTask}</div>
    
}



export default TaskList
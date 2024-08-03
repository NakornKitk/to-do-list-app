
import './App.css';
import TaskList from './component/Task-list'
import AddTaskBar from './component/Add-bar'
import Footer from './component/Footer'
import NavBar from './component/Nav-bar'
import icon from './images/calendar-checkmark-icon.svg'



function App() {
  return (
    <>
      <NavBar />
      <div className="taskapp">
        <div className="header">
          <h1>Things to do</h1>
          <img className="icon" src={icon} alt=""></img>
        </div>
        <AddTaskBar/>
        <hr></hr>
        <p>Click on the task name to edit.</p>
        <TaskList className="tasklist"/>
      </div>
      <Footer />
    </>
  )
}


export default App;

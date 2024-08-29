
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
      <div className="bg-light p-2 text-white bg-opacity-75 rounded p-4 my-5 mx-auto shadow res-w">
        <div className="d-flex">
          <h1 className="text-dark me-2 pt-2">Things to do</h1>
          <img className="icon" src={icon} alt=""></img>
        </div>
        <AddTaskBar/>
        <hr className="border border-info"></hr>
        <p className="font-weight-bold text-dark">Click on the task name to edit.</p>
        <TaskList />
      </div>
      <Footer />
    </>
  )
}


export default App;

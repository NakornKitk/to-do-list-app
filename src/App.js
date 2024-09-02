import "./App.css";
import TaskList from "./component/Task-list";
import TaskEdit from "./component/Edit-bar";
import AddTaskBar from "./component/Add-bar";
import Footer from "./component/Footer";
import NavBar from "./component/Nav-bar";
import icon from "./images/calendar-checkmark-icon.svg";
import React, { useState } from "react";
import useStore from "./store/store";

function App() {
  const { toggleAddbar, settoggleAddbar, setSearchTerm, toggleEditbar } =
    useStore();

  function handleToggleAddbar() {
    settoggleAddbar(toggleAddbar);
  }

  return (
    <div className="min-vh-100">
      <NavBar />
      <div className="min-vh-adjust py-5">
        <div
          className={`bg-light bg-opacity-75 p-4 rounded mx-auto my-auto shadow res-w ${
            toggleAddbar || toggleEditbar ? "d-none" : ""
          }`}
        >
          <div className="d-flex mb-3">
            <h1 className="text-dark me-2 pt-2">Things to do</h1>
            <img className="icon" src={icon} alt=""></img>
          </div>
          <form className="d-flex justify-content-between">
            <input
              className="w-100 border rounded me-2 p-2"
              placeholder="Search task name..."
              onChange={(event) => setSearchTerm(event)}
            ></input>
          </form>
          <hr className="border border-info"></hr>
          <div className="font-weight-bold text-dark d-flex">
            <p className="me-2">Piority:</p>
            <span className="material-symbols-outlined text-danger">
              radio_button_checked
            </span>
            <p className="me-1">High</p>
            <span className="material-symbols-outlined text-warning">
              radio_button_checked
            </span>
            <p className="me-1">Medium</p>
            <span className="material-symbols-outlined text-success">
              radio_button_checked
            </span>
            <p className="me-1">Low</p>
          </div>
          <TaskList />
          <button
            className="w-100 border rounded p-2"
            onClick={handleToggleAddbar}
          >
            New Task
          </button>
        </div>

        {toggleAddbar && <AddTaskBar />}

        {toggleEditbar && <TaskEdit />}
      </div>


      {/* <TaskEdit onSubmit={handleEditClick} task={task}/> */}

      <Footer />
    </div>
  );
}

export default App;

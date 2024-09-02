import { useState } from "react";
import useStore from "../store/store";

function AddTaskBar() {
  const { createTaskstr } = useStore();
  const [task, setTask] = useState("");
  const [des, setDes] = useState("");
  const [pio, setPio] = useState("");
  const [date, setDate] = useState("");
  const { toggleAddbar, settoggleAddbar } = useStore();

  const createTask = (task, des, pio, date) => {
    if (task === "") {
      alert("Please insert task name");
    } else {
      const newTask = {
        id: Math.round(Math.random() * 9999),
        taskName: task,
        taskDes: des,
        piority: pio,
        dueDate: date,
        taskDone: false,
      };
      createTaskstr(newTask);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    createTask(task, des, pio, date);
    setTask("");
    setDes("");
    setPio("");
    setDate("");

    settoggleAddbar(toggleAddbar);
  };

  const handleOnChangeName = (event) => {
    setTask(event.target.value);
  };

  const handleOnChangeDes = (event) => {
    setDes(event.target.value);
  };

  const handleOnClickDate = (event) => {
    setDate(event.target.value);
  };

  const handleOnClickPio = (event) => {
    setPio(event.target.value);
  };

  function handleToggleAddbar() {
    settoggleAddbar(toggleAddbar);
  }

  return (
    <div>
      <div className="res-w mx-auto p-4 rounded bg-light bg-opacity-75">
        <div className="d-flex justify-content-between">
          <h1>
            New Task <span class="material-symbols-outlined h2">add_box</span>
          </h1>
          <span
            class="material-symbols-outlined"
            role="button"
            onClick={handleToggleAddbar}
          >
            close
          </span>
        </div>
        <form className="" onSubmit={handleFormSubmit}>
          <div className="my-2">
            <label className="me-3">Please select piority</label>
            <select onChange={handleOnClickPio} required>
              <option value="" selected="selected">
                Choose
              </option>
              <option value="3">High</option>
              <option value="2">Medium</option>
              <option value="1">Low</option>
            </select>
          </div>

          <div className="my-2">
            <label className="font-weight-bold">Name</label>
            <input
              className="w-100 border rounded me-2 p-2"
              value={task}
              onChange={handleOnChangeName}
              maxlength="23"
              placeholder="Please insert task name here..."
              required
            ></input>
          </div>

          <div className="my-2">
            <label>Description</label>
            <textarea
              className="w-100 border rounded me-2 p-2"
              value={des}
              onChange={handleOnChangeDes}
              placeholder="Please insert description here..."
              rows="4"
              required
            ></textarea>
          </div>

          <div className="my-2">
            <label>Date & Time</label>
            <input
              className="w-100 border rounded me-2 p-2"
              type="date"
              value={date}
              onChange={handleOnClickDate}
              required
            ></input>
          </div>

          <button className="w-100 border rounded p-2 mt-3">Add</button>
        </form>
      </div>
    </div>
  );
}

export default AddTaskBar;

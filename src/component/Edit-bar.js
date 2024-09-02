import { useState } from "react";
import useStore from "../store/store";

function TaskEdit() {
  const { allTaskArr, updateTaskstr, toggleEditbar, settoggleEditbar, editID } = useStore();


  let taskIdToFind = editID;
  let task = allTaskArr.find(task => task.id === taskIdToFind);

  const [taskname, setTaskname] = useState(task.taskName);
  const [des, setDes] = useState(task.taskDes);
  const [date, setDate] = useState(task.dueDate);


  const [pio, setPio] = useState(task.piority);


  const handleSubmit = (event) => {
    event.preventDefault();
    updateTaskstr(editID, taskname, des, pio, date);

    settoggleEditbar(toggleEditbar);
  };

  const handleOnChangeName = (event) => {
    setTaskname(event.target.value);
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

  function handleToggleEditbar() {
    settoggleEditbar(toggleEditbar);
  }

  return (
    <div className="res-w mx-auto p-4 rounded bg-light bg-opacity-75">
      <div className="d-flex justify-content-between">
        <h1>Edit Task <span class="material-symbols-outlined h2">edit</span></h1>
        <span class="material-symbols-outlined" role="button" onClick={handleToggleEditbar}>
          close
        </span>
      </div>
      <form className="" onSubmit={handleSubmit}>
        <div className="my-2">
          <label className="me-3">Please select piority</label>
          <select onChange={handleOnClickPio} defaultValue={pio} required>
            <option value="3">High</option>
            <option value="2">Medium</option>
            <option value="1">Low</option>
          </select>
        </div>

        <div className="my-2">
          <label className="font-weight-bold">Name</label>
          <input
            className="w-100 border rounded me-2 p-2"
            value={taskname}
            onChange={handleOnChangeName}
            maxlength="23"
            placeholder="Please insert new task name here..."
            required
          ></input>
        </div>

        <div className="my-2">
          <label>Description</label>
          <textarea
            className="w-100 border rounded me-2 p-2"
            value={des}
            onChange={handleOnChangeDes}
            placeholder="Please insert new description here..."
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

        <button className="w-100 border rounded p-2 mt-3">Edit</button>
      </form>
    </div>
  );
}

export default TaskEdit;

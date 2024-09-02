import { useState } from "react";
import useStore from "../store/store";

function TaskShow({ task }) {
  const {
    deleteTaskstr,
    setDoneStatus,
    toggleEditbar,
    settoggleEditbar,
    setEditID,
  } = useStore();

  const deleteBtn = () => {
    deleteTaskstr(task.id);
  };

  const [isMore, setIsMore] = useState(false);

  const handletoggleClass = () => {
    setDoneStatus(task.id, task.taskDone);
  };

  const handleMore = () => {
    setIsMore(!isMore);
  };

  function colorClass() {
    // eslint-disable-next-line
    if (task.piority == 3) {
      return "text-danger";
      // eslint-disable-next-line
    } else if (task.piority == 2) {
      return "text-warning";
    } else {
      return "text-success";
    }
  }

  function handleToggleEditbar() {
    settoggleEditbar(toggleEditbar);
    setEditID(task.id);
  }

  return (
    <>
      <div
        className={
          task.taskDone
            ? "bg-transparent py-2 px-3 my-2 rounded border"
            : "bg-light py-2 px-3 my-2 rounded"
        }
      >
        <div className="d-flex justify-content-between">
          <div className=" w-75 my-2">
            <div className="d-flex">
              <span
                className={`material-symbols-outlined my-auto me-3 ${colorClass()}`}
              >
                radio_button_checked
              </span>
              <div>
                <p
                  className={
                    task.taskDone
                      ? "my-0 fw-bold text-capitalize rounded text-decoration-line-through text-secondary bg-transparent"
                      : "my-0 fw-bold text-capitalize rounded"
                  }
                >
                  {task.taskName}
                </p>
                <p className="my-0 text-secondary">Date: {task.dueDate}</p>
              </div>
            </div>
          </div>
          <div className="my-3">
            <span
              onClick={handleMore}
              class="material-symbols-outlined"
              role="button"
            >
              keyboard_arrow_down
            </span>
          </div>
        </div>
        {isMore && (
          <>
            <div className="mt-1 mb-2 p-2 border rounded text-secondary text-break">
              <span className="">{task.taskDes}</span>
            </div>
            <div className="d-flex justify-content-end ">
              <button
                onClick={handletoggleClass}
                className="rounded text-success pt-1 me-1"
              >
                <span className="material-symbols-outlined">check</span>
              </button>
              <button
                onClick={deleteBtn}
                className="rounded text-danger pt-1 me-1"
              >
                <span className="material-symbols-outlined">
                  delete_forever
                </span>
              </button>
              <button onClick={handleToggleEditbar} className="rounded pt-1">
                <span className="material-symbols-outlined">edit</span>
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default TaskShow;

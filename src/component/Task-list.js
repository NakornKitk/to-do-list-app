import TaskShow from "./Task-show";
import useStore from "../store/store";

function TaskList() {
  const { allTaskArr, searchTerm, sortTerm, setSortTerm } = useStore();

  function dynamicSort(property) {
    return function (a, b) {
      // eslint-disable-next-line default-case
      switch (property) {
        case "Piority: High to Low":
          return b.piority - a.piority;
        case "Piority: Low to high":
          return a.piority - b.piority;
        case "Date: Minimum":
          return new Date(a.dueDate) - new Date(b.dueDate);
        case "Date: Maximum":
          return new Date(b.dueDate) - new Date(a.dueDate);
        case "":
          return a.taskName
            .toLowerCase()
            .localeCompare(b.taskName.toLowerCase());
      }
    };
  }

  const AllTask = allTaskArr
    .sort(dynamicSort(sortTerm))
    // eslint-disable-next-line
    .filter((item) => {
      if (searchTerm === "") {
        return item;
      } else if (
        item.taskName.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return item;
      }
    })
    .map((task) => {
      return <TaskShow task={task} key={task.id}/>;
    });

  const handleOnChangeSort = (event) => {
    setSortTerm(event);
  };

  return (
    <div>
      <form className="mb-4">
        <div className=" d-flex justify-content-end">
          <select onChange={handleOnChangeSort} defaultValue={sortTerm}>
            <option value="">
              Name
            </option>
            <option value="Piority: High to Low">Piority: Highest</option>
            <option value="Piority: Low to high">Piority: Lowest</option>
            <option value="Date: Minimum">Date: Minimum</option>
            <option value="Date: Maximum">Date: Maximum</option>
          </select>
        </div>
      </form>

      <div className="text-dark">{AllTask}</div>
    </div>
  );
}

export default TaskList;

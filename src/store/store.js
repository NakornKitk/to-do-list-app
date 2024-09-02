import { create } from "zustand";
import { persist } from "zustand/middleware";

let store = (set) => ({
  allTaskArr: [],
  createTaskstr: (newtask) =>
    set((state) => ({
      allTaskArr: [...state.allTaskArr, newtask],
    })),

  updateTaskstr: (id, newTask, newDes, newPio, newDate) =>
    set((state) => ({
      allTaskArr: state.allTaskArr.map((task) => {
        if (task.id === id) {
          return {
            id: task.id,
            taskName: newTask,
            taskDes: newDes,
            piority: newPio,
            dueDate: newDate,
          };
        } else {
          return task;
        }
      }),
    })),

  deleteTaskstr: (id) =>
    set((state) => ({
      // eslint-disable-next-line
      allTaskArr: state.allTaskArr.filter((item) => {
        if (item.id !== id) {
          return item;
        }
      }),
    })),

  toggleAddbar: false,
  settoggleAddbar: (toggle) => set({ toggleAddbar: !toggle }),

  toggleEditar: false,
  settoggleEditbar: (toggle) => set({ toggleEditbar: !toggle }),

  setDoneStatus: (id, oldstatus) =>
    set((state) => ({
      allTaskArr: state.allTaskArr.map((item) =>
        item.id === id ? { ...item, taskDone: !oldstatus } : item
      ),
    })),

  searchTerm: "",
  setSearchTerm: (event) => set({ searchTerm: event.target.value }),

  editID: "",
  setEditID: (id) => set({ editID: id }),

  sortTerm: "",
  setSortTerm: (event) => set({ sortTerm: event.target.value }),
});

store = persist(store, { name: "tasklist" });
let useStore = create(store);

export default useStore;

import {create} from 'zustand'
import {persist} from 'zustand/middleware'

let store = (set) => ({
    allTaskArr: [],
    createTaskstr: (newitem) => set((state) => ({
        allTaskArr: [...state.allTaskArr, newitem]
    })),

    updateTaskstr:(id, newTask) => set((state) => ({
        allTaskArr: state.allTaskArr.map((task) => {
            if (task.id===id) {
                return  {id: task.id, taskName: newTask}
              } else {
                return task;
              }
            })
    })),

    deleteTaskstr:(id) => set((state) => ({
        allTaskArr: state.allTaskArr.filter((item) => {
            if (item.id !== id) {
              return item;
            }
          })
    }))
})


store = persist(store, {name: "tasklist"})
let useStore = create(store)

export default useStore;
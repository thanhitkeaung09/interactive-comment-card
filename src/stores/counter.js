import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    text: "",
    index : "",
    newIndex: ""
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
    changeIndex: (state) =>{
      state.newIndex = state.index
    }
  },
  actions: {
    increment() {
      this.counter++
    }
  }
})

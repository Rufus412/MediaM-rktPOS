import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('storeId',  {
  state: () => {
    return{
      point: null,
      api: {
        sessionToken: ""
      }
    }
  },
  getters: {

  },
  actions: {
    
  }
})

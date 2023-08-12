// Utilities
import { defineStore } from 'pinia'

export const useIngresoStore = defineStore('ingreso', {
  state: () => ({
    login :{
      username:'',
      password:''
    }
  }),
})

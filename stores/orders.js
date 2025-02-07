import { defineStore } from 'pinia'

export const useOrdersStore = defineStore('orders', {
  state: () => ({ 
    data: []
  }),

  actions: {

    async getOrders() {
      return this.data;
    }

  }
})

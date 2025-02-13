import { defineStore } from 'pinia'

export const useOrdersStore = defineStore('orders', {
  state: () => ({ 
    data: []
  }),

  actions: {

    async createOrder(userid: string, order: [], personalData: Object, paymentMethod: String, deliveryMethod: String) {
      await useFetch('/api/order', {
        method: 'POST',
        watch: false,
        body: { userid, order, personalData, paymentMethod, deliveryMethod}
      })
    },

    async getOrdersByUser(userid: string) {

      if (!userid) {
        return ElNotification({ type: "error", message: "Данный заказа отсутствует в системе" })
      }

      const { status, data } = await useFetch('/api/orders', {
        method: 'POST',
        body: { userid }
      });

      return data.value;

    }

  }


})

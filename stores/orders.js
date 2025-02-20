import { defineStore } from 'pinia'

export const useOrdersStore = defineStore('orders', {
  state: () => ({ 
    data: []
  }),

  actions: {

    async createOrder(
      userid,
      order,
      personalData,
      paymentMethod,
      deliveryMethod,
    ) {
      await useFetch('/api/order', {
        method: 'POST',
        watch: false,
        body: { userid, order, personalData, paymentMethod, deliveryMethod}
      })
    },

    async getOrdersByUser(userid) {

      if (!userid) {
        return ElNotification({ type: "error", message: "Данный заказа отсутствует в системе" })
      }

      console.log(userid)

      const { status, data } = await useFetch('/api/orders', {
        method: 'POST',
        body: { userid, action: "get_all" }
      });
      
      this.data =  data?.value;
      return data?.value;

    },

    async getLastOrderByUser(userid) {

      if (!userid) {
        return ElNotification({ type: "error", message: "Данный заказа отсутствует в системе" })
      }

      const { data } = await useFetch('/api/orders', {
        method: 'POST',
        body: { userid, action: "get_last" }
      });

      return data?.value
    }

  }

})

import { defineStore } from 'pinia';
import { ElNotification } from 'element-plus'
import { toRaw } from 'vue'
import { useLocalStorage } from '@vueuse/core'

export const useCartStore = defineStore('cart', {
    state: () => ({
        data: [],
    }),

    actions: {
        getData() {
            return this.data;
        },

        addData({ marketid, priceCLIENT, marketNAME,  }, qty = 1) {
            const isInCart = this.data.find(item => item.id === marketid);

            const order = {
                id: marketid,
                name: marketNAME,
                price: priceCLIENT,
                qty: qty,
                isInOrder: false
            }

            if (isInCart) {
                isInCart.qty++
            } else {
                this.data.push(order)
            }

            useLocalStorage('bcs-cart', toRaw(this.data))
            
            ElNotification({ type: "success", message: "Позиция добавлена в корзину", duration: 1500 })

        },

        copyDataFromLS(payload) {
            console.log('Cart', payload)
            this.data = payload
        },

        removeData(id) {
            this.data = this.data.filter(item => item.id !== id);
        }
    }
})
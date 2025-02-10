import { defineStore } from 'pinia';
import { ElNotification } from 'element-plus'
import { toRaw } from 'vue'
import { useStorage } from '@vueuse/core'

export const useCartStore = defineStore('cart', {
    state: () => ({
        data: [],
    }),

    actions: {
        getData() {
            return this.data;
        },

        copyDataFromLS(payload) {
            this.data = payload
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

            const state = useStorage('bcs-cart');
            state.value = JSON.stringify(toRaw(this.data));
            
            ElNotification({ type: "success", message: "Позиция добавлена в корзину", duration: 1500 })

        },

        getDataFromLS() {
            const { value } = useStorage('bcs-cart');
            return value;
        },


        removeData(id) {
            const data = this.data.filter(item => item.id !== id);
            const state = useStorage('bcs-cart');
            state.value = JSON.stringify(toRaw(data));

            ElNotification({ type: "success", message: "Позиция удалена из корзины", duration: 1500 });

            this.copyDataFromLS(data)
        }
    }
})
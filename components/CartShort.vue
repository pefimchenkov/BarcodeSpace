<template>

    <el-popover
        ref="minicart"
        :width="600"
        trigger="click"
    >
        <template #reference>
            <button
                type="button"
                class="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white">
                <span class="sr-only text-base/6">Корзина</span>

                <el-badge :value="getData().length" :offset="[-10]" class="cart-img">
                    <svg class="w-6 h-6 lg:me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
                    </svg> 
                </el-badge>

                <span class="hidden sm:flex text-base/6">Корзина</span>
                <svg class="hidden sm:flex w-4 h-4 text-gray-900 dark:text-white ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
                </svg>              
            </button>
        </template>

        <h1 v-if="!getData().length" class="flex justify-center">Пусто</h1>
        <div
            v-else
            v-for="item in getData()"
            :key="item.id"
            class="z-10 mx-auto max-w-xl space-y-4 overflow-hidden  bg-white p-3 m-1 antialiased shadow-sm w-full">
            <div class="grid grid-cols-2">
                <div>
                    
                    <a
                        v-if="item.name.length <=50"
                        href="#"
                        class="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white hover:underline">
                        {{ formatName(item.name) }}
                    </a>
                    <el-tooltip v-else :content="item.name" placement="top" effect="light" :show-after="2000">
                        <a href="#" class="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white hover:underline">{{ formatName(item.name) }}</a>
                    </el-tooltip>

                    <p class="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">Цена: {{ formatPrice(item.price) }}</p>
                </div>
        
                <div class="flex items-center justify-end gap-6">
                    <div class="flex items-center">
                        <el-input-number
                            v-model="item.qty"
                            size="small"
                            :min="0"
                            :max="1000"
                            style="width: 100px"
                        />
                    </div>
        
                    <button
                        type="button"
                        class="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600"
                        @click="removeItem(item.id)">
                        <span class="sr-only"> Удалить </span>
                        <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z" clip-rule="evenodd" />
                        </svg>
                    </button>

                    <div role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
                        Удалить
                        <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                </div>
            </div>


        </div>

        <div class="flex justify-between text-lg mt-5 mx-3">
            <div>Итого: {{ calcSum(getData()) }}</div>
            <el-button
                type="primary"
                @click="gotoCartFull"
                :disabled="!getData().length">
                Перейти в корзину
            </el-button>
        </div>

    </el-popover>

</template>

<script setup>
import { ref } from 'vue';

const { getData, removeData } = useCartStore();
const minicart = ref();


async function removeItem(id) {
    removeData(id);
}

function formatName(name) {
    return name.length >= 50
        ? name.slice(0, 50) + '...'
        : name
}

function formatPrice(price) {
    return price.toLocaleString("ru", { style: "currency", currency: "RUB" })
}

function calcSum(data) {
    return data.reduce((acc, { price, qty }) => { return (acc + price * qty) }, 0).toLocaleString("ru", { style: "currency", currency: "RUB" })
}

async function gotoCartFull() {
    minicart.value.hide();
    await navigateTo('/cart')
}



</script>



<style>

.dropdowm-custom-menu {
    padding: 10px !important;
    min-width: 500px !important;
}

.cart-img {
    position: relative;
    top: -3.5px;
}

</style>
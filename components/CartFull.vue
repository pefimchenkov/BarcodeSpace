<template>
  <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
    <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">

    <el-steps
        :space="575"
        :active="0"
        process-status="finish"
        finish-status="success"
    >
        <el-step title="Корзина" />
        <el-step title="Оформление заказа" />
        <el-step title="Оплата" />
    </el-steps>


      <h2 class="text-xl font-semibold text-gray-900 text-end dark:text-white sm:text-2xl">Корзина</h2>

      <div class="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
        <div class="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">

        <!-- Корзина -->
          <div class="space-y-6">

            <div v-if="!getData().length">
              <div v-for="row in 3"  class="flex w-xl mx-auto max-w-screen-xl px-4 2xl:px-0">
                <el-skeleton-item variant="image" animated class="m-3" style="width: 120px; height: 100px; background: #f5f5f5" />
                <el-skeleton :rows="2" animated class="m-3" />
              </div>
            </div>

            <div
              v-for="item in getData()"
              class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
              <div class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">

                <el-checkbox
                  v-model="item.isInOrder"
                >
                </el-checkbox>

                <a href="#" class="shrink-0 md:order-1">
                  <img class="h-20 w-20 dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" alt="imac image" />
                  <img class="hidden h-20 w-20 dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg" alt="imac image" />
                </a>

                <label for="counter-input" class="sr-only">Выберите количество:</label>
                <div class="flex items-center justify-between md:order-3 md:justify-end">

                  <div class="flex items-center">
                  <el-input-number
                      size="default"
                      v-model="item.qty"
                      :min="0"
                      :max="1000"
                      style="width: 110px; margin: 0 10px"
                  ></el-input-number>
                  </div>

                  <div class="text-end md:order-4 md:w-32">
                    <p class="text-base font-bold text-gray-900 dark:text-white">{{ formatPrice(item.price * item.qty) }}</p>
                  </div>
                </div>

                <div class="w-full min-w-0 flex-1 space-y-3 md:order-2 md:max-w-md">
                  <a href="#" class="text-base font-medium text-gray-900 hover:underline dark:text-white">
                      {{ item.name }}
                  </a>
                  <div>Цена за шт. - {{ item.price }}</div>

                  <div class="flex items-center gap-4">
                    <button type="button" class="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white">
                      <svg class="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                      </svg>
                      Добавить в избранное
                    </button>

                    <button
                      type="button"
                      class="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                      @click="removeItem(item.id)">
                      <svg class="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
                      </svg>
                      Удалить
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <!-- Рекомендации -->
          <div class="hidden xl:mt-8 xl:block">
            <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">Рекомендуем также</h3>
            <div
              class="mt-6 grid grid-cols-3 gap-4 sm:mt-8">
              <div
                  v-for="item in 3"
                  class="space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                  <a href="#" class="overflow-hidden rounded">
                      <img class="mx-auto h-44 w-44 dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" alt="imac image" />
                      <img class="mx-auto hidden h-44 w-44 dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg" alt="imac image" />
                  </a>
                  <div>
                      <a href="#" class="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">iMac 27”</a>
                      <p class="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">This generation has some improvements, including a longer continuous battery life.</p>
                  </div>
                  <div>
                      <p class="text-lg font-bold text-gray-900 dark:text-white">
                      <span class="line-through"> $399,99 </span>
                      </p>
                      <p class="text-lg font-bold leading-tight text-red-600 dark:text-red-500">$299</p>
                  </div>
                  <div class="mt-6 flex items-center gap-2.5">
                      <button
                          data-tooltip-target="favourites-tooltip-1"
                          type="button"
                          class="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-sky-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
                      <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"></path>
                      </svg>
                      </button>
                      <div id="favourites-tooltip-1" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
                          В избранное
                      <div class="tooltip-arrow" data-popper-arrow></div>
                      </div>
                      <button type="button" class="inline-flex w-full items-center justify-center rounded-lg bg-sky-500 px-5 py-2.5 text-sm font-medium  text-white hover:bg-sky-600 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-sky-500 dark:hover:bg-sky-600 dark:focus:ring-primary-800">
                      <svg class="-ms-2 me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4" />
                      </svg>
                      В корзину
                      </button>
                  </div>
              </div>

            </div>
          </div>
        </div>


        <!-- Ваш заказ -->
        <div class="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">

          <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
            <p class="text-xl font-semibold text-gray-900 dark:text-white">Ваш заказ</p>

            <div v-if="!getData().length" class="flex w-xl mx-auto max-w-screen-xl px-4 2xl:px-0">
              <el-skeleton :rows="4" animated class="m-3" />
            </div>

            <div v-if="getData().length"  class="space-y-4">
              <div class="space-y-2">
                <dl class="flex items-center justify-between gap-4">
                  <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Цена</dt>
                  <dd class="text-base font-medium text-gray-900 dark:text-white">{{ formatPrice(calcSum()) }}</dd>
                </dl>

                <dl class="flex items-center justify-between gap-4">
                  <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Скидка</dt>
                  <dd class="text-base font-medium text-green-600">{{ formatPrice(discount) }}</dd>
                </dl>

                <dl class="flex items-center justify-between gap-4">
                  <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Доставка</dt>
                  <dd class="text-base font-medium text-gray-900 dark:text-white">{{ formatPrice(delivery) }}</dd>
                </dl>

                <dl class="flex items-center justify-between gap-4">
                  <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Включая НДС</dt>
                  <dd class="text-base font-medium text-gray-900 dark:text-white">{{ formatPrice(tax) }}</dd>
                </dl>
              </div>

              <dl class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                <dt class="text-base font-bold text-gray-900 dark:text-white">Всего</dt>
                <dd class="text-base font-bold text-gray-900 dark:text-white">{{ formatPrice(calcTotal) }}</dd>
              </dl>
            </div>

            <button
              @click="gotoCheckout"
              class="flex w-full items-center justify-center rounded-lg bg-green-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-sky-600 dark:hover:bg-sky-600 dark:focus:ring-primary-800">
              Перейти к оформлению
          </button>

            <div class="flex items-center justify-center gap-2">
              <span class="text-sm font-normal text-gray-500 dark:text-gray-400"> или </span>
              <a @click="gotoBack" title="" style="cursor: pointer" class="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">
                Продолжить покупки
                <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                </svg>
              </a>
            </div>
          </div>

          <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
            <form class="space-y-4">
              <div>
                <label for="voucher" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Есть ваучер или скидочный купон? </label>
                <input type="text" id="voucher" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="" required />
              </div>
              <button
                  type="submit"
                  class="flex w-full items-center justify-center rounded-lg bg-sky-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-sky-600 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-sky-600 dark:hover:bg-sky-600 dark:focus:ring-primary-800">
                  Применить код
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
const { getData, removeData } = useCartStore();

const discount = ref(1000);
const delivery = ref(500);

async function removeItem(id) {
    removeData(id);
}

const calcTotal = computed(() => {
    return calcSum() - discount.value  + delivery.value;
});

const tax = computed(() => ((calcSum() * 0.2)));

/* **** */

function formatPrice(price) {
    return price.toLocaleString("ru", { style: "currency", currency: "RUB" });
}

function calcSum() {
    return getData().reduce((acc, { price, qty }) => { return (acc + price * qty) }, 0);
}

async function gotoBack() {
    const { history } = useRouter().options;
    await navigateTo(history.state.back)
}

async function gotoCheckout() {
    await navigateTo('/checkout')
}





</script>
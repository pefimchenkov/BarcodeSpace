<template>
  <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
    <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
      <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">{{ "Детализация заказа № " + order._id }}</h2>

      <div class="mt-6 sm:mt-8 lg:flex lg:gap-8 ">
        <div class="w-full divide-y divide-gray-200 overflow-hidden rounded-lg border border-gray-200 dark:divide-gray-700 dark:border-gray-700 lg:max-w-xl xl:max-w-3xl shadow-md">

          <div
            v-for="good in order.goods"
            :key="good.id"
            class="space-y-4 p-6">
            <div class="flex items-center gap-6">
              <div v-if="!photos.length">
                <el-skeleton
                  animated>
                  <template #template>
                    <el-skeleton-item variant="image" style="width: 80px; height: 80px" />
                  </template>
                </el-skeleton>
              </div>

              <a v-else href="#" class="h-20 w-20 shrink-0">
                <img class="h-full w-full" :src="getPhotos(good.id)|| useAsset('nophoto.jpg')" alt="Фото товара" />
              </a>

              <NuxtLink :to="`/${getTypeById(good.typeid)}/${good.id}`" class="min-w-0 flex-1 font-medium text-gray-900 hover:underline dark:text-white">
                {{ good.name }}
              </NuxtLink>
            </div>

            <div class="flex items-center justify-between gap-4">
              <p class="text-sm font-normal text-gray-500 dark:text-gray-400">
                <span class="font-medium text-gray-900 dark:text-white">
                  Артикул:
                </span> BCS-{{ good.id }}</p>

              <div class="flex items-center justify-end gap-4">
                <p class="text-base font-normal text-gray-900 dark:text-white">
                  x{{ good.qty }}
                </p>

                <p class="text-xl font-bold leading-tight text-gray-900 dark:text-white">
                  {{ formatPrice(good.price * good.qty) }}
                </p>
              </div>
            </div>
          </div>


          <div class="space-y-4 bg-gray-50 p-6 dark:bg-gray-800">
            <div class="space-y-2">
              <dl class="flex items-center justify-between gap-4">
                <dt class="font-normal text-gray-500 dark:text-gray-400">Сумма</dt>
                <dd class="font-medium text-gray-900 dark:text-white">
                  {{ formatPrice(summ) }}
                </dd>
              </dl>

              <dl class="flex items-center justify-between gap-4">
                <dt class="font-normal text-gray-500">Скидка</dt>
                <dd class="text-base font-medium text-green-500">-1299</dd>
              </dl>

              <dl class="flex items-center justify-between gap-4">
                <dt class="font-normal text-gray-500">Доставка</dt>
                <dd class="font-medium text-gray-900">500</dd>
              </dl>

              <dl class="flex items-center justify-between gap-4">
                <dt class="font-normal text-gray-500">НДС</dt>
                <dd class="font-medium text-gray-900">включено</dd>
              </dl>
            </div>

            <dl class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
              <dt class="text-lg font-bold text-gray-900">Итого</dt>
              <dd class="text-lg font-bold text-gray-900">
                {{ formatPrice(total) }}
              </dd>
            </dl>
          </div>
        </div>

        <!-- История заказа -->

        <div class="mt-6 grow sm:mt-8 lg:mt-0">
          <div class="mb-3 space-y-6 rounded-lg border border-gray-200 bg-white p-6 shadow-md">
            <div class="flex justify-between items-center">
              <h3 class="text-xl font-semibold text-gray-900">История </h3>
              <button
                type="button"
                class="rounded-lg border border-gray-400 bg-gray-100 px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-white hover:text-sky-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
                Отмена заказа
              </button>
            </div>
            

            <ol class="relative ms-7 border-s border-gray-300">
              <li class="mb-10 ms-8">
                <span
                  class="absolute -start-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white border-2 border-gray-300"
                  :class="setStatusColor(order.status, 'Создан')">
                  <svg class="h-5 w-5" aria-hidden="true" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
                  </svg>
                </span>
                <h4 class="mb-0.5 text-base font-semibold text-gray-900 ">Создан</h4>
                <p class="text-sm font-normal">{{ '11.12.24' }}</p>
              </li>

              <li class="mb-10 ms-8">
                <span
                  class="absolute -start-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white border-2 border-gray-300"
                  :class="setStatusColor(order.status, 'В сборке')">
                  <svg  class="h-5 w-5"  width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M20 3H4a2 2 0 0 0-2 2v2a2 2 0 0 0 1 1.72V19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.72A2 2 0 0 0 22 7V5a2 2 0 0 0-2-2M4 5h16v2H4zm1 14V9h14v10z" />
                    <path fill="currentColor" d="M8 11h8v2H8z"/>
                  </svg>
                </span>
                <h4 class="mb-0.5 text-base font-semibold text-gray-900 ">В сборке</h4>
                <p class="text-sm font-normal">{{ '05.01.25' }}</p>
              </li>

              <li class="mb-10 ms-8 text-primary-700 dark:text-primary-500">
                <span class="absolute -start-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white border-2 border-gray-300"
                :class="setStatusColor(order.status, 'В пути')">
                  <svg class="h-5 w-5 text-gray-500" aria-hidden="true" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>
                  </svg>
                </span>
                <h4 class="mb-0.5 font-semibold">В пути</h4>
                <p class="text-sm font-normal">{{ '10.01.25' }}</p>
              </li>

              <li class=" ms-8 text-primary-700 dark:text-primary-500">
                <span class="absolute -start-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white border-2 border-gray-300"
                :class="setStatusColor(order.status, 'Доставлен')">
                  <svg class="h-5 w-5 text-gray-500" aria-hidden="true" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"/>
                  </svg>
                </span>
                <h4 class="mb-0.5 text-base font-semibold">Доставлен</h4>
                <p class="text-sm font-normal">{{ '22.01.25' }}</p>
              </li>

            </ol>
          </div>

          <!-- Адрес доставки -->
          <div class="space-y-6 rounded-lg border border-gray-200 bg-white p-6 shadow-md">
            <h4 class="text-lg font-semibold text-gray-900 dark:text-white">Оплата и Доставка</h4>
            <div class="mt-6 space-y-4 border-b border-t border-gray-200 py-6 dark:border-gray-700 sm:mt-8">
                <dl>
                  <dt class="text-base font-medium text-gray-900 dark:text-white flex justify-left items-center gap-4">
                      <svg width="20" height="20" viewBox="0 0 14 14">
                        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M12 7.5v-2a1 1 0 0 0-1-1H1.5a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1H11a1 1 0 0 0 1-1V10M3.84 2L9.51.52a.49.49 0 0 1 .61.36L10.4 2"/>
                          <rect width="3.5" height="2.5" x="10" y="7.5" rx=".5"/></g>
                      </svg>
                      <span>-</span>
                      <span class="text-gray-500">{{ order.payment }}</span>
 
                  </dt>
                  <dt class="text-base font-medium text-gray-900 dark:text-white flex justify-left items-center gap-4">

                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
                        <path fill="currentColor" d="m29.482 8.624l-10-5.5a1 1 0 0 0-.964 0l-10 5.5a1 1 0 0 0 0 1.752L18 15.591V26.31l-3.036-1.67L14 26.391l4.518 2.485a1 1 0 0 0 .964 0l10-5.5A1 1 0 0 0 30 22.5v-13a1 1 0 0 0-.518-.876M19 5.142L26.925 9.5L19 13.858L11.075 9.5Zm9 16.767l-8 4.4V15.59l8-4.4Z"/>
                        <path fill="currentColor" d="M10 16H2v-2h8zm2 8H4v-2h8zm2-4H6v-2h8z"/>
                      </svg>
                      <span>-</span>
                      <span class="text-gray-500">{{ order.delivery }}</span>

                  </dt>

                  <dd class="mt-3 text-base font-normal text-gray-500 dark:text-gray-400">
                    {{ order.personal_data?.address }}
                  </dd>
                </dl>

                <button
                  type="button"
                  disabled
                  class="disabled:cursor-not-allowed disabled:text-sky-300 text-base font-medium text-sky-500 dark:text-sky-500"
                >
                  Редактировать
                </button>
              </div>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, ref } from "vue"

const { order } = defineProps({
  order: {
    type: Object
  }
})

const photos = ref([]);


onMounted(() => {
  const state = useMarketStore();
  photos.value = state.photos;
})

const statuses = [
  "Создан", "В сборке", "В пути", "Доставлен"
]


function getTypeById(id) {
  if (id === 8) return 'terminals'
  if (id === 4) return 'printers'
  if (id === 5) return 'scaners'
  else return 'parts'
}

function setStatusColor(orderStatus, stepStatus) {
  const idxOrderStatus = statuses.indexOf(orderStatus);
  const idxStepStatus = statuses.indexOf(stepStatus);

  if (idxStepStatus <= idxOrderStatus) return 'bg-green-400 text-white';
}

const summ = computed(() => {
  return order?.goods.reduce((acc, item) => {
    return (acc + (item.price * item.qty))
  }, 0)
})

const total = computed(() => {
  return summ.value - 1299 + 500;
})

function getPhotos(id) {
  const urls = photos.value
    .filter(photo => photo.JIRA_MARKET_ID === id)
    .map(item => item.URL);
  return urls[0];
}


function formatPrice(value) {
  return value.toLocaleString("ru", { style: "currency", currency: "RUB" })
}

</script>

<style>

</style>
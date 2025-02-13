<template>
  <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div class="mx-auto max-w-screen-xl px-2 2xl:px-0">
          <div class="mx-auto max-w-7xl">
          <div class="gap-4 sm:flex sm:items-center sm:justify-between">
              <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Мои заказы</h2>


              <div class="mt-6 gap-4 space-y-4 sm:mt-0 sm:flex sm:items-center sm:justify-end sm:space-y-0">
              <div>
                  <label for="order-type" class="sr-only mb-2 block text-sm font-medium text-gray-900 dark:text-white">Выберите тип заказа</label>
                  <select id="order-type" class="block w-full min-w-[8rem] rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                  <option selected>Все заказы</option>
                  <option value="pre-order">Предзаказ</option>
                  <option value="transit">В пути</option>
                  <option value="confirmed">Подтверждённые</option>
                  <option value="cancelled">Отменённые</option>
                  </select>
              </div>

              <span class="inline-block text-gray-500 dark:text-gray-400"> за </span>

              <div>
                  <label for="duration" class="sr-only mb-2 block text-sm font-medium text-gray-900 dark:text-white">Выберите период</label>
                  <select id="duration" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                  <option selected>неделю</option>
                  <option value="this month">месяц</option>
                  <option value="last 3 months">три месяца</option>
                  <option value="lats 6 months">пол года</option>
                  <option value="this year">год</option>
                  </select>
              </div>
              </div>
          </div>

          <div class="mt-6 flow-root sm:mt-8">
              <div class="divide-y divide-gray-200 dark:divide-gray-700">
              
                  <div
                    v-for="order in orders"
                    :key="order._id"
                    class="flex flex-wrap items-center gap-y-4 py-6">

                    <dl class="w-full grid sm:grid-cols-2 lg:flex lg:w-72 lg:items-center lg:justify-start gap-2">
                      <dd class="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">

                        <div v-if="!photos.length">
                          <el-skeleton
                            animated>
                            <template #template>
                              <el-skeleton-item variant="image" style="width: 80px; height: 80px" />
                            </template>
                          </el-skeleton>
                        </div>

                        <div v-else class="flex justify-between items-center gap-2">
                          <img
                            v-for="photo in getPhotos(order)"
                            :key="photo"
                            :src="photo || useAsset('nophoto.jpg')" class="h-20 w-20" />
                        </div>
                      </dd>
                    </dl>

                    <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                      <dt class="text-base font-medium text-gray-500 dark:text-gray-400">№:</dt>
                      <dd class="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                        <a href="#" class="hover:underline">{{ order._id.slice(16, -1) }}</a>
                      </dd>
                    </dl>

                    <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                      <dt class="text-base font-medium text-gray-500 dark:text-gray-400">Дата:</dt>
                      <dd class="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">{{ formatDate(order.date) }}</dd>
                    </dl>

                    <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                      <dt class="text-base font-medium text-gray-500 dark:text-gray-400">Цена:</dt>
                      <dd class="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">{{ formatPrice(order.price) }}</dd>
                    </dl>

                    <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                      <dt class="text-base font-medium text-gray-500 dark:text-gray-400">Статус:</dt>


                      <dd v-if="order.status === 'Предзаказ' || order.status === 'Создан'" class="me-2 mt-1.5 inline-flex items-center rounded bg-sky-100 px-2.5 py-0.5 text-sm font-medium text-sky-600 dark:bg-primary-900 dark:text-primary-300">

                        <svg v-if="order.status === 'Создан'" class="me-1 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
                        </svg>

                        <svg v-if="order.status === 'Предзаказ'" class="me-1 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.5 4h-13m13 16h-13M8 20v-3.333a2 2 0 0 1 .4-1.2L10 12.6a1 1 0 0 0 0-1.2L8.4 8.533a2 2 0 0 1-.4-1.2V4h8v3.333a2 2 0 0 1-.4 1.2L13.957 11.4a1 1 0 0 0 0 1.2l1.643 2.867a2 2 0 0 1 .4 1.2V20H8Z" />
                        </svg>
                        
                        {{ order.status }}
                      </dd>

                      <dd v-if="order.status === 'В пути'" class="me-2 mt-1.5 inline-flex items-center rounded bg-yellow-100 px-2.5 py-0.5 text-sm font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                        <svg class="me-1 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
                        </svg>
                        {{ order.status }}
                      </dd>

                      <dd v-if="order.status === 'Подтверждён'" class="me-2 mt-1.5 inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-sm font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                        <svg class="me-1 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
                        </svg>
                        {{ order.status }}
                      </dd>

                      <dd v-if="order.status === 'Отменён'" class="me-2 mt-1.5 inline-flex items-center rounded bg-red-100 px-2.5 py-0.5 text-sm font-medium text-red-800 dark:bg-red-900 dark:text-red-300">
                        <svg class="me-1 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
                        </svg>
                        {{ order.status }}
                      </dd>



                    </dl>

                    <div class="w-full grid sm:grid-cols-2 lg:flex lg:w-64 lg:items-center lg:justify-end gap-4">
                      <button
                        type="button"
                        class="w-full rounded-lg border border-red-700 px-3 py-2 text-center text-sm font-medium text-red-700 hover:bg-red-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:bg-red-600 dark:hover:text-white dark:focus:ring-red-900 lg:w-auto">
                        Отмена заказа
                      </button>
                      <NuxtLink
                        :to="`/${route.name}/${order._id}`"
                        class="w-full inline-flex justify-center rounded-lg  border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 lg:w-auto">
                        Подробнее
                      </NuxtLink>
                    </div>
                  </div>

              </div>
            </div>

          <!-- <nav class="mt-6 flex items-center justify-center sm:mt-8" aria-label="Page navigation example">
              <ul class="flex h-8 items-center -space-x-px text-sm">
              <li>
                  <a href="#" class="ms-0 flex h-8 items-center justify-center rounded-s-lg border border-e-0 border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  <span class="sr-only">Назад</span>
                  <svg class="h-4 w-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7" />
                  </svg>
                  </a>
              </li>
              <li>
                  <a href="#" class="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
              </li>
              <li>
                  <a href="#" class="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
              </li>
              <li>
                  <a href="#" aria-current="page" class="z-10 flex h-8 items-center justify-center border border-primary-300 bg-primary-50 px-3 leading-tight text-primary-600 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
              </li>
              <li>
                  <a href="#" class="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
              </li>
              <li>
                  <a href="#" class="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">100</a>
              </li>
              <li>
                  <a href="#" class="flex h-8 items-center justify-center rounded-e-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  <span class="sr-only">Вперед</span>
                  <svg class="h-4 w-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7" />
                  </svg>
                  </a>
              </li>
              </ul>
          </nav> -->

        </div>
      </div>
</section>
</template>
  
<script setup>
import { onMounted, ref } from "vue"

defineProps({
  orders: Array
})

const route = useRoute();

const photos = ref([]);

function formatDate(value) {
  return new Date(value)?.toLocaleDateString("ru", { hour: "2-digit", minute: "2-digit" })
}

function formatPrice(value) {
  return value?.toLocaleString('ru', { style: "currency", currency: 'RUB' })
}

onMounted(() => {
  const state = useMarketStore();
  photos.value = state.photos;
})

function getPhotos(order) {
  const ids = order.goods.map(item => item.id);

  const urls = photos.value
    .filter(data => ids.includes(data.JIRA_MARKET_ID))
    .map(item => item.URL);

  return urls.slice(0, 3);
}

</script>
  
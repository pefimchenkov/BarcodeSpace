<template>
  <section class="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
      <div v-if="good" class="max-w-screen-xl px-2 mx-auto 2xl:px-0">
        <div class="lg:grid lg:grid-cols-2 lg:gap-4 xl:gap-8">
          <div class="shrink-0 max-w-md lg:max-w-lg mx-auto">

            <div class="flex relative w-[512px] h-[430px] border-2 rounded-lg p-2">
              <NuxtImg :src="setActive() || useAsset('nophoto.jpg')" class="absolute max-w-[97%] max-h-[97%]" />
            </div>
            <!-- src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" -->
  
            <div :key="key" class="flex justify-left items-center mt-5 gap-2 flex-wrap">
              <img
                v-for="(photo, i) in filteredPhotos"
                :key="i"
                :src="photo.URL"
                class="max-w-[122px] max-h-[120px] rounded-lg cursor-pointer"
                :class="{ 'active': photo.active }"
                @click="changePhoto(i)"
              />
            </div>
          </div>
  
          <div class="mt-6 sm:mt-8 lg:mt-0 sm:justify-center sm:px-1 xs:justify-center xs:px-4">
            <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
              {{ good.marketNAME }}
            </h1>
            <div class="mt-3 sm:items-center sm:gap-3 sm:flex">
              <p
                class="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white"
              >
                {{ formatPrice(good.priceCLIENT) }}
              </p>
  
              <div class="flex items-center gap-2 mt-2 sm:mt-0">
                <div class="flex items-center gap-1">
                  <svg
                    class="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                    />
                  </svg>
                  <svg
                    class="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                    />
                  </svg>
                  <svg
                    class="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                    />
                  </svg>
                  <svg
                    class="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                    />
                  </svg>
                  <svg
                    class="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                    />
                  </svg>
                </div>
                <p
                  class="text-sm font-medium leading-none text-gray-500 dark:text-gray-400"
                >
                  (5.0)
                </p>
                <a
                  href="#"
                  class="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white"
                >
                  345 Reviews
                </a>
              </div>
            </div>
  
            <div class="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
  
              
              <div class="flex items-center py-2.5 text-sm font-medium">
                <label for="counter-input" class="">Количество:</label>
                  <el-input-number
                      v-model="qty"
                      size="large"
                      :min="0"
                      :max="1000"
                      class="ml-2">
                  </el-input-number>
                </div>
  
              <a
                href="#"
                title=""
                class="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                role="button"
              >
                <svg
                  class="w-5 h-5 -ms-2 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                  />
                </svg>
                В избранное
              </a>
  
              <a
                @click="addData(good, qty)"
                href="#"
                title=""
                class="text-white mt-4 sm:mt-0 bg-sky-500 hover:bg-sky-600 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-sky-500 dark:hover:bg-sky-600 focus:outline-none dark:focus:ring-sky-700 flex items-center justify-center"
                role="button"
              >
                <svg
                  class="w-5 h-5 -ms-2 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                  />
                </svg>
  
                В корзину
              </a>
            </div>

            <hr class="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
  
            <div class="flex gap-x-12 items-center mb-5">
              <div>
                <div class="text-lg font-semibold mb-1">Партномер</div>
                <div class="bg-gray-100 text-gray-800 min-w-[145px] min-h-[30px] text-md font-medium me-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-gray-400 border border-gray-500">{{ good.marketPN }}</div>
              </div>

              <div>
                <p class="text-lg font-semibold mb-1">Артикул</p>
                <div class="bg-gray-100 text-gray-800 min-w-[145px] min-h-[30px] text-md font-medium me-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-gray-400 border border-gray-500">{{ 'BCS-' + route.params.id }}</div>
              </div>
              <div>
                <div class="text-lg font-semibold mb-1">Модели</div>
                <div class="bg-gray-100 text-gray-800  text-md min-w-[145px] min-h-[30px] font-medium me-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-gray-400 border border-gray-500">{{ good.marketMODELS }}</div>
              </div>
            </div>

            <div class="flex gap-x-12  items-center ">
              <div>
                <div class="text-lg font-semibold mb-1">Состояние</div>
                <div class="bg-gray-100 text-gray-800 min-w-[145px] min-h-[30px] text-md font-medium me-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-gray-400 border border-gray-500">{{ good.marketCOND }}</div>
              </div>

              <div>
                <p class="text-lg font-semibold mb-1">Класс</p>
                <div class="bg-gray-100 text-gray-800 min-w-[145px] min-h-[30px] text-md font-medium me-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-gray-400 border border-gray-500">{{ good.marketCLASS }}</div>
              </div>
              <div>
                <p class="text-lg font-semibold mb-1">Склад</p>
                <div class="bg-gray-100 text-gray-800 min-w-[145px] min-h-[30px] text-md font-medium me-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-gray-400 border border-gray-500">{{ formatSklad(good) }}</div>
              </div>
            </div>

                    

            <hr class="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
  
            <h1 class="text-lg font-semibold mb-2">Описание:</h1>
            <p class="mb-6 text-gray-500 dark:text-gray-400">
              {{ good.marketDESC }}
            </p>
  
          </div>
        </div>
      </div>
    </section>
</template>
  
  <script setup>
  import useAsset from "~/composables/useAsset";
  const { addData } = useCartStore();
  const { photos, getPhotos } = useMarketStore();
  const route = useRoute();

  if (!photos.length) await getPhotos();
  const qty = ref(1);
  const key = ref(1)

  const filteredPhotos = photos
    .filter(photo => photo.JIRA_MARKET_ID === +route.params.id)
    .map((photo, i) => {
      return { ...photo, active: i === 0 ? true : false }
    });

  //console.log('filteredPhotos', filteredPhotos)
  
  const { good } = defineProps({
    good: { type: Object }
  })


  
  function formatPrice(price) {
    return price?.toLocaleString("ru", { style: "currency", currency: "RUB" })
  }
  
  function formatSklad(item) {
      return Number(item.marketATLAS + item.marketIM);
  }

  async function changePhoto(index) {
    filteredPhotos.forEach((photo, i) => {
      if (i === index) filteredPhotos[i].active = true;
      else filteredPhotos[i].active = false;
    })
    key.value++
  }

  function setActive() {
    return filteredPhotos.find(photo => photo.active)?.URL
  }
  
  </script>


<style scoped>

.active {
  border: 3px solid #0ea5e9;
}

</style>
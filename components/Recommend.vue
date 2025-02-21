<template>
    <div class="hidden xl:mt-8 xl:block">
        <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">Рекомендуем также</h3>

        <div class="mt-6 grid grid-cols-3 gap-4 sm:mt-8">

            <div
                v-for="item in selected"
                :key="item.marketid"
                class="flex flex-col space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">

                <NuxtLink :to="`/${getTypeById(item.marketTypeID)}/${item.marketid}`" class="overflow-hidden rounded">
                    <img class="mx-auto h-44 w-44 dark:hidden" :src="setPhoto(item.marketid) || useAsset('noproduct.png')" :alt="item?.marketNAME" />
                </NuxtLink>

                <div>
                    <NuxtLink :to="`/${getTypeById(item.marketTypeID)}/${item.marketid}`"
                        class="text-md font-semibold leading-tight text-gray-700 hover:underline"
                        style="display: inline-flex; height: 70px;">
                        {{ item?.marketNAME }}
                    </NuxtLink>
                   <!--  <p class="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">{{ item?.marketDESC }}</p> -->
                </div>

                <div>
                    <p class="text-lg font-bold text-gray-900 dark:text-white">
                    <span class="line-through">{{ formatPrice(item?.priceCLIENT + 500) }}</span>
                    </p>
                    <p class="text-lg font-bold leading-tight text-red-600 dark:text-red-500">{{ formatPrice(item?.priceCLIENT)}}</p>
                </div>

                <div class="flex items-center justify-between gap-2.5">
                    <button
                        data-tooltip-target="favourites-tooltip-1"
                        type="button"
                        class="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-sky-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
                        <svg class="h-5 w-5" aria-hidden="true" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"></path>
                        </svg>
                    </button>

                    <button
                        @click="addData(item, (setPhoto(item.marketid) || useAsset('nophoto.jpg')))"
                        type="button"
                        class="inline-flex items-center justify-center rounded-lg bg-sky-500 px-5 py-2.5 text-sm font-medium  text-white hover:bg-sky-600 focus:outline-none focus:ring-4 focus:ring-sky-300 dark:bg-sky-500 dark:hover:bg-sky-600 dark:focus:ring-sky-800">
                        <svg class="h-5 w-5" aria-hidden="true"  width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4" />
                        </svg>
                    </button>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const selected = ref([]);
const { data, getTypeById } = useMarketStore();
const { photos } = useMarketStore();
const { addData } = useCartStore();
const route = useRoute();


const min = 1;
const last = data[data.length -1];
const max = data.indexOf(last);
const random = generateRandomNumbers(min, max);

selected.value.push(data[random]);
selected.value.push(data[generateRandomNumbers(min, random)]);
selected.value.push(data[generateRandomNumbers(random, max)]);

function setPhoto(id) {
  const photo = photos.find(item => item.JIRA_MARKET_ID === id);
  return photo?.URL
}

function generateRandomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min - 1)) + min;
}

function formatPrice(price) {
  return price?.toLocaleString("ru", { style: "currency", currency: "RUB" });
}


</script>

<style scoped>


</style>

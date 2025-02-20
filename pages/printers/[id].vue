<template>
  <div
    :class="{ 'h-[77dvh]': !goods.length }"
    class="flex justify-center items-center">

      <div
          v-if="loadingStatus !== 'success'"
          class="mx-auto max-w-screen-sm text-center"
          >
          <Loader />
      </div>
      
      <div v-else-if="!good">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center">
            <img :src="useAsset('noproduct.png')" class="mb-4" style="justify-self: center" />
            <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Товар не найден.</p>
            <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Извините, похоже товар отсутствует в базе. Вернитесь обратно и попробуйте поискать что то другое... </p>
            <a href="#" @click="gotoBack" class="inline-flex text-white bg-sky-500 hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">
              К товарам
            </a>
        </div>   
    </div>
      </div>

      <div v-else class="p-2 w-full" >
          <GoodDetail
            v-if="goods.length"
            :good="good"
          />
      </div>

  </div>
</template>

<script setup>
import useAsset from "~/composables/useAsset";
import { onMounted, ref } from 'vue';
const route = useRoute();

let good = ref();
let goods = ref([]);
let loadingStatus = ref('pending')

onMounted(() => {
  const { data, status } = useMarketStore();

  goods.value = data
  good.value = data.find(item => item.marketid === +route.params.id);
  loadingStatus.value = status;
})

async function gotoBack() {
    const { history } = useRouter().options;
    await navigateTo(history.state.back);
}
</script>
<template>
    <div
        class="columns-2 flex">
        <Filters />
        <div class="p-2 w-full relative">
            <h1 class="flex justify-center items-center text-xl m-5">
                Принтеры этикеток ({{ printers.length }} шт.)
            </h1>

            <div
                v-if="!printers.length"
                class="text-center relative -translate-x-1/2 -translate-y-1/2 left-1/2"
                style="top: 40%">
                <Loader />
            </div>
            <Goods :goods="printers" />
        </div>
    </div>
</template>

<script setup>

import { onMounted, ref } from 'vue';

const printers = ref([]);

onMounted(() => {
    const { data } = useMarketStore();
    printers.value = data.filter(item => item.marketTypeID === 4);
})


</script>
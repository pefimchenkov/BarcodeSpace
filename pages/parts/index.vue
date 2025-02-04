<template>
    <div
        class="columns-2 flex">
        <Filters />
        <div class="p-2 w-full relative">
            <h1 class="flex justify-center items-center text-xl m-5">
                Запчасти ({{ parts.length }} шт.)
            </h1>
            <div
                v-if="!parts.length"
                class="text-center relative -translate-x-1/2 -translate-y-1/2 left-1/2"
                style="top: 40%">
                <Loader />
            </div>
            <Goods :goods="parts" />
        </div>
    </div>
</template>

<script setup>

import { onMounted, ref } from 'vue';

const parts = ref([]);

onMounted(() => {
    const { data } = useMarketStore();
    parts.value = data
        .filter(item => ![8, 5, 4].includes(item.marketTypeID))
        .splice(0, 100)
})

</script>
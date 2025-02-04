<template>
    <div
        class="columns-2 flex">
        <Filters />
            <div class="p-2 w-full relative" >
                <h1
                    class="flex justify-center items-center text-xl m-5">
                    Терминалы сбора данных ({{ terminals.length }} шт.)
                </h1>
                <div
                    v-if="!terminals.length"
                    class="text-center relative -translate-x-1/2 -translate-y-1/2 left-1/2"
                    style="top: 40%">
                    <Loader />
                </div>
                <Goods v-else :goods="terminals"></Goods>
            </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const terminals = ref([]);

onMounted(() => {
    const { data } = useMarketStore();
    terminals.value = data
        .filter(item => item.marketTypeID === 8)
        .slice(0, 100)
})



</script> 

<style scoped>

</style>
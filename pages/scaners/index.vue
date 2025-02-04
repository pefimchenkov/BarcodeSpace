<template>
    <div
        class="columns-2 flex">

        <Filters
            v-if="scaners.length"
            :goods="scaners"
            @searching="doSearch"
        />

        <aside v-else class="flex flex-col w-[22rem] px-5 py-8 gap-y-10  bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700 custom-height">
            <h1 class="text-xl text-center mb-8 text-gray-800 lg:text-2xl dark:text-white">Фильтры</h1>
            <el-skeleton :rows="1" animated class="mt-3" />
            <el-skeleton :rows="1" animated class="mt-1" />
            <el-skeleton :rows="1" animated class="mt-1" />
            <el-skeleton :rows="1" animated class="mt-1" />
            <el-skeleton :rows="1" animated class="mt-1" />
        </aside>

        <div class="p-2 w-full" >
            <div class="lg:flex justify-between items-center">
                <h1 class="lg:flex justify-left items-center text-xl m-5 basis-1/2">
                    Сканеры штрих-кода ({{ filteredScaners.length }} шт.)
                </h1>
                <TextSearch
                    class="basis-2/3"
                    :goods="scaners"
                    @searching="doSearch"
                />
            </div>

            <div
                v-if="!filteredScaners.length"
                class="text-center relative -translate-x-1/2 -translate-y-1/2 left-1/2"
                style="top: 40%">
                <Loader />
            </div>
            <Goods :goods="filteredScaners" />
            
        </div>

    </div>
</template>

<script setup>

import { onMounted, ref } from 'vue';

const scaners = ref([]);
const filteredScaners = ref([]);

onMounted(() => {
    const { data } = useMarketStore();
    filteredScaners.value = scaners.value = data.filter(item => item.marketTypeID === 5);
})

function doSearch(value) {
    filteredScaners.value = value;
}



</script>
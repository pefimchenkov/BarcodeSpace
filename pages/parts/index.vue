<template>
    <div
        class="columns-2 flex">

        <Filters
            v-if="parts.length"
            :goods="parts"
            @searching="doFilters"
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
                    ЗИП и Аксессуары ({{ filteredParts.length }} шт.)
                </h1>
                <TextSearch
                    v-if="parts.length"
                    class="basis-2/3"
                    :goods="parts"
                    @searching="doSearch"
                />
            </div>

            <div
                v-if="isVisible"
                class="text-center relative -translate-x-1/2 -translate-y-1/2 left-1/2"
                style="top: 40%">
                <Loader />
            </div>
            <Goods :goods="filteredParts" />
            
        </div>

    </div>
</template>

<script setup>
import { onMounted, ref, reactive, computed, watch } from 'vue';

const { getIntersection } = useFiltersStore();

const parts = ref([]);
const filteredParts = ref([]);

definePageMeta({
  name: "parts",
  breadcrumbs: "ЗИП и Аксессуары ",
});

const state = reactive({
    searchData: [],
    filtersData: [],
});

const isVisible = computed(() => {
    return !filteredParts.value.length && Array.isArray(filteredParts.value)
})

watch(
    () => ({ ...state }),
    ({ searchData, filtersData }) => {
        const ids = getIntersection(searchData, filtersData);
        filteredParts.value = parts.value.filter(item => ids.includes(item.marketid));
    }
)

onMounted(() => {
    const { data } = useMarketStore();
    filteredParts.value = parts.value = data
        .filter(item => ![4, 5, 8].includes(item.marketTypeID))
        .slice(0, 100);
})

function doFilters(data) {
    state.filtersData = data;
}

function doSearch(data) {
    state.searchData = data;
}




</script>
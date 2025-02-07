<template>
    <aside class="flex flex-col w-[24rem] px-5 py-8 gap-y-10  bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700 custom-height">
    
        <h1 class="text-xl text-center pt-16 text-gray-800 lg:text-2xl dark:text-white items-end">Фильтры</h1>

            <div>
                <p class="text-center">По диапазону цены:</p>
                <el-slider
                    v-model="filters.prices"
                    range
                    :step="1000"
                    :max="200000"
                    :min="0"
                    :marks="marks"
                />
            </div>

            <div>
                <p>По моделям</p>
                <el-select
                    v-model="filters.models"
                    multiple
                    filterable
                    clearable
                    tag-type="warning"
                    tag-effect="dark"
                    size="large"
                    placeholder="Множественный выбор"
                    >
                    <el-option
                        v-for="item in modelsOptions"
                        :key="item"
                        :label="item"
                        :value="item"
                    />
                </el-select>

            </div>

            <div>
                <p>По классам</p>
                <el-select
                    v-model="filters.classes"
                    tag-type="warning"
                    tag-effect="dark"
                    multiple
                    filterable
                    clearable
                    size="large"
                    placeholder="Множественный выбор"
                    >
                    <el-option
                        v-for="item in classesOptions"
                        :key="item"
                        :label="item"
                        :value="item"
                    />
                </el-select>
            </div>

            <div>
                <p>По состояниям</p>
                <el-select
                    v-model="filters.conditions"
                    tag-type="warning"
                    tag-effect="dark"
                    multiple
                    filterable
                    clearable
                    size="large"
                    placeholder="Множественный выбор"
                    
                    >
                    <el-option
                        v-for="item in conditionsOptions"
                        :key="item"
                        :label="item"
                        :value="item"
                    />
                </el-select>
            </div>

            <el-checkbox
                v-model="filters.instock"
            >Наличие на складе
            </el-checkbox>

    </aside>
</template>


<script setup>
import { ref, toRaw, reactive, onMounted } from 'vue'

const emits = defineEmits(['searching']);
const { goods } = defineProps(['goods']);
const { getFilters, setFilters } = useFiltersStore();

let filters = getFilters();

const marks = reactive({
    50000: '50 т.р',
    100000: '100 т.р.',
    150000: '150 т.р.',
});

const modelsOptions = ref([]);
const classesOptions = ref([]);
const conditionsOptions = ref([]);


onMounted(() => {
    setFiltersOptions();
})


watch(
    () => ({ ...filters }),
    ({ prices, models, classes, conditions, instock }) => {

        const data = [];

        const filteredPrices = goods
            .filter(item => item.priceCLIENT <= Math.max(...filters.prices) && item.priceCLIENT >= Math.min(...filters.prices))
            .map(item => item.marketid);

        const filteredModels = goods
            .filter(item => models.includes(item.marketMODELS))
            .map(item => item.marketid);

        const filteredClasses = goods
            .filter(item => classes.includes(item.marketCLASS))
            .map(item => item.marketid);

        const filteredConditions = goods
            .filter(item => conditions.includes(item.marketCOND))
            .map(item => item.marketid);

        const filteredStock = instock
            ? goods.filter(item => (item.marketATLAS + item.marketIM) > 0).map(item => item.marketid)
            : [];


        if (filteredPrices.length) data.push(toRaw(filteredPrices));
        if (filteredModels.length) data.push(toRaw(filteredModels));
        if (filteredClasses.length) data.push(toRaw(filteredClasses));
        if (filteredConditions.length) data.push(toRaw(filteredConditions));
        if (filteredStock.length) data.push(toRaw(filteredStock));

        const isIntersect = intersection(data);

        const result = isIntersect
            ? goods.filter(item => isIntersect.includes(item.marketid)).map(item => item.marketid)
            : goods.map(item => item.marketid);

        setFilters(filters);

        emits('searching', result.length ? result : false);

    }, { immediate: true }
);



function intersection(arrays) {
    if (arrays.length <= 1) return arrays[0];
    const result = arrays.reduce((a, b) => {
        return a.filter(c => b.includes(c));
    });

    return [...new Set(result)];
};
    


function setFiltersOptions() {
    const allModels = goods.map(item => {
        return item.marketMODELS;
    });

    const allClasses = goods.map(item => {
        return item.marketCLASS;
    });


    const allConditions = goods.map(item => {
        return item.marketCOND;
    });


    modelsOptions.value = new Set([...toRaw(allModels)].filter(i => i));
    classesOptions.value = new Set([...toRaw(allClasses)].filter(i => i));
    conditionsOptions.value = new Set([...toRaw(allConditions)].filter(i => i));
}


</script>
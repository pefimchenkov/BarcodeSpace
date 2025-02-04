<template>
    <aside class="flex flex-col w-[22rem] px-5 py-8 gap-y-10  bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700 custom-height">
    
        <h1 class="text-xl text-center mb-8 text-gray-800 lg:text-2xl dark:text-white">Фильтры</h1>

            <div>
                <p class="text-center">По диапазону цены:</p>
                <el-slider
                    v-model="price"
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
                    v-model="models"
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
                    v-model="classes"
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
                    v-model="conditions"
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
                v-model="inStock"
            >Наличие на складе
            </el-checkbox>

    </aside>
</template>


<script setup>
import { ref, toRaw, reactive, onMounted } from 'vue'

const emits = defineEmits(['searching']);
const { goods } = defineProps(['goods']);

onMounted(() => {
    getFilters();
    filteredGoods.value = goods;
})

const models = ref([]);
const classes = ref([]);
const conditions = ref([]);
const inStock = ref(false);
const price = ref([1, 200000]);

const modelsOptions = ref([]);
const classesOptions = ref([]);
const conditionsOptions = ref([]);

const filteredPrice = ref([]);
const filteredModels = ref([]);
const filteredClasses = ref([]);
const filteredConditiobs = ref([]);
const filteredStock = ref(false);


const marks = reactive({
    50000: '50 т.р',
    100000: '100 т.р.',
    150000: '150 т.р.',
});

watch(price, (value) => {
    const data = toRaw(value);

    if (!value) emits('searching', goods);
    filteredPrice.value = goods.filter(item => item.priceCLIENT <= Math.max(...data) && item.priceCLIENT >= Math.min(...data));
    emits('searching', filteredGoods.value);
});

watch(models, (value) => {
    const data = toRaw(value);

    //if (!data.length) return emits('searching', goods);
    filteredModels.value = goods.filter(item => data.includes(item.marketMODELS));
    emits('searching', filteredGoods.value);

});

watch(classes, (value) => {
    const data = toRaw(value);

    //if (!data.length) return emits('searching', goods);
    filteredClasses.value = goods.filter(item => data.includes(item.marketCLASS));
    emits('searching', filteredGoods.value);

});

watch(conditions, (value) => {
    const data = toRaw(value);

    //if (!data.length) return emits('searching', goods);
    filteredConditiobs.value = goods.filter(item => data.includes(item.marketCOND));
    emits('searching', filteredGoods.value);

});

watch(inStock, (value) => {
    const data = toRaw(value);

    //if (!data) return emits('searching', goods);
    filteredStock.value = goods.filter(item => (item.marketATLAS + item.marketIM) > 0);
    emits('searching', filteredGoods.value);

}, {immediate:true});



function getFilters() {
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
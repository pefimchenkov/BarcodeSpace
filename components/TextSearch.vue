<template>
    <el-input
      v-model="search.text"
      clearable
      size="large"
      placeholder="Поиск по тексту"
      class="input-with-select"
    >
      <template #append>
        <el-button :icon="Search" />
      </template>

      <template #prepend>
        <el-select
            v-model="search.category"
            size="large"
            placeholder="Критерий поиска"
            style="width: 215px"
        >
          <el-option label="В названии" value="name" />
          <el-option label="В цене" value="price" />
          <el-option label="В количестве" value="stock" />
        </el-select>
      </template>
    </el-input>
</template>

<script setup>

import { watch } from 'vue';
import { Search } from '@element-plus/icons-vue';

const emits = defineEmits(['searching']);
const { goods } = defineProps(['goods']);

const { getSearch, setSearch, set } = useFiltersStore();

let search = getSearch();

watch(
  () => ({ ...search }),
  ({ text, category }) => {

    function doFilterData(prop) {
        if (!text) return goods.map(item => item.marketid);

        if (category === 'name')
          return goods.filter(item => item.marketNAME.toLowerCase().includes(prop.toLowerCase())).map(item => item.marketid);
        if (category  === 'price')
          return goods.filter(item => item.priceCLIENT.toString().includes(prop.toString())).map(item => item.marketid);
        if (category  === 'stock')
          return goods.filter(item => (item.marketATLAS + item.marketIM) === +prop).map(item => item.marketid);
    }

    emits('searching', doFilterData(text));
    
  }, { immediate: true }
)

</script>

<style>

.input-with-select .el-input-group__prepend {
  background-color: var(--el-fill-color-blank);
}

</style>
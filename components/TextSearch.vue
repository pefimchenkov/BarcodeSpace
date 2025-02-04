<template>
    <el-input
      v-model="search"
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
            v-model="category"
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

import { ref, watch } from 'vue';
import { Search } from '@element-plus/icons-vue';

const emits = defineEmits(['searching']);
const { goods } = defineProps(['goods']);

const search = ref('');
const category = ref('name');

watch(search, (value) => {
    if (!value) emits('searching', goods);

    console.log('prop', value)
    console.log(goods.filter(item => (item.marketATLAS + item.marketIM) === value))

    function doFilterData(prop) {
        if (category.value === 'name') return goods.filter(item => item.marketNAME.toLowerCase().includes(prop.toLowerCase()));
        if (category.value  === 'price') return goods.filter(item => item.priceCLIENT.toString().includes(prop.toString()));
        if (category.value  === 'stock') return goods.filter(item => (item.marketATLAS + item.marketIM) === +prop);
    }
    emits('searching', doFilterData(value));
})

</script>

<style>

.input-with-select .el-input-group__prepend {
  background-color: var(--el-fill-color-blank);
}

</style>
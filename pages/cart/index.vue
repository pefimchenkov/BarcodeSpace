<template>
    <div
        :key="goods.length"
        class="columns-2 flex">
        <div class="p-2 w-full">
            <CartFull :goods="goods" />
        </div>
    </div>

</template>

<script setup>
import { onMounted, ref } from 'vue';

const goods = ref([]);

onMounted(() => {
    const { data } = useCartStore();
    goods.value = data;
})

</script>
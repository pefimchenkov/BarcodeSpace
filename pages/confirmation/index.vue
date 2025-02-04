<template>
    <div
        class="columns-2 flex">
        <div class="p-2 w-full" >
            <Confirmation />
        </div>
    </div>
</template>

<script setup>

const { data: goods } = useCartStore();

if (!goods.length) await navigateTo('/')


</script>
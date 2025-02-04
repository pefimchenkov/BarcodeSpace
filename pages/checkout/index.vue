<template>
    <div
        class="columns-2 flex">
        <div class="p-2 w-full" >
            <Checkout
                v-if="goods.length"
                :goods="goods"
            />
        </div>
    </div>
</template>

<script setup>

const { data: goods } = useCartStore();

if (!goods.length) await navigateTo('/')

</script>
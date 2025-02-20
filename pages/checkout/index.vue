<template>
    <div
        class="columns-2 flex">
        <div class="p-2 w-full" >
            <Checkout
                v-if="goods.length"
                :goods="goods"
                :last-order="lastOrder"
            />
        </div>
    </div>
</template>

<script setup>
const auth = useAuth();
const { user } = await auth.getSession();

let goods = ref([]);
let lastOrder = ref({})

if (user) {
    const { data } = useCartStore();
    goods.value = data;
    const { getLastOrderByUser } = useOrdersStore();
    lastOrder = await getLastOrderByUser(user._id)

    if (!goods.value.length) {
        await navigateTo('/cart')
    }
    
} else {
    await navigateTo('/login');
}

</script>
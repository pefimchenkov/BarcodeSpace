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
const { data: goods } = useCartStore();
const { getLastOrderByUser } = useOrdersStore();
const auth = useAuth();
const { user } = await auth.getSession();

const lastOrder = await getLastOrderByUser(user._id)


if (!goods.length) await navigateTo('/cart')

</script>
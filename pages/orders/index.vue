<template>
    <div class="columns-2 flex">
        <div class="p-2 w-full relative">

            <div
                v-if="!orders.length"
                class="text-center relative -translate-x-1/2 -translate-y-1/2 left-1/2"
                style="top: 40%">
                <Loader />
            </div>
            <Orders v-else :orders="orders" />
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, toRaw } from 'vue';

const auth = useAuth();
const { user } = await auth.getSession();
const orders = ref([]);

async function getOrders() {
    return await useFetch('/api/orders', {
        method: 'POST',
        body: { userid: user._id }
    })
}

const { status, data } = await getOrders();
orders.value = toRaw(data.value);
console.log(orders.value)
console.log(toRaw(status.value))

</script>
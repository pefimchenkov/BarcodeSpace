<template>
    <div class="columns-2 flex">
        <div
            :class="{ 'h-[77dvh] ': !orders.length }"
            class="p-2 w-full relative">

            <div
                v-if="!orders.length"
                class="text-center absolute -translate-x-1/2 -translate-y-2/4 left-1/2"
                style="top: 50%">
                <Loader />
            </div>
            <Orders
                :orders="orders"
            />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const auth = useAuth();
const { user } = await auth.getSession();

let orders = ref([]);

if (user) {
    const { getOrdersByUser } = useOrdersStore();
    orders.value = await getOrdersByUser(user._id);
} else {
    await navigateTo('/login');
}



</script>
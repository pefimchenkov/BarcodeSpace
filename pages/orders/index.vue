<template>
    <div class="columns-2 flex">
        <div class="p-2 w-full relative">

            <div
                v-if="!orders.length"
                class="text-center relative -translate-x-1/2 -translate-y-1/2 left-1/2"
                style="top: 40%">
                <Loader />
            </div>
            <Orders :orders="orders" />
        </div>
    </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';

const auth = useAuth();
const { user } = await auth.getSession();

const { getOrdersByUser } = useOrdersStore();
const orders = ref([]);


onBeforeMount(async () => {
    orders.value = await getOrdersByUser(user._id)
})

</script>
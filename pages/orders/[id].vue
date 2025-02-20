<template>
  <div>
    <OrderDetails v-if="order" :order="order" />
  </div>
</template>

<script setup>
import { ref } from "vue"
const auth = useAuth();
const { user } = await auth.getSession();
const route = useRoute();

let orders = ref([]);
let order = ref(null);

if (user) {
  const { getOrdersByUser } = useOrdersStore();
  orders.value = await getOrdersByUser(user._id);
  order.value = orders.value.find(item => item._id === route.params.id);
} else {
  await navigateTo('/login');
}



</script>

<style>

</style>
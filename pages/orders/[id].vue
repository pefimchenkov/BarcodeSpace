<template>
  <div>
    <OrderDetails :order="order" />
  </div>
</template>

<script setup>

const auth = useAuth();
const { user } = await auth.getSession();

const { getOrdersByUser } = useOrdersStore();
const route = useRoute();

const orders = await getOrdersByUser(user._id);
const order = orders.find(item => item._id === route.params.id);

</script>

<style>

</style>
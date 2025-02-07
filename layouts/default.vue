<template>
    <div id="app" class="min-h-screen">
      <NuxtLoadingIndicator />
      <Header />
      <Breadcrumbs v-if="route" />
      <slot />
      <Footer class="sticky top-[100vh]" />
    </div>
</template>

<script setup>

const route = useRoute();

</script>
  
  
<template>
    <div id="app" class="min-h-screen">
      <NuxtLoadingIndicator />
      <Header />
      <slot />
      <Footer class="sticky top-[100vh]" />
    </div>
</template>
  
  
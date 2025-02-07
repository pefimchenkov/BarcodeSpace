<template>

    <div id="notfound" class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6" >
        <div class="notfound mx-auto max-w-screen-sm text-center h-full">
            <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-sky-500 dark:text-sky-600">404</h1>
            <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Страница не найдена.</p>
            <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Страница, которую вы ищете, могла быть удалена, ее название изменилось или она временно недоступна. </p>
            <NuxtLink to="/">Домой</NuxtLink>
        </div>   
    </div>

</template>

<style>

#notfound {
  position: relative;
  height: 100vh;
}

#notfound .notfound {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.notfound {
  max-width: 560px;
  width: 100%;
  text-align: center;
  line-height: 1.5;
}

</style>
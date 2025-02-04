<template>
  <section class="bg-white dark:bg-gray-900">
    <!-- <el-alert v-if="checkError" class="h-full w-full flex justify-center items-center" :title="goods.message "></el-alert> -->

    <div class="container px-6 py-10 mx-auto">

        <h1 class="text-2xl font-semibold text-center text-gray-800 lg:text-3xl dark:text-white">
          Каталог товаров
        </h1>

        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2">
          <NuxtLink to="/terminals">
            <div class="flex items-end overflow-hidden bg-cover rounded-lg h-96"
              :style="`background-image:url(${useAsset('tsd.jpeg')})`"
            >
                <div class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                    <h2 class="mt-4 text-xl font-semibold text-gray-800  dark:text-white">Терминалы сбора данных</h2>
                    <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">подробнее</p>
                </div>
            </div>
          </NuxtLink>

          <NuxtLink to="/scaners">
            <div class="flex items-end overflow-hidden bg-cover rounded-lg h-96"
              :style="`background-image:url(${useAsset('scaners.jpeg')})`">
                <div class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                    <h2 class="mt-4 text-xl font-semibold text-gray-800  dark:text-white">Сканеры штрих-кодов</h2>
                    <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">подробнее</p>
                </div>
            </div>
          </NuxtLink>

          <NuxtLink to="/printers">
            <div class="flex items-end overflow-hidden bg-cover rounded-lg h-96"
              :style="`background-image:url(${useAsset('printers.png')})`">
                <div class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                    <h2 class="mt-4 text-xl font-semibold text-gray-800  dark:text-white">Принтеры этикеток</h2>
                    <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">подробнее</p>
                </div>
            </div>
          </NuxtLink>

          <NuxtLink to="/parts">
            <div class="flex items-end overflow-hidden bg-cover rounded-lg h-96"
              :style="`background-image:url(${useAsset('parts.jpg')})`">
                <div class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                    <h2 class="mt-4 text-xl font-semibold text-gray-800  dark:text-white">ЗИП</h2>
                    <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">подробнее</p>
                </div>
            </div>
          </NuxtLink>
        </div>
    </div>
</section>
</template>

<script setup>
import useAsset from '~/composables/useAsset';

</script>


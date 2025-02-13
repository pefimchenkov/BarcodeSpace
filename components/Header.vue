<template>
  <header class="bg-gray-100">
  <nav class="flex tracking-wide items-center justify-between p-6 lg:px-8">
    <NuxtLink to="/" class="flex lg:flex-auto">
       <span class="sr-only">Barcodespace</span>
      <img class="h-10 w-auto" :src="useAsset('logo.png')" alt="">
    </NuxtLink>

    <div class="flex lg:hidden">
      <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
        <span class="sr-only">Открыть главное меню</span>
        <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>

    <div class="hidden lg:flex lg:flex-auto lg:gap-x-12">
      <NuxtLink to="/about" class="text-base/6 font-semibold font-size-2 text-gray-900">О нас</NuxtLink>

      <el-dropdown placement="bottom">
        <NuxtLink to="/" class="text-base/6 font-semibold text-gray-900">Каталог</NuxtLink>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item><NuxtLink to="/terminals" class="text-base/6 text-gray-900">Терминалы сбора данных</NuxtLink></el-dropdown-item>
            <el-dropdown-item><NuxtLink to="/scaners" class="text-base/6 text-gray-900">Сканеры штрих-кодов</NuxtLink></el-dropdown-item>
            <el-dropdown-item><NuxtLink to="/printers" class="text-base/6 text-gray-900">Принтеры этикеток</NuxtLink></el-dropdown-item>
            <el-dropdown-item><NuxtLink to="/parts" class="text-base/6 text-gray-900">ЗИП и Аксессуары</NuxtLink></el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>

      <NuxtLink to="/delivery" class="text-base/6 font-semibold text-gray-900">Доставка</NuxtLink>
    </div>

    <div class="hidden lg:flex lg:flex-auto lg:justify-end">
      <CartShort :key="cart.length" />
    </div>

    <ProfileMenu class="hidden lg:flex lg:flex-auto lg:justify-end" />
  </nav>
</header>

</template>

<script setup>
import { onMounted } from 'vue';
import useAsset from '~/composables/useAsset';


const { data, photos, getData, getPhotos } = useMarketStore();
const { copyDataFromLS, getDataFromLS, data: cart } = useCartStore();


onMounted(() => {
  const data = getDataFromLS();
  if (data) copyDataFromLS(JSON.parse(data));
})


if (!data.length) await getData();
if (!photos.length) await getPhotos();


</script>

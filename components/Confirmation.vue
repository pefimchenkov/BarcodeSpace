<template>
    <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
  <div class="mx-auto max-w-2xl px-4 2xl:px-0">
      <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl mb-2">Спасибо вам за покупку!</h2>
      <p class="text-gray-500 dark:text-gray-400 mb-6 md:mb-8">Ваш заказ
        <a href="#" class="font-medium text-gray-900 dark:text-white hover:underline">#7564804</a> будет обработан в течение 24 часов в рабочие дни. Мы уведомим вас по электронной почте, как только ваш заказ будет отправлен.</p>
      <div class="space-y-4 sm:space-y-2 rounded-lg border border-gray-100 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800 mb-6 md:mb-8">
          <dl class="sm:flex items-center justify-between gap-4">
              <dt class="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">Дата</dt>
              <dd class="font-medium text-gray-900 dark:text-white sm:text-end">22 Января 2025</dd>
          </dl>
          <dl class="sm:flex items-center justify-between gap-4">
              <dt class="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">Оплата</dt>
              <dd class="font-medium text-gray-900 dark:text-white sm:text-end">Альфа Банк, карта</dd>
          </dl>
          <dl class="sm:flex items-center justify-between gap-4">
              <dt class="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">Имя</dt>
              <dd class="font-medium text-gray-900 dark:text-white sm:text-end">Иванов Иван Иванович</dd>
          </dl>
          <dl class="sm:flex items-center justify-between gap-4">
              <dt class="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">Адрес</dt>
              <dd class="font-medium text-gray-900 dark:text-white sm:text-end">Москва, ул. Правды, дом 23, офис 312</dd>
          </dl>
          <dl class="sm:flex items-center justify-between gap-4">
              <dt class="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">Телефон</dt>
              <dd class="font-medium text-gray-900 dark:text-white sm:text-end">+7(999) 999-99-99</dd>
          </dl>
      </div>
      <div class="flex items-center space-x-4">
          <a href="#" @click="gotoOrders" class="text-white bg-sky-500 hover:bg-sky-600 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
          Перейти в заказы</a>
          <a href="#" @click="gotoGoods" class="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
          Вернуться к покупкам</a>
      </div>
  </div>
</section>
</template>

<script setup>

async function gotoOrders() {
    await navigateTo('/orders')
}

async function gotoGoods() {
    await navigateTo('/')
}

</script>
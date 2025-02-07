<template>
    <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
    <form @submit.prevent="submitForm" class="mx-auto max-w-screen-xl px-4 2xl:px-0">

        <el-steps
            :space="375"
            :active="1"
            process-status="finish"
            finish-status="success"
        >
            <el-step @click="gotoCart" title="Корзина" class="cursor-pointer" />
            <el-step title="Оформление заказа" />
            <el-step title="Оплата" />
        </el-steps>

    <div class="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
      <div class="min-w-0 flex-1 space-y-8">
        <div class="space-y-4">
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white">Доставка</h2>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label for="your_name" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Ваше имя </label>
              <input type="text" id="your_name" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              placeholder="Иванов Иван" required />
            </div>

            <div>
              <label for="your_email" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Ваш email* </label>
              <input type="email" id="your_email" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              placeholder="name@domen.ru" required />
            </div>

            <div>
              <div class="mb-2 flex items-center gap-2">
                <label for="select-country-input-3" class="block text-sm font-medium text-gray-900 dark:text-white"> Страна* </label>
              </div>
              <select id="select-country-input-3" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                <option value="RU"selected>Россия</option>
              </select>
            </div>

            <div>
              <div class="mb-2 flex items-center gap-2">
                <label for="select-city-input-3" class="block text-sm font-medium text-gray-900 dark:text-white"> Город* </label>
              </div>
              <select id="select-city-input-3" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                <option selected>Москва</option>
                <option >Санкт-Петербург</option>
                <option >Нижний Новгород</option>
                <option >Казань</option>
                <option >Уфа</option>
                <option >Тольятти</option>
                <option >Самара</option>
                <option >Саратов</option>
                <option >Ростов на Дону</option>
                <option >Воронеж</option>
                <option >Ярославль</option>
                <option >Тверь</option>
                <option >Тула</option>
                <option >Смоленск</option>
                <option >Рязань</option>
                <option >Владимир</option>
              </select>
            </div>

            <div>
              <label for="company_name" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Адрес* </label>
              <input type="text" id="company_name" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Flowbite LLC" required />
            </div>

            <div>
              <label for="vat_number" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Индекс* </label>
              <input
                type="text"
                id="vat_number"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder="112233"
                required />
            </div>

            <div>
              <label for="phone-input-3" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Телефон* </label>
              <div class="flex items-center">
                <button id="dropdown-phone-button-3" data-dropdown-toggle="dropdown-phone-3" class="z-10 inline-flex shrink-0 items-center rounded-s-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700" type="button">
                  
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 32 32"><path fill="#1435a1" d="M1 11H31V21H1z"></path><path d="M5,4H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z" fill="#fff">
                        </path><path d="M5,20H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z" transform="rotate(180 16 24)" fill="#c53a28"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path>
                    </svg>
                    <span class="ml-1">+7</span>
                    <svg class="-me-0.5 ms-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" />
                    </svg>
                </button>

                <div class="relative w-full"> <!-- pattern="\([0-9]{3}\)[0-9]{3}-[0-9]{2}-[0-9]{2}" -->
                    <input
                        type="text"
                        id="phone-input"
                        class="z-20 block w-full rounded-e-lg border border-s-0 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:border-s-gray-700  dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500"
                        
                        placeholder="(999)999-99-99"
                    />
                </div>
              </div>
            </div>

            <div>
              <label for="email" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Email для рассылки </label>
              <input type="email" id="email" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              placeholder="name@flowbite.com" />
            </div>


            <!-- <div class="sm:col-span-2">
              <button type="submit" class="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
                <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5" />
                </svg>
                Добавить новый адрес
              </button>
            </div> -->
          </div>
        </div>

        <div class="space-y-4">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Оплата</h3>

          <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div class="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
              <div class="flex items-start">
                <div class="flex h-5 items-center">
                  <input id="credit-card" aria-describedby="credit-card-text" type="radio" name="payment-method" value="" class="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" checked />
                </div>

                <div class="ms-4 text-sm">
                  <label for="credit-card" class="font-medium leading-none text-gray-900 dark:text-white"> Банковская карта </label>
                  <p id="credit-card-text" class="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400">Оплата вашей банковской картой или по СБП</p>
                </div>
              </div>

              <div class="mt-4 flex items-center gap-2">
                <button type="button" class="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Удалить</button>

                <div class="h-3 w-px shrink-0 bg-gray-200 dark:bg-gray-700"></div>

                <button type="button" class="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Редактировать</button>
              </div>
            </div>

            <div class="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
              <div class="flex items-start">
                <div class="flex h-5 items-center">
                  <input id="pay-on-delivery" aria-describedby="pay-on-delivery-text" type="radio" name="payment-method" value="" class="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                </div>

                <div class="ms-4 text-sm">
                  <label for="pay-on-delivery" class="font-medium leading-none text-gray-900 dark:text-white"> Оплата при доставке </label>
                  <p id="pay-on-delivery-text" class="mt-1 mb-4 text-xs font-normal text-gray-500 dark:text-gray-400">включая стоимость доставки</p>
                </div>
              </div>

              <div class="mt-4 flex items-center gap-2">
                <button type="button" class="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Удалить</button>

                <div class="h-3 w-px shrink-0 bg-gray-200 dark:bg-gray-700"></div>

                <button type="button" class="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Редактировать</button>
              </div>
            </div>

            <div class="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
              <div class="flex items-start">
                <div class="flex h-5 items-center">
                  <input id="paypal-2" aria-describedby="paypal-text" type="radio" name="payment-method" value="" class="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                </div>

                <div class="ms-4 text-sm">
                  <label for="paypal-2" class="font-medium leading-none text-gray-900 dark:text-white"> Оплата по счёту </label>
                  <p id="paypal-text" class="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400">Безналичная оплата для Юр Лиц</p>
                </div>
              </div>

              <div class="mt-4 flex items-center gap-2">
                <button type="button" class="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Удалить</button>

                <div class="h-3 w-px shrink-0 bg-gray-200 dark:bg-gray-700"></div>

                <button type="button" class="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Редактировать</button>
              </div>
            </div>
          </div>
        </div>

        <div class="space-y-4">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Доставка</h3>

          <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div class="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
              <div class="flex items-start">
                <div class="flex h-5 items-center">
                  <input id="dhl" aria-describedby="dhl-text" type="radio" name="delivery-method" value="" class="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" checked />
                </div>

                <div class="ms-4 text-sm">
                  <label for="dhl" class="font-medium leading-none text-gray-900 dark:text-white"> Самовывоз</label>
                  <p id="dhl-text" class="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400">из магазина - бесплатно</p>
                </div>
              </div>
            </div>

            <div class="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
              <div class="flex items-start">
                <div class="flex h-5 items-center">
                  <input id="fedex" aria-describedby="fedex-text" type="radio" name="delivery-method" value="" class="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                </div>

                <div class="ms-4 text-sm">
                  <label for="fedex" class="font-medium leading-none text-gray-900 dark:text-white"> Доставка курьером </label>
                  <p id="fedex-text" class="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400">по Москве - 500 р.</p>
                </div>
              </div>
            </div>

            <div class="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
              <div class="flex items-start">
                <div class="flex h-5 items-center">
                  <input id="express" aria-describedby="express-text" type="radio" name="delivery-method" value="" class="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                </div>

                <div class="ms-4 text-sm">
                  <label for="express" class="font-medium leading-none text-gray-900 dark:text-white"> Транспортной компанией </label>
                  <p id="express-text" class="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400">тариф будет рассчитан </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
        <div class="mt-11">
          <label for="voucher" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Введите промокод, подарочную карту или ваучер </label>
          <div class="flex max-w-md items-center gap-4">
            <input
              type="text"
              id="voucher"
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              placeholder=""
            />
            <button type="button" class="flex items-center justify-center rounded-lg bg-sky-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-sky-600 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                Применить
            </button>
          </div>
        </div>

        <div class="flow-root">
          <div class="-my-3 divide-y divide-gray-200 dark:divide-gray-800">

            <dl class="flex items-center justify-between gap-4 py-5">
                <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Подытог</dt>
                <dd class="text-base font-medium text-gray-900 dark:text-white">{{ formatPrice(calcSum()) }}</dd>
              </dl>

              <dl class="flex items-center justify-between gap-4 py-5">
                <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Скидка</dt>
                <dd class="text-base font-medium text-green-600">{{ formatPrice(discount) }}</dd>
              </dl>

              <dl class="flex items-center justify-between gap-4 py-5">
                <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Доставка</dt>
                <dd class="text-base font-medium text-gray-900 dark:text-white">{{ formatPrice(delivery) }}</dd>
              </dl>

              <dl class="flex items-center justify-between gap-4 py-5">
                <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Включая НДС</dt>
                <dd class="text-base font-medium text-gray-900 dark:text-white">{{ formatPrice(tax) }}</dd>
              </dl>
              <dl class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                <dt class="text-base font-bold text-gray-900 dark:text-white">Итого</dt>
                <dd class="text-base font-bold text-gray-900 dark:text-white">{{ formatPrice(calcTotal) }}</dd>
            </dl>
          </div>
        </div>

        <div class="space-y-3">
          <button
            @click="handleSubmit"
            type="button"
            class="flex w-full items-center justify-center rounded-lg bg-green-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
            Перейти к оплате
          </button>
          <p class="text-sm font-normal text-gray-400 dark:text-gray-400">Нажимая на кнопку, вы соглашаетесь с Условиями обработки персональных данных, а также с Условиями продажи</p>
          <p class="text-sm font-normal text-gray-600 dark:text-gray-400">Для одного или нескольких товаров в вашей корзине требуется авторизация.
          <a href="#" title="" class="font-medium text-sky-600 underline hover:no-underline dark:text-primary-500">Войдите или создайте учетную запись сейчас.</a>.</p>
        </div>

      </div>
    </div>
  </form>
</section>
</template>

<script setup>
import { ref, computed } from 'vue'
const { getData } = useCartStore();

const discount = ref(1000);
const delivery = ref(500);

const calcTotal = computed(() => {
    return calcSum() - discount.value  + delivery.value;
});

const tax = computed(() => ((calcSum() * 0.2)));

async function gotoCart() {
  await navigateTo({ path: "/cart" })
}

/* ************** */

function formatPrice(price) {
    return price.toLocaleString("ru", { style: "currency", currency: "RUB" });
}

function calcSum() {
    return getData().reduce((acc, { price, qty }) => { return (acc + price * qty) }, 0);
}


/* ************* */
async function handleSubmit() {
    
  try {
    const order = getData().filter(item => item.isInOrder)

    console.log(order)

    await useFetch('/api/order', {
        method: 'POST',
        body: order
    })
    
    await navigateTo('/confirmation')
  }
  catch(error) {
    console.log('error from create order', error)
  }
  finally {}

}


</script>
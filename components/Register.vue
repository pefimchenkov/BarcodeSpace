<template>
    <div class="flex flex-col justify-center font-[sans-serif] sm:h-screen p-4">
      <div class="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8">
        <div class="text-center mb-12">
          <img :src="useAsset('logo.png')" />
        </div>

        <form @submit.prevent="handleFormSubmit">
          <div class="space-y-6">
            <div>
              <input
                v-model="form.email"
                name="email"
                type="email"
                class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-sky-500"
                placeholder="Email" />
            </div>
            <div>
              <input
                v-model="form.username"
                name="email"
                type="text"
                class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-sky-500"
                placeholder="Имя пользователя" />
            </div>
            <div>
              <input
                v-model="form.password"
                name="password"
                type="password"
                class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-sky-500"
                placeholder="Пароль" />
            </div>
            <div>
              <input
                v-model="form.cpassword"
                name="cpassword"
                type="password"
                class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-sky-500"
                placeholder="Пароль ещё раз" />
            </div>

            <div class="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 shrink-0 text-[#3987bb] focus:ring-sky-500 border-gray-300 rounded" />
              <label for="remember-me" class="text-gray-800 ml-3 block text-sm">
                Согласен с  <a href="javascript:void(0);" class="text-[#3987bb] font-semibold hover:underline ml-1">Условиями и положениями</a>
              </label>
            </div>
          </div>

          <div class="!mt-8">
            <button
                type="submit"
                :disabled="isLoading"
                :class="{ 'opacity-30 cursor-not-allowed': isLoading }"
                class="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-sky-500 hover:bg-sky-600 focus:outline-none"
            >
              Создать аккаунт
            </button>
          </div>
          <p class="text-gray-800 text-sm mt-6 text-center">Уже есть аккаунт?
            <NuxtLink to="/login" class="text-[#3987bb] font-semibold hover:underline ml-1 whitespace-nowrap">Войти</NuxtLink>
          </p>
        </form>
      </div>
    </div>
</template>

<script setup>

import { reactive, ref } from 'vue';
import { ElNotification } from '#imports';

const form = reactive({
    email: '',
    username: '',
    password: '',
    cpassword: ''
})

let isLoading = ref(false);

async function handleFormSubmit() {
    try {
        isLoading.value = true;

        console.log(form)

        const res = await useFetch('/api/auth/register', {
            method: 'POST',
            body: form
        })

        console.log()

        if (res?.error?.value?.data?.statusCode === 500) {
          useRouter().push({
            name: "register"
        })
          return ElNotification({ type: "error", message: res?.error?.value?.data?.message })
        }

        useRouter().push({
            name: "login"
        })

    } catch (error) {
        console.log('ERROR FROM FETCH USER', error)
    } finally{
        setTimeout(() => { isLoading.value = false }, 2000)
    }
}

</script>
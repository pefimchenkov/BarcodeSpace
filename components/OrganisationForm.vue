<template>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">

        <div>
          <label class="mb-2 block text-sm font-medium text-gray-900 "> Компания <span class="text-red-500">*</span></label>
          <input
            v-model="bankData.company"
            type="text"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700  dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"

            required
          />
        </div>

        <div>
          <label class="mb-2 block text-sm font-medium text-gray-900 "> ИНН <span class="text-red-500">*</span></label>
          <input
            v-model="bankData.inn"
            type="text"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700  dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
            pattern="[0-9]{10}|[0-9]{12}"
            required />
        </div>

        <div>
          <div class="mb-2 flex items-center gap-2">
            <label class="block text-sm font-medium text-gray-900 "> КПП </label>
          </div>
          <input
            v-model="bankData.kpp"
            type="email"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700  dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
          />
        </div>

        <div>
          <div class="mb-2 flex items-center gap-2">
            <label class="block text-sm font-medium text-gray-900 "> Юр Адрес </label>
          </div>

          <input
            v-model="bankData.address"
            type="email"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700  dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"

          />
        </div>

        <div>
          <label class="mb-2 block text-sm font-medium text-gray-900 "> Наименование банка </label>
          <input
            v-model="bankData.bank"
            type="text"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700  dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"

          
          />
        </div>

        <div>
          <label for="vat_number" class="mb-2 block text-sm font-medium text-gray-900 "> БИК </label>
          <input
            v-model="bankData.bik"
            type="text"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700  dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"

          
          />
        </div>

        <div>
          <label for="vat_number" class="mb-2 block text-sm font-medium text-gray-900 "> Рассчётный счёт </label>
          <input
            v-model="bankData.cor_account"
            type="text"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700  dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"

          
          />
        </div>

        <div>
          <label for="vat_number" class="mb-2 block text-sm font-medium text-gray-900 "> Кор. счёт </label>
          <input
            v-model="bankData.curr_account"
            type="text"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700  dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"

          
          />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const bankData = reactive({
  company: '',
  inn: '',
  kpp: '',
  address: '',
  bank: '',
  bik: '',
  cor_account: '',
  curr_account: ''
})

</script>

<style>

</style>
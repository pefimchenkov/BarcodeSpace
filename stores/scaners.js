import { defineStore } from 'pinia';

export const useScanersStore = defineStore('scaners', {
    state: () => ({
        data: [],
        status: 'pending'
    }),

    actions: {
        async getData() {
            if (this.data.length) return this.data;

            const { status, data } = await useLazyFetch('/api/scaners');
            console.log('status', status.value)

            this.data = data.value;
            this.status = status.value;

            console.log('Success from ScanersStore: ', data.value.length);
            return data.value;
        },

    }
})
import { defineStore } from 'pinia';

export const useMarketStore = defineStore('market', {
    state: () => ({
        data: [],
        photos: [],
        models: [],
        classes: [],
        conditions: [],
        types: [
            {id: 8, name: 'terminals' },
            {id: 5, name: 'scaners' },
            {id: 4, name: 'printers' },
        ],
        status: 'pending'
    }),

    actions: {
        async getData() {
            if (this.data.length) {
                console.log('market has been already loaded!')
                return this.data;
            }

            const { status, data } = await useFetch('/api/market');

            this.data = data.value;
            this.status = status.value;

            return this.data;
        },

        async getPhotos() {
            if (this.photos.length) {
                console.log('photos has been already loaded!')
                return this.photos;
            }

            const { data } = await useFetch('/api/photos');
            this.photos = data.value;

            return this.photos;
        },

        getTypeById(id) {
            const obj = this.types.find(item => item.id === id)
            if (!obj) return 'parts';

            return obj.name;
        },


    }
})
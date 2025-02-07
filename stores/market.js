import { defineStore } from 'pinia';

export const useMarketStore = defineStore('market', {
    state: () => ({
        data: [],
        photos: [],
        models: [],
        classes: [],
        conditions: [],
        status: 'pending'
    }),

    actions: {
        async getData() {
            if (this.data.length) {
                console.log('market has been loaded yet!')
                return this.data;
            }

            const { status, data } = await useFetch('/api/market');

            this.data = data.value;
            this.status = status.value;

            //console.log('Success Data from MarketStore: ', data.value.length);
            return this.data;
        },

        async getPhotos() {
            if (this.photos.length) {
                console.log('photos has been loaded yet!')
                return this.photos;
            }

            const { data } = await useFetch('/api/photos');
            this.photos = data.value;

            //console.log('Success Photos from MarketStore: ', data.value.length);
            return this.photos;
        },

        async getModels() {
            if (this.models.length) {
                console.log('models has been loaded yet!')
                return this.models;
            }

            const { data } = await useFetch('/api/models');
            this.models = data.value;

            //console.log('Success Models from MarketStore: ', data.value.length);
            return this.models;
        },


    }
})
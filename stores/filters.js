import { defineStore } from 'pinia';

export const useFiltersStore = defineStore('filters', {
    state: () => ({

        filters: {
            prices: [1, 200000],
            models: [],
            classes: [],
            conditions: [],
            instock: false
        },

        search: {
            text: '',
            category: 'name'
        },

    }),

    actions: {
        getFilters() {
            return this.filters;
        },

        setFilters(value) {
            this.filters = value;
        },

        getSearch() {
            return this.search;
        },

        setSearch(value) {
            this.search = value;
        },

        getIntersection(...arrays) {
            const data = [ ...arrays ];
            if (data.length === 1) return data[0];
            if (!data.length ) return [];

            const result = arrays.reduce((a, b) => {
                return a.filter(c => b.includes(c));
            });
        
            return [...new Set(result)];
        }

    }
})
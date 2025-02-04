export default defineEventHandler(async (event) => {
    const res = await $fetch('http://dev.atlas-pro24.local:3000/market/eshop');
    
    if (res.code === 404) return res;

    return  res.data?.length ? res.data/* ?.slice(0, 300) */ : [];
})
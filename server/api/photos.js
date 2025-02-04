export default defineEventHandler(async (event) => {
    const data = await $fetch('http://dev.atlas-pro24.local:3000/market/loadimages');
    
    if (data.code === 404) return data;
    return  data?.length ? data/* ?.slice(0, 300) */ : [];
})
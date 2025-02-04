export default defineEventHandler(async (event) => {
    const res = await $fetch('http://dev.atlas-pro24.local:3000/models');
    
    if (res.code === 404) return res;

    return  res.data?.length ? res.data : [];
})
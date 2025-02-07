<template>
    <ul v-if="crumbsRoute.length >= 1" class="flex items-center bg-orange-50 px-5 absolute top-31 h-[2.5%]">
        <li
            v-for="(crumb, index) in crumbsRoute"
            :key="crumb.name"
            class="flex items-center gap-2">

            <ArrowRightBold style="width: 0.8em; height: 0.8em; margin: 0 0 0 10px"  />

            <NuxtLink
                :to="crumb.path"
                class="text-md font-semibold"
                :class="{ 'text-sky-600': index === crumbsRoute.length - 1 }"
                >{{ crumb.meta.breadcrumbs }}
            </NuxtLink
            >

        </li>
    </ul>
</template>

<script setup>
import { ArrowRightBold } from '@element-plus/icons-vue';

const route = useRoute();
const router = useRouter();

//console.log(route)

const crumbsRoute = computed(() => {
  let fullPath = "";
  const routes = route.fullPath.substring(1).split("/");
  return routes
    .map((route) => {
      if (route) {
        fullPath = `${fullPath}/${route}`;
        return router.resolve(fullPath);
      }
    })
    .filter(Boolean);
});

</script>
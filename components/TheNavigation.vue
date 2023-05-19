<template>
  <div
    ref="el"
    class="fixed right-0 z-10 top-1/2 h-28 w-6 rounded-l-md flex flex-col gap-2 justify-center items-center bg-gray-800"
  >
    <a
      v-for="(step, index) in steps"
      class="rounded-full border-solid border-2 border-emerald-500 w-4 h-4"
      :href="'#' + step.id"
      :class="step.isActive ? 'bg-emerald-500' : ''"
      @click="onClick(index)"
    ></a>
  </div>
</template>

<script setup lang="ts">
onMounted(() => {
  window.addEventListener("scroll", onScroll);
});

const onScroll = useDebounceFn(() => {
  const viewHeight = window.innerHeight;

  steps.value.forEach((step, index) => {
    const el = document.getElementById(step.id);
    if (el) {
      const rect = el.getBoundingClientRect();

      console.log(rect);

      if (rect.top < viewHeight / 2 && rect.bottom > viewHeight / 2) {
        step.isActive = true;
      } else {
        step.isActive = false;
      }
    }
  });
}, 100);

const onClick = (index: number) => {
  steps.value.forEach((step, i) => {
    if (i === index) {
      step.isActive = true;
    } else {
      step.isActive = false;
    }
  });
};

const steps = ref([
  {
    id: "cv",
    isActive: false,
  },
  {
    id: "skills",
    isActive: false,
  },
  {
    id: "projects",
    isActive: false,
  },
]);
</script>

<style scoped></style>

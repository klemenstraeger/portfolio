<template>
  <div
    class="mr-2 center relative inline-block select-none whitespace-nowrap bg-gray-900 border-2 rounded-lg py-2 px-3.5 align-baseline mt-3 md:mt-0 font-bold leading-none text-white hover:translate-y-1 w-max transition duration-150 ease-in-out"
    :class="'border-' + color"
  >
    <div class="mt-px flex items-center gap-2" :class="getSize(size)">
      <Icon v-if="icon" :name="icon"></Icon>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface Props {
  icon?: string;
  color?: string;
  size?: "small" | "medium" | "large";
}

const props = withDefaults(defineProps<Props>(), {
  icon: "",
  color: "emerald-500",
  size: "medium",
});

const getSize = (size: string) => {
  switch (size) {
    case "small":
      return "text-xs";
    case "medium":
      return "text-base";
    case "large":
      return "text-lg";
    default:
      return "text-base";
  }
};
</script>

<style scoped></style>

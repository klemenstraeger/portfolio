<script setup lang="ts">
const props = defineProps({
  number: {
    type: Number,
    default: 20,
  },
})

const meteors = computed(() => {
  return Array.from({ length: props.number }, _ => ({
    left: Math.floor(Math.random() * (400 - -400) + -800),
    bottom: Math.floor(Math.random() * (100 - 0) + 900),
    delay: Math.random() * 10 - 8,
    duration: Math.floor(Math.random() * (10 - 2) + 12),
  }))
})
</script>

<template>
  <div>
    <span
      v-for="(meteor, index) in meteors"
      :key="index"
      class="meteor animate-meteor-effect absolute h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]"
      :style="{
        left: `${meteor.left}px`,
        animationDelay: `${meteor.delay}s`,
        animationDuration: `${meteor.duration}s`,
      }"
    />
  </div>
</template>

<style scoped>
.meteor::before {
  content: "";
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 1px;
  background: linear-gradient(90deg, #64748b, transparent);
}
</style>

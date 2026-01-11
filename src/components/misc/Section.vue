<script lang="ts" setup>
defineProps<{ title: string }>()

const sectionRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
      }
    },
    {
      threshold: 0.1,
    },
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})
</script>

<template>
  <section ref="sectionRef" class="relative">
    <div class="relative inline-block">
      <h3 
        class="lg:text-5xl text-3xl mx-4 md:mx-0 text-white font-bold mb-6 lg:mb-12 transition-all duration-700"
        :class="{ 'animate-fade-in-up': isVisible }"
      >
        {{ title }}
      </h3>
      <div 
        class="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-emerald-500 to-lime-600 transition-all duration-1000 mx-4 md:mx-0"
        :class="isVisible ? 'w-full' : 'w-0'"
      />
    </div>
    <slot />
  </section>
</template>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}
</style>

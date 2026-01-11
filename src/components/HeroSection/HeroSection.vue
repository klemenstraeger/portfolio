<script lang="ts" setup>
const active = ref(0)
const birthDate = new Date(1999, 6, 22) // 22 July 1999 (months are 0-indexed)
const isVisible = ref(false)

const age = computed(
  () =>
    new Date().getFullYear()
      - birthDate.getFullYear()
      - (new Date()
        < new Date(new Date().getFullYear(), birthDate.getMonth(), birthDate.getDate())
        ? 1
        : 0),
)

onMounted(() => {
  setInterval(() => {
    active.value = (active.value + 1) % 3
  }, 3000)
  
  // Trigger fade-in animation
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})

const flipWords = ref([
  "Vue.js.",
  "Drum & Bass.",
  "Nuxt.js.",
  "Python.",
  "Typescript.",
  "Google Cloud.",
  "TailwindCSS.",
  "Pizza.",
  "FastAPI.",
  "Nitro.js.",
  "Supabase.",
  "Vercel.",
  "Apple.",
])
</script>

<template>
  <div
    class="lg:h-[80vh] gap-y-10 mt-12 lg:mt-32 md:grid-cols-2 md:grid mx-4 flex flex-col justify-around lg:min-h-[50vh] relative"
  >
    <!-- Animated gradient overlay -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      <div class="absolute -top-40 -left-40 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl animate-float-slow" />
      <div class="absolute -bottom-40 -right-40 w-96 h-96 bg-lime-500/20 rounded-full blur-3xl animate-float-slower" />
    </div>

    <div class="h-fit flex-grow space-y-6" :class="{ 'animate-fade-in-up': isVisible }">
      <div class="text-white font-bold lg:text-4xl xl:text-6xl flex lg:py-2 text-2xl flex-wrap gap-x-2">
        <div class="lg:py-4 animate-fade-in" style="animation-delay: 0.2s;">
          {{ $t("headline.IAm") }}&nbsp;
        </div>
        <div class="w-max">
          <div
            class="animate-typing whitespace-nowrap lg:border-r-4 border-r-2 border-r-white lg:pr-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-lime-500 to-emerald-600 lg:py-4 animate-gradient-x"
          >
            Klemens Träger
          </div>
        </div>
      </div>
      
      <div class="text-white/90 lg:text-2xl text-base font-light mt-6 lg:text-left leading-relaxed animate-fade-in" style="animation-delay: 0.4s;">
        {{ $t("intro.intro1", [age]) }}

        <span
          class="bg-gradient-to-r from-emerald-500 to-lime-600 bg-bottom bg-no-repeat bg-[length:100%_4px] hover:bg-[length:100%_100%] transition-all duration-300 ease-out w-max font-medium hover:text-gray-900 cursor-default"
        >{{ $t("intro.intro2") }}</span>
        {{ $t("intro.intro3") }}
        <span
          class="bg-gradient-to-r from-emerald-500 to-lime-600 bg-bottom bg-no-repeat bg-[length:100%_4px] hover:bg-[length:100%_100%] transition-all duration-300 ease-out w-max font-medium hover:text-gray-900 cursor-default"
        >{{ $t("intro.intro4") }}</span>
        {{ $t("intro.intro5") }}
        <FlipWords
          :words="flipWords"
          letter-class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-lime-500 to-emerald-600 font-bold italic"
          :duration="3000"
        />
      </div>

      <div
        class="mt-8 lg:mt-12 lg:gap-x-2 flex-col items-center justify-between lg:flex-row hidden lg:flex animate-fade-in"
        style="animation-delay: 0.6s;"
      >
        <!-- <GithubStats /> -->
      </div>
    </div>
    
    <div class="md:ml-auto relative animate-fade-in" style="animation-delay: 0.8s;">
      <!-- Decorative ring around image -->
      <div class="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500 to-lime-600 animate-spin-slow opacity-70 blur-sm scale-105" />
      <div class="absolute inset-2 rounded-full bg-gray-950 z-10" />
      
      <nuxt-img
        width="600"
        src="/img/headshot.webp"
        class="rounded-full mx-auto xl:w-full w-80 md:mx-0 relative z-20 hover:scale-105 transition-transform duration-500 ease-out shadow-2xl shadow-emerald-500/30"
        alt="Klemens Träger - Portfolio"
      />
    </div>
  </div>
</template>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes float-slow {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(-20px, -20px) scale(1.05);
  }
}

@keyframes float-slower {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(20px, 20px) scale(1.05);
  }
}

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes gradient-x {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.animate-fade-in-up {
  animation: fade-in-up 1s ease-out forwards;
  opacity: 0;
}

.animate-fade-in {
  animation: fade-in 1s ease-out forwards;
  opacity: 0;
}

.animate-float-slow {
  animation: float-slow 8s ease-in-out infinite;
}

.animate-float-slower {
  animation: float-slower 10s ease-in-out infinite;
}

.animate-spin-slow {
  animation: spin-slow 8s linear infinite;
}

.animate-gradient-x {
  background-size: 200% 200%;
  animation: gradient-x 3s ease infinite;
}
</style>

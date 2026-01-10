<script lang="ts" setup>
const active = ref(0)
const birthDate = new Date(1999, 6, 22) // 22 July 1999 (months are 0-indexed)

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
  <div class="lg:min-h-[70vh] gap-y-10 mt-12 lg:mt-20 grid md:grid-cols-2 gap-8 items-center">
    <div class="space-y-6">
      <div class="text-4xl lg:text-5xl xl:text-6xl font-bold">
        <div class="mb-2">
          {{ $t("headline.IAm") }}&nbsp;
        </div>
        <div class="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
          Klemens Träger
        </div>
      </div>
      
      <div class="text-lg lg:text-xl text-gray-300 leading-relaxed">
        {{ $t("intro.intro1", [age]) }}
        <span class="text-primary font-semibold">{{ $t("intro.intro2") }}</span>
        {{ $t("intro.intro3") }}
        <span class="text-primary font-semibold">{{ $t("intro.intro4") }}</span>
        {{ $t("intro.intro5") }}
        <FlipWords
          :words="flipWords"
          letter-class="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600 font-bold italic"
          :duration="3000"
        />
      </div>
    </div>
    
    <div class="flex justify-center md:justify-end">
      <NuxtImg
        width="600"
        src="/img/headshot.webp"
        class="rounded-full w-80 lg:w-96 xl:w-full max-w-md shadow-2xl ring-2 ring-primary-500/20"
        alt="Klemens Träger"
      />
    </div>
  </div>
</template>

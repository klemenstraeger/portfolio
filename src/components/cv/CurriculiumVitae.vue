<script setup lang="ts">
const container = ref<null | HTMLElement>(null)

const beam = ref<null | HTMLElement>(null)
const entryRefs = ref<(Element | ComponentPublicInstance)[]>([])
function updateBeam() {
  if (!beam.value || !container.value)
    return

  const containerTop = container.value.getBoundingClientRect().top
  const containerHeight = container.value.scrollHeight
  const viewportMiddle = window.innerHeight / 2

  // Calculate the distance of the middle of the viewport from the top of the container
  const scrollPosition = viewportMiddle - containerTop

  // Calculate scroll percentage based on the position within the container
  const scrollPercentage = Math.min(Math.max(scrollPosition / containerHeight, 0), 1)

  beam.value.style.height = `${scrollPercentage * 100}%`
}

function observeEntries() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-slide")
        }
        else {
          entry.target.classList.remove("fade-in-slide")
        }
      })
    },
    { threshold: 0.1 },
  )

  entryRefs.value.forEach((entry) => {
    if (entry) {
      observer.observe((entry as ComponentPublicInstance).$el || entry)
    }
  })
}

onMounted(() => {
  window.addEventListener("scroll", updateBeam)
  observeEntries()
  updateBeam()
})

onUnmounted(() => {
  window.removeEventListener("scroll", updateBeam)
})
</script>

<template>
  <div id="cv" class="relative">
    <MeteorBackground class="" />
    <div ref="container" class="text-white">
      <div class="container mx-auto">
        <div class="sticky">
          <div class="container mx-auto w-full h-fit">
            <div class="relative wrap overflow-hidden h-full px-4 md:px-0">
              <!-- Beam container -->
              <div
                class="absolute inset-y-0 left-1/2 w-px bg-emerald-500/20 transform -translate-x-1/2 z-10"
              >
                <div
                  ref="beam"
                  class="absolute inset-x-0 top-0 bg-emerald-500 transition-all duration-300 ease-out glow-beam"
                />
              </div>

              <!-- Entries container -->
              <div class="relative z-20 space-y-12">
                <div
                  v-for="(entry, index) in $tm('cv.entries')"
                  :key="index"
                  class="space-y-12"
                >
                  <div
                    class="md:flex justify-between items-center w-full"
                    :class="index % 2 === 0 ? 'flex-row-reverse' : ''"
                  >
                    <div class="order-1 w-5/12 hidden md:block" />
                    <CVEntry
                      :ref="
                        (el) => {
                          if (el) entryRefs[index] = el;
                        }
                      "
                      :entry="entry"
                      class="z-10"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.glow-beam {
  box-shadow: 0 0 6px #10b981, 0 0 12px #10b981, 0 0 20px #10b981;
  width: 2px;
}

/* Optional: Add a subtle animation to enhance the glow effect */
@keyframes pulse-glow {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
}

.glow-beam {
  animation: pulse-glow 2s ease-in-out infinite;
}
</style>

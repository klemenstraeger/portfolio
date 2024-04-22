<template>
  <div class="min-h-[50vh] mt-12 md:mt-0" id="cv">
    <section>
      <h3 class="lg:text-5xl text-3xl mx-4 mb-4 md:mx-0 text-white font-semibold">
        {{ $t("cv.header") }}
      </h3>
      <MeteorBackground class="" />
      <div class="text-white lg:py-8">
        <div class="container mx-auto">
          <div class="sticky">
            <div class="container mx-auto w-full h-fit">
              <div class="relative wrap overflow-hidden h-full px-4 md:px-0">
                <div
                  v-for="(entry, index) in cvEntries"
                  :key="text"
                  class="
                  
                "
                >
                  <div
                    class="border-2 rounded-lg absolute h-full border-emerald-500 border-solid left-2/4 -z-50 md:flex"
                  ></div>
                  <div
                    class="md:flex justify-between items-center w-full left-timeline mt-8"
                    :class="
                      index % 2 === 0
                        ? 'left-timeline flex-row-reverse'
                        : 'right-timeline'
                    "
                  >
                    <div class="order-1 w-5/12 hidden md:block"></div>
                    <CVEntry
                      :timeFrame="entry.timeFrame"
                      :title="entry.title"
                      :text="entry.text"
                      :icon="entry.icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();

const cvEntries = [
  {
    timeFrame: t("cv.entry1.timeFrame"),
    title: t("cv.entry1.title"),
    text: t("cv.entry1.text"),
    icon: "material-symbols:work-outline",
  },
  {
    timeFrame: t("cv.entry2.timeFrame"),
    title: t("cv.entry2.title"),
    text: t("cv.entry2.text"),
    icon: "ion:layers",
  },
  {
    timeFrame: t("cv.entry3.timeFrame"),
    title: t("cv.entry3.title"),
    text: t("cv.entry3.text"),
    icon: "mdi:account-school",
  },
  {
    timeFrame: t("cv.entry4.title"),
    title: t("cv.entry4.title"),
    text: t("cv.entry4.text"),
    icon: "material-symbols:work-outline",
  },
  {
    timeFrame: t("cv.entry5.timeFrame"),
    title: t("cv.entry5.title"),
    text: t("cv.entry5.text"),
    icon: "streamline:travel-airport-earth-airplane-travel-plane-trip-airplane-international-adventure-globe-world",
  },
  {
    timeFrame: t("cv.entry6.timeFrame"),
    title: t("cv.entry6.title"),
    text: t("cv.entry6.text"),
    icon: "map:school",
  },
];
</script>

<style scoped>
.glowing-emerald {
  box-shadow: 0 0 10px #10b981, 0 0 20px #10b981, 0 0 30px #10b981, 0 0 40px #10b981,
    0 0 70px #10b981, 0 0 80px #10b981, 0 0 100px #10b981, 0 0 150px #10b981;
}
</style>

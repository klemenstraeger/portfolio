<template>
  <div class="min-h-[50vh] mt-12 md:mt-0" id="cv">
    <section>
      <h3 class="lg:text-5xl text-3xl mx-4 mb-4 md:mx-0 text-white font-semibold">
        Curriculum Vitae
      </h3>
      <div class="text-white lg:py-8">
        <div class="container mx-auto">
          <div class="sticky">
            <div class="container mx-auto w-full h-full">
              <div class="relative wrap overflow-hidden h-full px-4 md:px-0">
                <div
                  class="border-2 rounded-lg absolute h-full border-emerald-500 border-solid left-2/4 -z-10 md:flex"
                ></div>
                <div
                  class="mb-8 md:flex justify-between flex-row-reverse items-center w-full left-timeline"
                >
                  <div class="order-1 w-5/12 hidden md:block"></div>
                  <CVEntry
                    timeFrame="08/2010 - 06/2018"
                    title="High school diploma"
                    text="'Glückauf'-Gymnasium Dippoldiswalde final grade 2.7"
                    icon="map:school"
                  />
                </div>

                <div class="mb-8 flex justify-between items-center w-full right-timeline">
                  <div class="order-1 w-5/12 hidden md:block"></div>
                  <CVEntry
                    timeFrame="10/2018 - 02/2019"
                    title="Gap Year, Work and Travel"
                    text="New Zealand"
                    icon="streamline:travel-airport-earth-airplane-travel-plane-trip-airplane-international-adventure-globe-world"
                  />
                </div>
                <div
                  class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline"
                >
                  <div class="order-1 w-5/12 hidden md:block"></div>
                  <CVEntry
                    timeFrame="05/2019 - 09/2021"
                    title="Working student"
                    text="Energiewerk Ost GmbH <br>
                    • Google & Bing Ads scripts & management<br>
• Product text creation with AX Semantics<br>
• Automation of budget control
                    "
                    icon="material-symbols:work-outline"
                  />
                </div>

                <div class="mb-8 flex justify-between items-center w-full right-timeline">
                  <div class="order-1 w-5/12 hidden md:block"></div>

                  <CVEntry
                    timeFrame="10/2019 - now"
                    title="Study of Business Informatics (Diploma)"
                    text="University of Applied Sciences Dresden (FH), expected Graduation in February 2024"
                    icon="mdi:account-school"
                  />
                </div>
                <div
                  class="flex justify-between flex-row-reverse items-center w-full left-timeline"
                >
                  <div class="order-1 w-5/12 hidden md:block"></div>
                  <CVEntry
                    ref="fooRef"
                    timeFrame="09/2021 - 02/2022"
                    title="Internship Frontend / Backend Developer "
                    text="WEBneo GmbH, Dresden<br>• Shopware 6 plugin development with Vue.js<br>
• Shopware store customization and template implementation<br>
• Internal tools development with Vue.js and PHP"
                    icon="ion:layers"
                  />

                </div>
                
        <div class="mb-8 flex justify-between items-center w-full right-timeline">
                  <div class="order-1 w-5/12 hidden md:block"></div>

                  <CVEntry
                    timeFrame="08/2023 - now"
                    title="Software Developer (Working Student)"
                    text="Otto Group Solution Provider Dresden"
                    icon="material-symbols:work-outline"
                  />
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>

<template>
  <div class="w-full h-screen">
    <div class="flex justify-between">
      <h1 class="text-7xl text-transparent bg-clip-text font-normal text-white">
        Dev - Blog
      </h1>
    </div>
    <div class="flex justify-end gap-4 mt-24">
      <Popover class="relative">
        <PopoverButton
          ><Icon name="mdi-filter" class="text-white text-3xl"></Icon
        ></PopoverButton>
        <transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="translate-y-1 opacity-0"
          enter-to-class="translate-y-0 opacity-100"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="translate-y-0 opacity-100"
          leave-to-class="translate-y-1 opacity-0"
        >
          <PopoverPanel class="absolute right-10 z-50">
            <div
              class="bg-gray-800 w-[300px] h-[400px] rounded border-emerald-500 border-2 border-solid px-4 py-2 flex flex-col gap-2"
            >
              <div class="text-emerald-400 text-2xl">Filter</div>
              <div>
                <span>Category</span>
                <Listbox v-model="selectedPerson">
                  <div class="relative mt-1">
                    <ListboxButton
                      class="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
                    >
                      <span class="block truncate">{{ selectedPerson.name }}</span>
                      <span
                        class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
                      >
                        <ChevronUpDownIcon
                          class="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </ListboxButton>

                    <transition
                      leave-active-class="transition duration-100 ease-in"
                      leave-from-class="opacity-100"
                      leave-to-class="opacity-0"
                    >
                      <ListboxOptions
                        class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                      >
                        <ListboxOption
                          v-slot="{ active, selected }"
                          v-for="person in people"
                          :key="person.name"
                          :value="person"
                          as="template"
                        >
                          <li
                            :class="[
                              active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
                              'relative cursor-default select-none py-2 pl-10 pr-4',
                            ]"
                          >
                            <span
                              :class="[
                                selected ? 'font-medium' : 'font-normal',
                                'block truncate',
                              ]"
                              >{{ person.name }}</span
                            >
                            <span
                              v-if="selected"
                              class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
                            >
                              <CheckIcon class="h-5 w-5" aria-hidden="true" />
                            </span>
                          </li>
                        </ListboxOption>
                      </ListboxOptions>
                    </transition>
                  </div>
                </Listbox>
              </div>
            </div>
          </PopoverPanel>
        </transition>
      </Popover>
      <Icon
        :name="sortIconName"
        :class="filter !== 0 ? '!text-emerald-500' : ''"
        @click="changeSort"
        class="text-white text-3xl"
      ></Icon>
      <Icon name="mdi-search" @click="openModal" class="text-white text-3xl"></Icon>
    </div>
    <div class="grid grid-cols-3 gap-8 mt-12">
      <BlogItem />
      <BlogItem />
      <BlogItem />
    </div>
  </div>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-50">
      <div class="fixed inset-0 bg-black/50" aria-hidden="true" />
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel class="absolute">
              <input
                class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all border-none focus:outline-none pl-14 text-3xl"
              />
              <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
                  <Icon name="mdi:search" class="relative text-gray-800 text-3xl"></Icon>
                </button>
              </span>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script lang="ts" setup>
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";

const people = [
  { name: "Wade Cooper" },
  { name: "Arlene Mccoy" },
  { name: "Devon Webb" },
  { name: "Tom Cook" },
  { name: "Tanya Fox" },
  { name: "Hellen Schmidt" },
];
const selectedPerson = ref(people[0]);
const isOpen = ref(false);

const filter = ref<0 | 1 | -1>(0);

const sortIconName = ref("mdi:sort");

function closeModal() {
  isOpen.value = false;
}
function openModal() {
  isOpen.value = true;
}

const changeSort = () => {
  console.log("soo");
  switch (filter.value) {
    case 0:
      sortIconName.value = "mdi:sort-ascending";
      filter.value = 1;
      break;
    case 1:
      sortIconName.value = "mdi:sort-descending";
      filter.value = -1;
      break;
    case -1:
      sortIconName.value = "mdi-sort";

      filter.value = 0;
      break;
  }
};

computed(() => {
  switch (filter.value) {
    case 0:
      sortIconName.value = "mdi-filter";
    case 1:
      sortIconName.value = "mdi:sort-descending";
    case -1:
      sortIconName.value = "mdi:sort-ascending";
  }
});
</script>

<style></style>

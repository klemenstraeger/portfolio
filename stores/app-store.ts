import { defineStore } from "pinia";

export const useAppStore = defineStore("appStore", () => {
  const drawerOpen = ref(false);

  return {
    drawerOpen,
  };
});

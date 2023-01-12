import { create } from "zustand";
import { devtools } from "zustand/middleware";

const store = (set) => ({
    // sidebar
    is_sidebar_open: false,
    toggleSidebar: () => set((state) => ({ is_sidebar_open: !state.is_sidebar_open })),

    // cta form
    show_cta_form: false,
    openCtaForm: () => set((state) => ({ show_cta_form: true })),
    closeCtaForm: () => set((state) => ({ show_cta_form: false })),
});

const useGeneralStore = create(devtools(store));

export default useGeneralStore;

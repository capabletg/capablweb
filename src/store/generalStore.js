import { create } from "zustand";
import { devtools } from "zustand/middleware";

const store = (set) => ({
  // sidebar
  is_sidebar_open: false,
  toggleSidebar: () =>
    set((state) => ({ is_sidebar_open: !state.is_sidebar_open })),

  // cta form
  show_cta_form: false,
  openCtaForm: () => set((state) => ({ show_cta_form: true })),
  closeCtaForm: () => set((state) => ({ show_cta_form: false })),

  // modal
  module_no: 0,
  openModal: () => set((state) => ({ show_modal: true })),
  closeModal: () => set((state) => ({ show_modal: false })),
  module: (moduleno) => set((state) => ({ module_no: moduleno })),
});

const useGeneralStore = create(devtools(store));

export default useGeneralStore;

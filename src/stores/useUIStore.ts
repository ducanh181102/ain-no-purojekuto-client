import { Locale } from "@/types/app/locales";
import { create } from "zustand";


type UIStore = {
    errorMsg: string | null
    locale: Locale;
    selectedIndex: number | null;

    setErrorMsg: (id: string) => void
    setLocale: (locale: Locale) => void
    setSelectedIndex: (index: number | null) => void

    clearErrorMsg: () => void
    clearSelectedIndex: () => void
    clearLocale: () => void
}

export const useUIStore = create<UIStore>()((set) => ({
    errorMsg: "",
    locale: "vi",
    selectedIndex: null,

    setErrorMsg: (id) => set({ errorMsg: id }),
    setLocale: (locale) => set({ locale }),
    setSelectedIndex: (index) => set({ selectedIndex: index }),

    clearErrorMsg: () => set({
        errorMsg: null,
    }),
    clearSelectedIndex: () => set({
        selectedIndex: null,
    }),
    clearLocale: () => set({
        locale: "vi",
    })
}))
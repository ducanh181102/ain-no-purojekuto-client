import { Locale } from "@/types/app/locales";
import { create } from "zustand";


type UIStore = {
    errorMsg: string | null
    locale: Locale;

    setErrorMsg: (id: string) => void
    setLocale: (locale: Locale) => void

    clearErrorMsg: () => void
}

export const useUIStore = create<UIStore>()((set) => ({
    errorMsg: "",
    locale: "vi",

    setErrorMsg: (id) => set({ errorMsg: id }),
    setLocale: (locale) => set({locale}),

    clearErrorMsg: () => set({ errorMsg: null }),
}))
import { SideBarItem } from "@/constants/keys"
import { SideBarKey } from "@/types/keys"
import { create } from "zustand"

type SideBarStore = {
  selectedSideBar: SideBarKey | null
  setSelectedSideBar: (sideBar: SideBarKey) => void

  clearSelectedSideBar: () => void
}

export const useSideBarStore = create<SideBarStore>()((set) => ({
  selectedSideBar: null,
  setSelectedSideBar: (sideBar) => set({ selectedSideBar: sideBar }),
  clearSelectedSideBar: () => set({ selectedSideBar: null}),
}))
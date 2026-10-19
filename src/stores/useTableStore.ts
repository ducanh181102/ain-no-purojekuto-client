import { UpperCaseTableStatusKey } from "@/types/keys"
import { create } from "zustand"

type TableStore = {
  selectedTableId: number | null
  setSelectedTableId: (id: number) => void

  selectedStatus: UpperCaseTableStatusKey | null
  setSelectedStatus: (status: UpperCaseTableStatusKey) => void

  searchKeyword: string
  setSearchKeyword: (keyword: string) => void

  clearSelectedTable: () => void
  clearSelectedStatus: () => void
  clearSearchKeyword: () => void
}

export const useTableStore = create<TableStore>()((set) => ({
  selectedTableId: null,
  setSelectedTableId: (id) => set({ selectedTableId: id }),
  clearSelectedTable: () => set({ selectedTableId: null }),

  selectedStatus: null,
  setSelectedStatus: (status) => set({ selectedStatus: status }),
  clearSelectedStatus: () => set({ selectedStatus: null }),

  searchKeyword: "",
  setSearchKeyword: (keyword) => set({ searchKeyword: keyword }),
  clearSearchKeyword: () => set({ searchKeyword: "" }),
}))

import { UpperCaseTableStatusKey } from "@/types/keys"
import { create } from "zustand"

type TableStore = {
  selectedTableId: number | null
  setSelectedTableId: (id: number) => void

  selectedStatus: UpperCaseTableStatusKey | null
  setSelectedStatus: (status: UpperCaseTableStatusKey) => void

  clearSelectedTable: () => void
}

export const useTableStore = create<TableStore>()((set) => ({
  selectedTableId: 1,
  setSelectedTableId: (id) => set({ selectedTableId: id }),
  clearSelectedTable: () => set({ selectedTableId: null, selectedStatus: null }),

  selectedStatus: null,
  setSelectedStatus: (status) => set({ selectedStatus: status }),
}))
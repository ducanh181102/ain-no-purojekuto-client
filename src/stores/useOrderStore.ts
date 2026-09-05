import { UpperCaseOrderStatusKey } from "@/types/keys"
import { create } from "zustand"

type OrderStore = {
  selectedOrderId: number | null
  setSelectedOrderId: (id: number) => void

  clearSelectedOrder: () => void
}

export const useOrderStore = create<OrderStore>()((set) => ({
  selectedOrderId: 1,
  setSelectedOrderId: (id) => set({ selectedOrderId: id }),
  clearSelectedOrder: () => set({ selectedOrderId: null}),
}))
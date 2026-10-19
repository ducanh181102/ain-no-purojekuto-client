import { UpperCaseOrderStatusKey } from "@/types/keys"
import { create } from "zustand"

type Total = {
  orderId: number;
  total: number;
}

type TotalItems = {
  orderId: number;
  totalItems: number;
}

type OrderStore = {
  selectedOrderId: number | null
  setSelectedOrderId: (id: number) => void

  selectedStatus: UpperCaseOrderStatusKey | null
  setSelectedStatus: (status: UpperCaseOrderStatusKey) => void

  // tạm tính
  total: Total | null
  setTotal: ({ orderId, total }: Total) => void

  // số món trong đơn
  totalItems: TotalItems | null
  setTotalItems: ({ orderId, totalItems }: TotalItems) => void

  searchKeyword: string
  setSearchKeyword: (keyword: string) => void

  clearSelectedOrder: () => void
  clearSelectedStatus: () => void
  clearSearchKeyword: () => void
  clearTotal: () => void
  clearTotalItems: () => void
}

export const useOrderStore = create<OrderStore>()((set) => ({
  // mã đơn được chọn
  selectedOrderId: null,
  setSelectedOrderId: (id) => set({ selectedOrderId: id }),

  // trạng thái của status được chọn
  selectedStatus: null,
  setSelectedStatus: (status) => set({ selectedStatus: status }),

  // từ khóa tìm kiếm
  searchKeyword: "",
  setSearchKeyword: (keyword) => set({ searchKeyword: keyword }),

  // tạm tính của đơn
  total: null,
  setTotal: (total: Total) => set({ total: total }),

  // số món trong đơn
  totalItems: null,
  setTotalItems: (totalItems: TotalItems) => set({ totalItems: totalItems }),

  // hàm xóa các giá trị được chọn
  clearSelectedOrder: () => set({
    selectedOrderId: null,
  }),

  clearSelectedStatus: () => set({
    selectedStatus: null,
  }),

  clearSearchKeyword: () => set({
    searchKeyword: "",
  }),

  clearTotal: () => set({
    total: null,
  }),

  clearTotalItems: () => set({
    totalItems: null,
  })
}))
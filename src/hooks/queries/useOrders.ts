import { getOrderById, getOrderIdByTableId, getOrders } from "@/services/order.service"
import { useQuery } from "@tanstack/react-query"

export function useOrders() {
  return useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
  })
}

export function useOrderById(id: number | null) {
    return useQuery({
        queryKey: ["orders", id],
        queryFn: () => getOrderById(id!),
        enabled: !!id, // chay api khi chac chan id ko null
    })
}

export function useOrderIdByTableId(tableId: number | null) {
    return useQuery({
        queryKey: ["orders", tableId],
        queryFn: () => getOrderIdByTableId(tableId!),
        enabled: !!tableId, // chay api khi chac chan id ko null
    })
}
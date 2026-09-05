import { getOrderItemById, getOrderItemByOrderId, getOrderItems } from "@/services/orderItem.service"
import { useQuery } from "@tanstack/react-query"

export function useOrderItems() {
  return useQuery({
    queryKey: ["order-items"],
    queryFn: getOrderItems,
  })
}

export function useOrderItemsById(id: number | null) {
    return useQuery({
        queryKey: ["order-items", id],
        queryFn: () => getOrderItemById(id!),
        enabled: !!id, // chay api khi chac chan id ko null
    })
}

export function useOrderItemByOrderId(orderId: number | null) {
    return useQuery({
        queryKey: ["order-items", "order", orderId],
        queryFn: () => getOrderItemByOrderId(orderId!),
        enabled: !!orderId, // chay api khi chac chan id ko null
    })
}
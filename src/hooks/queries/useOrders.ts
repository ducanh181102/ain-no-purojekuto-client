import { UpperCaseOrderStatus } from "@/constants/keys"
import { getOrderById, getOrderIdByTableId, getOrders } from "@/services/order.service"
import { UpperCaseOrderStatusKey } from "@/types/keys"
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
        queryKey: ["orders", "current-order-id", tableId],
        queryFn: () => getOrderIdByTableId(tableId!),
        enabled: !!tableId, // chay api khi chac chan id ko null
    })
}

export function useOrderStatus(status?: UpperCaseOrderStatusKey) {
  return useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
    select: (orders) => {
      if (!status || status == UpperCaseOrderStatus.all) return orders
      return orders.filter((order) => order.status === status)
    },
  })
}


export function useStatusPendingOrderCount() {
  return useOrderCount(UpperCaseOrderStatus.pending)
}

export function useStatusConfirmedOrderCount() {
  return useOrderCount(UpperCaseOrderStatus.confirmed)
}

export function useStatusPreparingOrderCount() {
  return useOrderCount(UpperCaseOrderStatus.preparing)
}

export function useStatusServedOrderCount() {
  return useOrderCount(UpperCaseOrderStatus.served)
}

export function useStatusPaidOrderCount() {
  return useOrderCount(UpperCaseOrderStatus.paid)
}

export function useStatusCancelledOrderCount() {
  return useOrderCount(UpperCaseOrderStatus.cancelled)
}

export function useStatusAllOrderCount() {
  return useOrderCount()
}

function useOrderCount(status?: UpperCaseOrderStatusKey) {
  return useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
    select: (orders) => {
      if (!status) return orders.length

      return orders.filter((order) => order.status === status).length
    },
  })
}

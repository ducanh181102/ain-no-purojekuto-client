import { getReservationById, getReservationIdByTableId, getReservations } from "@/services/reservation.service"
import { useQuery } from "@tanstack/react-query"

export function useReservations() {
  return useQuery({
    queryKey: ["reservations"],
    queryFn: getReservations,
  })
}

export function useReservationById(id: number | null) {
    return useQuery({
        queryKey: ["reservations", id],
        queryFn: () => getReservationById(id!),
        enabled: !!id, // chay api khi chac chan id ko null
    })
}

export function useReservationByTableId(tableId: number | null) {
    return useQuery({
        queryKey: ["reservations", "current", tableId],
        queryFn: () => getReservationIdByTableId(tableId!),
        enabled: !!tableId, // chay api khi chac chan id ko null
    })
}


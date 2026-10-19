import { moveReservation } from "@/services/reservation.service";
import { useUIStore } from "@/stores/useUIStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useMoveReservation() {
  const queryClient = useQueryClient()
  const setErrorMsg = useUIStore((state) => state.setErrorMsg)

  return useMutation({
    mutationFn: moveReservation,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["reservations"] })
      queryClient.invalidateQueries({ queryKey: ["reservations", variables.reservationId] })
      queryClient.invalidateQueries({ queryKey: ["reservations", "current", variables.tableId] })
      queryClient.invalidateQueries({ queryKey: ["tables"] })
      queryClient.invalidateQueries({ queryKey: ["tables", variables.tableId] })
    },
    onError: (error) => {
      setErrorMsg(error.message);
    },
  })
}

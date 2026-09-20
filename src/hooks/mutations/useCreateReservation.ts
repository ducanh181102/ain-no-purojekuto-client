import { createReservation } from "@/services/reservation.service";
import { useUIStore } from "@/stores/useUIStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreateReservation() {
  const queryClient = useQueryClient()
  const setErrorMsg = useUIStore((state) => state.setErrorMsg)

  return useMutation({
    mutationFn: createReservation,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["reservations"] })
      queryClient.invalidateQueries({ queryKey: ["tables"] })
      queryClient.invalidateQueries({ queryKey: ["tables", variables.tableId] })
    },
    onError: (error) => {
      setErrorMsg(error.message);
    },
  })
}

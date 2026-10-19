import { cancelReservation } from "@/services/reservation.service"
import { useUIStore } from "@/stores/useUIStore"
import { useQueryClient, useMutation } from "@tanstack/react-query"

export function useCancelByTableId() {
  const queryClient = useQueryClient()
  const setErrorMsg = useUIStore((state) => state.setErrorMsg)
  return useMutation({
    mutationFn: cancelReservation,
    onSuccess: (_) => {
      queryClient.invalidateQueries({ queryKey: ["reservations"] })
      queryClient.invalidateQueries({ queryKey: ["orders"] })
      queryClient.invalidateQueries({ queryKey: ["tables"] })
    },
    onError: (error) => {
      setErrorMsg(error.message);
    },
  })
}
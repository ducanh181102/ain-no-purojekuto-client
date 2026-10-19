import { checkedInReservation } from "@/services/reservation.service";
import { useUIStore } from "@/stores/useUIStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCheckedInByTableId(id: number | null) {
  const queryClient = useQueryClient()
  const setErrorMsg = useUIStore((state) => state.setErrorMsg)
  return useMutation({
    mutationFn: () => checkedInReservation(id!),
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
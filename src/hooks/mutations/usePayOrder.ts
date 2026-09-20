import { payOrder } from "@/services/order.service";
import { useUIStore } from "@/stores/useUIStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function usePayOrder() {
  const queryClient = useQueryClient()
  const setErrorMsg = useUIStore((state) => state.setErrorMsg)

  return useMutation({
    mutationFn: payOrder,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["orders"] })
      queryClient.invalidateQueries({ queryKey: ["orders", variables.orderId] })
      queryClient.invalidateQueries({ queryKey: ["orders", "current-order-id"] })
      queryClient.invalidateQueries({ queryKey: ["tables"] })
      queryClient.invalidateQueries({ queryKey: ["order-items"] })
    },
    onError: (error) => {
      setErrorMsg(error.message);
    },
  })
}

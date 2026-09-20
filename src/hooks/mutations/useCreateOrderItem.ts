import { createOrderItem } from "@/services/orderItem.service";
import { useUIStore } from "@/stores/useUIStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreateOrderItem() {
  const queryClient = useQueryClient()
  const setErrorMsg = useUIStore((state) => state.setErrorMsg)

  return useMutation({
    mutationFn: createOrderItem,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["orders"] })
      queryClient.invalidateQueries({ queryKey: ["order-items"] })
      queryClient.invalidateQueries({ queryKey: ["order-items", "order", variables.orderId] })
      queryClient.invalidateQueries({ queryKey: ["order-items", "order", "total", variables.orderId] })
    },
    onError: (error) => {
      setErrorMsg(error.message);
    },
  })
}

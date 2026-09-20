import { createOrder } from "@/services/order.service";
import { useUIStore } from "@/stores/useUIStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreateOrder() {
  const queryClient = useQueryClient()
  const setErrorMsg = useUIStore((state) => state.setErrorMsg)

  return useMutation({
    mutationFn: createOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] })
      queryClient.invalidateQueries({ queryKey: ["tables"] })
    },
    onError: (error) => {
      setErrorMsg(error.message);
    },
  })
}
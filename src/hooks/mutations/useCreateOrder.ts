import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createOrder } from "@/services/order.service"

export function useCreateOrder() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] })
      queryClient.invalidateQueries({ queryKey: ["tables"] })
    },
  })
}
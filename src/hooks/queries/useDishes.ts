import { getDishes } from "@/services/dish.service"
import { useQuery } from "@tanstack/react-query"

export function useDishes() {
  return useQuery({
    queryKey: ["dishes"],
    queryFn: getDishes,
  })
}

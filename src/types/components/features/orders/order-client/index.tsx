import { Sx } from "@/types/app/props/sx";
import { OrderProps } from "@/types/components/features/orders";

export type OrderClientProps = {
  sx: Sx,
  filteredOrders: OrderProps[],
  isLoading: boolean,
  isError: boolean,
}

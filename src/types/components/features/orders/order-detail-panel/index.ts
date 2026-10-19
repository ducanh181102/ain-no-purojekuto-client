import { OrderDetail } from "@/constants/actions";
import { Sx } from "@/types/app/props/sx";
import { OrderProps } from "..";

export type OrderDetailPanelProps = {
    order?: OrderProps,
    filteredOrders: OrderProps[],
    sx?: Sx,
}

export type OrderDetailActionProps = typeof OrderDetail[keyof typeof OrderDetail] | null;

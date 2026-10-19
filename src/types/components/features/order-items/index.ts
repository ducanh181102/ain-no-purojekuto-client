import { UpperCaseOrderItemStatusKey } from "@/types/keys";
import { DishMoleculeProps } from "../../common/molecule/dish";

export type OrderItemProps = {
    id: number;
    orderId: number;
    dishId: number;
    quantity: number;
    price: number;
    note?: string | null,
    status: UpperCaseOrderItemStatusKey,
    isDeleted: string,
    deleteAt: string | null,
    createdAt: string,
    updatedAt: string,
    dish?: DishMoleculeProps,
}


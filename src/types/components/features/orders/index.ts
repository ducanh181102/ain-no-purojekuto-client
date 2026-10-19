import { UpperCaseOrderStatusKey } from "@/types/keys";
import { TableProps } from "../tables";

export type PaymentMethod = "CASH" | "BANKING" | "MOMO";

export type PayOrderPayload = {
  orderId: number;
  method: PaymentMethod;
}

export type OrderProps = {
    id: number;
    tableId: number;
    isDeleted: string;
    status: UpperCaseOrderStatusKey;
    deleteAt: string | null,
    createdAt: string,
    updatedAt: string,
    table: TableProps;
}


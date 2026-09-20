import { UpperCaseOrderStatusKey } from "@/types/keys";

export type OrderMoleculeProps = {
    id: number;
    tableId: number;
    isDeleted: string;
    status: UpperCaseOrderStatusKey;
    deleteAt: string | null,
    createdAt: string,
    updatedAt: string,
}


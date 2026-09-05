import { UpperCaseTableStatusKey } from "@/types/keys";

export type OrderMoleculeProps = {
    id: number;
    tableId: number;
    isDeleted: number;
    status: UpperCaseTableStatusKey;
    createdAt: string,
    updatedAt: string,
}



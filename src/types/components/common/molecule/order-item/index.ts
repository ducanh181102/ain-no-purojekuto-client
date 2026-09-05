import { UpperCaseTableStatusKey } from "@/types/keys";

export type OrderItemMoleculeProps = {
    id: number;
    orderId: number;
    dishId: number;
    quantity: number;
    price: number;
    note: string,
    status: UpperCaseTableStatusKey,
    isDeleted: string,
    deleteAt: Date,
    createdAt: Date,
    updatedAt: Date,
}



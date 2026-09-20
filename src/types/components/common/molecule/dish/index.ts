export type DishMoleculeProps = {
    id: number;
    name: string;
    price: number;
    image?: string | null;
    available: string;
    categoryId: number;
    isDeleted: string;
    deleteAt: string | null;
    createdAt: string;
    updatedAt: string;
}

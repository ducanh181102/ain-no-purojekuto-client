import { TableStatusKey, UpperCaseTableStatusKey } from "@/types/keys";

export type TableMoleculeProps = {
    id: number;
    name: string;
    capacity: number;
    status: UpperCaseTableStatusKey;
}



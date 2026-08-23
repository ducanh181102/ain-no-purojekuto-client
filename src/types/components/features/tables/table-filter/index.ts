import { ChipColor, SxColor } from "@/types/app/props/colors";
import { ChipVariant } from "@/types/app/props/variants";
import { TableStatusKey, UpperCaseTableStatusKey } from "@/types/keys";

export type FilterTableStatus = {
    key: TableStatusKey,
    count: number,
    status: UpperCaseTableStatusKey,
    onClick: () => void,
}
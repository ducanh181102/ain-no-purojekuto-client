import { ChipColor, SxColor } from "@/types/app/props/colors";
import { TableStatusKey, UpperCaseTableStatusKey } from "@/types/keys";
import { ReactElement } from "react";

export type FilterTableStatus = {
    key: TableStatusKey,
    children: ReactElement,
}
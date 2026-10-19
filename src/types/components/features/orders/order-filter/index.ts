import { ChipColor, SxColor } from "@/types/app/props/colors";
import { LowerCaseOrderStatusKey } from "@/types/keys";
import { ReactElement } from "react";

export type FilterLowerCaseOrderStatus = {
    key: LowerCaseOrderStatusKey,
    icon?: ReactElement,
    color: ChipColor,
    label: string,
    bgcolor: SxColor,
    onClick: () => void,
}
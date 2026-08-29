import { Sx } from "@/types/app/props/sx";
import { ChipVariant } from "@/types/app/props/variants";
import { UpperCaseTableStatusKey } from "@/types/keys";
import { ReactElement } from "react";

export type StatusChipProps = {
    variant?: ChipVariant,
    icon?: ReactElement,
    status?: UpperCaseTableStatusKey,
    sx?: Sx,
    count?: number,
    onClick?: () => void,
}

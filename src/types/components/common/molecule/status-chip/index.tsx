import { ChipColor } from "@/types/app/props/colors";
import { ChipSize } from "@/types/app/props/sizes";
import { Sx } from "@/types/app/props/sx";
import { ChipVariant } from "@/types/app/props/variants";
import { UpperCaseTableStatusKey } from "@/types/keys";

export type StatusChipProps = {
    variant?: ChipVariant,
    size?: ChipSize,
    status?: UpperCaseTableStatusKey,
    sx?: Sx,
    count?: number,
    onClick?: () => void,
}

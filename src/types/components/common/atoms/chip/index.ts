import { ChipColor } from "@/types/app/props/colors"
import { ChipSize } from "@/types/app/props/sizes"
import { Sx } from "@/types/app/props/sx"
import { ChipVariant } from "@/types/app/props/variants"

//? & dùng để gộp type
export type ChipAtomsProps = {
    variant?: ChipVariant,
    color?: ChipColor,
    label?: string,
    size?: ChipSize,
    sx?: Sx,
    onClick?: () => void,
}
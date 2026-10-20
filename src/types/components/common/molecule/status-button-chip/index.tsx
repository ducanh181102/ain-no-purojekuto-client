import { ChipColor, SxColor } from "@/types/app/props/colors";
import { ChipSize } from "@/types/app/props/sizes";
import { Sx } from "@/types/app/props/sx";

export type StatusButtonChipProps = {
    size?: ChipSize,
    sx?: Sx,
    color: ChipColor,
    bgcolor: SxColor,
    icon?: React.ReactElement,
    label: string,
    onClick: () => void,
}

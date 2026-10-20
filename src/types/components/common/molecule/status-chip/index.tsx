import { ChipColor, SxColor } from "@/types/app/props/colors";
import { ChipSize } from "@/types/app/props/sizes";
import { Sx } from "@/types/app/props/sx";

export type StatusChipProps = {
    size?: ChipSize,
    color: ChipColor,
    bgcolor: SxColor,
    label: string,
}

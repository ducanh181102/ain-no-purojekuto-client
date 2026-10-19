import { ChipColor, SxColor } from "@/types/app/props/colors";

export type StatusButtonChipProps = {
    color: ChipColor,
    bgcolor: SxColor,
    icon?: React.ReactElement,
    label: string,
    onClick: () => void,
}

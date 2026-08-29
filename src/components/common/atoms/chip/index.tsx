import { ChipAtomsProps } from "@/types/components/common/atoms/chip"
import { Chip } from "@mui/material"

export default function ChipAtoms({ variant, icon, color, label, sx, onClick }: ChipAtomsProps) {
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
        onClick?.()
    }

    return <Chip
        variant={variant}
        color={color} label={label}
        icon={icon}
        sx={{
            ...sx,
        }}
        onClick={handleClick}
    />
}
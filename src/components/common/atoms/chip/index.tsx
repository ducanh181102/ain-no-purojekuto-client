import { ChipAtomsProps } from "@/types/components/common/atoms/chip"
import { Chip } from "@mui/material"

export default function ChipAtoms({ variant, color, label, size, sx, onClick }: ChipAtomsProps) {
    return <Chip variant={variant}
        color={color} label={label}
        size={size}
        sx={{
            ...sx,
        }}
        onClick={onClick}
    />
}
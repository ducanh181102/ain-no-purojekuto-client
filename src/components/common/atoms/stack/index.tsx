import { StackAtomsProps } from "@/types/components/common/atoms/grid"
import { Stack } from "@mui/material"

export default function StackAtoms({ spacing, direction, sx, children }: StackAtomsProps) {
    return <Stack spacing={spacing} direction={direction} sx={sx}>
        {children}
    </Stack>
}

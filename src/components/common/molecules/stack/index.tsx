import { StackMoleculeProps } from "@/types/components/common/molecule/stack"
import { Stack } from "@mui/material"

export default function StackMolecule({ spacing, direction, sx, children }: StackMoleculeProps) {
    return <Stack spacing={spacing} direction={direction} sx={sx}>
        {children}
    </Stack>
}

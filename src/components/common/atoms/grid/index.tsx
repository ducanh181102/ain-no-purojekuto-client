import { GridAtomsProps } from "@/types/components/common/atoms/stack"
import { Grid } from "@mui/material"

export default function GridAtoms({ rowSpacing, columnSpacing, size, container, children }: GridAtomsProps) {
    return <Grid container={container} rowSpacing={rowSpacing} columnSpacing={columnSpacing} size={size}>
        {children}
    </Grid>
}

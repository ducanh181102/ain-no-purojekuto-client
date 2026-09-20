import { ButtonAtomsProps } from "@/types/components/common/atoms/button"
import { Button } from "@mui/material"

export default function ButtonAtoms({variant, children, sx, disabled, onClick} : ButtonAtomsProps) {
    return <Button sx={sx} variant={variant} disabled={disabled} onClick={onClick}>{children}</Button>
}

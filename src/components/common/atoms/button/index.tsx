import { BorderRadius } from "@/constants/props/sizes"
import { ButtonAtomsProps } from "@/types/components/common/atoms/button"
import { Button } from "@mui/material"

export default function ButtonAtoms({variant, children, color, sx, disabled, onClick} : ButtonAtomsProps) {
    return <Button sx={{
        ...sx,
        borderRadius: BorderRadius.large,
    }} variant={variant} color={color} disabled={disabled} onClick={onClick}>{children}</Button>
}

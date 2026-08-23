import { ButtonAtomsProps } from "@/types/components/common/atoms/button"
import { Button } from "@mui/material"

export default function ButtonAtoms({variant, children} : ButtonAtomsProps) {
    return <Button variant={variant}>{children}</Button>
}
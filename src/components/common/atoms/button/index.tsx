import { ButtonAtomsProps } from "@/types/components/atoms/button"
import { Button } from "@mui/material"

export default function ButtonAtoms({variant, children} : ButtonAtomsProps) {
    return <Button variant={variant}>{children}</Button>
}
import { SxColor } from "@/constants/props/colors"
import { CardMoleculeProps } from "@/types/components/common/molecule/card"
import BoxAtoms from "../../atoms/box"

export default function CardMolecule({ component, sx, children }: CardMoleculeProps) {
    return <BoxAtoms
        component={component}
        sx={{
            ...sx,
            bgcolor: SxColor.backgroundItem,
        }}>{children}</BoxAtoms>
}

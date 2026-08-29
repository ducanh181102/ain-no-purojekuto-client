import { SxColor } from "@/constants/props/colors"
import { CardMoleculeProps } from "@/types/components/common/molecule/card"
import BoxAtoms from "../../atoms/box"

export default function CardMolecule({ component, sx, onClick, children }: CardMoleculeProps) {
    return <BoxAtoms
        component={component}
        onClick={onClick}
        sx={{
            ...sx,
            bgcolor: SxColor.backgroundItem,
        }}>{children}</BoxAtoms>
}

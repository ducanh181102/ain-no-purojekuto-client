import { BadgeMoleculeProps } from "@/types/components/common/molecule/bagde"
import { Badge } from "@mui/material"

export default function BadgeMolecule({badgeContent, color, children} : BadgeMoleculeProps) {
    return <Badge badgeContent={badgeContent} color={color}>{children}</Badge>
}

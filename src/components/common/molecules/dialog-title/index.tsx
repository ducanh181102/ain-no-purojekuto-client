import { DialogTitleMoleculeProps } from "@/types/components/common/molecule/dialog-title"
import { DialogTitle } from "@mui/material"

export default function DialogTitleMolecule({ children }: DialogTitleMoleculeProps) {
    return <DialogTitle>{children}</DialogTitle>
}

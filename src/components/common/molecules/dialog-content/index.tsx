import { DialogContentMoleculeProps } from "@/types/components/common/molecule/dialog-content"
import { DialogContent } from "@mui/material"

export default function DialogContentMolecule({ children }: DialogContentMoleculeProps) {
    return <DialogContent dividers>
        {children}
    </DialogContent>
}

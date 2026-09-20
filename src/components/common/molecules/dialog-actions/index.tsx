import { DialogMoleculeProps } from "@/types/components/common/molecule/dialog"
import { DialogActionsMoleculeProps } from "@/types/components/common/molecule/dialog-actions"
import { DialogActions } from "@mui/material"

export default function DialogActionsMolecule({ children }: DialogActionsMoleculeProps) {
    return <DialogActions>
        {children}
    </DialogActions>
}

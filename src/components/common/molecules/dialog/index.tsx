import { MaxWidth, MuiSize } from "@/constants/props/sizes"
import { DialogMoleculeProps } from "@/types/components/common/molecule/dialog"
import { Dialog } from "@mui/material"

export default function DialogMolecule({ open, onClose, maxWidth, children, }: DialogMoleculeProps) {
    return <Dialog open={open} onClose={onClose} fullWidth maxWidth={maxWidth}>
        {children}
    </Dialog>
}

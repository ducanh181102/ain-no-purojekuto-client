import { Severity } from "@/constants/props/severity"
import { SnackBarMoleculeProps } from "@/types/components/common/atoms/snack-bar"
import { Snackbar } from "@mui/material"
import AlertAtoms from "../../atoms/alert"

export default function SnackBarMolecule({ isOpen, autoHideDuration, onClose, msg }: SnackBarMoleculeProps) {
    return <Snackbar
        open={isOpen}
        autoHideDuration={autoHideDuration}
        onClose={onClose}
    >
        <div>
            <AlertAtoms severity={Severity.error} onClose={onClose}>
                {msg}
            </AlertAtoms>
        </div>
    </Snackbar>
}
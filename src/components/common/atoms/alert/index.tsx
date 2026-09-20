import { AlertAtomsProps } from "@/types/components/common/atoms/alert"
import { Alert } from "@mui/material"

export default function AlertAtoms({ severity, onClose, children }: AlertAtomsProps) {

    return <Alert severity={severity} onClose={onClose}>
        {children}
    </Alert>
}
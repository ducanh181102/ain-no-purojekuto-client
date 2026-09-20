import { DropDownInputMoleculeProps } from "@/types/components/common/molecule/drop-down";
import { TextField } from "@mui/material";

export default function DropDownInputMolecule({ label, value, disabled, onChange, children }: DropDownInputMoleculeProps) {

    return <TextField
        select
        fullWidth
        label={label}
        value={value}
        disabled={disabled}
        onChange={onChange}
    >
        {children}
    </TextField>
}

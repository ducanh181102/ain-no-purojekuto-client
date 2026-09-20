import { InputMoleculeProps } from "@/types/components/common/molecule/input";
import { TextField } from "@mui/material";

export default function InputMolecule({ label, value, type, required, slotProps, onChange }: InputMoleculeProps) {

    return <TextField
        fullWidth
        label={label}
        type={type}
        required={required}
        value={value}
        slotProps={slotProps}
        onChange={onChange}
    />
}

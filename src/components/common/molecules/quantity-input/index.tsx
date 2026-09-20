import { QuantityInputMoleculeProps } from "@/types/components/common/molecule/quantity-input";
import { TextField } from "@mui/material";

export default function QuantityInputMolecule({ label, value, required, slotProps, onChange }: QuantityInputMoleculeProps) {

    return <TextField
        fullWidth
        label={label}
        type="number"
        required={required}
        value={value}
        slotProps={slotProps}
        onChange={onChange}
    />
}

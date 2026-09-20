import { InputAtomsProps } from "@/types/components/common/atoms/input";
import { Input } from "@mui/material";

export default function InputAtoms({ placeholder, sx, slotProps, value, onChange }: InputAtomsProps) {
    return <Input
        placeholder={placeholder}
        sx={sx}
        slotProps={slotProps}
        value={value}
        onChange={onChange}
        disableUnderline
    />
}

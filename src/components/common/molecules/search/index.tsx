'use client'

import InputAtoms from "@/components/common/atoms/input";
import { BorderStyle, BorderWidth } from "@/constants/props/borders";
import { SxColor } from "@/constants/props/colors";
import { BorderRadius, Height, MaxLength, Padding, Width } from "@/constants/props/sizes";
import { SearchProps } from "@/types/components/common/molecule/search";


export default function Search({ value, placeholder, onChange }: SearchProps) {

    return <InputAtoms sx={{
        bgcolor: SxColor.backgroundItem,

        borderColor: SxColor.border,
        borderRadius: BorderRadius.medium,
        borderStyle: BorderStyle.solid,
        borderWidth: BorderWidth.mediumBorder,

        px: Padding.inputMedium,
        py: Padding.inputSmall,
        width: Width.inputMedium,
        height: Height.inputMedium,


    }} placeholder={placeholder} value={value} onChange={onChange} slotProps={{
        input: {
            maxLength: MaxLength.medium,
        }
    }} />
}

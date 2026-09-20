'use client'

import InputAtoms from "@/components/common/atoms/input";
import { BorderStyle, BorderWidth } from "@/constants/props/borders";
import { SxColor } from "@/constants/props/colors";
import { BorderRadius, Height, MaxLength, Padding, Width } from "@/constants/props/sizes";
import { getLocalText } from "@/lib/i18n";
import { useUIStore } from "@/stores/useUIStore";
import type { ChangeEventHandler } from "react";

type SearchProps = {
    value?: string,
    onChange?: ChangeEventHandler<HTMLInputElement>,
}

export default function Search({ value, onChange }: SearchProps) {

    const locale = useUIStore((state) => state.locale)

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


    }} placeholder={getLocalText().searchTableInput} value={value} onChange={onChange} slotProps={{
        input: {
            maxLength: MaxLength.medium,
        }
    }} />
}

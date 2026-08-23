'use client'

import InputAtoms from "@/components/common/atoms/input";
import { BorderStyle, BorderWidth } from "@/constants/props/borders";
import { SxColor } from "@/constants/props/colors";
import { BorderRadius, Height, MaxLength, Padding, Width } from "@/constants/props/sizes";
import { Strings } from "@/constants/strings";
import { Locale } from "@/types/app/locales";


export default function Search() {

    const locale: Locale = "vi";

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


    }} placeholder={Strings[locale].text.searchTableInput} slotProps={{
        input: {
            maxLength: MaxLength.medium,
        }
    }} />
}
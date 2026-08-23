import { Strings } from "@/constants/strings";
import { Locale } from "@/types/app/locales";
import { TextAtomsProps } from "@/types/components/common/atoms/text";
import { Typography } from "@mui/material";



export default function TextAtoms({ variant, component, color, align, sx, maxLength, children }: TextAtomsProps) {
    const limitText = (text: string, maxLength: number) => {
        const locale: Locale = "vi";

        const sliceString = text.slice(0, maxLength) + Strings[locale].text.threeDot;
        return sliceString;
    }

    return <Typography variant={variant}
        component={component} color={color}
        align={align}
        sx={sx}>{maxLength && maxLength < children.length ? limitText(children, maxLength) : children}</Typography>
}
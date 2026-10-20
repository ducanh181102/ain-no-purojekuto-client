import { TextColor } from "@/constants/props/colors";
import { getLocalText } from "@/lib/i18n";
import { TextAtomsProps } from "@/types/components/common/atoms/text";
import { Typography } from "@mui/material";

export default function TextAtoms({ variant, component, color = TextColor.textPrimary, colorHover, align, sx, maxLength, children, onClick }: TextAtomsProps) {
    const limitText = (text: string, maxLength: number) => {
        const sliceString = text.slice(0, maxLength) + getLocalText().text.threeDot;
        return sliceString;
    }

    return <Typography variant={variant}
        component={component} color={color}
        align={align}
        sx={{
            ...sx,
            '&:hover': colorHover ? {
                color: colorHover,
            } : "none",
        }} onClick={onClick} >
        {maxLength && maxLength < children.length ? limitText(children, maxLength) : children}
    </Typography >
}
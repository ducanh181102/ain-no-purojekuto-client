import { getLocalText } from "@/lib/i18n";
import { useUIStore } from "@/stores/useUIStore";
import { TextAtomsProps } from "@/types/components/common/atoms/text";
import { Typography } from "@mui/material";

export default function TextAtoms({ variant, component, color, align, sx, maxLength, children }: TextAtomsProps) {
    const limitText = (text: string, maxLength: number) => {
        const locale = useUIStore((state) => state.locale)

        const sliceString = text.slice(0, maxLength) + getLocalText().threeDot;
        return sliceString;
    }

    return <Typography variant={variant}
        component={component} color={color}
        align={align}
        sx={sx}>{maxLength && maxLength < children.length ? limitText(children, maxLength) : children}</Typography>
}
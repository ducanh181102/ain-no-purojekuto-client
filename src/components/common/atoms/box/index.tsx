import { BoxAtomsProps } from "@/types/components/common/atoms/box"
import { Box } from "@mui/material"

export default function BoxAtoms({ component, sx, isHideScroll, onClick, children }: BoxAtomsProps) {

    return <Box component={component} onClick={onClick} sx={{
        ...sx,
        ...(isHideScroll && {
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            "&::-webkit-scrollbar": {
                display: "none",
            },
        }),
    }
    }>{children}</Box>
}
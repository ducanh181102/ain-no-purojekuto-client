import { LineAtomsProps } from "@/types/components/common/atoms/line"
import { Divider } from "@mui/material"

export default function LineAtoms({ orientation, sx }: LineAtomsProps) {

    return <Divider orientation={orientation} flexItem sx={sx} />
}
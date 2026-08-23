import { AvatarAtomsProps } from "@/types/components/common/atoms/avatar"
import { Avatar } from "@mui/material"

export default function AvatarAtoms({sx, children} : AvatarAtomsProps) {
    return <Avatar sx={sx}>{children}</Avatar>
}
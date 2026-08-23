import { ChildrenProps } from "@/types/app/children";
import { IconButton } from "@mui/material";

export default function IconButtonMolecule({children} : ChildrenProps) {
    return <IconButton>{children}</IconButton>
}
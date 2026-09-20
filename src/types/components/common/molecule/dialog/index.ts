import { ChildrenProps } from "@/types/app/children";
import { MuiSize } from "@/types/app/props/sizes";

//? & dùng để gộp type
export type DialogMoleculeProps = ChildrenProps & {
    open: boolean,
    onClose?: () => void,
    onClick?: () => void,
    maxWidth?: MuiSize,
}
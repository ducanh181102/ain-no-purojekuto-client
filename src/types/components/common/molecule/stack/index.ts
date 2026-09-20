import { ChildrenProps } from "@/types/app/children";
import { FlexDirection } from "@/types/app/props/flexs";
import { Spacing } from "@/types/app/props/sizes";
import { Sx } from "@/types/app/props/sx";

//? & dùng để gộp type
export type StackMoleculeProps = ChildrenProps & {
    spacing?: Spacing,
    direction?: FlexDirection,
    sx?: Sx,
}
import { ChildrenProps } from "@/types/app/children";
import { GridSize, Spacing } from "@/types/app/props/sizes";

//? & dùng để gộp type
export type GridAtomsProps = ChildrenProps & {
    rowSpacing?: Spacing,
    columnSpacing?: Spacing,
    size?: GridSize,
    container?: boolean,

}
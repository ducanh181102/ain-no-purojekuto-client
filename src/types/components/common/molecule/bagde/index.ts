import { ChildrenProps } from "@/types/app/children";
import { BadgeColor } from "@/types/app/props/colors";

//? & dùng để gộp type
export type BadgeMoleculeProps = ChildrenProps & {
    badgeContent: number, 
    color: BadgeColor,
}
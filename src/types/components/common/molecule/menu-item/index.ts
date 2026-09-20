import { ChildrenProps } from "@/types/app/children";

//? & dùng để gộp type
export type MenuItemMoleculeProps = ChildrenProps & {
    key?: number | string,
    value?: number | string,
}

import { ChildrenProps } from "@/types/app/children";
import { Sx } from "@/types/app/props/sx";

//? & dùng để gộp type
export type AvatarAtomsProps = ChildrenProps & {
    sx?: Sx,
}
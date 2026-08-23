import { ChildrenProps } from "@/types/app/children"
import { Component } from "@/types/app/props/components"
import { Sx } from "@/types/app/props/sx"

//? & dùng để gộp type
export type BoxAtomsProps = ChildrenProps & {
    component: Component,
    isHideScroll?: boolean;
    sx?: Sx,
}
import { ChildrenProps } from "@/types/app/children";
import { TextAlign } from "@/types/app/props/aligns";
import { TextColor } from "@/types/app/props/colors";
import { Component } from "@/types/app/props/components";
import { Sx } from "@/types/app/props/sx";
import { TextVariant } from "@/types/app/props/variants";

//? & dùng để gộp type
export type TextAtomsProps = {children: string} & {
    variant?: TextVariant;
    component: Component,
    color?: TextColor,
    align?: TextAlign,
    sx?: Sx,
    maxLength?: number
}
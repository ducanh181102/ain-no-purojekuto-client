import type { MouseEventHandler } from "react";
import { ButtonColor } from "@/types/app/props/colors";
import { Sx } from "@/types/app/props/sx";
import { ButtonVariant } from "@/types/app/props/variants";

//? & dùng để gộp type
export type ButtonAtomsProps = {
    children: string,
    variant: ButtonVariant,
    color?: ButtonColor,
    sx?: Sx,
    disabled?: boolean,
    onClick?: MouseEventHandler<HTMLButtonElement>,
}

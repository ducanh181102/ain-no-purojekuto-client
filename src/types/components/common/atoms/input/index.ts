import { TextAlign } from "@/types/app/props/aligns";
import { TextColor } from "@/types/app/props/colors";
import { Component } from "@/types/app/props/components";
import { SlotProps } from "@/types/app/props/slot-props";
import { Sx } from "@/types/app/props/sx";
import { TextVariant } from "@/types/app/props/variants";

//? & dùng để gộp type
export type InputAtomsProps = {
    placeholder?: string,
    variant?: TextVariant;
    component?: Component,
    color?: TextColor,
    align?: TextAlign,
    sx?: Sx,
    slotProps?: SlotProps,
    maxLength?: number
}
import { TextFieldSlotProps } from "@/types/app/props/slot-props";
import type { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

//? & dùng để gộp type
export type InputMoleculeProps = {
    label?: string,
    value?: string,
    type?: HTMLInputTypeAttribute,
    required?: boolean,
    slotProps?: TextFieldSlotProps,
    onChange?: ChangeEventHandler<HTMLInputElement>,
}

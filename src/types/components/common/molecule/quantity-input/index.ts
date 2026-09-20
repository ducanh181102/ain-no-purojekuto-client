import { TextFieldSlotProps } from "@/types/app/props/slot-props";
import type { ChangeEventHandler } from "react";

//? & dùng để gộp type
export type QuantityInputMoleculeProps = {
    label?: string,
    slotProps?: TextFieldSlotProps,
    value?: number,
    required?: boolean,
    onChange?: ChangeEventHandler<HTMLInputElement>,
}

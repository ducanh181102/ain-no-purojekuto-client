import { ChildrenProps } from "@/types/app/children";
import { InputSlotProps, TextFieldSlotProps } from "@/types/app/props/slot-props";
import type { ChangeEventHandler } from "react";

//? & dùng để gộp type
export type DropDownInputMoleculeProps = ChildrenProps & {
    label?: string,
    value?: number | string,
    disabled?: boolean,
    onChange?: ChangeEventHandler<HTMLInputElement>,
}

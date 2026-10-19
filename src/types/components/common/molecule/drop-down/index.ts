import { ChildrenProps } from "@/types/app/children";
import type { ChangeEventHandler } from "react";

//? & dùng để gộp type
export type DropDownInputMoleculeProps = ChildrenProps & {
    label?: string,
    value: any,
    disabled?: boolean,
    onChange?: ChangeEventHandler<HTMLInputElement>,
}

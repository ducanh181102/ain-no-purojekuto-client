
import { ChangeEventHandler } from "react";

export type SearchProps = {
    value?: string,
    placeholder: string,
    onChange?: ChangeEventHandler<HTMLInputElement>,
}
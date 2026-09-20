import { TableDetailAction } from "@/types/actions";
import { Dispatch, SetStateAction } from "react";
import { DetailActionProps } from "../..";

export type AddDishProps = {
    setActiveAction: Dispatch<SetStateAction<TableDetailAction | null>>;
    activeAction?: DetailActionProps;
};

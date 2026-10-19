import { TableDetailAction } from "@/types/actions";
import { Dispatch, SetStateAction } from "react";
import { TableDetailActionProps } from "../..";

export type ViewOrderProps = {
    setActiveAction: Dispatch<SetStateAction<TableDetailAction | null>>;
    activeAction?: TableDetailActionProps;
};

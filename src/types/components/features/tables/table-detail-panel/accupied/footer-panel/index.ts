import { TableDetailAction } from "@/types/actions";
import { Dispatch, SetStateAction } from "react";

export type AccupiedFooterPanelProps = {
    setActiveAction: Dispatch<SetStateAction<TableDetailAction | null>>;
};

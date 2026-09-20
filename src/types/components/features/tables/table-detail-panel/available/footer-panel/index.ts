import { TableDetailAction } from "@/types/actions";
import { Dispatch, SetStateAction } from "react";

export type AvailableFooterPanelProps = {
    setActiveAction: Dispatch<SetStateAction<TableDetailAction | null>>;
    tableId: number | null,
};

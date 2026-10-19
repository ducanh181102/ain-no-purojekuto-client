import { TableDetailAction } from "@/types/actions";
import { ReservationMoleculeProps } from "@/types/components/common/molecule/reservation";
import { Dispatch, SetStateAction } from "react";
import { TableDetailActionProps } from "../..";

export type ChangeTableDialogProps = {
    setActiveAction: Dispatch<SetStateAction<TableDetailAction | null>>;
    activeAction?: TableDetailActionProps;
    reservation: ReservationMoleculeProps | null;
};

import { TableDetailAction } from "@/types/actions";
import { Dispatch, SetStateAction } from "react";
import { TableDetailActionProps } from "../..";

type PaymentMethod = {
    value: string;
    label: string;
}

export type PaymentProps = {
    setActiveAction: Dispatch<SetStateAction<TableDetailAction | null>>;
    activeAction?: TableDetailActionProps;
    paymentMethods: PaymentMethod[];
};

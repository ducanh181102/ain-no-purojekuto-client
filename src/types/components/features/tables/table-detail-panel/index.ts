import { TableDetail } from "@/constants/actions";
import { Sx } from "@/types/app/props/sx";
import { TableMoleculeProps } from "@/types/components/common/molecule/table";

export type TableDetailPanelProps = {
    table?: TableMoleculeProps,
    sx?: Sx,
}

export type DetailActionProps = typeof TableDetail[keyof typeof TableDetail] | null;
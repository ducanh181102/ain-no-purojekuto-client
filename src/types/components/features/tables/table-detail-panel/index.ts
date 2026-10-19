import { TableDetail } from "@/constants/actions";
import { Sx } from "@/types/app/props/sx";
import { TableProps } from "@/types/components/features/tables";

export type TableDetailPanelProps = {
    table?: TableProps,
    sx?: Sx,
}

export type TableDetailActionProps = typeof TableDetail[keyof typeof TableDetail] | null;
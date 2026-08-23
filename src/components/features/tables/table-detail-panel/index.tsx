'use client'

import DetailPanel from "@/components/common/organisms/detail-panel";
import { TableDetailPanelProps } from "@/types/components/features/tables/table-detail-panel";


export default function TableDetailPanel({ table, sx }: TableDetailPanelProps) {

    return <DetailPanel sx={sx} children={undefined}/>
}
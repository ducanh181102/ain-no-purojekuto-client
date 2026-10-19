'use client'

import BoxAtoms from "@/components/common/atoms/box";
import { MainOrderDetailPanelProps } from "@/types/components/features/orders/order-detail-panel/main-order-detail-panel";


export default function MainOrderDetailPanel({ sx }: MainOrderDetailPanelProps) {

    return <BoxAtoms component="main"
        sx={{
            ...sx,
        }} >
            a
    </BoxAtoms>
}
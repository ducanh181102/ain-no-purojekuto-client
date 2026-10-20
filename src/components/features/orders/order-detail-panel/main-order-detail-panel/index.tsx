'use client'

import BoxAtoms from "@/components/common/atoms/box";
import TextAtoms from "@/components/common/atoms/text";
import { TextColor } from "@/constants/props/colors";
import { Component } from "@/constants/props/components";
import { FontWeight } from "@/constants/props/input-props";
import { FontSize } from "@/constants/props/sizes";
import { getLocalText } from "@/lib/i18n";
import OrderProcessMainOrderDetailPanel from "./order-process-main-order-detail-panel";
import { MainOrderDetailPanelProps } from "@/types/components/features/orders/order-detail-panel/main-order-detail-panel";
import OrderItemsMainOrderDetailPanel from "./order-items-main-order-detail-panel";


export default function MainOrderDetailPanel({ sx, order }: MainOrderDetailPanelProps) {

    return <BoxAtoms component="main"
        sx={{
            ...sx,
        }} >
        <TextAtoms component={Component.label}
            color={TextColor.textPrimary}
            sx={{ fontSize: FontSize.large, fontWeight: FontWeight.w600 }}>
            {getLocalText().text.orderFlow}
        </TextAtoms>
        <OrderProcessMainOrderDetailPanel sx={{}} order={order} />
        <TextAtoms component={Component.label}
            color={TextColor.textPrimary}
            sx={{ fontSize: FontSize.large, fontWeight: FontWeight.w600 }}>
            {getLocalText().text.itemsInOrder}
        </TextAtoms>
        <OrderItemsMainOrderDetailPanel sx={{}} order={order} />
    </BoxAtoms>
}
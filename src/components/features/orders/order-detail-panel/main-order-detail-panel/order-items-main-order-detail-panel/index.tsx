'use client'

import BoxAtoms from "@/components/common/atoms/box";
import TextAtoms from "@/components/common/atoms/text";
import { SxColor, TextColor } from "@/constants/props/colors";
import { Component } from "@/constants/props/components";
import { Display } from "@/constants/props/displays";
import { FlexDirection, Gap } from "@/constants/props/flexs";
import { AlignItems, JustifyContent } from "@/constants/props/grids";
import { FontWeight } from "@/constants/props/input-props";
import { FontSize, MaxHeight } from "@/constants/props/sizes";
import { useOrderItemByOrderId } from "@/hooks/queries/useOrderItems";
import { getLocalText } from "@/lib/i18n";
import { OrderProcessMainOrderDetailPanelProps } from "@/types/components/features/orders/order-detail-panel/main-order-detail-panel/order-process-main-order-detail-panel";
import { getOrderItemsCount } from "@/utils/string";
import CircleIcon from '@mui/icons-material/Circle';
import OrderStatus from "../../../order-status";
import { UpperCaseOrderItemStatus, UpperCaseOrderStatus } from "@/constants/keys";
import OrderItemStatus from "@/components/features/order-items/order-item-status";
import { formatMoney, multiplyNumbers } from "@/utils/number";


export default function OrderItemsMainOrderDetailPanel({ sx, order }: OrderProcessMainOrderDetailPanelProps) {

    const { data: orderItems } = useOrderItemByOrderId(order?.id ?? null) || [];

    return <BoxAtoms component={Component.div}
        sx={{
            ...sx,
            display: Display.flex,
            flexDirection: FlexDirection.column,
            gap: Gap.medium,
        }} >
        <BoxAtoms component={Component.div}
            sx={{
                display: Display.flex,
                flexDirection: FlexDirection.column,
                gap: Gap.small,
                maxHeight: MaxHeight.boxMedium,
                overflowY: 'auto',
            }} >
            {orderItems?.map((item, index) => (
                <BoxAtoms key={index} component={Component.div}
                    sx={{
                        display: Display.flex,
                        justifyContent: JustifyContent.spaceBetween,
                        flexDirection: FlexDirection.column,
                    }} >
                    <BoxAtoms component={Component.div} sx={{
                        display: Display.flex,
                        justifyContent: JustifyContent.spaceBetween,
                        flexDirection: FlexDirection.row,
                    }}>
                        <BoxAtoms component={Component.div}
                            sx={{
                                display: Display.flex,
                                alignItems: AlignItems.center,
                                gap: Gap.small,
                            }} >
                            <TextAtoms component={Component.label}
                                color={TextColor.textPrimary}
                                sx={{ fontSize: FontSize.medium, fontWeight: FontWeight.w400 }} children={item?.dish?.name ?? getLocalText().text.blank} />
                        </BoxAtoms>
                        <TextAtoms component={Component.label}
                            color={TextColor.textPrimary}
                            sx={{ fontSize: FontSize.medium, fontWeight: FontWeight.w400 }}>
                            {getOrderItemsCount(item?.quantity)}
                        </TextAtoms>
                    </BoxAtoms>
                    <BoxAtoms component={Component.div} sx={{
                        display: Display.flex,
                        justifyContent: JustifyContent.spaceBetween,
                        flexDirection: FlexDirection.row,
                    }}>
                        <OrderItemStatus status={item?.status ?? UpperCaseOrderItemStatus.pending} />
                        <TextAtoms component={Component.label}
                            color={TextColor.textPrimary}
                            sx={{ fontSize: FontSize.medium, fontWeight: FontWeight.w400 }}>
                            {formatMoney(multiplyNumbers(item?.quantity ?? 0, item?.price ?? 0))}
                        </TextAtoms>
                    </BoxAtoms>
                </BoxAtoms>
            ))}
        </BoxAtoms>
    </BoxAtoms>
}
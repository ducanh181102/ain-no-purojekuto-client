'use client'

import BoxAtoms from "@/components/common/atoms/box";
import TextAtoms from "@/components/common/atoms/text";
import { TextColor } from "@/constants/props/colors";
import { Component } from "@/constants/props/components";
import { Display } from "@/constants/props/displays";
import { FlexDirection } from "@/constants/props/flexs";
import { FontWeight } from "@/constants/props/input-props";
import { FontSize } from "@/constants/props/sizes";
import { useOrderItemByOrderId } from "@/hooks/queries/useOrderItems";
import { getLocalText } from "@/lib/i18n";
import { useOrderStore } from "@/stores/useOrderStore";
import { DishOrderClientBoxProps } from "@/types/components/features/orders/order-client/main-order-client/dish-order-client-box";

export default function DishOrderClientBox({ orderId }: DishOrderClientBoxProps) {
    // Lấy danh sách món ăn từ orderId
    const { data: orderItems = [] } = useOrderItemByOrderId(orderId);
    
    return <BoxAtoms component={Component.div} sx={{
        display: Display.flex,
        flexDirection: FlexDirection.column,
    }}>
        <TextAtoms
            color={TextColor.textPrimary}
            sx={{
                fontSize: FontSize.medium,
                fontWeight: FontWeight.w400,
            }}
            children={orderItems.length + getLocalText().code.space + getLocalText().text.dish}
            component={Component.label} />
    </BoxAtoms>
}

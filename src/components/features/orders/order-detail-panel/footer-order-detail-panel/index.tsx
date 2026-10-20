'use client'

import BoxAtoms from "@/components/common/atoms/box";
import LineAtoms from "@/components/common/atoms/line";
import TextAtoms from "@/components/common/atoms/text";
import { TextColor } from "@/constants/props/colors";
import { Component } from "@/constants/props/components";
import { Display } from "@/constants/props/displays";
import { AlignSelf } from "@/constants/props/flexs";
import { JustifyContent } from "@/constants/props/grids";
import { FontWeight } from "@/constants/props/input-props";
import { Orientation } from "@/constants/props/orientations";
import { FontSize, Margin } from "@/constants/props/sizes";
import { useTotalOrderItemByOrderId } from "@/hooks/queries/useOrderItems";
import { getLocalText } from "@/lib/i18n";
import { FooterOrderDetailPanelProps } from "@/types/components/features/orders/order-detail-panel/footer-order-detail-panel";
import { formatMoney } from "@/utils/number";


export default function FooterOrderDetailPanel({ sx, orderId }: FooterOrderDetailPanelProps) {
    const { data: total = { total: 0 } } = useTotalOrderItemByOrderId(orderId ? orderId : null);

    return <BoxAtoms component={Component.footer}
        sx={{
            ...sx,
        }} >
        <LineAtoms orientation={Orientation.horizontal} sx={{ my: Margin.x2smallSpace }} />
        <BoxAtoms component={Component.div}
            sx={{
                display: Display.flex,
                justifyContent: JustifyContent.spaceBetween,
            }} >
            <TextAtoms color={TextColor.textSecondary} sx={{
                alignSelf: AlignSelf.baseline,
                fontSize: FontSize.large,
            }} component={Component.label} children={getLocalText().text.tempCalculate} />
            <TextAtoms color={TextColor.textPrimary} sx={{
                alignSelf: AlignSelf.baseline,
                fontWeight: FontWeight.w600,
                fontSize: FontSize.large,
            }} component={Component.label} children={formatMoney(total?.total)} />
        </BoxAtoms>
        <BoxAtoms component={Component.div}
            sx={{
                display: Display.flex,
                justifyContent: JustifyContent.spaceBetween,
            }} >
            <TextAtoms color={TextColor.textPrimary} sx={{
                fontSize: FontSize.x2large,
                fontWeight: FontWeight.w600,
                alignSelf: AlignSelf.baseline,
            }} component={Component.label} children={getLocalText().text.total} />
            <TextAtoms color={TextColor.info} sx={{
                fontSize: FontSize.x3large,
                alignSelf: AlignSelf.baseline,
                fontWeight: FontWeight.w600,
            }} component={Component.label} children={formatMoney(total?.total)} />
        </BoxAtoms>
    </BoxAtoms>
}
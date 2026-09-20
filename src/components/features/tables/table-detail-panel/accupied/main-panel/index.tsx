'use client'

import BoxAtoms from "@/components/common/atoms/box";
import TextAtoms from "@/components/common/atoms/text";
import Price from "@/components/common/molecules/price";
import { UpperCaseTableStatus } from "@/constants/keys";
import { TextColor } from "@/constants/props/colors";
import { Component } from "@/constants/props/components";
import { Display } from "@/constants/props/displays";
import { FlexDirection, Gap, JustifyContent } from "@/constants/props/flexs";
import { FontWeight } from "@/constants/props/font-weights";
import { FontSize } from "@/constants/props/sizes";
import { TextVariant } from "@/constants/props/variants";
import { useTotalOrderItemByOrderId } from "@/hooks/queries/useOrderItems";
import { useOrderIdByTableId } from "@/hooks/queries/useOrders";
import { useTableById } from "@/hooks/queries/useTables";
import { getLocalText } from "@/lib/i18n";
import { useTableStore } from "@/stores/useTableStore";
import { useUIStore } from "@/stores/useUIStore";

export default function AccupiedMainPanel() {
    const locale = useUIStore((state) => state.locale)

    const tableId = useTableStore((state) => state.selectedTableId)
    const { data: table } = useTableById(tableId);
    const occupiedTableId = table?.status === UpperCaseTableStatus.occupied ? tableId : null;
    const { data: currentOrder } = useOrderIdByTableId(occupiedTableId)
    const currentOrderId = currentOrder?.orderId ?? null;

    const { data: totalOrder } = useTotalOrderItemByOrderId(currentOrderId);

    const discountAmount = 0;
    const totalAmount = totalOrder?.total ?? 0;


    return <>
        <BoxAtoms component={Component.main} sx={{
            display: Display.flex,
            flexDirection: FlexDirection.column,
            gap: Gap.small,
        }}>
            <TextAtoms variant={TextVariant.caption}
                component={"div"}
                sx={{
                    fontSize: FontSize.xlarge,
                    fontWeight: FontWeight.w600,
                }}
                color={TextColor.textPrimary} >
                {getLocalText().orderInf}
            </TextAtoms>
            <BoxAtoms component={Component.div} sx={{
                display: Display.flex,
                flexDirection: FlexDirection.row,
                justifyContent: JustifyContent.spaceBetween,
            }}>
                <TextAtoms variant={TextVariant.subtitle1}
                    component={"div"}
                    sx={{
                        fontSize: FontSize.large,
                    }}
                    color={TextColor.textSecondary} >
                    {getLocalText().tempCalculate}
                </TextAtoms>
                <Price price={totalAmount} color={TextColor.textPrimary} sx={{
                    fontSize: FontSize.large,
                    fontWeight: FontWeight.w600,
                }} />
            </BoxAtoms>
            <BoxAtoms component={Component.div} sx={{
                display: Display.flex,
                flexDirection: FlexDirection.row,
                justifyContent: JustifyContent.spaceBetween,
            }}>
                <TextAtoms variant={TextVariant.subtitle1}
                    component={"div"}
                    sx={{
                        fontSize: FontSize.large,
                    }}
                    color={TextColor.textSecondary} >
                    {getLocalText().discount}
                </TextAtoms>
                <Price price={discountAmount} isNegative={true} color={TextColor.error} sx={{
                    fontSize: FontSize.large,
                    fontWeight: FontWeight.w400,
                }} />
            </BoxAtoms>
            <BoxAtoms component={Component.div} sx={{
                display: Display.flex,
                flexDirection: FlexDirection.row,
                justifyContent: JustifyContent.spaceBetween,
            }}>
                <TextAtoms variant={TextVariant.subtitle1}
                    component={"div"}
                    sx={{
                        fontSize: FontSize.xlarge,
                        fontWeight: FontWeight.w600,
                    }}
                    color={TextColor.textPrimary} >
                    {getLocalText().total}
                </TextAtoms>
                <Price price={totalAmount - discountAmount} color={TextColor.primary} sx={{
                    fontSize: FontSize.x2large,
                    fontWeight: FontWeight.w600,
                }} />
            </BoxAtoms>
        </BoxAtoms>
    </>
}

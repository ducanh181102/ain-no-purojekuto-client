'use client'

import BoxAtoms from "@/components/common/atoms/box";
import TextAtoms from "@/components/common/atoms/text";
import Price from "@/components/common/molecules/price";
import { BorderWidth } from "@/constants/props/borders";
import { SxColor, TextColor } from "@/constants/props/colors";
import { Component } from "@/constants/props/components";
import { Display } from "@/constants/props/displays";
import { AlignItems, FlexDirection, Gap, JustifyContent } from "@/constants/props/flexs";
import { FontWeight } from "@/constants/props/font-weights";
import { BorderRadius, FontSize, Padding } from "@/constants/props/sizes";
import { TextVariant } from "@/constants/props/variants";
import { useTotalOrderItemByOrderId } from "@/hooks/queries/useOrderItems";
import { useOrderIdByTableId } from "@/hooks/queries/useOrders";
import { useTableById } from "@/hooks/queries/useTables";
import { getLocalText } from "@/lib/i18n";
import { useTableStore } from "@/stores/useTableStore";
import { useUIStore } from "@/stores/useUIStore";
import CircleIcon from '@mui/icons-material/Circle';

export default function AvailableMainPanel() {
    const locale = useUIStore((state) => state.locale)

    const tableId = useTableStore((state) => state.selectedTableId)
    const { data: table } = useTableById(tableId);
    const occupiedTableId = table?.status === "OCCUPIED" ? tableId : null;
    const { data: currentOrder } = useOrderIdByTableId(occupiedTableId)
    const currentOrderId = currentOrder?.orderId ?? null;

    const { data: totalOrder } = useTotalOrderItemByOrderId(currentOrderId);

    const initAmount = 0;
    const totalAmount = totalOrder?.total ?? 0;


    return <>
        <BoxAtoms component={Component.main} sx={{
            display: Display.flex,
            flexDirection: FlexDirection.column,
            gap: Gap.small,
        }}>
            <BoxAtoms component={Component.div} sx={{
                display: Display.flex,
                flexDirection: FlexDirection.column,
                gap: Gap.xSmall,

                borderRadius: BorderRadius.medium,
                borderWidth: BorderWidth.mediumBorder,

                bgcolor: SxColor.successSoft,
                px: Padding.smallSpace,
                py: Padding.smallSpace,
            }}>
                <BoxAtoms component={Component.div} sx={{
                    display: Display.flex,
                    flexDirection: FlexDirection.row,
                    alignItems: AlignItems.center,
                    justifyContent: JustifyContent.flexStart,
                    gap: Gap.xSmall,
                }}>
                    <CircleIcon sx={{
                        fontSize: FontSize.small,
                        color: SxColor.success,
                    }} />
                    <TextAtoms
                        component={Component.div}
                        variant={TextVariant.body1}
                        color={TextColor.textPrimary}
                        sx={{
                            fontSize: FontSize.large,
                            fontWeight: FontWeight.w700,
                        }}
                    >
                        {getLocalText().chooseTableFromList}
                    </TextAtoms>
                </BoxAtoms>
                <TextAtoms component={Component.div}
                    variant={TextVariant.body2}
                    color={TextColor.textSecondary}
                    sx={{
                        fontSize: FontSize.medium,
                        fontWeight: FontWeight.w400,
                    }}>{
                        getLocalText().noOpenOrderDescription
                    }</TextAtoms>
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
                    {getLocalText().orderCount}
                </TextAtoms>
                <TextAtoms variant={TextVariant.subtitle1}
                    component={"div"}
                    sx={{
                        fontSize: FontSize.large,
                        fontWeight: FontWeight.w600,
                    }}
                    color={TextColor.textPrimary} >
                    {getLocalText().none}
                </TextAtoms>
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
                    {getLocalText().tempCalculate}
                </TextAtoms>
                <Price price={initAmount} isNegative={false} color={TextColor.textPrimary} sx={{
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
                    {getLocalText().processingStatus}
                </TextAtoms>
                <TextAtoms variant={TextVariant.subtitle1}
                    component={"div"}
                    sx={{
                        fontSize: FontSize.large,
                        fontWeight: FontWeight.w600,
                    }}
                    color={TextColor.textSecondary} >
                    {getLocalText().notServed}
                </TextAtoms>
            </BoxAtoms>
        </BoxAtoms>
    </>
}

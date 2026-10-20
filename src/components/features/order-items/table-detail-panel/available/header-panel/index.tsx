'use client'

import BoxAtoms from "@/components/common/atoms/box";
import TextAtoms from "@/components/common/atoms/text";
import CapacityGuest from "@/components/common/molecules/capacity-guest";
import { TextColor } from "@/constants/props/colors";
import { Component } from "@/constants/props/components";
import { Display } from "@/constants/props/displays";
import { AlignItems, FlexDirection, Gap, JustifyContent } from "@/constants/props/flexs";
import { FontSize, NumSize } from "@/constants/props/sizes";
import { useTableById } from "@/hooks/queries/useTables";
import { getLocalText } from "@/lib/i18n";
import { useTableStore } from "@/stores/useTableStore";
import TableStatus from "../../../order-item-status";

export default function AvailableHeaderPanel() {

    const tableId = useTableStore((state) => state.selectedTableId)
    const { data: table } = useTableById(tableId);

    return (
        <BoxAtoms component={Component.header} sx={{
            display: Display.flex,
            flexDirection: FlexDirection.column,
            mt: NumSize.xlargeSpace,
            gap: Gap.small,
        }}>
            <TableStatus status={table?.status} />
            <BoxAtoms component={Component.div} sx={{
                display: Display.flex,
                flexDirection: FlexDirection.row,
                justifyContent: JustifyContent.spaceBetween,
            }}>
                <CapacityGuest capacity={table?.capacity} sx={{
                    fontSize: FontSize.large,
                }} />

                <BoxAtoms component={Component.div} sx={{
                    display: Display.flex,
                    flexDirection: FlexDirection.row,
                    alignItems: AlignItems.baseline,
                    gap: Gap.xSmall,
                }}>
                    <TextAtoms
                        children={
                            `${getLocalText().text.tableReady}`
                        }
                        sx={{
                            fontSize: FontSize.large,
                        }}
                        color={
                            TextColor.textSecondary
                        }
                        component={"div"} >
                    </TextAtoms>
                </BoxAtoms>
            </BoxAtoms>
        </BoxAtoms>
    )
}

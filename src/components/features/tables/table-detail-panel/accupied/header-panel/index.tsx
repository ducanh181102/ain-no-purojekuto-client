'use client'

import BoxAtoms from "@/components/common/atoms/box";
import TextAtoms from "@/components/common/atoms/text";
import CapacityGuest from "@/components/common/molecules/capacity-guest";
import StatusChip from "@/components/common/molecules/status-chip";
import TimeHhMm from "@/components/common/molecules/time-hhmm";
import { TextColor } from "@/constants/props/colors";
import { Component } from "@/constants/props/components";
import { Cursor } from "@/constants/props/cursor";
import { Display } from "@/constants/props/displays";
import { AlignItems, FlexDirection, Gap, JustifyContent } from "@/constants/props/flexs";
import { FontWeight } from "@/constants/props/font-weights";
import { FontSize, MinHeight, NumSize, Width } from "@/constants/props/sizes";
import { ChipVariant } from "@/constants/props/variants";
import { useOrderById, useOrderIdByTableId } from "@/hooks/queries/useOrders";
import { useTableById } from "@/hooks/queries/useTables";
import { getLocalText } from "@/lib/i18n";
import { useTableStore } from "@/stores/useTableStore";
import { useUIStore } from "@/stores/useUIStore";

export default function AccupiedHeaderPanel() {
    const locale = useUIStore((state) => state.locale)

    const tableId = useTableStore((state) => state.selectedTableId)
    const { data: table } = useTableById(tableId);
    const occupiedTableId = table?.status === "OCCUPIED" ? tableId : null;
    const { data: currentOrder } = useOrderIdByTableId(occupiedTableId)
    const currentOrderId = currentOrder?.orderId ?? null;

    const { data: order } = useOrderById(currentOrderId);

    const formatVNTime = (value?: string | Date | null, format?: string) => {
        if (!value) return getLocalText().blank;

        const date = value instanceof Date ? value : new Date(value);

        if (Number.isNaN(date.getTime())) {
            return getLocalText().blank;
        }

        return date.toLocaleString("vi-VN", format == getLocalText().HHmm ? {
            timeZone: "Asia/Ho_Chi_Minh",
            hour12: false,
            hour: "2-digit",
            minute: "2-digit",
        } : {
            timeZone: "Asia/Ho_Chi_Minh",
            hour12: false,
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        });
    };

    return (
        <BoxAtoms component={Component.header} sx={{
            display: Display.flex,
            flexDirection: FlexDirection.column,
            mt: NumSize.xlargeSpace,
            gap: Gap.small,
        }}>
            <StatusChip status={table?.status}
                variant={ChipVariant.outlined}
                sx={{
                    display: Display.flex,
                    borderRadius: NumSize.medium,
                    minHeight: MinHeight.chipMedium,
                    fontSize: FontSize.medium,
                    width: Width.chipXSmall,
                    fontWeight: FontWeight.w400,
                    cursor: Cursor.default,
                }}
            />
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
                                `${getLocalText().start}${getLocalText().twoDot}`
                            }
                            sx={{
                                fontSize: FontSize.large,
                            }}
                            color={
                                TextColor.textSecondary
                            }
                            component={"div"} >
                        </TextAtoms>

                        <TimeHhMm time={formatVNTime(order?.createdAt, getLocalText().HHmm)}
                            sx={{
                                fontSize: FontSize.large,
                            }}
                        />
                    </BoxAtoms>
            </BoxAtoms>
        </BoxAtoms>
    )
}

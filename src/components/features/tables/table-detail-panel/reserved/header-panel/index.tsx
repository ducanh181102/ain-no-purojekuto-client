'use client'

import BoxAtoms from "@/components/common/atoms/box";
import TextAtoms from "@/components/common/atoms/text";
import CapacityGuest from "@/components/common/molecules/capacity-guest";
import TimeHhMm from "@/components/common/molecules/time-hhmm";
import { TextColor } from "@/constants/props/colors";
import { Component } from "@/constants/props/components";
import { Display } from "@/constants/props/displays";
import { AlignItems, FlexDirection, Gap, JustifyContent } from "@/constants/props/flexs";
import { FontSize, NumSize } from "@/constants/props/sizes";
import { getLocalText } from "@/lib/i18n";
import { ReservedHeaderPanelProps } from "@/types/components/features/tables/table-detail-panel/reserved/header-panel";
import TableStatus from "../../../table-status";

export default function ReservedHeaderPanel({ table, reservation }: ReservedHeaderPanelProps) {

    const formatVNTime = (value?: string | Date | null, format?: string) => {
        if (!value) return getLocalText().text.blank;

        const date = value instanceof Date ? value : new Date(value);

        if (Number.isNaN(date.getTime())) {
            return getLocalText().text.blank;
        }

        return date.toLocaleString("vi-VN", format == getLocalText().text.HHmm ? {
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
            <TableStatus status={table?.status ?? ""} />
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
                            `${getLocalText().text.bookedAt}${getLocalText().text.twoDot}`
                        }
                        sx={{
                            fontSize: FontSize.large,
                        }}
                        color={
                            TextColor.textSecondary
                        }
                        component={"div"} >
                    </TextAtoms>

                    <TimeHhMm time={formatVNTime(reservation?.reservedAt, getLocalText().text.HHmm)}
                        sx={{
                            fontSize: FontSize.large,
                        }}
                    />
                </BoxAtoms>
            </BoxAtoms>
        </BoxAtoms>
    )
}


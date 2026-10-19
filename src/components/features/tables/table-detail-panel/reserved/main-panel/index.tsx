'use client'

import BoxAtoms from "@/components/common/atoms/box";
import TextAtoms from "@/components/common/atoms/text";
import { UpperCaseTableStatus } from "@/constants/keys";
import { TextAlign } from "@/constants/props/aligns";
import { BorderWidth } from "@/constants/props/borders";
import { SxColor, TextColor } from "@/constants/props/colors";
import { Component } from "@/constants/props/components";
import { Display } from "@/constants/props/displays";
import { AlignItems, Flex, FlexDirection, Gap, JustifyContent } from "@/constants/props/flexs";
import { FontWeight } from "@/constants/props/font-weights";
import { Overflow } from "@/constants/props/position";
import { BorderRadius, FontSize, Height, Padding } from "@/constants/props/sizes";
import { TextVariant } from "@/constants/props/variants";
import { WordBreak } from "@/constants/props/word-break";
import { useReservationByTableId } from "@/hooks/queries/useReservations";
import { useTableById } from "@/hooks/queries/useTables";
import { getLocalText } from "@/lib/i18n";
import { useTableStore } from "@/stores/useTableStore";
import CircleIcon from '@mui/icons-material/Circle';

export default function ReservedMainPanel() {
    // lấy id table đang chọn
    const tableId = useTableStore((state) => state.selectedTableId)
    // get thông tin bàn
    const { data: table } = useTableById(tableId);
    // check bàn có phải trạng thái đặt
    const reservedTableId = table?.status === UpperCaseTableStatus.reserved ? tableId : null;
    // get thông tin đặt bàn
    const { data: reservation } = useReservationByTableId(reservedTableId)

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
                borderColor: SxColor.border,

                bgcolor: SxColor.defaultSoft,
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
                        color: SxColor.warning,
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
                        {getLocalText().text.reservedTableTitle}
                    </TextAtoms>
                </BoxAtoms>
                <TextAtoms component={Component.div}
                    variant={TextVariant.body2}
                    color={TextColor.textSecondary}
                    sx={{
                        fontSize: FontSize.medium,
                        fontWeight: FontWeight.w400,
                    }}>{
                        getLocalText().text.reservationHoldDescription
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
                    {getLocalText().text.customer}
                </TextAtoms>
                <TextAtoms variant={TextVariant.subtitle1}
                    component={"div"}
                    sx={{
                        fontSize: FontSize.large,
                        fontWeight: FontWeight.w600,
                    }}
                    color={TextColor.textPrimary} >
                    {reservation?.customerName || ""}
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
                    {getLocalText().text.phoneNumber}
                </TextAtoms>
                <TextAtoms variant={TextVariant.subtitle1}
                    component={"div"}
                    sx={{
                        fontSize: FontSize.large,
                        fontWeight: FontWeight.w600,
                    }}
                    color={TextColor.textPrimary} >
                    {reservation?.phone || ""}
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
                    {getLocalText().text.guestCount}
                </TextAtoms>
                <TextAtoms variant={TextVariant.subtitle1}
                    component={"div"}
                    sx={{
                        fontSize: FontSize.large,
                        fontWeight: FontWeight.w600,
                    }}
                    color={TextColor.textPrimary} >
                    {reservation?.guestCount?.toString() || ""}
                </TextAtoms>
            </BoxAtoms>
            <BoxAtoms component={Component.div} sx={{
                display: Display.flex,
                flexDirection: FlexDirection.column,
                justifyContent: JustifyContent.spaceBetween,
                gap: Gap.xSmall,
            }}>
                <TextAtoms variant={TextVariant.subtitle1}
                    component={"div"}
                    sx={{
                        fontSize: FontSize.large,
                        flex: Flex.growOnly
                    }}
                    color={TextColor.textSecondary} >
                    {getLocalText().text.note}
                </TextAtoms>
                <TextAtoms variant={TextVariant.subtitle2}
                    component={"div"}
                    sx={{
                        fontSize: FontSize.large,
                        fontWeight: FontWeight.w500,
                        overflow: Overflow.auto,
                        borderRadius: BorderRadius.medium,
                        borderWidth: BorderWidth.mediumBorder,
                        borderColor: SxColor.border,
                        bgcolor: SxColor.backgroundItem,
                        px: Padding.smallSpace,
                        py: Padding.smallSpace,
                        height: Height.textareaLarge,
                        wordBreak: WordBreak.breakWord,
                    }}
                    align={TextAlign.left}
                    color={TextColor.textPrimary} >
                    {reservation?.note || ""}
                </TextAtoms>
            </BoxAtoms>
        </BoxAtoms>
    </>
}

'use client'

import BoxAtoms from "@/components/common/atoms/box";
import ButtonAtoms from "@/components/common/atoms/button";
import TextAtoms from "@/components/common/atoms/text";
import CapacityGuest from "@/components/common/molecules/capacity-guest";
import Price from "@/components/common/molecules/price";
import StatusChip from "@/components/common/molecules/status-chip";
import TimeHhMm from "@/components/common/molecules/time-hhmm";
import DetailPanel from "@/components/common/organisms/detail-panel";
import { SxColor, TextColor } from "@/constants/props/colors";
import { Component } from "@/constants/props/components";
import { Display } from "@/constants/props/displays";
import { AlignItems, FlexDirection, Gap, JustifyContent } from "@/constants/props/flexs";
import { FontWeight } from "@/constants/props/font-weights";
import { FontSize, MinHeight, NumSize, Width } from "@/constants/props/sizes";
import { ButtonVariant, ChipVariant, TextVariant } from "@/constants/props/variants";
import { Strings } from "@/constants/strings";
import { useOrderItemByOrderId } from "@/hooks/queries/useOrderItems";
import { useOrderById } from "@/hooks/queries/useOrders";
import { useTableById } from "@/hooks/queries/useTables";
import { useOrderStore } from "@/stores/useOrderStore";
import { useTableStore } from "@/stores/useTableStore";
import { Locale } from "@/types/app/locales";
import { TableDetailPanelProps } from "@/types/components/features/tables/table-detail-panel";

export default function TableDetailPanel({ sx }: TableDetailPanelProps) {
    const locale: Locale = "vi";

    const tableId = useTableStore((state) => state.selectedTableId)
    const orderId = useOrderStore((state) => state.selectedOrderId)

    const { data: table } = useTableById(tableId);
    const { data: order } = useOrderById(orderId);
    const { data: orderItems } = useOrderItemByOrderId(orderId);

    const sum = (a: number, b: number): number => a + b; 

    const formatVNTime = (value?: string | Date | null, format?: string) => {
        if (!value) return Strings[locale].text.blank;

        const date = value instanceof Date ? value : new Date(value);

        if (Number.isNaN(date.getTime())) {
            return Strings[locale].text.blank;
        }

        return date.toLocaleString("vi-VN", format == Strings[locale].text.HHmm ? {
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

    const get

    return <DetailPanel sx={sx} title={table?.name || ''}>
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
                    fontWeight: FontWeight.w400
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
                            `${Strings[locale].text.start}${Strings[locale].text.twoDot}`
                        }
                        sx={{
                            fontSize: FontSize.large,
                        }}
                        color={
                            TextColor.textSecondary
                        }
                        component={"div"} >
                    </TextAtoms>

                    <TimeHhMm time={formatVNTime(order?.createdAt, Strings[locale].text.HHmm)}
                        sx={{
                            fontSize: FontSize.large,
                        }}
                    />
                </BoxAtoms>
            </BoxAtoms>
        </BoxAtoms>

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
                {Strings[locale].text.orderInf}
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
                    {Strings[locale].text.tempCalculate}
                </TextAtoms>
                <Price price={1} color={TextColor.textPrimary} sx={{
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
                    {Strings[locale].text.discount}
                </TextAtoms>
                <Price price={0} isNegative={true} color={TextColor.error} sx={{
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
                    {Strings[locale].text.total}
                </TextAtoms>
                <Price price={sum(10000, 1)} color={TextColor.primary} sx={{
                    fontSize: FontSize.x2large,
                    fontWeight: FontWeight.w600,
                }} />
            </BoxAtoms>
        </BoxAtoms>

        <BoxAtoms component={Component.footer} sx={{
            display: Display.flex,
            flexDirection: FlexDirection.column,
            gap: Gap.xSmall,
        }}>
            <ButtonAtoms sx={{
                color: SxColor.blackBtn,
                fontWeight: FontWeight.w400,
                borderColor: SxColor.border,
            }} variant={ButtonVariant.outlined} children={Strings[locale].text.viewOrder} />
            <ButtonAtoms variant={ButtonVariant.contained} children={Strings[locale].text.addDish} />
            <ButtonAtoms sx={{
                color: SxColor.blackBtn,
                fontWeight: FontWeight.w400,
                borderColor: SxColor.border,
            }} variant={ButtonVariant.outlined} children={Strings[locale].text.pay} />

        </BoxAtoms>

    </DetailPanel>
}
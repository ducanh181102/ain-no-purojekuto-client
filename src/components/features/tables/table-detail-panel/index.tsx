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
import { ChipSize, FontSize, MinHeight, NumSize, Width } from "@/constants/props/sizes";
import { ButtonVariant, ChipVariant, TextVariant } from "@/constants/props/variants";
import { Strings } from "@/constants/strings";
import { useTableById } from "@/hooks/queries/useTables";
import { useTableStore } from "@/stores/useTableStore";
import { Locale } from "@/types/app/locales";
import { TableDetailPanelProps } from "@/types/components/features/tables/table-detail-panel";

export default function TableDetailPanel({ sx }: TableDetailPanelProps) {
    const locale: Locale = "vi";
    
    const tableId = useTableStore((state) => state.selectedTableId)

    const { data: table } = useTableById(tableId);

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

                    <TimeHhMm time={"12:20"}
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
                <Price price={100000} color={TextColor.textPrimary} sx={{
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
                <Price price={100000} isNegative={true} color={TextColor.error} sx={{
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
                <Price price={100000} isNegative={true} color={TextColor.primary} sx={{
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
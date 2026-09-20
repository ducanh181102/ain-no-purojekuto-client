'use client'

import BoxAtoms from "@/components/common/atoms/box";
import ButtonAtoms from "@/components/common/atoms/button";
import { TableDetail } from "@/constants/actions";
import { SxColor } from "@/constants/props/colors";
import { Component } from "@/constants/props/components";
import { Display } from "@/constants/props/displays";
import { FlexDirection, Gap } from "@/constants/props/flexs";
import { FontWeight } from "@/constants/props/font-weights";
import { BorderRadius } from "@/constants/props/sizes";
import { ButtonVariant } from "@/constants/props/variants";
import { useCreateOrder } from "@/hooks/mutations/useCreateOrder";
import { getLocalText } from "@/lib/i18n";
import { useUIStore } from "@/stores/useUIStore";
import { AvailableFooterPanelProps } from "@/types/components/features/tables/table-detail-panel/available/footer-panel";

export default function AvailableFooterPanel({ setActiveAction, tableId }: AvailableFooterPanelProps) {
    const locale = useUIStore((state) => state.locale)
    const { mutate: createOrder } = useCreateOrder()

    return <>
        <BoxAtoms component={Component.footer} sx={{
            display: Display.flex,
            flexDirection: FlexDirection.column,
            gap: Gap.xSmall,
        }}>
            <ButtonAtoms
                variant={ButtonVariant.contained}
                children={getLocalText().openTable}
                onClick={() => {
                    tableId && createOrder(tableId)
                }}
                sx={{
                    borderRadius: BorderRadius.large,
                }}
            />

            <ButtonAtoms sx={{
                color: SxColor.blackBtn,
                fontWeight: FontWeight.w400,
                borderColor: SxColor.border,
                borderRadius: BorderRadius.large,
            }}
                onClick={() => setActiveAction(TableDetail.reserveTable)}
                variant={ButtonVariant.outlined}
                children={getLocalText().reserveTable}
            />
        </BoxAtoms>
    </>
}

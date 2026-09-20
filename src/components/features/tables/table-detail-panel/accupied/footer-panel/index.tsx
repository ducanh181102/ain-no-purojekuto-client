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
import { getLocalText } from "@/lib/i18n";
import { useUIStore } from "@/stores/useUIStore";
import { AccupiedFooterPanelProps } from "@/types/components/features/tables/table-detail-panel/accupied/footer-panel";

export default function AccupiedFooterPanel({ setActiveAction }: AccupiedFooterPanelProps) {
    const locale = useUIStore((state) => state.locale)

    return <>
        <BoxAtoms component={Component.footer} sx={{
            display: Display.flex,
            flexDirection: FlexDirection.column,
            gap: Gap.xSmall,
        }}>
            <ButtonAtoms sx={{
                color: SxColor.blackBtn,
                fontWeight: FontWeight.w400,
                borderColor: SxColor.border,
                borderRadius: BorderRadius.large,
            }}
                variant={ButtonVariant.outlined}
                onClick={() => setActiveAction(TableDetail.viewOrder)}
                children={getLocalText().viewOrder}
            />
            <ButtonAtoms
                sx={{
                    borderRadius: BorderRadius.large,
                }}
                variant={ButtonVariant.contained}
                onClick={() => setActiveAction(TableDetail.addDish)}
                children={getLocalText().addDish}
            />
            <ButtonAtoms
                sx={{
                    color: SxColor.blackBtn,
                    fontWeight: FontWeight.w400,
                    borderColor: SxColor.border,
                    borderRadius: BorderRadius.large,
                }}
                variant={ButtonVariant.outlined}
                onClick={() => setActiveAction(TableDetail.payment)}
                children={getLocalText().pay}
            />

        </BoxAtoms>
    </>
}

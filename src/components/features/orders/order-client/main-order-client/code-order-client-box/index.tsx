'use client'

import BoxAtoms from "@/components/common/atoms/box";
import TextAtoms from "@/components/common/atoms/text";
import { TextColor } from "@/constants/props/colors";
import { Component } from "@/constants/props/components";
import { Display } from "@/constants/props/displays";
import { FlexDirection, Gap } from "@/constants/props/flexs";
import { FontWeight } from "@/constants/props/input-props";
import { FontSize } from "@/constants/props/sizes";
import { getLocalText } from "@/lib/i18n";

export default function CodeOrderClientBox({ code }: { code: number }) {
    return <BoxAtoms component={Component.div} sx={{
        display: Display.flex,
        flexDirection: FlexDirection.column,
        gap: Gap.none,
    }}>
        <TextAtoms
            color={TextColor.textPrimary}
            sx={{
                fontSize: FontSize.medium,
                fontWeight: FontWeight.w600,
            }} component={Component.label} children={getLocalText().code.orderCodePrefix + code} />
        <TextAtoms
            color={TextColor.textSecondary}
            sx={{
                fontSize: FontSize.small,
                fontWeight: FontWeight.w400,
            }} component={Component.label} children={getLocalText().text.openedBy +
                getLocalText().code.space + getLocalText().text.cashier} />
    </BoxAtoms>
}

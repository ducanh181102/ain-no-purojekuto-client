'use client'

import BoxAtoms from "@/components/common/atoms/box";
import LineAtoms from "@/components/common/atoms/line";
import TextAtoms from "@/components/common/atoms/text";
import { TextColor } from "@/constants/props/colors";
import { Component } from "@/constants/props/components";
import { Display } from "@/constants/props/displays";
import { FlexDirection } from "@/constants/props/flexs";
import { FontWeight } from "@/constants/props/font-weights";
import { Gap } from "@/constants/props/grids";
import { Orientation } from "@/constants/props/orientations";
import { FontSize } from "@/constants/props/sizes";
import { TextVariant } from "@/constants/props/variants";
import { getLocalText } from "@/lib/i18n";
import { useUIStore } from "@/stores/useUIStore";

export default function FooterOrderClient() {
    const locale = useUIStore((state) => state.locale)

    return <BoxAtoms component={Component.div} sx={{
        display: Display.flex,
        flexDirection: FlexDirection.column,
        gap: Gap.small,
    }}>
        <LineAtoms orientation={Orientation.horizontal} />
        <TextAtoms component={Component.label}
            variant={TextVariant.caption}
            sx={{
                fontSize: FontSize.medium,
                fontWeight: FontWeight.w400,
            }}
            color={TextColor.textSecondary}
            children={getLocalText().text.orderListHint}></TextAtoms>
    </BoxAtoms>
}

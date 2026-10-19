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
import { formatVNTime, today } from "@/utils/date";

export default function TimeOrderClientBox({ time }: { time: string }) {
    return <BoxAtoms component={Component.div} sx={{
        display: Display.flex,
        flexDirection: FlexDirection.column,
        gap: Gap.none,
    }}>
        <TextAtoms color={TextColor.textPrimary} sx={{
            fontSize: FontSize.medium,
            fontWeight: FontWeight.w600,
        }} component={Component.label} children={formatVNTime(time, getLocalText().text.HHmm)} />
        <TextAtoms color={TextColor.textSecondary} sx={{
            fontSize: FontSize.small,
            fontWeight: FontWeight.w400,
        }} component={Component.label} children={time != today ? formatVNTime(time, getLocalText().text.ddMMyy) : getLocalText().text.today} />
    </BoxAtoms>
}
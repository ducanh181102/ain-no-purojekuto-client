'use client'

import BoxAtoms from "@/components/common/atoms/box";
import TextAtoms from "@/components/common/atoms/text";
import { TextAlign } from "@/constants/props/aligns";
import { BorderStyle, BorderWidth } from "@/constants/props/borders";
import { SxColor, TextColor } from "@/constants/props/colors";
import { Component } from "@/constants/props/components";
import { Display } from "@/constants/props/displays";
import { AlignItems, FlexDirection, Gap, JustifyContent } from "@/constants/props/flexs";
import { BorderRadius, FontSize, Height, Padding, Width } from "@/constants/props/sizes";
import { TextVariant } from "@/constants/props/variants";
import { getLocalText } from "@/lib/i18n";
import { useUIStore } from "@/stores/useUIStore";
import CircleIcon from '@mui/icons-material/Circle';
import TableRestaurantOutlinedIcon from "@mui/icons-material/TableRestaurantOutlined";

export default function NoneSelectedTable() {
    const locale = useUIStore((state) => state.locale)

    return <>
        <BoxAtoms component={Component.main} sx={{
            display: Display.flex,
            flexDirection: FlexDirection.column,
            gap: Gap.small,
            height: Height.full,
            justifyContent: JustifyContent.center,
            alignItems: AlignItems.center,
        }}>
            <BoxAtoms
                sx={{
                    width: Width.iconMedium,
                    height: Height.iconMedium,
                    borderRadius: BorderRadius.circel,
                    bgcolor: SxColor.defaultSoft,
                    borderColor: SxColor.border,
                    borderStyle: BorderStyle.solid,
                    borderWidth: BorderWidth.mediumBorder,
                    display: Display.flex,
                    alignItems: AlignItems.center,
                    justifyContent: JustifyContent.center,
                }} component={Component.div} >
                <TableRestaurantOutlinedIcon sx={{ fontSize: FontSize.x2large, color: SxColor.icon }} />
            </BoxAtoms>
            <TextAtoms
                component={Component.h1}
                variant={TextVariant.h6}
                color={TextColor.textPrimary}
                sx={{
                    fontSize: FontSize.x2large,
                    fontWeight: 700,
                }}
            >
                {getLocalText().noSelectedTableTitle}
            </TextAtoms>
            <TextAtoms
                component={Component.div}
                variant={TextVariant.body2}
                color={TextColor.textSecondary}
                sx={{
                    textAlign: TextAlign.center,
                }}
            >
                {getLocalText().noSelectedTableDescription}
            </TextAtoms>
            <BoxAtoms component={Component.div} sx={{
                display: Display.flex,
                alignItems: AlignItems.center,
                justifyContent: JustifyContent.center,
                gap: Gap.xSmall,
                borderColor: SxColor.border,
                borderRadius: BorderRadius.medium,
                borderStyle: BorderStyle.solid,
                borderWidth: BorderWidth.mediumBorder,
                bgcolor: SxColor.defaultSoft,
                px: Padding.smallSpace,
                py: Padding.xsmallSpace,
            }}>
                <CircleIcon sx={{
                    fontSize: FontSize.small,
                    color: SxColor.primary,
                }} />
                <TextAtoms
                    component={Component.div}
                    variant={TextVariant.body2}
                    color={TextColor.textSecondary}

                >
                    {getLocalText().chooseTableFromList}
                </TextAtoms>
            </BoxAtoms>
        </BoxAtoms>
    </>
}

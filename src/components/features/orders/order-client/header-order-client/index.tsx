'use client'

import BoxAtoms from "@/components/common/atoms/box";
import ButtonAtoms from "@/components/common/atoms/button";
import LineAtoms from "@/components/common/atoms/line";
import TextAtoms from "@/components/common/atoms/text";
import { SxColor, TextColor } from "@/constants/props/colors";
import { Component } from "@/constants/props/components";
import { Display } from "@/constants/props/displays";
import { AlignItems, FlexDirection, Gap, JustifyContent } from "@/constants/props/flexs";
import { FontWeight } from "@/constants/props/font-weights";
import { Orientation } from "@/constants/props/orientations";
import { FontSize } from "@/constants/props/sizes";
import { ButtonVariant, TextVariant } from "@/constants/props/variants";
import { getLocalText } from "@/lib/i18n";

export default function HeaderOrderClient() {

    return <BoxAtoms component={Component.div} sx={{
        display: Display.flex,
        flexDirection: FlexDirection.column,
        gap: Gap.xSmall,
    }}>

        <BoxAtoms component={Component.header} sx={{
            display: Display.flex,
            flexDirection: FlexDirection.row,
            justifyContent: JustifyContent.spaceBetween,
            alignItems: AlignItems.center,
        }}>
            <BoxAtoms component={Component.div} sx={{
                display: Display.flex,
                flexDirection: FlexDirection.column,
                gap: Gap.none,
            }}>
                <TextAtoms component={Component.h1}
                    sx={{
                        fontSize: FontSize.x2large,
                        fontWeight: FontWeight.w600,
                    }}
                    color={TextColor.textPrimary}
                    children={getLocalText().text.orderList}></TextAtoms>
                <TextAtoms component={Component.label}
                    variant={TextVariant.caption}
                    sx={{
                        fontSize: FontSize.medium,
                        fontWeight: FontWeight.w400,
                    }}
                    color={TextColor.textSecondary}
                    children={getLocalText().text.orderListDescription}></TextAtoms>
            </BoxAtoms>
            <ButtonAtoms children={getLocalText().text.createOrder} variant={ButtonVariant.contained} ></ButtonAtoms>
        </BoxAtoms>
        <LineAtoms orientation={Orientation.horizontal} />
    </BoxAtoms>
}

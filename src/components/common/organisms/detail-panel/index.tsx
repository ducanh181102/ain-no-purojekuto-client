'use client'

import { SxColor, TextColor } from "@/constants/props/colors";
import { Component } from "@/constants/props/components";
import { TextVariant } from "@/constants/props/variants";
import { DetailPanelProps } from "@/types/components/common/organisms/detail-panel";
import BoxAtoms from "../../atoms/box";
import TextAtoms from "../../atoms/text";
import { Display } from "@/constants/props/displays";
import { Position } from "@/constants/props/position";
import { NumSize } from "@/constants/props/sizes";

export default function DetailPanel({ sx, title, children }: DetailPanelProps) {

    const fontSize = sx?.fontSize;
    const fontWeight = sx?.fontWeight;

    return <BoxAtoms component={Component.article} sx={{
        ...sx,
        bgcolor: SxColor.backgroundItem,
    }}>
        <TextAtoms color={TextColor.textPrimary}
            variant={TextVariant.h6} component={Component.div}
            sx={{
                position: Position.absolute,
                fontSize: fontSize,
                fontWeight: fontWeight,
            }}
            children={title}>
        </TextAtoms>
        {children}
    </BoxAtoms>
}
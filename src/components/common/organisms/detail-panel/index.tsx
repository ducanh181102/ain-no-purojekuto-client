'use client'

import { SxColor } from "@/constants/props/colors";
import { Component } from "@/constants/props/components";
import { DetailPanelProps } from "@/types/components/common/organisms/detail-panel";
import BoxAtoms from "../../atoms/box";

export default function DetailPanel({ sx, children }: DetailPanelProps) {

    return <BoxAtoms component={Component.article} sx={{
        ...sx,
        bgcolor: SxColor.backgroundItem,
    }} children={undefined}>
    </BoxAtoms>
}
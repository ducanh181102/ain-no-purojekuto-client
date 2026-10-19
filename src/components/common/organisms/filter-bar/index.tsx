'use client'

import { BorderStyle, BorderWidth } from "@/constants/props/borders";
import { SxColor } from "@/constants/props/colors";
import { Component } from "@/constants/props/components";
import { Display } from "@/constants/props/displays";
import { AlignItems, Gap } from "@/constants/props/flexs";
import { Height, NumSize, Width } from "@/constants/props/sizes";
import { FilterBarDataProps } from "@/types/components/common/organisms/filter-bar";
import BoxAtoms from "../../atoms/box";

export default function FilterBar({filterBarData}: { filterBarData: FilterBarDataProps[] }) {

    return <BoxAtoms component={Component.nav} sx={{
        display: Display.flex,
        px: NumSize.xlarge,
        bgcolor: SxColor.backgroundItem,
        alignItems: AlignItems.center,
        gap: Gap.small,
        borderColor: SxColor.border,
        borderRadius: NumSize.medium,
        borderWidth: BorderWidth.mediumBorder,
        borderStyle: BorderStyle.solid,
        width: Width.filterbar,
        height: Height.full,
    }}>
        {filterBarData.map((status) => status)}
    </BoxAtoms>
}
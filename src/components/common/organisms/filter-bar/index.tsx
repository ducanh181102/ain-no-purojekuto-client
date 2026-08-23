'use client'

import { BorderStyle, BorderWidth } from "@/constants/props/borders";
import { SxColor } from "@/constants/props/colors";
import { Component } from "@/constants/props/components";
import { Display } from "@/constants/props/displays";
import { AlignItems, Gap } from "@/constants/props/flexs";
import { ChipSize, FontSize, Height, MinHeight, NumSize, Width } from "@/constants/props/sizes";
import { ChipVariant } from "@/constants/props/variants";
import { FilterBarProps } from "@/types/components/common/organisms/filter-bar";
import BoxAtoms from "../../atoms/box";
import StatusChip from "../../molecules/status-chip";
import { count } from "console";

export default function FilterBar({ filterBarProps }: FilterBarProps) {

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
        {filterBarProps.map((status) => (
            <StatusChip key={status.key} variant={ChipVariant.outlined}
                status={status.status}
                size={ChipSize.medium}
                onClick={status.onClick}
                count={status.count}
                sx={{
                    display: Display.flex,
                    borderRadius: NumSize.medium,
                    minHeight: MinHeight.chipMedium,
                    fontSize: FontSize.medium,
                }} />
        ))
        }
    </BoxAtoms>
}
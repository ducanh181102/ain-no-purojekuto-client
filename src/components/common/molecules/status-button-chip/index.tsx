'use client';

import ChipAtoms from "@/components/common/atoms/chip";
import { Display } from "@/constants/props/displays";
import { FontSize, MinHeight, NumSize } from "@/constants/props/sizes";
import { ChipVariant } from "@/constants/props/variants";
import { StatusButtonChipProps } from "@/types/components/common/molecule/status-button-chip";

export default function StatusButtonChip({ color, bgcolor, label, icon, onClick }: StatusButtonChipProps) {
  const variant = ChipVariant.outlined;

  return <ChipAtoms variant={variant}
    color={color}
    label={label}
    onClick={onClick}
    icon={icon}
    sx={{
      display: Display.flex,
      borderRadius: NumSize.medium,
      minHeight: MinHeight.chipMedium,
      fontSize: FontSize.medium,
      bgcolor: bgcolor
    }} />
}
'use client';

import ChipAtoms from "@/components/common/atoms/chip";
import { Display } from "@/constants/props/displays";
import { ChipSize, FontSize, MinHeight, NumSize } from "@/constants/props/sizes";
import { ChipVariant } from "@/constants/props/variants";
import { StatusChipProps } from "@/types/components/common/molecule/status-chip";

export default function StatusChip({ size, color, bgcolor, label }: StatusChipProps) {

  const variant = ChipVariant.outlined;
  const sx = size === ChipSize.small ? {
    display: Display.flex,
    borderRadius: NumSize.medium,
    minHeight: MinHeight.chipSmall,
    fontSize: FontSize.small,
    bgcolor: bgcolor,
  } : {
    display: Display.flex,
    borderRadius: NumSize.medium,
    minHeight: MinHeight.chipMedium,
    fontSize: FontSize.medium,
    bgcolor: bgcolor,
  };

  return <ChipAtoms variant={variant}
    color={color}
    label={label}
    sx={sx} />
}
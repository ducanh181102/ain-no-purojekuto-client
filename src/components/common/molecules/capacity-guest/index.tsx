'use client';

import TextAtoms from "@/components/common/atoms/text";
import { TextAlign } from "@/constants/props/aligns";
import { TextColor } from "@/constants/props/colors";
import { Component } from "@/constants/props/components";
import { FontWeight } from "@/constants/props/font-weights";
import { TextVariant } from "@/constants/props/variants";
import { getLocalText } from "@/lib/i18n";
import { useUIStore } from "@/stores/useUIStore";
import { CapacityGuestProps } from "@/types/components/common/molecule/capacity-guest";

export default function CapacityGuest({ capacity, sx }: CapacityGuestProps) {
  const locale = useUIStore((state) => state.locale)

  return <TextAtoms variant={TextVariant.caption}
    component={Component.label} color={TextColor.textSecondary}
    align={TextAlign.center}
    sx={{
      ...sx,
      fontWeight: FontWeight.w400,
    }}
    children={
      `${capacity} 
          ${getLocalText().guest}`
    }></TextAtoms>
}
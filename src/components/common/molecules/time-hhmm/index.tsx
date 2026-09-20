'use client';

import TextAtoms from "@/components/common/atoms/text";
import { TextAlign } from "@/constants/props/aligns";
import { TextColor } from "@/constants/props/colors";
import { Component } from "@/constants/props/components";
import { FontWeight } from "@/constants/props/font-weights";
import { TextVariant } from "@/constants/props/variants";
import { useUIStore } from "@/stores/useUIStore";
import { TimeHhMmProps } from "@/types/components/common/molecule/time-hhmm";

export default function TimeHhMm({ time, sx }: TimeHhMmProps) {
  const locale = useUIStore((state) => state.locale)

  return <TextAtoms variant={TextVariant.caption}
    component={Component.label} color={TextColor.textSecondary}
    align={TextAlign.center}
    sx={{
      ...sx,
      fontWeight: FontWeight.w400,
    }}
    children={
      `${time}`}
  ></TextAtoms>
}
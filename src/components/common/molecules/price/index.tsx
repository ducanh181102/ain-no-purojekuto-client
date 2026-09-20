'use client';

import TextAtoms from "@/components/common/atoms/text";
import { TextAlign } from "@/constants/props/aligns";
import { Component } from "@/constants/props/components";
import { TextVariant } from "@/constants/props/variants";
import { getLocalText } from "@/lib/i18n";
import { useUIStore } from "@/stores/useUIStore";
import { PriceProps } from "@/types/components/common/molecule/price";

export default function Price({ price, sx, color, isNegative }: PriceProps) {
  const locale = useUIStore((state) => state.locale) ?? "vi";

  const amount = Number(price ?? 0);
  const safeAmount = Number.isFinite(amount) ? amount : 0;
  const result = `${safeAmount.toLocaleString(getLocalText().numberLocale)} ${getLocalText().currencySuffix}`;

  return <TextAtoms variant={TextVariant.subtitle2}
    component={Component.label} color={color}
    align={TextAlign.center}
    sx={{
      ...sx,
    }}
    children={`${isNegative ? getLocalText().hyphen : ""} ${result}`}
  ></TextAtoms>
}

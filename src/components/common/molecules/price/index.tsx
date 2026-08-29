'use client';

import TextAtoms from "@/components/common/atoms/text";
import { TextAlign } from "@/constants/props/aligns";
import { Component } from "@/constants/props/components";
import { TextVariant } from "@/constants/props/variants";
import { Strings } from "@/constants/strings";
import { Locale } from "@/types/app/locales";
import { PriceProps } from "@/types/components/common/molecule/price";

export default function Price({ price, sx, color, isNegative }: PriceProps) {
  const locale: Locale = "vi";

  const result = price.toLocaleString("vi-VN") + " đ"

  return <TextAtoms variant={TextVariant.subtitle2}
    component={Component.label} color={color}
    align={TextAlign.center}
    sx={{
      ...sx,
    }}
    children={`${isNegative ? Strings[locale].text.hyphen : ""} ${result}`}
  ></TextAtoms>
}
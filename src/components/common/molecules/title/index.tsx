'use client';

import TextAtoms from "@/components/common/atoms/text";
import { TextAlign } from "@/constants/props/aligns";
import { TextColor } from "@/constants/props/colors";
import { Component } from "@/constants/props/components";
import { FontWeight } from "@/constants/props/font-weights";
import { FontSize, MaxLength } from "@/constants/props/sizes";
import { TextVariant } from "@/constants/props/variants";
import { TitleProps } from "@/types/components/common/molecule/title";

export default function Title({ title, sx }: TitleProps) {
  return <TextAtoms variant={TextVariant.h6}
    sx={{
      fontWeight: FontWeight.w500,
      fontSize: FontSize.large,
    }}
    component={Component.h6}
    color={TextColor.textPrimary}
    align={TextAlign.center}
    maxLength={MaxLength.xsmall}
    children={title}></TextAtoms>
}
// src/components/layouts/topbar/index.tsx
"use client";

import BoxAtoms from "@/components/common/atoms/box";
import TextAtoms from "@/components/common/atoms/text";
import UserAvatarMolecule from "@/components/common/molecules/user-avatar";
import { TextAlign } from "@/constants/props/aligns";
import { BorderStyle, BorderWidth } from "@/constants/props/borders";
import { SxColor, TextColor } from "@/constants/props/colors";
import { Component } from "@/constants/props/components";
import { Display } from "@/constants/props/displays";
import { AlignItems, FlexDirection, JustifyContent } from "@/constants/props/flexs";
import { FontWeight } from "@/constants/props/font-weights";
import { Position, ZIndex } from "@/constants/props/position";
import { MinHeight, NumSize, Width } from "@/constants/props/sizes";
import { TextVariant } from "@/constants/props/variants";
import { Strings } from "@/constants/strings";
import { Locale } from "@/types/app/locales";

export default function Topbar() {

  const locale: Locale = "vi";


  return (
    <BoxAtoms
      component={Component.topbar}
      sx={{
        display: Display.flex,
        flexDirection: FlexDirection.row,
        justifyContent: JustifyContent.spaceBetween,
        alignItems: AlignItems.center,

        bgcolor: SxColor.backgroundItem,
        height: MinHeight.topbar,

        borderColor: SxColor.border,
        borderStyle: BorderStyle.solid,
        borderWidth: BorderWidth.bottomMediumBorder,

        px: NumSize.xlarge,

        position: Position.fixed,
        width: Width.topbar,

        zIndex: ZIndex.topbar,
      }}
    >
      <TextAtoms variant={TextVariant.h5}
        component={Component.h1}
        color={TextColor.textPrimary}
        children={
          Strings[locale].tableManagementPage.title
        }
        sx={{
          fontWeight: FontWeight.w600,
        }}
        align={TextAlign.center}></TextAtoms>
      <UserAvatarMolecule></UserAvatarMolecule>
    </BoxAtoms>
  );
}
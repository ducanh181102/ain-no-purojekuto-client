import BoxAtoms from "@/components/common/atoms/box"
import TextAtoms from "@/components/common/atoms/text"
import { TextAlign } from "@/constants/props/aligns"
import { BorderStyle, BorderWidth } from "@/constants/props/borders"
import { SxColor, TextColor } from "@/constants/props/colors"
import { Component } from "@/constants/props/components"
import { Display } from "@/constants/props/displays"
import { FontWeight } from "@/constants/props/font-weights"
import { Position, ZIndex } from "@/constants/props/position"
import { Height, Width } from "@/constants/props/sizes"
import { TextVariant } from "@/constants/props/variants"

export default function SideBar() {
    return <BoxAtoms component={Component.aside}
        sx={{
            display: Display.block,
            bgcolor: SxColor.backgroundItem,
            height: Height.screenHeight,
            width: Width.sidebar,

            position: Position.fixed,
            zIndex: ZIndex.sidebar,
            
            borderColor: SxColor.border,
            borderStyle: BorderStyle.solid,
            borderWidth: BorderWidth.rightMediumBorder,
        }}>
        <TextAtoms variant={TextVariant.h6}
            component={Component.h1}
            color={TextColor.textPrimary}
            children={
                "SideBar"
            }
            sx={{
                fontWeight: FontWeight.w600,
            }}
            align={TextAlign.center}>
        </TextAtoms>
    </BoxAtoms>
}
'use client'

import BoxAtoms from "@/components/common/atoms/box"
import TextAtoms from "@/components/common/atoms/text"
import { SideBarItem } from "@/constants/keys"
import { TextAlign } from "@/constants/props/aligns"
import { BorderStyle, BorderWidth } from "@/constants/props/borders"
import { SxColor, TextColor } from "@/constants/props/colors"
import { Component } from "@/constants/props/components"
import { Cursor } from "@/constants/props/cursor"
import { Display } from "@/constants/props/displays"
import { AlignItems, FlexDirection, Gap, JustifyContent } from "@/constants/props/flexs"
import { FontWeight } from "@/constants/props/font-weights"
import { Position, ZIndex } from "@/constants/props/position"
import { BorderRadius, FontSize, Height, MinHeight, NumSize, Padding, Width } from "@/constants/props/sizes"
import { TextVariant } from "@/constants/props/variants"
import { Strings } from "@/constants/strings"
import { useSideBarStore } from "@/stores/useSideBarStore"
import { Locale } from "@/types/app/locales"
import CircleIcon from '@mui/icons-material/Circle'
import { usePathname } from "next/navigation"

export default function SideBar() {

    const locale: Locale = "vi";

    const setSelectedStatus = useSideBarStore((status) => status.setSelectedSideBar);
    const sidebar = useSideBarStore((state) => state.selectedSideBar) || usePathname().replace(/^\//, "");;

    const sideBars = [
        {
            key: SideBarItem.dashboard,
            label: Strings[locale].text.dashboard,
            isSelected: sidebar == SideBarItem.dashboard,
            onClick: () => {
                setSelectedStatus(SideBarItem.dashboard)
            }
        }, {
            key: SideBarItem.tables,
            label: Strings[locale].text.tables,
            isSelected: sidebar == SideBarItem.tables,
            onClick: () => {
                setSelectedStatus(SideBarItem.tables)
            }
        }, {
            key: SideBarItem.orders,
            label: Strings[locale].text.orders,
            isSelected: sidebar == SideBarItem.orders,
            onClick: () => {
                setSelectedStatus(SideBarItem.orders)
            }
        }, {
            key: SideBarItem.menu,
            label: Strings[locale].text.menu,
            isSelected: sidebar == SideBarItem.menu,
            onClick: () => {
                setSelectedStatus(SideBarItem.menu)
            }
        }, {
            key: SideBarItem.kitchen,
            label: Strings[locale].text.kitchen,
            isSelected: sidebar == SideBarItem.kitchen,
            onClick: () => {
                setSelectedStatus(SideBarItem.kitchen)
            }
        }, {
            key: SideBarItem.payments,
            label: Strings[locale].text.payments,
            isSelected: sidebar == SideBarItem.payments,
            onClick: () => {
                setSelectedStatus(SideBarItem.payments)
            }
        }, {
            key: SideBarItem.reports,
            label: Strings[locale].text.reports,
            isSelected: sidebar == SideBarItem.reports,
            onClick: () => {
                setSelectedStatus(SideBarItem.reports)
            }
        }
    ]

    return <BoxAtoms component={Component.aside}
        sx={{
            display: Display.block,
            bgcolor: SxColor.backgroundItem,
            height: Height.screenHeight,
            width: Width.sidebar,

            position: Position.fixed,
            zIndex: ZIndex.sidebar,

            borderStyle: BorderStyle.solid,
            borderWidth: BorderWidth.rightMediumBorder,

            px: NumSize.large,
        }}>
        <BoxAtoms component={Component.div} sx={{
            display: Display.flex,
            flexDirection: FlexDirection.column,
            alignItems: AlignItems.flexStart,
            justifyContent: JustifyContent.flexEnd,
            height: MinHeight.topbar,
        }}>
            <TextAtoms variant={TextVariant.h6}
                component={Component.h1}
                color={TextColor.textPrimary}
                children={
                    Strings[locale].text.kaiten
                }
                sx={{
                    fontWeight: FontWeight.w600,
                    fontSize: FontSize.x3large,
                }}
                align={TextAlign.center}>
            </TextAtoms>
            <TextAtoms variant={TextVariant.caption}
                component={Component.label}
                color={TextColor.textSecondary}
                children={
                    Strings[locale].text.seafoodRestaurant
                }
                sx={{
                    fontSize: FontSize.medium,
                }}
                align={TextAlign.center}>
            </TextAtoms>
        </BoxAtoms>
        <BoxAtoms component={Component.ul} sx={{
            py: Padding.largeSpace,

            display: Display.flex,
            flexDirection: FlexDirection.column,
            gap: Gap.small,

        }} >
            {
                sideBars.map((sidebar) => {
                    return (
                        <BoxAtoms
                            key={sidebar.key}
                            component={Component.li}
                            onClick={sidebar.onClick}
                            sx={{
                                display: Display.flex,
                                flexDirection: FlexDirection.row,
                                gap: Gap.xSmall,

                                alignItems: AlignItems.center,
                                bgcolor: sidebar.isSelected ? SxColor.primarySoft : SxColor.backgroundItem,
                                px: Padding.xsmallSpace,
                                py: Padding.xsmallSpace,
                                cursor: Cursor.pointer,

                                borderColor: SxColor.border,
                                borderRadius: BorderRadius.medium,
                            }}
                        >
                            <CircleIcon sx={{
                                fontSize: FontSize.xlarge,
                                color: sidebar.isSelected ? SxColor.primary : SxColor.slateBlue
                            }} />
                            <TextAtoms variant={TextVariant.caption}
                                component={Component.label}
                                color={sidebar.isSelected ? TextColor.primary : TextColor.textSecondary}
                                children={sidebar.label}
                                sx={{
                                    fontSize: FontSize.large,
                                    cursor: Cursor.pointer,
                                }}
                                align={TextAlign.center}>
                            </TextAtoms>
                        </BoxAtoms>
                    )
                })
            }
        </BoxAtoms>
    </BoxAtoms>
}
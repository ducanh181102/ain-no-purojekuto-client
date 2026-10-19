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
import { getLocalText } from "@/lib/i18n"
import { useSideBarStore } from "@/stores/useSideBarStore"
import CircleIcon from '@mui/icons-material/Circle'
import { usePathname, useRouter } from "next/navigation"

export default function SideBar() {

    const router = useRouter();
    const setSelectedStatus = useSideBarStore((status) => status.setSelectedSideBar);
    const sidebar = useSideBarStore((state) => state.selectedSideBar) || usePathname().replace(/^\//, "");

    const sideBars = [
        {
            key: SideBarItem.home,
            label: getLocalText().text.home,
            isSelected: sidebar == SideBarItem.home,
            onClick: () => {
                setSelectedStatus(SideBarItem.home)
                router.push('/' + SideBarItem.home)
            }
        }, {
            key: SideBarItem.tables,
            label: getLocalText().text.tables,
            isSelected: sidebar == SideBarItem.tables,
            onClick: () => {
                setSelectedStatus(SideBarItem.tables)
                router.push('/' + SideBarItem.tables)
            }
        }, {
            key: SideBarItem.orders,
            label: getLocalText().text.orders,
            isSelected: sidebar == SideBarItem.orders,
            onClick: () => {
                setSelectedStatus(SideBarItem.orders)
                router.push('/' + SideBarItem.orders)
            }
        }, {
            key: SideBarItem.menu,
            label: getLocalText().text.menu,
            isSelected: sidebar == SideBarItem.menu,
            onClick: () => {
                setSelectedStatus(SideBarItem.menu)
                router.push('/' + SideBarItem.menu)
            }
        }, {
            key: SideBarItem.kitchen,
            label: getLocalText().text.kitchen,
            isSelected: sidebar == SideBarItem.kitchen,
            onClick: () => {
                setSelectedStatus(SideBarItem.kitchen)
                router.push('/' + SideBarItem.kitchen)
            }
        }, {
            key: SideBarItem.payments,
            label: getLocalText().text.payments,
            isSelected: sidebar == SideBarItem.payments,
            onClick: () => {
                setSelectedStatus(SideBarItem.payments)
                router.push('/' + SideBarItem.payments)
            }
        }, {
            key: SideBarItem.reports,
            label: getLocalText().text.reports,
            isSelected: sidebar == SideBarItem.reports,
            onClick: () => {
                setSelectedStatus(SideBarItem.reports)
                router.push('/' + SideBarItem.reports)
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
                    getLocalText().text.kaiten
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
                    getLocalText().text.seafoodRestaurant
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
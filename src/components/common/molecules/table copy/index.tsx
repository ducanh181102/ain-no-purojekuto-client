import { Booleans } from "@/constants/booleans"
import { BorderStyle, BorderWidth } from "@/constants/props/borders"
import { SxColor, TextColor } from "@/constants/props/colors"
import { Component } from "@/constants/props/components"
import { Display } from "@/constants/props/displays"
import { FlexDirection, Gap, JustifyContent } from "@/constants/props/flexs"
import { FontWeight } from "@/constants/props/font-weights"
import { BorderRadius, FontSize, Padding } from "@/constants/props/sizes"
import { TableMoleculeProps } from "@/types/components/common/molecule/table"
import BoxAtoms from "../../../atoms/box"
import GridAtoms from "../../../atoms/grid"
import StackAtoms from "../../../atoms/stack"
import TextAtoms from "../../../atoms/text"
import { OverflowY } from "@/constants/props/position"

export default function TableMolecule({ sx, headers, data }: TableMoleculeProps) {

    // padding px
    const paddingX = Padding.smallSpace
    // padding py
    const paddingY = Padding.xsmallSpace
    // gap between rows
    const rowGap = Gap.xSmall

    return <BoxAtoms component={Component.section}
        sx={{
            ...sx,
        }} >
        {/* // Header     */}
        <BoxAtoms
            sx={{
                display: Display.flex,
                flexDirection: FlexDirection.column,
                py: paddingY,
            }}
            component={Component.header}>
            <GridAtoms container={Booleans.true}>{
                headers && [...headers].map((header, index, array) => {
                    const justifyContent = array.length - 1 === index ?
                        JustifyContent.flexEnd : JustifyContent.flexStart
                    return (
                        <GridAtoms key={index} size={header.size}>
                            <StackAtoms sx={{
                                display: Display.flex,
                                flexDirection: FlexDirection.row,
                                justifyContent: justifyContent,
                                px: paddingX,
                            }}>
                                <TextAtoms children={header.title} color={TextColor.textSecondary} sx={{
                                    fontSize: FontSize.medium,
                                    fontWeight: FontWeight.w600,
                                }} component={Component.label} />
                            </StackAtoms>
                        </GridAtoms>
                    )
                })
            }
            </GridAtoms>
        </BoxAtoms>
        {/* // Body */}
        <BoxAtoms isHideScroll component={Component.main} sx={{
            display: Display.flex,
            flexDirection: FlexDirection.column,
            overflowY: OverflowY.auto,
            gap: rowGap,
        }}>
            {data && data.map((row, index) => {
                return (
                    <BoxAtoms key={index} component={Component.div} sx={{
                        borderRadius: BorderRadius.medium,
                        borderStyle: BorderStyle.solid,
                        borderColor: SxColor.border,
                        borderWidth: BorderWidth.mediumBorder,
                    }}>
                        <GridAtoms key={index} container={Booleans.true}>
                            {headers && [...headers].map((header, index, array) => {
                                const justifyContent = array.length - 1 === index ?
                                    JustifyContent.flexEnd : JustifyContent.flexStart
                                return (
                                    <GridAtoms key={index} size={header.size}>
                                        <StackAtoms sx={{
                                            display: Display.flex,
                                            flexDirection: FlexDirection.row,
                                            justifyContent: justifyContent,
                                            px: paddingX,
                                            py: paddingY,
                                        }}>
                                            {row[header.title]}
                                        </StackAtoms>
                                    </GridAtoms>
                                )
                            })}
                        </GridAtoms>
                    </BoxAtoms>
                )

            }
            )}
        </BoxAtoms>
    </BoxAtoms>
}

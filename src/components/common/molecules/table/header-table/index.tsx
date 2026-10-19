import { Booleans } from "@/constants/booleans"
import { TextColor } from "@/constants/props/colors"
import { Component } from "@/constants/props/components"
import { Display } from "@/constants/props/displays"
import { FlexDirection, JustifyContent } from "@/constants/props/flexs"
import { FontWeight } from "@/constants/props/font-weights"
import { FontSize, Padding } from "@/constants/props/sizes"
import { HeaderTableMoleculeProps } from "@/types/components/common/molecule/table/header-table"
import BoxAtoms from "../../../atoms/box"
import GridAtoms from "../../../atoms/grid"
import StackAtoms from "../../../atoms/stack"
import TextAtoms from "../../../atoms/text"

export default function HeaderTableMolecule({ titles, gridSizes, paddingX, paddingY }: HeaderTableMoleculeProps) {

    return <BoxAtoms
        sx={{
            display: Display.flex,
            flexDirection: FlexDirection.column,
            py: paddingY,
        }}
        component={Component.header}>
        <GridAtoms container={Booleans.true}>{
            titles && [...titles].map((title, index, array) => {
                const justifyContent = array.length - 1 === index ?
                    JustifyContent.flexEnd : JustifyContent.flexStart
                return (
                    <GridAtoms key={index} size={gridSizes[index]}>
                        <StackAtoms sx={{
                            display: Display.flex,
                            flexDirection: FlexDirection.row,
                            justifyContent: justifyContent,
                            px: paddingX,
                        }}>
                            <TextAtoms children={title} color={TextColor.textSecondary} sx={{
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
}

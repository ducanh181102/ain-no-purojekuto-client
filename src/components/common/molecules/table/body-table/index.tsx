import BoxAtoms from "@/components/common/atoms/box"
import GridAtoms from "@/components/common/atoms/grid"
import StackAtoms from "@/components/common/atoms/stack"
import { Booleans } from "@/constants/booleans"
import { BorderStyle, BorderWidth } from "@/constants/props/borders"
import { SxColor } from "@/constants/props/colors"
import { Component } from "@/constants/props/components"
import { Cursor } from "@/constants/props/cursor"
import { Display } from "@/constants/props/displays"
import { FlexDirection, JustifyContent } from "@/constants/props/flexs"
import { OverflowY } from "@/constants/props/position"
import { BorderRadius, MinHeight } from "@/constants/props/sizes"
import { useUIStore } from "@/stores/useUIStore"
import { BodyTableMoleculeProps } from "@/types/components/common/molecule/table/body-table"

export default function BodyTableMolecule({ gridSizes, data, paddingX, paddingY, gap, selectedIndex: selectedIndexProp, onRowClick }: BodyTableMoleculeProps) {

    const storedSelectedIndex = useUIStore((state) => state.selectedIndex)
    const setSelectedIndex = useUIStore((state) => state.setSelectedIndex)
    const selectedIndex = selectedIndexProp !== undefined ? selectedIndexProp : storedSelectedIndex

    return <BoxAtoms isHideScroll component={Component.main} sx={{
        display: Display.flex,
        flexDirection: FlexDirection.column,
        minHeight: MinHeight.bodyTable,
        overflowY: OverflowY.auto,
        gap: gap,
    }}>
        {data && data.map((row, index) => {
            return (
                <BoxAtoms key={index} onClick={() => {
                    if (onRowClick) {
                        onRowClick(index)
                    } else {
                        setSelectedIndex(index)
                    }
                }} component={Component.div} sx={{
                    borderRadius: BorderRadius.medium,
                    borderStyle: BorderStyle.solid,
                    bgcolor: index !== selectedIndex ? SxColor.backgroundItem : SxColor.bgSelected,
                    cursor: Cursor.pointer,
                    borderColor: index !== selectedIndex ? SxColor.border : SxColor.bdSelected,
                    borderWidth: index !== selectedIndex ? BorderWidth.mediumBorder : BorderWidth.largeBorder,
                }}>
                    <GridAtoms key={index} container={Booleans.true}>
                        {gridSizes && [...gridSizes].map((size, index, array) => {
                            const justifyContent = array.length - 1 === index ?
                                JustifyContent.flexEnd : JustifyContent.flexStart
                            return (
                                <GridAtoms key={index} size={size}>
                                    <StackAtoms sx={{
                                        display: Display.flex,
                                        flexDirection: FlexDirection.row,
                                        justifyContent: justifyContent,
                                        px: paddingX,
                                        py: paddingY,
                                    }}>
                                        {row[Object.keys(row)[index]]}
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
}

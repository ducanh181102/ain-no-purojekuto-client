import { Component } from "@/constants/props/components"
import { Gap } from "@/constants/props/flexs"
import { Padding } from "@/constants/props/sizes"
import { TableMoleculeProps } from "@/types/components/common/molecule/table"
import BoxAtoms from "../../atoms/box"
import BodyTableMolecule from "./body-table"
import HeaderTableMolecule from "./header-table"

export default function TableMolecule({ sx, header, body }: TableMoleculeProps) {

    // padding px
    const paddingX = Padding.smallSpace
    // padding py
    const paddingY = Padding.xsmallSpace
    // gap between rows
    const gap = Gap.xSmall

    return <BoxAtoms component={Component.section}
        sx={{
            ...sx,
        }} >
        <HeaderTableMolecule titles={header.titles} gridSizes={header.gridSizes} paddingX={paddingX} paddingY={paddingY} />
        <BodyTableMolecule
            gridSizes={body.gridSizes}
            data={body.data}
            paddingX={paddingX}
            paddingY={paddingY}
            gap={gap}
            selectedIndex={body.selectedIndex}
            onRowClick={body.onRowClick}
        />
    </BoxAtoms>
}

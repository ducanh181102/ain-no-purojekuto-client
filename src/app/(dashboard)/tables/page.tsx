import BoxAtoms from "@/components/common/atoms/box";
import DetailPanel from "@/components/common/organisms/detail-panel";
import TableFilter from "@/components/features/tables/table-filter";
import TableSearch from "@/components/features/tables/table-search";
import { SxColor } from "@/constants/props/colors";
import { Component } from "@/constants/props/components";
import { Display } from "@/constants/props/displays";
import { AlignItems, Flex, FlexDirection, Gap, JustifyContent } from "@/constants/props/flexs";
import { GridTemplateColumns, GridTemplateRows } from "@/constants/props/grids";
import { OverflowY, Position, Top } from "@/constants/props/position";
import { BorderRadius, Height, MaxHeight, Padding, Width } from "@/constants/props/sizes";
import TablesClient from "../../../components/features/tables/tables-client";
import { getTables } from "../../../services/table.service";
import { BorderStyle, BorderWidth } from "@/constants/props/borders";
import TableDetailPanel from "@/components/features/tables/table-detail-panel";

// Component React
// Props: -
export default async function TablesPage() {
  const tables = (await getTables());;

  return (
    <BoxAtoms component={Component.section} sx={{
      p: Padding.mediumSpace,
      display: Display.flex,
      flexDirection: FlexDirection.column,
      gap: Gap.medium,
      height: Height.mainArea,
    }}>
      <BoxAtoms component={Component.nav} sx={{
        display: Display.flex,
        flexDirection: FlexDirection.row,
        alignItems: AlignItems.flexStart,
        gap: Gap.medium,
        minHeight: MaxHeight.toolbar,
        bgcolor: SxColor.background,
      }}>
        <TableFilter />
        <TableSearch />
      </BoxAtoms>
      <BoxAtoms component={Component.main} sx={{
        display: Display.flex,
        flexDirection: FlexDirection.row,
        alignItems: AlignItems.stretch,
        justifyContent: JustifyContent.spaceBetween,
        bgcolor: SxColor.background,
        gap: Gap.medium,
      }}>
        <TablesClient sx={{
          display: Display.grid,
          bgcolor: SxColor.background,
          gridTemplateColumns: GridTemplateColumns.fourColumns,
          gridTemplateRows: GridTemplateRows.autoContent,
          gap: Gap.medium,
          width: Width.filterbar,
          height: Height.tableClient,
          overflowY: OverflowY.auto,
        }} tables={tables} />
        <TableDetailPanel sx={{
          height: Height.detailPanel,
          flex: Flex.auto,
          top: Top.none,
          position: Position.sticky,

          borderColor: SxColor.border,
          borderStyle: BorderStyle.solid,
          borderWidth: BorderWidth.mediumBorder,
          borderRadius: BorderRadius.medium,

          p: Padding.mediumSpace,

        }} />
      </BoxAtoms>
    </BoxAtoms>
  );
}
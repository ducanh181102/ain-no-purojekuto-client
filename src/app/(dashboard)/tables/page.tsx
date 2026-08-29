import BoxAtoms from "@/components/common/atoms/box";
import TableDetailPanel from "@/components/features/tables/table-detail-panel";
import TableFilter from "@/components/features/tables/table-filter";
import TableSearch from "@/components/features/tables/table-search";
import { BorderStyle, BorderWidth } from "@/constants/props/borders";
import { SxColor } from "@/constants/props/colors";
import { Component } from "@/constants/props/components";
import { Display } from "@/constants/props/displays";
import { AlignItems, Flex, FlexDirection, Gap, JustifyContent } from "@/constants/props/flexs";
import { AlignContent, GridAutoRows, GridTemplateColumns, GridTemplateRows } from "@/constants/props/grids";
import { OverflowY, Position, Top } from "@/constants/props/position";
import { BorderRadius, FontSize, Height, MinHeight, Padding, Width } from "@/constants/props/sizes";
import TablesClient from "../../../components/features/tables/tables-client";
import { FontWeight } from "@/constants/props/font-weights";

// Component React
// Props: -
export default async function TablesPage() {

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
        minHeight: MinHeight.toolbar,
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
          gridAutoRows: GridAutoRows.cardSmall,
          alignContent: AlignContent.start,
          gap: Gap.medium,
          width: Width.filterbar,
          height: Height.tableClient,
          overflowY: OverflowY.auto,
        }} />
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
          fontSize: FontSize.x3large,

          fontWeight: FontWeight.w700,

          display: Display.flex,
          flexDirection: FlexDirection.column,
          gap: Gap.xLarge,

        }} />
      </BoxAtoms>
    </BoxAtoms>
  );
}
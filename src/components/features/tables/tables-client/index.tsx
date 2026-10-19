'use client';

import CardMolecule from "@/components/common/molecules/card";
import BoxClient from "@/components/common/organisms/box-client";
import { UpperCaseTableStatus } from "@/constants/keys";
import { BorderStyle, BorderWidth } from "@/constants/props/borders";
import { SxColor } from "@/constants/props/colors";
import { Component } from "@/constants/props/components";
import { Cursor } from "@/constants/props/cursor";
import { Display } from "@/constants/props/displays";
import { AlignItems, FlexDirection, Gap } from "@/constants/props/flexs";
import { BorderRadius, Padding } from "@/constants/props/sizes";
import { useTableStatus } from "@/hooks/queries/useTables";
import { useTableStore } from "@/stores/useTableStore";
import { TablesClientProps } from "@/types/components/features/tables/tables-client";
import CapacityGuest from "../../../common/molecules/capacity-guest";
import TitleTable from "../../../common/molecules/title";
import TableStatus from "../table-status";

// Component React
// Props: tables from page.tsx
// Return: component 
// Logic: build component combine click handle action
export default function TablesClient({ sx }: TablesClientProps) {

  const status = useTableStore((state) => state.selectedStatus) || UpperCaseTableStatus.all
  const searchKeyword = useTableStore((state) => state.searchKeyword)
  const { data: tables = [], isLoading, isError } = useTableStatus(status);

  const setSelectedTableId = useTableStore((state) => state.setSelectedTableId)
  const selectedTableId = useTableStore((state) => state.selectedTableId)

  const filteredTables = tables.filter((table) =>
    table.name.toLowerCase().includes(searchKeyword.trim().toLowerCase())
  )

  const MainContent = () =>
    filteredTables.map((table, index) => {
      return (
        <CardMolecule
          key={index}
          component={Component.article}
          onClick={() => setSelectedTableId(table.id)}
          sx={{
            borderColor: selectedTableId == table?.id ? SxColor.bdSelected : SxColor.border,
            borderRadius: BorderRadius.medium,
            borderStyle: BorderStyle.solid,
            borderWidth: selectedTableId == table?.id ? BorderWidth.largeBorder : BorderWidth.mediumBorder,

            bgcolor: selectedTableId == table?.id ? SxColor.bgSelected : SxColor.backgroundItem,

            display: Display.flex,
            flexDirection: FlexDirection.column,
            alignItems: AlignItems.flexStart,

            gap: Gap.xSmall,

            px: Padding.cardMedium,
            py: Padding.cardMedium,

            cursor: Cursor.pointer,
          }}
        >
          <TitleTable title={table.name}></TitleTable>
          <CapacityGuest capacity={table.capacity}></CapacityGuest>
          <TableStatus status={table.status}></TableStatus>
        </CardMolecule>);
    }
    );

  return (
    <BoxClient
      sx={sx}
      isLoading={isLoading}
      isError={isError}
    >
      <MainContent />
    </BoxClient>
  );
}


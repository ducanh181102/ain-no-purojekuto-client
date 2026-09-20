'use client';

import BoxAtoms from "@/components/common/atoms/box";
import TextAtoms from "@/components/common/atoms/text";
import CardMolecule from "@/components/common/molecules/card";
import { BorderStyle, BorderWidth } from "@/constants/props/borders";
import { SxColor } from "@/constants/props/colors";
import { Component } from "@/constants/props/components";
import { Cursor } from "@/constants/props/cursor";
import { Display } from "@/constants/props/displays";
import { AlignItems, FlexDirection, Gap } from "@/constants/props/flexs";
import { BorderRadius, FontSize, MinHeight, NumSize, Padding } from "@/constants/props/sizes";
import { ChipVariant } from "@/constants/props/variants";
import { useCreateOrder } from "@/hooks/mutations/useCreateOrder";
import { useTableStatus } from "@/hooks/queries/useTables";
import { getLocalText } from "@/lib/i18n";
import { useTableStore } from "@/stores/useTableStore";
import { useUIStore } from "@/stores/useUIStore";
import { TablesClientProps } from "@/types/components/features/tables/tables-client";
import CapacityGuest from "../../../common/molecules/capacity-guest";
import StatusChip from "../../../common/molecules/status-chip";
import TitleTable from "../../../common/molecules/title";

// Component React
// Props: tables from page.tsx
// Return: component 
// Logic: build component combine click handle action
export default function TablesClient({ sx }: TablesClientProps) {
  const locale = useUIStore((state) => state.locale)

  const status = useTableStore((state) => state.selectedStatus) || "ALL"
  const searchKeyword = useTableStore((state) => state.searchKeyword)
  const { data: tables = [], isLoading, isError } = useTableStatus(status);

  const setSelectedTableId = useTableStore((state) => state.setSelectedTableId)
  const selectedTableId = useTableStore((state) => state.selectedTableId)
  const { mutate: createOrder } = useCreateOrder()

  const filteredTables = tables.filter((table) =>
    table.name.toLowerCase().includes(searchKeyword.trim().toLowerCase())
  )

  return (
    <BoxAtoms component={Component.main}
      isHideScroll={true}
      sx={sx}>
      {isLoading ?
        <TextAtoms component={"div"}>{getLocalText().loading}</TextAtoms> : isError ?
          <TextAtoms component={"div"}>{getLocalText().fetchTablesError}</TextAtoms> : filteredTables.map((table, index) => (
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
              <StatusChip status={table.status}
                variant={ChipVariant.outlined} onClick={() =>
                  createOrder(table.id)
                }
                sx={{
                  display: Display.flex,
                  borderRadius: NumSize.medium,
                  minHeight: MinHeight.chipMedium,
                  fontSize: FontSize.medium,
                }}
              ></StatusChip>
            </CardMolecule>
          ))}
    </BoxAtoms>
  );
}

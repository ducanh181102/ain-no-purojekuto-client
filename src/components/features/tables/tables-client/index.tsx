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
import { useTableStore } from "@/stores/useTableStore";
import { Locale } from "@/types/app/locales";
import { TablesClientProps } from "@/types/components/features/tables/tables-client";
import CapacityGuest from "../../../common/molecules/capacity-guest";
import StatusChip from "../../../common/molecules/status-chip";
import TitleTable from "../../../common/molecules/title";
import { useOrderStore } from "@/stores/useOrderStore";
import { useOrderIdByTableId } from "@/hooks/queries/useOrders";

// Component React
// Props: tables from page.tsx
// Return: component 
// Logic: build component combine click handle action
export default function TablesClient({ sx }: TablesClientProps) {
  const locale: Locale = "vi";

  const status = useTableStore((state) => state.selectedStatus) || "ALL"
  const tableId = useTableStore((state) => state.selectedTableId)
  const { data } = useOrderIdByTableId(tableId);
  const { data: tables = [], isLoading, isError } = useTableStatus(status);

  const setSelectedTableId = useTableStore((state) => state.setSelectedTableId)
  const setSelectedOrderId = useOrderStore((state) => state.setSelectedOrderId)
  const { mutate: createOrder, isPending } = useCreateOrder()

  const handleCreateOrder = (tableId: number) => {
    createOrder(
      tableId,
    )
  }

  return (
    <BoxAtoms component={Component.main}
      isHideScroll={true}
      sx={sx}>
      {isLoading ?
        <TextAtoms component={"div"}>Dang Tai...</TextAtoms> : isError ?
          <TextAtoms component={"div"}>Loi tai ban</TextAtoms> : tables.map((table, index) => (
            <CardMolecule
              key={index}
              component={Component.article}
              onClick={() => {
                setSelectedOrderId(data?.orderId)
                setSelectedTableId(table.id)
              }}
              sx={{
                borderColor: SxColor.border,
                borderRadius: BorderRadius.medium,
                borderStyle: BorderStyle.solid,
                borderWidth: BorderWidth.mediumBorder,

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
                  handleCreateOrder(table.id)
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
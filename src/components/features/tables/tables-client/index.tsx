'use client';

import BoxAtoms from "@/components/common/atoms/box";
import CardMolecule from "@/components/common/molecules/card";
import { BorderStyle, BorderWidth } from "@/constants/props/borders";
import { BgColorTableStatus, ColorTableStatus, SxColor } from "@/constants/props/colors";
import { Component } from "@/constants/props/components";
import { Display } from "@/constants/props/displays";
import { AlignItems, FlexDirection, Gap } from "@/constants/props/flexs";
import { BorderRadius, ChipSize, FontSize, MinHeight, NumSize, Padding } from "@/constants/props/sizes";
import { createOrder } from "@/services/order.service";
import { Locale } from "@/types/app/locales";
import { TablesClientProps } from "@/types/components/features/tables/tables-client";
import { useRouter } from "next/navigation";
import CapacityGuest from "../../../common/molecules/capacity-guest";
import StatusChip from "../../../common/molecules/status-chip";
import TitleTable from "../../../common/molecules/title";
import { Strings } from "@/constants/strings";
import { TableStatusKey } from "@/types/keys";
import { ChipVariant } from "@/constants/props/variants";

// Component React
// Props: tables from page.tsx
// Return: component 
// Logic: build component combine click handle action
export default function TablesClient({ tables, sx }: TablesClientProps) {
  const router = useRouter();
  const locale: Locale = "vi";

  // Function: handleCreateOrder()
  // Props: tableId
  // Return: -
  // Logic: call api create order
  async function handleCreateOrder(tableId: number) {
    try {
      await createOrder(tableId);
      router.refresh();
    }
    catch (error) {
      alert(error instanceof Error ? error.message : 'Không thể tạo đơn hàng');
    }
  }

  return (
    <BoxAtoms component={Component.main}
      isHideScroll={true}
      sx={sx}>
      {tables.map((table, index) => (
        <CardMolecule
          key={index}
          component={Component.article}
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
          }}
        >
          <TitleTable title={table.name}></TitleTable>
          <CapacityGuest capacity={table.capacity}></CapacityGuest>
          <StatusChip status={table.status} size={ChipSize.medium}
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
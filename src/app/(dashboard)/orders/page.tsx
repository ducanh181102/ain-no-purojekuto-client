import BoxAtoms from "@/components/common/atoms/box";
import OrderFilter from "@/components/features/orders/order-filter";
import OrderSearch from "@/components/features/orders/order-search";
import OrdersContent from "@/components/features/orders/orders-content";
import { BorderStyle, BorderWidth } from "@/constants/props/borders";
import { SxColor } from "@/constants/props/colors";
import { Component } from "@/constants/props/components";
import { Display } from "@/constants/props/displays";
import { AlignItems, Flex, FlexDirection, Gap, JustifyContent } from "@/constants/props/flexs";
import { FontWeight } from "@/constants/props/font-weights";
import { Position, Top } from "@/constants/props/position";
import { BorderRadius, FontSize, Height, MinHeight, Padding, Width } from "@/constants/props/sizes";

// Component React
// Props: -
export default async function OrdersPage() {

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
        <OrderFilter />
        <OrderSearch />
      </BoxAtoms>
      <BoxAtoms component={Component.main} sx={{
        display: Display.flex,
        flexDirection: FlexDirection.row,
        alignItems: AlignItems.stretch,
        justifyContent: JustifyContent.spaceBetween,
        bgcolor: SxColor.background,
        gap: Gap.medium,
      }}>
        <OrdersContent
          orderSx={{
            display: Display.flex,
            flexDirection: FlexDirection.column,
            bgcolor: SxColor.background,
            width: Width.filterbar,
            height: Height.orderClient,
          }}
          detailSx={{
            height: Height.detailPanel,
            flex: Flex.auto,
            top: Top.none,
            position: Position.sticky,
            width: Width.detailPanel,

            borderColor: SxColor.border,
            borderStyle: BorderStyle.solid,
            borderWidth: BorderWidth.mediumBorder,
            borderRadius: BorderRadius.medium,

            p: Padding.smallSpace,
            fontSize: FontSize.x3large,

            fontWeight: FontWeight.w700,

            display: Display.flex,
            flexDirection: FlexDirection.column,
            justifyContent: JustifyContent.spaceBetween,
            gap: Gap.xSmall,
          }}
        />
      </BoxAtoms>
    </BoxAtoms>
  );
}

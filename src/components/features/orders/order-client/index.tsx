'use client';

import BoxClient from "@/components/common/organisms/box-client";
import { BorderStyle, BorderWidth } from "@/constants/props/borders";
import { SxColor } from "@/constants/props/colors";
import { BorderRadius, NumSize } from "@/constants/props/sizes";
import { OrderClientProps } from "@/types/components/features/orders/order-client";
import FooterOrderClient from "./footer-order-client";
import HeaderOrderClient from "./header-order-client";
import MainOrderClient from "./main-order-client";

// Component React
// Props: tables from page.tsx
// Return: component 
// Logic: build component combine click handle action
export default function OrderClient({ sx, filteredOrders, isLoading, isError }: OrderClientProps) {

  return <BoxClient sx={{
    ...sx,
    bgcolor: SxColor.backgroundItem,
    p: NumSize.xlarge,
    borderColor: SxColor.border,
    borderStyle: BorderStyle.solid,
    borderWidth: BorderWidth.mediumBorder,
    borderRadius: BorderRadius.medium,
  }}
    isLoading={isLoading}
    isError={isError}
  >
    <HeaderOrderClient />
    <MainOrderClient filteredOrders={filteredOrders} />
    <FooterOrderClient />
  </BoxClient>
}

'use client';

import OrderClient from "@/components/features/orders/order-client";
import OrderDetailPanel from "@/components/features/orders/order-detail-panel";
import { UpperCaseOrderStatus } from "@/constants/keys";
import { useOrderStatus } from "@/hooks/queries/useOrders";
import { useOrderStore } from "@/stores/useOrderStore";
import { OrderContentProps } from "@/types/components/features/orders/order-content";
import { useMemo } from "react";

// Component for displaying the content of the orders page
// chức năng: hiển thị danh sách order và chi tiết order
// tại component này, chúng ta sẽ lấy danh sách cần thiết sử dụng cho các component con, 
// ví dụ: OrderClient, OrderDetailPanel
export default function OrdersContent({ orderSx, detailSx }: OrderContentProps) {
  const status = useOrderStore((state) => state.selectedStatus) || UpperCaseOrderStatus.all;
  const searchKeyword = useOrderStore((state) => state.searchKeyword);
  const { data: orders = [], isLoading, isError } = useOrderStatus(status);

  const filteredOrders = useMemo(() => {
    const keyword = searchKeyword.trim().toLowerCase();
    return orders.filter((order) =>
      order.id.toString().toLowerCase().includes(keyword)
    );
  }, [orders, searchKeyword]);

  return <>
    <OrderClient
      sx={orderSx}
      filteredOrders={filteredOrders}
      isLoading={isLoading}
      isError={isError}
    />
    <OrderDetailPanel sx={detailSx} filteredOrders={filteredOrders} />
  </>;
}

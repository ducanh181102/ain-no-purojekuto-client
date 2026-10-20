'use client'

import DetailPanel from "@/components/common/organisms/detail-panel";
import { Display } from "@/constants/props/displays";
import { FlexDirection, Gap } from "@/constants/props/flexs";
import { JustifyContent } from "@/constants/props/grids";
import { useOrderById } from "@/hooks/queries/useOrders";
import { useOrderStore } from "@/stores/useOrderStore";
import { OrderDetailPanelProps } from "@/types/components/features/orders/order-detail-panel";
import FooterOrderDetailPanel from "./footer-order-detail-panel";
import HeaderOrderDetailPanel from "./header-order-detail-panel";
import MainOrderDetailPanel from "./main-order-detail-panel";
import NoneSelectedOrderDetailPanel from "./none-selected-order-detail-panel";


export default function OrderDetailPanel({ sx, filteredOrders }: OrderDetailPanelProps) {

    // lấy id order hiện tại từ store
    const orderId = useOrderStore((state) => state.selectedOrderId);
    // get thông tin order hiện tại
    const { data: fetchedOrder } = useOrderById(orderId);
    const order = filteredOrders.find((item) => item.id === orderId) ?? fetchedOrder;

    return !order ? <NoneSelectedOrderDetailPanel sx={sx}/> :
        <DetailPanel sx={sx}>
            <HeaderOrderDetailPanel
                order={order}
                sx={{
                    display: Display.flex,
                    justifyContent: JustifyContent.spaceBetween,
                    flexDirection: FlexDirection.column,
                    gap: Gap.none,
                }}
            />
            <MainOrderDetailPanel
                sx={{
                    display: Display.flex,
                    justifyContent: JustifyContent.spaceBetween,
                    flexDirection: FlexDirection.column,
                    gap: Gap.none,
                }}
                order={order}
            />
            <FooterOrderDetailPanel
                orderId={orderId}
                sx={{
                    display: Display.flex,
                    justifyContent: JustifyContent.spaceBetween,
                    flexDirection: FlexDirection.column,
                    gap: Gap.none,
                }}
            />
        </DetailPanel>
}

'use client'

import FilterBar from "@/components/common/organisms/filter-bar";
import { UpperCaseOrderStatus } from "@/constants/keys";
import { useStatusAllOrderCount, useStatusCancelledOrderCount, useStatusConfirmedOrderCount, useStatusPaidOrderCount, useStatusPendingOrderCount, useStatusPreparingOrderCount, useStatusServedOrderCount } from "@/hooks/queries/useOrders";
import { useOrderStore } from "@/stores/useOrderStore";
import { FilterBarDataProps } from "@/types/components/common/organisms/filter-bar";
import CheckIcon from "@mui/icons-material/Check";
import OrderStatus from "../order-status";
import { useUIStore } from "@/stores/useUIStore";


export default function OrderFilter() {

    const { data: allCount = 0 } = useStatusAllOrderCount();
    const { data: pendingCount = 0 } = useStatusPendingOrderCount();
    const { data: confirmedCount = 0 } = useStatusConfirmedOrderCount();
    const { data: preparingCount = 0 } = useStatusPreparingOrderCount();
    const { data: servedCount = 0 } = useStatusServedOrderCount();
    const { data: paidCount = 0 } = useStatusPaidOrderCount();
    const { data: cancelledCount = 0 } = useStatusCancelledOrderCount();

    const setSelectedStatus = useOrderStore((status) => status.setSelectedStatus);
    const clearSelectedOrderId = useOrderStore((state) => state.clearSelectedOrderId);
    const clearSelectedIndex = useUIStore((state) => state.clearSelectedIndex);

    const status = useOrderStore((state) => state.selectedStatus) || UpperCaseOrderStatus.all

    const filterBarData: FilterBarDataProps[] = [
        <OrderStatus key={UpperCaseOrderStatus.all} onClick={() => {
            setSelectedStatus(UpperCaseOrderStatus.all)
            clearSelectedOrderId();
            clearSelectedIndex();
        }}
            status={UpperCaseOrderStatus.all} count={allCount}
            icon={status === UpperCaseOrderStatus.all ? <CheckIcon /> : undefined} />,
        <OrderStatus key={UpperCaseOrderStatus.pending} onClick={() => {
            setSelectedStatus(UpperCaseOrderStatus.pending)
            clearSelectedOrderId();
            clearSelectedIndex();
        }}
            status={UpperCaseOrderStatus.pending} count={pendingCount}
            icon={status === UpperCaseOrderStatus.pending ? <CheckIcon /> : undefined} />,
        <OrderStatus key={UpperCaseOrderStatus.confirmed} onClick={() => {
            setSelectedStatus(UpperCaseOrderStatus.confirmed)
            clearSelectedOrderId();
            clearSelectedIndex();
        }}
            status={UpperCaseOrderStatus.confirmed} count={confirmedCount}
            icon={status === UpperCaseOrderStatus.confirmed ? <CheckIcon /> : undefined} />,
        <OrderStatus key={UpperCaseOrderStatus.preparing} onClick={() => {
            setSelectedStatus(UpperCaseOrderStatus.preparing)
            clearSelectedOrderId();
            clearSelectedIndex();
        }}
            status={UpperCaseOrderStatus.preparing} count={preparingCount}
            icon={status === UpperCaseOrderStatus.preparing ? <CheckIcon /> : undefined} />,
        <OrderStatus key={UpperCaseOrderStatus.served} onClick={() => {
            setSelectedStatus(UpperCaseOrderStatus.served)
            clearSelectedOrderId();
            clearSelectedIndex();
        }}
            status={UpperCaseOrderStatus.served} count={servedCount}
            icon={status === UpperCaseOrderStatus.served ? <CheckIcon /> : undefined} />,
        <OrderStatus key={UpperCaseOrderStatus.paid} onClick={() => {
            setSelectedStatus(UpperCaseOrderStatus.paid)
            clearSelectedOrderId();
            clearSelectedIndex();
        }}
            status={UpperCaseOrderStatus.paid} count={paidCount}
            icon={status === UpperCaseOrderStatus.paid ? <CheckIcon /> : undefined} />,
        <OrderStatus key={UpperCaseOrderStatus.cancelled} onClick={() => {
            setSelectedStatus(UpperCaseOrderStatus.cancelled)
            clearSelectedOrderId();
            clearSelectedIndex();
        }}
            status={UpperCaseOrderStatus.cancelled} count={cancelledCount}
            icon={status === UpperCaseOrderStatus.cancelled ? <CheckIcon /> : undefined} />
    ]

    return <FilterBar filterBarData={filterBarData} />
}
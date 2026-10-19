'use client'

import FilterBar from "@/components/common/organisms/filter-bar";
import { useStatusAllOrderCount, useStatusCancelledOrderCount, useStatusConfirmedOrderCount, useStatusPaidOrderCount, useStatusPendingOrderCount, useStatusPreparingOrderCount, useStatusServedOrderCount } from "@/hooks/queries/useOrders";
import { useOrderStore } from "@/stores/useOrderStore";
import { FilterBarDataProps } from "@/types/components/common/organisms/filter-bar";
import CheckIcon from "@mui/icons-material/Check";
import LowerCaseOrderStatus from "../order-status";
import { UpperCaseOrderStatus } from "@/constants/keys";


export default function OrderFilter() {

    const { data: allCount = 0 } = useStatusAllOrderCount();
    const { data: pendingCount = 0 } = useStatusPendingOrderCount();
    const { data: confirmedCount = 0 } = useStatusConfirmedOrderCount();
    const { data: preparingCount = 0 } = useStatusPreparingOrderCount();
    const { data: servedCount = 0 } = useStatusServedOrderCount();
    const { data: paidCount = 0 } = useStatusPaidOrderCount();
    const { data: cancelledCount = 0 } = useStatusCancelledOrderCount();

    const setSelectedStatus = useOrderStore((status) => status.setSelectedStatus);

    const status = useOrderStore((state) => state.selectedStatus) || UpperCaseOrderStatus.all

    const filterBarData: FilterBarDataProps[] = [
        <LowerCaseOrderStatus key={UpperCaseOrderStatus.all} onClick={() => setSelectedStatus(UpperCaseOrderStatus.all)}
            status={UpperCaseOrderStatus.all} count={allCount}
            icon={status === UpperCaseOrderStatus.all ? <CheckIcon /> : undefined} />,
        <LowerCaseOrderStatus key={UpperCaseOrderStatus.pending} onClick={() => setSelectedStatus(UpperCaseOrderStatus.pending)}
            status={UpperCaseOrderStatus.pending} count={pendingCount}
            icon={status === UpperCaseOrderStatus.pending ? <CheckIcon /> : undefined} />,
        <LowerCaseOrderStatus key={UpperCaseOrderStatus.confirmed} onClick={() => setSelectedStatus(UpperCaseOrderStatus.confirmed)}
            status={UpperCaseOrderStatus.confirmed} count={confirmedCount}
            icon={status === UpperCaseOrderStatus.confirmed ? <CheckIcon /> : undefined} />,
        <LowerCaseOrderStatus key={UpperCaseOrderStatus.preparing} onClick={() => setSelectedStatus(UpperCaseOrderStatus.preparing)}
            status={UpperCaseOrderStatus.preparing} count={preparingCount}
            icon={status === UpperCaseOrderStatus.preparing ? <CheckIcon /> : undefined} />,
        <LowerCaseOrderStatus key={UpperCaseOrderStatus.served} onClick={() => setSelectedStatus(UpperCaseOrderStatus.served)}
            status={UpperCaseOrderStatus.served} count={servedCount}
            icon={status === UpperCaseOrderStatus.served ? <CheckIcon /> : undefined} />,
        <LowerCaseOrderStatus key={UpperCaseOrderStatus.paid} onClick={() => setSelectedStatus(UpperCaseOrderStatus.paid)}
            status={UpperCaseOrderStatus.paid} count={paidCount}
            icon={status === UpperCaseOrderStatus.paid ? <CheckIcon /> : undefined} />,
        <LowerCaseOrderStatus key={UpperCaseOrderStatus.cancelled} onClick={() => setSelectedStatus(UpperCaseOrderStatus.cancelled)}
            status={UpperCaseOrderStatus.cancelled} count={cancelledCount}
            icon={status === UpperCaseOrderStatus.cancelled ? <CheckIcon /> : undefined} />
    ]

    return <FilterBar filterBarData={filterBarData} />
}
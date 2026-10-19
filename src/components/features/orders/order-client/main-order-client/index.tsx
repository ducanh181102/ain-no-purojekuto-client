'use client'

import BoxAtoms from "@/components/common/atoms/box";
import TableMolecule from "@/components/common/molecules/table";
import { Numbers } from "@/constants/numbers";
import { Component } from "@/constants/props/components";
import { Display } from "@/constants/props/displays";
import { FlexDirection, Gap } from "@/constants/props/flexs";
import { GridSize, MinHeight, Padding } from "@/constants/props/sizes";
import { getLocalText } from "@/lib/i18n";
import { useOrderStore } from "@/stores/useOrderStore";
import { MainOrderClientProps } from "@/types/components/features/orders/order-client/main-order-client";
import CodeOrderClientBox from "./code-order-client-box";
import DishOrderClientBox from "./dish-order-client-box";
import StatusOrderClientBox from "./status-order-client-box";
import TableOrderClientBox from "./table-order-client-box";
import TempOrderClientBox from "./temp-order-client-box";
import TimeOrderClientBox from "./time-order-client-box";
import { useOrderItemByOrderId, useTotalOrderItemByOrderId } from "@/hooks/queries/useOrderItems";

export default function MainOrderClient({ filteredOrders }: MainOrderClientProps) {

    const selectedOrderId = useOrderStore((state) => state.selectedOrderId)
    // set selected orderId in store
    const setOrderId = useOrderStore((state) => state.setSelectedOrderId)
    // setting total items in store
    const setTotalItems = useOrderStore((state) => state.setTotalItems);
    // setting total in store
    const setTotal = useOrderStore((state) => state.setTotal);
    // get vị trí của order được chọn trong danh sách filteredOrders
    const selectedIndex = filteredOrders.findIndex((order) => order.id === selectedOrderId)
    const total = useTotalOrderItemByOrderId(selectedOrderId).data?.total || 0;
    const { data: orderItems = [] } = useOrderItemByOrderId(selectedOrderId);

    const headers = new Set([
        {
            title: getLocalText().text.orderCode,
            size: GridSize.grid2,
        },
        {
            title: getLocalText().text.tables,
            size: GridSize.grid2,
        },
        {
            title: getLocalText().text.time,
            size: GridSize.grid2,
        },
        {
            title: getLocalText().text.dish,
            size: GridSize.grid2,
        },
        {
            title: getLocalText().text.status,
            size: GridSize.grid2,
        },
        {
            title: getLocalText().text.tempCalculate,
            size: GridSize.grid2,
        }
    ])

    const titles = [...headers].map((header) => header.title)

    const gridSizes = [...headers].map((header) => header.size)

    const orders = filteredOrders.map((order) => {
        return {
            [titles[Numbers.zero]]: <CodeOrderClientBox code={order.id} />,
            [titles[Numbers.one]]: <TableOrderClientBox name={order.table.name} guests={order.table.capacity} />,
            [titles[Numbers.two]]: <TimeOrderClientBox time={order.createdAt} />,
            [titles[Numbers.three]]: <DishOrderClientBox orderId={order.id} />,
            [titles[Numbers.four]]: <StatusOrderClientBox status={order.status} />,
            [titles[Numbers.five]]: <TempOrderClientBox orderId={order.id} />
        }
    })

    const header = {
        titles: titles,
        gridSizes: gridSizes,
    }

    const body = {
        data: orders,
        gridSizes: gridSizes,
        // vị trí của order được chọn trong danh sách filteredOrders, 
        selectedIndex,
        // khi click vào 1 row trong table, set orderId của order được chọn
        onRowClick: (index: number) => {
            const order = filteredOrders[index]
            if (order) {
                setOrderId(order.id)
                setTotalItems({ orderId: order.id, totalItems: orderItems.length })
                setTotal({ orderId: order.id, total: total })
            }
        },
    }

    return <BoxAtoms component={Component.main} sx={{
        display: Display.flex,
        flexDirection: FlexDirection.column,
        minHeight: MinHeight.zero,
        gap: Gap.small,
        pb: Padding.smallSpace,
    }}>
        <TableMolecule sx={{
            display: Display.flex,
            flexDirection: FlexDirection.column,
            minHeight: MinHeight.zero,
            gap: Gap.none,
        }} header={header} body={body} />
    </BoxAtoms>
}

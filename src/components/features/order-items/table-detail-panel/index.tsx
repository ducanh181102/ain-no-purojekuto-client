'use client'

import BoxAtoms from "@/components/common/atoms/box";
import LineAtoms from "@/components/common/atoms/line";
import DetailPanel from "@/components/common/organisms/detail-panel";
import { UpperCasePaymentMethod, UpperCaseTableStatus } from "@/constants/keys";
import { BorderWidth } from "@/constants/props/borders";
import { SxColor } from "@/constants/props/colors";
import { Component } from "@/constants/props/components";
import { Display } from "@/constants/props/displays";
import { FlexDirection, Gap } from "@/constants/props/flexs";
import { Orientation } from "@/constants/props/orientations";
import { useCreateOrderItem } from "@/hooks/mutations/useCreateOrderItem";
import { usePayOrder } from "@/hooks/mutations/usePayOrder";
import { useDishes } from "@/hooks/queries/useDishes";
import { useOrderItemByOrderId, useTotalOrderItemByOrderId } from "@/hooks/queries/useOrderItems";
import { useOrderById, useOrderIdByTableId } from "@/hooks/queries/useOrders";
import { useReservationByTableId } from "@/hooks/queries/useReservations";
import { useTableById } from "@/hooks/queries/useTables";
import { getLocalText } from "@/lib/i18n";
import { useTableStore } from "@/stores/useTableStore";
import { PaymentMethod } from "@/types/components/features/orders";
import { TableDetailActionProps, TableDetailPanelProps } from "@/types/components/features/tables/table-detail-panel";
import { useState } from "react";
import AccupiedFooterPanel from "./accupied/footer-panel";
import AccupiedHeaderPanel from "./accupied/header-panel";
import AccupiedMainPanel from "./accupied/main-panel";
import AvailableFooterPanel from "./available/footer-panel";
import AvailableHeaderPanel from "./available/header-panel";
import AvailableMainPanel from "./available/main-panel";
import AddDishDialog from "./dialog/add-dish";
import CancelReservationDialog from "./dialog/cancel-reservation";
import ChangeTableDialog from "./dialog/change-table";
import PaymentDialog from "./dialog/payment";
import ReceiveTableDialog from "./dialog/receive-table";
import ReserveTableDialog from "./dialog/reserve-table";
import ViewOrderDialog from "./dialog/view-order";
import NoneSelectedTable from "./none-selected-table";
import ReservedFooterPanel from "./reserved/footer-panel";
import ReservedHeaderPanel from "./reserved/header-panel";
import ReservedMainPanel from "./reserved/main-panel";

export default function TableDetailPanel({ sx }: TableDetailPanelProps) {

    const paymentMethods: { value: PaymentMethod; label: string }[] = [
        { value: UpperCasePaymentMethod.cash, label: getLocalText().text.cash },
        { value: UpperCasePaymentMethod.banking, label: getLocalText().text.banking },
        { value: UpperCasePaymentMethod.momo, label: getLocalText().text.momo },
    ];

    const [activeAction, setActiveAction] = useState<TableDetailActionProps>(null);
    const [selectedDishId, setSelectedDishId] = useState<number | "">("");
    const [quantity, setQuantity] = useState(1);
    const [note, setNote] = useState("");
    const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("CASH");

    // lấy id table đang chọn
    const tableId = useTableStore((state) => state.selectedTableId)
    // get thông tin bàn
    const { data: table } = useTableById(tableId);
    const occupiedTableId = table?.status === UpperCaseTableStatus.occupied ? tableId : null;
    const { data: currentOrder } = useOrderIdByTableId(occupiedTableId)
    const currentOrderId = currentOrder?.orderId ?? null;

    // check bàn có phải trạng thái đặt
    const reservedTableId = table?.status === UpperCaseTableStatus.reserved ? tableId : null;
    // get thông tin đặt bàn
    const { data: reservation } = useReservationByTableId(reservedTableId)

    const { data: order } = useOrderById(currentOrderId);
    const { data: orderItems = [] } = useOrderItemByOrderId(currentOrderId);
    const { data: totalOrder } = useTotalOrderItemByOrderId(currentOrderId);
    const { data: dishes = [], isLoading: isLoadingDishes } = useDishes();
    const { mutate: createOrderItem, isPending: isAddingDish } = useCreateOrderItem();
    const { mutate: payOrder, isPending: isPayingOrder } = usePayOrder();

    const discountAmount = 0;
    const totalAmount = totalOrder?.total ?? 0;
    const hasCurrentOrder = !!currentOrderId;
    const availableDishes = dishes.filter((dish) => dish.available === "1");
    const selectedDish = availableDishes.find((dish) => dish.id === selectedDishId);
    const addDishTotal = (selectedDish?.price ?? 0) * quantity;
    const isPendingOrder = order?.status === "PENDING";
    const canSubmitPayment = hasCurrentOrder && totalAmount > 0 && !isPendingOrder;

    const closeDialog = () => {
        setActiveAction(null);
    };

    const resetAddDishForm = () => {
        setSelectedDishId("");
        setQuantity(1);
        setNote("");
    };

    const handleAddDish = () => {
        if (!currentOrderId || !selectedDishId || quantity < 1) return;

        createOrderItem({
            orderId: currentOrderId,
            dishId: selectedDishId,
            quantity,
            note: note.trim() || undefined,
        }, {
            onSuccess: () => {
                resetAddDishForm();
                closeDialog();
            },
        });
    };

    const handlePayOrder = () => {
        if (!currentOrderId || !canSubmitPayment) return;

        payOrder({
            orderId: currentOrderId,
            method: paymentMethod,
        }, {
            onSuccess: () => {
                closeDialog();
            },
        });
    };

    

    

    return <>
        <DetailPanel sx={sx} title={table?.name || ''}>
            {
                table?.status == UpperCaseTableStatus.occupied ? <>
                    <BoxAtoms component={Component.div} sx={{
                        display: Display.flex,
                        flexDirection: FlexDirection.column,
                        gap: Gap.small,
                    }}>
                        <AccupiedHeaderPanel />
                        <LineAtoms orientation={Orientation.horizontal} sx={{
                            borderColor: SxColor.border,
                            borderWidth: BorderWidth.bottomMediumBorder,
                        }} />
                        <AccupiedMainPanel />
                    </BoxAtoms>
                    <AccupiedFooterPanel setActiveAction={setActiveAction} />
                </> : (table?.status == UpperCaseTableStatus.available ? <>
                    <BoxAtoms component={Component.div} sx={{
                        display: Display.flex,
                        flexDirection: FlexDirection.column,
                        gap: Gap.small,
                    }}>
                        <AvailableHeaderPanel />
                        <LineAtoms orientation={Orientation.horizontal} sx={{
                            borderColor: SxColor.border,
                            borderWidth: BorderWidth.bottomMediumBorder,
                        }} />
                        <AvailableMainPanel />
                    </BoxAtoms>
                    <AvailableFooterPanel setActiveAction={setActiveAction} tableId={tableId} />
                </> :
                    (table?.status == UpperCaseTableStatus.reserved ? <>
                        <BoxAtoms component={Component.div} sx={{
                            display: Display.flex,
                            flexDirection: FlexDirection.column,
                            gap: Gap.small,
                        }}>
                            <ReservedHeaderPanel table={table} reservation={reservation ?? null} />
                            <LineAtoms orientation={Orientation.horizontal} sx={{
                                borderColor: SxColor.border,
                                borderWidth: BorderWidth.bottomMediumBorder,
                            }} />
                            <ReservedMainPanel />
                        </BoxAtoms>
                        <ReservedFooterPanel setActiveAction={setActiveAction} />
                    </> : <NoneSelectedTable />
                    )
                )
            }
        </DetailPanel>

        <ViewOrderDialog setActiveAction={setActiveAction} activeAction={activeAction} />

        <AddDishDialog setActiveAction={setActiveAction} activeAction={activeAction} />

        <PaymentDialog setActiveAction={setActiveAction} activeAction={activeAction} paymentMethods={paymentMethods} />

        <ReserveTableDialog setActiveAction={setActiveAction} activeAction={activeAction} />

        <ReceiveTableDialog setActiveAction={setActiveAction} activeAction={activeAction} reservation={reservation || null} />

        <ChangeTableDialog setActiveAction={setActiveAction} activeAction={activeAction} reservation={reservation || null} />

        <CancelReservationDialog setActiveAction={setActiveAction} activeAction={activeAction} reservation={reservation || null} />
    </>
}

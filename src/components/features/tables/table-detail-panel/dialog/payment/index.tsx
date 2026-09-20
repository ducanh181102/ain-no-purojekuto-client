'use client'

import ButtonAtoms from "@/components/common/atoms/button";
import LineAtoms from "@/components/common/atoms/line";
import TextAtoms from "@/components/common/atoms/text";
import DialogMolecule from "@/components/common/molecules/dialog";
import DialogActionsMolecule from "@/components/common/molecules/dialog-actions";
import DialogContentMolecule from "@/components/common/molecules/dialog-content";
import DialogTitleMolecule from "@/components/common/molecules/dialog-title";
import StackMolecule from "@/components/common/molecules/stack";
import { TableDetail } from "@/constants/actions";
import { UpperCaseOrderStatus, UpperCasePaymentMethod, UpperCaseTableStatus } from "@/constants/keys";
import { Null } from "@/constants/null";
import { Numbers } from "@/constants/numbers";
import { TextColor } from "@/constants/props/colors";
import { Component } from "@/constants/props/components";
import { FlexDirection, JustifyContent } from "@/constants/props/flexs";
import { FontWeight } from "@/constants/props/font-weights";
import { Orientation } from "@/constants/props/orientations";
import { MuiSize, Spacing } from "@/constants/props/sizes";
import { ButtonVariant } from "@/constants/props/variants";
import { usePayOrder } from "@/hooks/mutations/usePayOrder";
import { useTotalOrderItemByOrderId } from "@/hooks/queries/useOrderItems";
import { useOrderById, useOrderIdByTableId } from "@/hooks/queries/useOrders";
import { useTableById } from "@/hooks/queries/useTables";
import { getLocalText } from "@/lib/i18n";
import { useTableStore } from "@/stores/useTableStore";
import { PaymentMethod } from "@/types/components/features/orders";
import { PaymentProps } from "@/types/components/features/tables/table-detail-panel/dialog/payment";
import { Update } from "@mui/icons-material";
import {
    MenuItem,
    TextField
} from "@mui/material";
import { useState } from "react";

export default function PaymentDialog({ setActiveAction, activeAction, paymentMethods }: PaymentProps) {

    const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(UpperCasePaymentMethod.cash);

    const tableId = useTableStore((state) => state.selectedTableId)
    const { data: table } = useTableById(tableId);
    const occupiedTableId = table?.status === UpperCaseTableStatus.occupied ? tableId : Null;
    const { data: currentOrder } = useOrderIdByTableId(occupiedTableId)
    const currentOrderId = currentOrder?.orderId ?? Null;

    const { data: order } = useOrderById(currentOrderId);
    const { data: totalOrder } = useTotalOrderItemByOrderId(currentOrderId);
    const { mutate: payOrder, isPending: isPayingOrder } = usePayOrder();

    const discountAmount = Numbers.zero;
    const totalAmount = totalOrder?.total ?? Numbers.zero;
    const hasCurrentOrder = !!currentOrderId;
    const isPendingOrder = order?.status === UpperCaseOrderStatus.pending;
    const canSubmitPayment = hasCurrentOrder && totalAmount > Numbers.zero && !isPendingOrder;

    const closeDialog = () => {
        setActiveAction(Null);
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

    const formatMoney = (value?: number | string | null) => {
        const amount = Number(value ?? Numbers.zero);
        const safeAmount = Number.isFinite(amount) ? amount : Numbers.zero;
        return `${safeAmount.toLocaleString(getLocalText().numberLocale)} ${getLocalText().currencySuffix}`;
    };

    return <>
        <DialogMolecule open={activeAction === TableDetail.payment} onClose={closeDialog} maxWidth={MuiSize.xs}>
            <DialogTitleMolecule>{`${getLocalText().pay} ${table?.name ?? getLocalText().blank}`}</DialogTitleMolecule>
            <DialogContentMolecule>
                {!hasCurrentOrder ? (
                    <TextAtoms color={TextColor.secondary} component={Component.p}>{getLocalText().noCurrentOrder}</TextAtoms>
                ) : (
                    <StackMolecule spacing={Spacing.xlarge}>
                        <StackMolecule direction={FlexDirection.row} sx={{ justifyContent: JustifyContent.spaceBetween }}>
                            <TextAtoms color={TextColor.textPrimary} component={Component.p}>{getLocalText().orderCode}</TextAtoms>
                            <TextAtoms component={Component.p} sx={{ fontWeight: FontWeight.w600 }}>{`#${currentOrderId}`}</TextAtoms>
                        </StackMolecule>
                        <StackMolecule direction={FlexDirection.row} sx={{ justifyContent: JustifyContent.spaceBetween }}>
                            <TextAtoms color={TextColor.textPrimary} component={Component.p}>{getLocalText().tempCalculate}</TextAtoms>
                            <TextAtoms component={Component.p} sx={{ fontWeight: FontWeight.w600 }}>{formatMoney(totalAmount)}</TextAtoms>
                        </StackMolecule>
                        <StackMolecule direction={FlexDirection.row} sx={{ justifyContent: JustifyContent.spaceBetween }}>
                            <TextAtoms color={TextColor.textPrimary} component={Component.p}>{getLocalText().discount}</TextAtoms>
                            <TextAtoms component={Component.p} sx={{ fontWeight: FontWeight.w600 }}>{formatMoney(discountAmount)}</TextAtoms>
                        </StackMolecule>
                        <LineAtoms orientation={Orientation.horizontal} />
                        <StackMolecule direction={FlexDirection.row} sx={{ justifyContent: JustifyContent.spaceBetween }}>
                            <TextAtoms component={Component.p} sx={{ fontWeight: FontWeight.w700 }}>{getLocalText().amountToCollect}</TextAtoms>
                            <TextAtoms component={Component.p} color={TextColor.primary} sx={{ fontWeight: FontWeight.w700 }}>{formatMoney(totalAmount - discountAmount)}</TextAtoms>
                        </StackMolecule>
                        <TextField
                            select
                            fullWidth 
                            label={getLocalText().paymentMethod}
                            value={paymentMethod}
                            onChange={(event) => setPaymentMethod(event.target.value as PaymentMethod)}
                        >
                            {paymentMethods.map((method) => (
                                <MenuItem key={method.value} value={method.value}>
                                    {method.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        {isPendingOrder ? (
                            <TextAtoms component={Component.p} color={TextColor.warning}>{getLocalText().pendingOrderPaymentWarning}</TextAtoms>
                        ) : Null}
                    </StackMolecule>
                )}
            </DialogContentMolecule>
            <DialogActionsMolecule>
                <ButtonAtoms onClick={closeDialog} variant={ButtonVariant.text}>{getLocalText().close}</ButtonAtoms>
                <ButtonAtoms
                    variant={ButtonVariant.contained}
                    onClick={handlePayOrder}
                    disabled={!canSubmitPayment || isPayingOrder}
                >
                    {isPayingOrder ? getLocalText().payingOrder : getLocalText().confirm}
                </ButtonAtoms>
            </DialogActionsMolecule>
        </DialogMolecule>
    </>
}

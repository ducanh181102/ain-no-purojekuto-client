'use client'

import ButtonAtoms from "@/components/common/atoms/button";
import LineAtoms from "@/components/common/atoms/line";
import StackAtoms from "@/components/common/atoms/stack";
import TextAtoms from "@/components/common/atoms/text";
import DialogMolecule from "@/components/common/molecules/dialog";
import DialogActionsMolecule from "@/components/common/molecules/dialog-actions";
import DialogContentMolecule from "@/components/common/molecules/dialog-content";
import DialogTitleMolecule from "@/components/common/molecules/dialog-title";
import DropDownInputMolecule from "@/components/common/molecules/drop-down";
import MenuItemMolecule from "@/components/common/molecules/menu-item";
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
        return `${safeAmount.toLocaleString(getLocalText().text.numberLocale)} ${getLocalText().text.currencySuffix}`;
    };

    return <>
        <DialogMolecule open={activeAction === TableDetail.payment} onClose={closeDialog} maxWidth={MuiSize.xs}>
            <DialogTitleMolecule>{`${getLocalText().text.pay} ${table?.name ?? getLocalText().text.blank}`}</DialogTitleMolecule>
            <DialogContentMolecule>
                {!hasCurrentOrder ? (
                    <TextAtoms color={TextColor.secondary} component={Component.p}>{getLocalText().text.noCurrentOrder}</TextAtoms>
                ) : (
                    <StackAtoms spacing={Spacing.xlarge}>
                        <StackAtoms direction={FlexDirection.row} sx={{ justifyContent: JustifyContent.spaceBetween }}>
                            <TextAtoms color={TextColor.textPrimary} component={Component.p}>{getLocalText().text.orderCode}</TextAtoms>
                            <TextAtoms component={Component.p} sx={{ fontWeight: FontWeight.w600 }}>{`#${currentOrderId}`}</TextAtoms>
                        </StackAtoms>
                        <StackAtoms direction={FlexDirection.row} sx={{ justifyContent: JustifyContent.spaceBetween }}>
                            <TextAtoms color={TextColor.textPrimary} component={Component.p}>{getLocalText().text.tempCalculate}</TextAtoms>
                            <TextAtoms component={Component.p} sx={{ fontWeight: FontWeight.w600 }}>{formatMoney(totalAmount)}</TextAtoms>
                        </StackAtoms>
                        <StackAtoms direction={FlexDirection.row} sx={{ justifyContent: JustifyContent.spaceBetween }}>
                            <TextAtoms color={TextColor.textPrimary} component={Component.p}>{getLocalText().text.discount}</TextAtoms>
                            <TextAtoms component={Component.p} sx={{ fontWeight: FontWeight.w600 }}>{formatMoney(discountAmount)}</TextAtoms>
                        </StackAtoms>
                        <LineAtoms orientation={Orientation.horizontal} />
                        <StackAtoms direction={FlexDirection.row} sx={{ justifyContent: JustifyContent.spaceBetween }}>
                            <TextAtoms component={Component.p} sx={{ fontWeight: FontWeight.w700 }}>{getLocalText().text.amountToCollect}</TextAtoms>
                            <TextAtoms component={Component.p} color={TextColor.primary} sx={{ fontWeight: FontWeight.w700 }}>{formatMoney(totalAmount - discountAmount)}</TextAtoms>
                        </StackAtoms>
                        <DropDownInputMolecule
                            label={getLocalText().text.paymentMethod}
                            value={paymentMethod}
                            onChange={(event) => setPaymentMethod(event.target.value as PaymentMethod)}>
                            {paymentMethods.map((method) => (
                                <MenuItemMolecule key={method.value} value={method.value}>
                                    {method.label}
                                </MenuItemMolecule>
                            ))}
                        </DropDownInputMolecule>
                        {isPendingOrder ? (
                            <TextAtoms component={Component.p} color={TextColor.warning}>{getLocalText().text.pendingOrderPaymentWarning}</TextAtoms>
                        ) : Null}
                    </StackAtoms>
                )}
            </DialogContentMolecule>
            <DialogActionsMolecule>
                <ButtonAtoms onClick={closeDialog} variant={ButtonVariant.text}>{getLocalText().text.close}</ButtonAtoms>
                <ButtonAtoms
                    variant={ButtonVariant.contained}
                    onClick={handlePayOrder}
                    disabled={!canSubmitPayment || isPayingOrder}
                >
                    {isPayingOrder ? getLocalText().text.payingOrder : getLocalText().text.confirm}
                </ButtonAtoms>
            </DialogActionsMolecule>
        </DialogMolecule>
    </>
}

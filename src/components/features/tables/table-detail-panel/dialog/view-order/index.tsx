'use client'

import ButtonAtoms from "@/components/common/atoms/button";
import LineAtoms from "@/components/common/atoms/line";
import StackAtoms from "@/components/common/atoms/stack";
import TextAtoms from "@/components/common/atoms/text";
import DialogMolecule from "@/components/common/molecules/dialog";
import DialogActionsMolecule from "@/components/common/molecules/dialog-actions";
import DialogContentMolecule from "@/components/common/molecules/dialog-content";
import DialogTitleMolecule from "@/components/common/molecules/dialog-title";
import { TableDetail } from "@/constants/actions";
import { UpperCaseTableStatus } from "@/constants/keys";
import { Null } from "@/constants/null";
import { Numbers } from "@/constants/numbers";
import { TextColor } from "@/constants/props/colors";
import { Component } from "@/constants/props/components";
import { FlexDirection, Gap, JustifyContent } from "@/constants/props/flexs";
import { FontWeight } from "@/constants/props/font-weights";
import { Orientation } from "@/constants/props/orientations";
import { MuiSize, Spacing } from "@/constants/props/sizes";
import { ButtonVariant } from "@/constants/props/variants";
import { Strings } from "@/constants/strings";
import { useOrderItemByOrderId, useTotalOrderItemByOrderId } from "@/hooks/queries/useOrderItems";
import { useOrderById, useOrderIdByTableId } from "@/hooks/queries/useOrders";
import { useTableById } from "@/hooks/queries/useTables";
import { getLocalText } from "@/lib/i18n";
import { useTableStore } from "@/stores/useTableStore";
import { useUIStore } from "@/stores/useUIStore";
import { ViewOrderProps } from "@/types/components/features/tables/table-detail-panel/dialog/view-order";

export default function ViewOrderDialog({ setActiveAction, activeAction }: ViewOrderProps) {
    const locale = useUIStore((state) => state.locale) ?? Strings.vi.value;

    const tableId = useTableStore((state) => state.selectedTableId)
    const { data: table } = useTableById(tableId);
    const occupiedTableId = table?.status === UpperCaseTableStatus.occupied ? tableId : Null;
    const { data: currentOrder } = useOrderIdByTableId(occupiedTableId)
    const currentOrderId = currentOrder?.orderId ?? Null;

    const { data: order } = useOrderById(currentOrderId);
    const { data: orderItems = [] } = useOrderItemByOrderId(currentOrderId);
    const { data: totalOrder } = useTotalOrderItemByOrderId(currentOrderId);

    const totalAmount = totalOrder?.total ?? Numbers.zero;
    const hasCurrentOrder = !!currentOrderId;

    const closeDialog = () => {
        setActiveAction(Null);
    };

    const formatMoney = (value?: number | string | null) => {
        const amount = Number(value ?? Numbers.zero);
        const safeAmount = Number.isFinite(amount) ? amount : Numbers.zero;
        return `${safeAmount.toLocaleString(getLocalText().text.numberLocale)} ${getLocalText().text.currencySuffix}`;
    };

    return <>
        <DialogMolecule open={activeAction === TableDetail.viewOrder} onClose={closeDialog} maxWidth={MuiSize.sm}>
            <DialogTitleMolecule>{`${getLocalText().text.orders} ${table?.name ?? Strings.vi.text.blank}`}</DialogTitleMolecule>
            <DialogContentMolecule>
                {!hasCurrentOrder ? (
                    <TextAtoms color={TextColor.textSecondary} component={Component.div}>{getLocalText().text.noCurrentOrder}</TextAtoms>
                ) : (
                    <StackAtoms spacing={Spacing.xlarge}>
                        <StackAtoms direction={FlexDirection.row} sx={{ justifyContent: JustifyContent.spaceBetween }}>
                            <TextAtoms color={TextColor.textSecondary} component={Component.div}>{getLocalText().text.orderCode}</TextAtoms>
                            <TextAtoms sx={{ fontWeight: FontWeight.w600 }} component={Component.div}>{`#${currentOrderId}`}</TextAtoms>
                        </StackAtoms>
                        <StackAtoms direction={FlexDirection.row} sx={{ justifyContent: JustifyContent.spaceBetween }}>
                            <TextAtoms color={TextColor.textSecondary} component={Component.div}>{getLocalText().text.status}</TextAtoms>
                            <TextAtoms sx={{ fontWeight: FontWeight.w600 }} component={Component.div}>{order?.status ?? getLocalText().text.blank}</TextAtoms>
                        </StackAtoms>
                        {orderItems.length ? orderItems.map((item) => (
                            <StackAtoms key={item.id} spacing={Spacing.xsmall}>
                                <StackAtoms direction={FlexDirection.row} sx={{ justifyContent: JustifyContent.spaceBetween, gap: Gap.small }}>
                                    <TextAtoms sx={{ fontWeight: FontWeight.w600 }} component={Component.div}>{item.dish?.name ?? `${getLocalText().text.dishCodePrefix}${item.dishId}`}</TextAtoms>
                                    <TextAtoms sx={{ fontWeight: FontWeight.w600 }} component={Component.div}>{formatMoney(item.price * item.quantity)}</TextAtoms>
                                </StackAtoms>
                                <TextAtoms color={TextColor.textSecondary} component={Component.div}>{`${getLocalText().text.quantityShort}: ${item.quantity} x ${formatMoney(item.price)} - ${item.status}`}</TextAtoms>
                                {item.note ? <TextAtoms color={TextColor.textSecondary} component={Component.div}>{`${getLocalText().text.note}: ${item.note}`}</TextAtoms> : Null}
                            </StackAtoms>
                        )) : (
                            <TextAtoms color={TextColor.textSecondary} component={Component.div}>{getLocalText().text.noOrderItems}</TextAtoms>
                        )}
                        <LineAtoms orientation={Orientation.horizontal} />
                        <StackAtoms direction={FlexDirection.row} sx={{ justifyContent: JustifyContent.spaceBetween }}>
                            <TextAtoms sx={{ fontWeight: FontWeight.w700 }} component={Component.div}>{getLocalText().text.total}</TextAtoms>
                            <TextAtoms color={TextColor.primary} sx={{ fontWeight: FontWeight.w700 }} component={Component.div}>{formatMoney(totalAmount)}</TextAtoms>
                        </StackAtoms>
                    </StackAtoms>
                )}
            </DialogContentMolecule>
            <DialogActionsMolecule>
                <ButtonAtoms onClick={closeDialog} variant={ButtonVariant.text}>{getLocalText().text.close}</ButtonAtoms>
            </DialogActionsMolecule>
        </DialogMolecule>
    </>
}

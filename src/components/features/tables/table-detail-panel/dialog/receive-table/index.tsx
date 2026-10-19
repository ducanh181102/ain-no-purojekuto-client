'use client'

import BoxAtoms from "@/components/common/atoms/box";
import ButtonAtoms from "@/components/common/atoms/button";
import StackAtoms from "@/components/common/atoms/stack";
import TextAtoms from "@/components/common/atoms/text";
import DialogMolecule from "@/components/common/molecules/dialog";
import DialogActionsMolecule from "@/components/common/molecules/dialog-actions";
import DialogContentMolecule from "@/components/common/molecules/dialog-content";
import DialogTitleMolecule from "@/components/common/molecules/dialog-title";
import { TableDetail } from "@/constants/actions";
import { UpperCaseOrderStatus, UpperCasePaymentMethod, UpperCaseTableStatus } from "@/constants/keys";
import { Null } from "@/constants/null";
import { Numbers } from "@/constants/numbers";
import { TextAlign } from "@/constants/props/aligns";
import { BorderWidth } from "@/constants/props/borders";
import { SxColor, TextColor } from "@/constants/props/colors";
import { Component } from "@/constants/props/components";
import { Display } from "@/constants/props/displays";
import { Flex, FlexDirection, Gap, JustifyContent } from "@/constants/props/flexs";
import { FontWeight } from "@/constants/props/font-weights";
import { BorderRadius, FontSize, MuiSize, Padding, Spacing } from "@/constants/props/sizes";
import { ButtonVariant } from "@/constants/props/variants";
import { useCheckedInByTableId } from "@/hooks/mutations/useCheckedInByTableId";
import { usePayOrder } from "@/hooks/mutations/usePayOrder";
import { useTotalOrderItemByOrderId } from "@/hooks/queries/useOrderItems";
import { useOrderById, useOrderIdByTableId } from "@/hooks/queries/useOrders";
import { useTableById } from "@/hooks/queries/useTables";
import { getLocalText } from "@/lib/i18n";
import { useTableStore } from "@/stores/useTableStore";
import { PaymentMethod } from "@/types/components/features/orders";
import { ReceiveTableDialogProps } from "@/types/components/features/tables/table-detail-panel/dialog/receive-table";
import { formatVNTime } from '@/utils/date';
import { useState } from "react";

export default function ReceiveTableDialog({ setActiveAction, activeAction, reservation }: ReceiveTableDialogProps) {

    const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(UpperCasePaymentMethod.cash);
    const tableId = useTableStore((state) => state.selectedTableId)
    const { mutateAsync: checkedInByTableId, isPending: checking } = useCheckedInByTableId(reservation?.id || null);
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


    const formatMoney = (value?: number | string | null) => {
        const amount = Number(value ?? Numbers.zero);
        const safeAmount = Number.isFinite(amount) ? amount : Numbers.zero;
        return `${safeAmount.toLocaleString(getLocalText().text.numberLocale)} ${getLocalText().text.currencySuffix}`;
    };

    const checkedIn = async () => {
        if (!reservation?.id) return;
        try {
            await checkedInByTableId();
            closeDialog();
        } catch {
            // err
        }
    };

    return <>
        <DialogMolecule open={activeAction === TableDetail.receiveTable} onClose={closeDialog} maxWidth={MuiSize.xs}>
            <DialogTitleMolecule>{`${getLocalText().text.receiveTable} ${table?.name ?? getLocalText().text.blank}`}</DialogTitleMolecule>
            <DialogContentMolecule>
                <StackAtoms spacing={Spacing.xlarge}>
                    <TextAtoms sx={{ fontSize: FontSize.medium }} color={TextColor.textSecondary} component={Component.p}>{getLocalText().text.receiveTableDescription}</TextAtoms>
                    <BoxAtoms component={Component.div} sx={{
                        display: Display.flex,
                        flexDirection: FlexDirection.column,
                        gap: Gap.xSmall,

                        borderRadius: BorderRadius.medium,
                        borderWidth: BorderWidth.mediumBorder,
                        borderColor: SxColor.border,

                        bgcolor: SxColor.defaultSoft,
                        px: Padding.smallSpace,
                        py: Padding.smallSpace,
                    }}>
                        <StackAtoms direction={FlexDirection.row} sx={{
                            display: Display.flex,
                            justifyContent: JustifyContent.spaceBetween

                        }}>
                            <TextAtoms sx={{ flex: Flex.equal, fontSize: FontSize.large }} color={TextColor.textSecondary} component={Component.p}>{getLocalText().text.customer}</TextAtoms>
                            <TextAtoms align={TextAlign.right} component={Component.p} sx={{ pr: Padding.xlargeSpace, flex: Flex.flex2, fontWeight: FontWeight.w600, }}>{`${reservation?.customerName}`}</TextAtoms>
                        </StackAtoms>
                        <StackAtoms direction={FlexDirection.row} sx={{ justifyContent: JustifyContent.spaceBetween }}>
                            <TextAtoms sx={{ flex: Flex.equal, fontSize: FontSize.large }} color={TextColor.textSecondary} component={Component.p}>{getLocalText().text.guestCount}</TextAtoms>
                            <TextAtoms align={TextAlign.right} component={Component.p} sx={{ pr: Padding.xlargeSpace, flex: Flex.flex2, fontWeight: FontWeight.w600 }}>{`${reservation?.guestCount}`}</TextAtoms>
                        </StackAtoms>
                        <StackAtoms direction={FlexDirection.row} sx={{ justifyContent: JustifyContent.spaceBetween }}>
                            <TextAtoms sx={{ flex: Flex.equal, fontSize: FontSize.large }} color={TextColor.textSecondary} component={Component.p}>{getLocalText().text.bookingTime}</TextAtoms>
                            <TextAtoms align={TextAlign.right} component={Component.p} sx={{ pr: Padding.xlargeSpace, flex: Flex.flex2, fontWeight: FontWeight.w600 }}>{`${formatVNTime(reservation?.reservedAt, getLocalText().text.HHmm)}`}</TextAtoms>
                        </StackAtoms>
                    </BoxAtoms>
                </StackAtoms>
            </DialogContentMolecule>
            <DialogActionsMolecule>
                <ButtonAtoms onClick={closeDialog} variant={ButtonVariant.text}>{getLocalText().text.close}</ButtonAtoms>
                <ButtonAtoms
                    variant={ButtonVariant.contained}
                    disabled={checking}
                    onClick={() => {
                        checkedIn()
                    }}
                >
                    {checking ? getLocalText().text.confirming : getLocalText().text.confirm}
                </ButtonAtoms>
            </DialogActionsMolecule>
        </DialogMolecule>
    </>
}

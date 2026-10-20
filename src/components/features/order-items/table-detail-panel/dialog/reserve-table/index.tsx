'use client'

import ButtonAtoms from "@/components/common/atoms/button";
import StackAtoms from "@/components/common/atoms/stack";
import TextAtoms from "@/components/common/atoms/text";
import DialogMolecule from "@/components/common/molecules/dialog";
import DialogActionsMolecule from "@/components/common/molecules/dialog-actions";
import DialogContentMolecule from "@/components/common/molecules/dialog-content";
import DialogTitleMolecule from "@/components/common/molecules/dialog-title";
import InputMolecule from "@/components/common/molecules/input";
import QuantityInputMolecule from "@/components/common/molecules/quantity-input";
import { TableDetail } from "@/constants/actions";
import { Null } from "@/constants/null";
import { Numbers } from "@/constants/numbers";
import { SxColor, TextColor } from "@/constants/props/colors";
import { Component } from "@/constants/props/components";
import { FontSize, MuiSize, Spacing } from "@/constants/props/sizes";
import { ButtonVariant, TextVariant } from "@/constants/props/variants";
import { useCreateReservation } from "@/hooks/mutations/useCreateReservation";
import { useTableById } from "@/hooks/queries/useTables";
import { getLocalText } from "@/lib/i18n";
import { useTableStore } from "@/stores/useTableStore";
import { useUIStore } from "@/stores/useUIStore";
import { ReserveTableProps } from "@/types/components/features/tables/table-detail-panel/dialog/reserve-table";
import { useState } from "react";

export default function ReserveTableDialog({ setActiveAction, activeAction }: ReserveTableProps) {
    const setErrorMsg = useUIStore((state) => state.setErrorMsg)
    const tableId = useTableStore((state) => state.selectedTableId)
    const { data: table } = useTableById(tableId);

    const [customerName, setCustomerName] = useState<string>(getLocalText().text.blank);
    const [phone, setPhone] = useState<string>(getLocalText().text.blank);
    const [guestCount, setGuestCount] = useState<number>(Numbers.one);
    const [reservedAt, setReservedAt] = useState<string>(getLocalText().text.blank);
    const [note, setNote] = useState<string>(getLocalText().text.blank);

    const { mutate: createReservation, isPending: isAddingReservation } = useCreateReservation();

    const resetAddReservationForm = () => {
        setCustomerName(getLocalText().text.blank);
        setGuestCount(Numbers.one);
        setPhone(getLocalText().text.blank);
        setReservedAt(getLocalText().text.blank);
        setNote(getLocalText().text.blank);
    };

    const closeDialog = () => {
        resetAddReservationForm();
        setActiveAction(Null);
    };

    const handleCreateReservation = () => {
        if (!tableId || !customerName || !reservedAt) return;

        const parsedReservedAt = new Date(reservedAt);

        if (Number.isNaN(parsedReservedAt.getTime())) {
            setErrorMsg(getLocalText().text.invalidReservationTimeError);
            return;
        }

        createReservation({
            tableId,
            customerName,
            phone: phone.trim() || undefined,
            guestCount,
            reservedAt: parsedReservedAt.toISOString(),
            note: note.trim() || undefined,
        }, {
            onSuccess: () => {
                resetAddReservationForm();
                closeDialog();
            },
        });
    };

    return <>
        <DialogMolecule open={activeAction === TableDetail.reserveTable} onClose={closeDialog} maxWidth={MuiSize.sm}>
            <DialogTitleMolecule>{`${getLocalText().text.reserveTable} ${table?.name ?? getLocalText().text.blank}`}</DialogTitleMolecule>
            <DialogContentMolecule>
                <StackAtoms spacing={Spacing.xlarge}>
                    <TextAtoms sx={{
                        fontSize: FontSize.large,
                    }} variant={TextVariant.caption} color={TextColor.textSecondary} component={Component.div}>{getLocalText().text.reservationInstruction}</TextAtoms>
                    <InputMolecule
                        label={getLocalText().text.customerName}
                        required
                        value={customerName}
                        onChange={(event) => setCustomerName(event.target.value)}
                    />
                    <InputMolecule
                        label={getLocalText().text.phoneNumber}
                        required
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                    />
                    <QuantityInputMolecule
                        label={getLocalText().text.guestCount}
                        value={guestCount}
                        onChange={(event) => setGuestCount(Number(event.target.value))}
                    />
                    <InputMolecule
                        label={getLocalText().text.reservationTime}
                        type="datetime-local"
                        required
                        value={reservedAt}
                        slotProps={{
                            inputLabel: {
                                shrink: true,
                            },
                        }}
                        onChange={(event) => setReservedAt(event.target.value)}
                    />
                    <InputMolecule
                        label={getLocalText().text.note}
                        value={note}
                        onChange={(event) => setNote(event.target.value)}
                    />
                </StackAtoms>

            </DialogContentMolecule>
            <DialogActionsMolecule>
                <ButtonAtoms sx={{
                    color: SxColor.blackBtn,
                    borderColor: SxColor.border,
                }} onClick={closeDialog} variant={ButtonVariant.outlined}>{getLocalText().text.cancel}</ButtonAtoms>
                <ButtonAtoms
                    variant={ButtonVariant.contained}
                    onClick={handleCreateReservation}
                    disabled={!tableId || !customerName || !reservedAt || isAddingReservation}
                >
                    {isAddingReservation ? getLocalText().text.loading : getLocalText().text.confirmReservation}
                </ButtonAtoms>
            </DialogActionsMolecule>
        </DialogMolecule>
    </>
}

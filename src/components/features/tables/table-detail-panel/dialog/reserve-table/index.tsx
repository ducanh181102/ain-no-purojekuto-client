'use client'

import ButtonAtoms from "@/components/common/atoms/button";
import TextAtoms from "@/components/common/atoms/text";
import DialogMolecule from "@/components/common/molecules/dialog";
import DialogActionsMolecule from "@/components/common/molecules/dialog-actions";
import DialogContentMolecule from "@/components/common/molecules/dialog-content";
import DialogTitleMolecule from "@/components/common/molecules/dialog-title";
import InputMolecule from "@/components/common/molecules/input";
import QuantityInputMolecule from "@/components/common/molecules/quantity-input";
import StackMolecule from "@/components/common/molecules/stack";
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

    const [customerName, setCustomerName] = useState<string>(getLocalText().blank);
    const [phone, setPhone] = useState<string>(getLocalText().blank);
    const [guestCount, setGuestCount] = useState<number>(Numbers.one);
    const [reservedAt, setReservedAt] = useState<string>(getLocalText().blank);
    const [note, setNote] = useState<string>(getLocalText().blank);

    const { mutate: createReservation, isPending: isAddingReservation } = useCreateReservation();

    const resetAddReservationForm = () => {
        setCustomerName(getLocalText().blank);
        setGuestCount(Numbers.one);
        setPhone(getLocalText().blank);
        setReservedAt(getLocalText().blank);
        setNote(getLocalText().blank);
    };

    const closeDialog = () => {
        resetAddReservationForm();
        setActiveAction(Null);
    };

    const handleCreateReservation = () => {
        if (!tableId || !customerName || !reservedAt) return;

        const parsedReservedAt = new Date(reservedAt);

        if (Number.isNaN(parsedReservedAt.getTime())) {
            setErrorMsg(getLocalText().invalidReservationTimeError);
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
            <DialogTitleMolecule>{`${getLocalText().reserveTable} ${table?.name ?? getLocalText().blank}`}</DialogTitleMolecule>
            <DialogContentMolecule>
                <StackMolecule spacing={Spacing.xlarge}>
                    <TextAtoms sx={{
                        fontSize: FontSize.large,
                    }} variant={TextVariant.caption} color={TextColor.textSecondary} component={Component.div}>{getLocalText().reservationInstruction}</TextAtoms>
                    <InputMolecule
                        label={getLocalText().customerName}
                        required
                        value={customerName}
                        onChange={(event) => setCustomerName(event.target.value)}
                    />
                    <InputMolecule
                        label={getLocalText().phoneNumber}
                        required
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                    />
                    <QuantityInputMolecule
                        label={getLocalText().guestCount}
                        value={guestCount}
                        onChange={(event) => setGuestCount(Number(event.target.value))}
                    />
                    <InputMolecule
                        label={getLocalText().reservationTime}
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
                        label={getLocalText().note}
                        value={note}
                        onChange={(event) => setNote(event.target.value)}
                    />
                </StackMolecule>

            </DialogContentMolecule>
            <DialogActionsMolecule>
                <ButtonAtoms sx={{
                    color: SxColor.blackBtn,
                    borderColor: SxColor.border,
                }} onClick={closeDialog} variant={ButtonVariant.outlined}>{getLocalText().cancel}</ButtonAtoms>
                <ButtonAtoms
                    variant={ButtonVariant.contained}
                    onClick={handleCreateReservation}
                    disabled={!tableId || !customerName || !reservedAt || isAddingReservation}
                >
                    {isAddingReservation ? getLocalText().loading : getLocalText().confirmReservation}
                </ButtonAtoms>
            </DialogActionsMolecule>
        </DialogMolecule>
    </>
}

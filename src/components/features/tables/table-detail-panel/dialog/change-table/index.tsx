'use client'

import BoxAtoms from "@/components/common/atoms/box";
import ButtonAtoms from "@/components/common/atoms/button";
import StackAtoms from "@/components/common/atoms/stack";
import TextAtoms from "@/components/common/atoms/text";
import DialogMolecule from "@/components/common/molecules/dialog";
import DialogActionsMolecule from "@/components/common/molecules/dialog-actions";
import DialogContentMolecule from "@/components/common/molecules/dialog-content";
import DialogTitleMolecule from "@/components/common/molecules/dialog-title";
import DropDownInputMolecule from "@/components/common/molecules/drop-down";
import InputMolecule from "@/components/common/molecules/input";
import MenuItemMolecule from "@/components/common/molecules/menu-item";
import { TableDetail } from "@/constants/actions";
import { UpperCaseTableStatus } from "@/constants/keys";
import { Null } from "@/constants/null";
import { BorderWidth } from "@/constants/props/borders";
import { SxColor, TextColor } from "@/constants/props/colors";
import { Component } from "@/constants/props/components";
import { Display } from "@/constants/props/displays";
import { Flex, FlexDirection, Gap, JustifyContent } from "@/constants/props/flexs";
import { FontWeight } from "@/constants/props/font-weights";
import { BorderRadius, FontSize, MuiSize, Padding, Spacing } from "@/constants/props/sizes";
import { ButtonVariant } from "@/constants/props/variants";
import { useMoveReservation } from "@/hooks/mutations/useMoveReservation";
import { useTables } from "@/hooks/queries/useTables";
import { getLocalText } from "@/lib/i18n";
import { useTableStore } from "@/stores/useTableStore";
import { ChangeTableDialogProps } from "@/types/components/features/tables/table-detail-panel/dialog/change-table";
import { useMemo, useState } from "react";

export default function ChangeTableDialog({ setActiveAction, activeAction, reservation }: ChangeTableDialogProps) {
    const [newTableId, setNewTableId] = useState<number | "">("");
    const [reason, setReason] = useState("");

    const setSelectedTableId = useTableStore((state) => state.setSelectedTableId);
    const { data: tables = [] } = useTables();
    const { mutate: moveReservation, isPending: moving } = useMoveReservation();

    const currentTable = useMemo(() => {
        return tables.find((table) => table.id === reservation?.tableId);
    }, [reservation?.tableId, tables]);

    const availableTables = useMemo(() => {
        const guestCount = reservation?.guestCount ?? 0;

        return tables.filter((table) => {
            const canServeGuests = !guestCount || table.capacity >= guestCount;
            return table.status === UpperCaseTableStatus.available && canServeGuests;
        });
    }, [reservation?.guestCount, tables]);

    const suggestedTables = availableTables
        .slice(0, 3)
        .map((table) => table.name)
        .join(", ");

    const selectedNewTableId = newTableId || availableTables[0]?.id || "";

    const closeDialog = () => {
        setActiveAction(Null);
    };

    const handleChangeTable = () => {
        if (!reservation?.id || !selectedNewTableId) return;

        moveReservation({
            reservationId: reservation.id,
            tableId: Number(selectedNewTableId),
            reason: reason,
        }, {
            onSuccess: () => {
                setSelectedTableId(Number(selectedNewTableId));
                setNewTableId("");
                setReason("");
                closeDialog();
            },
        });
    };

    return <>
        <DialogMolecule open={activeAction === TableDetail.changeTable} onClose={closeDialog} maxWidth={MuiSize.xs}>
            <DialogTitleMolecule>{getLocalText().text.changeReservedTable}</DialogTitleMolecule>
            <DialogContentMolecule>
                <StackAtoms spacing={Spacing.xlarge}>
                    <TextAtoms sx={{ fontSize: FontSize.medium }} color={TextColor.textSecondary} component={Component.p}>{getLocalText().text.changeReservedTableDescription}</TextAtoms>
                    <BoxAtoms component={Component.div} sx={{
                        display: Display.flex,
                        flexDirection: FlexDirection.column,
                        gap: Gap.small,

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
                            <TextAtoms sx={{ flex: Flex.equal, fontSize: FontSize.large }} color={TextColor.textSecondary} component={Component.p}>{getLocalText().text.currentTable}</TextAtoms>
                            <TextAtoms component={Component.p} sx={{ flex: Flex.flex2, fontWeight: FontWeight.w600 }}>
                                {`${currentTable?.name ?? getLocalText().text.blank} - ${reservation?.guestCount ?? 0} ${getLocalText().text.guest.toLowerCase()}`}
                            </TextAtoms>
                        </StackAtoms>
                        <DropDownInputMolecule
                            label={getLocalText().text.newTable}
                            value={selectedNewTableId}
                            disabled={moving || availableTables.length === 0}
                            onChange={(event) => setNewTableId(Number(event.target.value))}
                        >
                            {availableTables.map((table) => (
                                <MenuItemMolecule key={table.id} value={table.id}>
                                    {`${table.name} - ${table.capacity} ${getLocalText().text.guest.toLowerCase()}`}
                                </MenuItemMolecule>
                            ))}
                        </DropDownInputMolecule>
                        <InputMolecule
                            label={getLocalText().text.reason}
                            value={reason}
                            onChange={(event) => setReason(event.target.value)}
                        />
                        <BoxAtoms component={Component.div} sx={{
                            display: Display.flex,
                            justifyContent: JustifyContent.spaceBetween,
                            borderRadius: BorderRadius.medium,
                            borderWidth: BorderWidth.mediumBorder,
                            borderColor: SxColor.border,
                            bgcolor: SxColor.background,
                            px: Padding.smallSpace,
                            py: Padding.smallSpace,
                        }}>
                            <TextAtoms color={TextColor.textSecondary} component={Component.p}>{getLocalText().text.suggestedTables}</TextAtoms>
                            <TextAtoms component={Component.p} sx={{ fontWeight: FontWeight.w600 }}>
                                {suggestedTables || getLocalText().text.blank}
                            </TextAtoms>
                        </BoxAtoms>
                    </BoxAtoms>
                </StackAtoms>
            </DialogContentMolecule>
            <DialogActionsMolecule>
                <ButtonAtoms onClick={closeDialog} variant={ButtonVariant.text} disabled={moving}>{getLocalText().text.close}</ButtonAtoms>
                <ButtonAtoms
                    variant={ButtonVariant.contained}
                    disabled={moving || !selectedNewTableId}
                    onClick={handleChangeTable}
                >
                    {moving ? getLocalText().text.confirming : getLocalText().text.confirmChange}
                </ButtonAtoms>
            </DialogActionsMolecule>
        </DialogMolecule>
    </>
}

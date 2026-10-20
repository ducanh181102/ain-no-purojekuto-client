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
import { Null } from "@/constants/null";
import { TextAlign } from "@/constants/props/aligns";
import { BorderWidth } from "@/constants/props/borders";
import { ButtonColor, SxColor, TextColor } from "@/constants/props/colors";
import { Component } from "@/constants/props/components";
import { Display } from "@/constants/props/displays";
import { Flex, FlexDirection, Gap, JustifyContent } from "@/constants/props/flexs";
import { FontWeight } from "@/constants/props/font-weights";
import { BorderRadius, FontSize, MuiSize, Padding, Spacing } from "@/constants/props/sizes";
import { ButtonVariant } from "@/constants/props/variants";
import { useCancelByTableId } from "@/hooks/mutations/useCancelByTableId";
import { useTableById } from "@/hooks/queries/useTables";
import { getLocalText } from "@/lib/i18n";
import { useTableStore } from "@/stores/useTableStore";
import { CancelReservationDialogProps } from "@/types/components/features/tables/table-detail-panel/dialog/cancel-reservation";
import { formatVNTime } from "@/utils";

export default function CancelReservationDialog({ setActiveAction, activeAction, reservation }: CancelReservationDialogProps) {

    const tableId = useTableStore((state) => state.selectedTableId)
    const { mutate: cancelByTableId, isPending: canceling } = useCancelByTableId();
    const { data: table } = useTableById(tableId);

    const closeDialog = () => {
        setActiveAction(Null);
    };

    const cancel = () => {
        cancelByTableId(reservation?.id || null, {
            onSuccess: () => {
                closeDialog();
            },
        });
    };

    return <>
        <DialogMolecule open={activeAction === TableDetail.cancelReservation} onClose={closeDialog} maxWidth={MuiSize.xs}>
            <DialogTitleMolecule>{`${getLocalText().text.cancelReservation} ${table?.name ?? getLocalText().text.blank}`}</DialogTitleMolecule>
            <DialogContentMolecule>
                <StackAtoms spacing={Spacing.xlarge}>
                    <TextAtoms sx={{ fontSize: FontSize.medium }} color={TextColor.textSecondary} component={Component.p}>{getLocalText().text.cancelReservationDescription}</TextAtoms>
                    <BoxAtoms component={Component.div} sx={{
                        display: Display.flex,
                        flexDirection: FlexDirection.column,
                        gap: Gap.xSmall,

                        borderRadius: BorderRadius.medium,
                        borderWidth: BorderWidth.mediumBorder,
                        borderColor: SxColor.error,

                        bgcolor: SxColor.errorSoft,
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
                    variant={ButtonVariant.outlined}
                    disabled={canceling}
                    color={ButtonColor.error}
                    onClick={() => {
                        cancel()
                    }}
                >
                    {canceling ? getLocalText().text.canceling : getLocalText().text.cancelReservation}
                </ButtonAtoms>
            </DialogActionsMolecule>
        </DialogMolecule>
    </>
}

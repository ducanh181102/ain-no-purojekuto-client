'use client'

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
import QuantityInputMolecule from "@/components/common/molecules/quantity-input";
import { TableDetail } from "@/constants/actions";
import { UpperCaseTableStatus } from "@/constants/keys";
import { Null } from "@/constants/null";
import { Numbers } from "@/constants/numbers";
import { TextColor } from "@/constants/props/colors";
import { Component } from "@/constants/props/components";
import { FlexDirection, JustifyContent } from "@/constants/props/flexs";
import { FontWeight } from "@/constants/props/font-weights";
import { MuiSize, Spacing } from "@/constants/props/sizes";
import { ButtonVariant, TextVariant } from "@/constants/props/variants";
import { useCreateOrderItem } from "@/hooks/mutations/useCreateOrderItem";
import { useDishes } from "@/hooks/queries/useDishes";
import { useOrderIdByTableId } from "@/hooks/queries/useOrders";
import { useTableById } from "@/hooks/queries/useTables";
import { getLocalText } from "@/lib/i18n";
import { useTableStore } from "@/stores/useTableStore";
import { Blank } from "@/types/app/blank";
import { AddDishProps } from "@/types/components/features/tables/table-detail-panel/dialog/add-dish";
import { useState } from "react";
import { formatMoney } from "@/utils/number";

export default function AddDishDialog({ setActiveAction, activeAction }: AddDishProps) {

    const [selectedDishId, setSelectedDishId] = useState<number | Blank>(getLocalText().text.blank);
    const [quantity, setQuantity] = useState<number>(Numbers.one);
    const [note, setNote] = useState<string>(getLocalText().text.blank);

    const tableId = useTableStore((state) => state.selectedTableId)
    const { data: table } = useTableById(tableId);
    const occupiedTableId = table?.status === UpperCaseTableStatus.occupied ? tableId : Null;
    const { data: currentOrder } = useOrderIdByTableId(occupiedTableId)
    const currentOrderId = currentOrder?.orderId ?? Null;

    const { data: dishes = [], isLoading: isLoadingDishes } = useDishes();
    const { mutate: createOrderItem, isPending: isAddingDish } = useCreateOrderItem();

    const hasCurrentOrder = !!currentOrderId;
    const availableDishes = dishes.filter((dish) => dish.available === getLocalText().text.oneString);
    const selectedDish = availableDishes.find((dish) => dish.id === selectedDishId);
    const addDishTotal = (selectedDish?.price ?? Numbers.zero) * quantity;

    const closeDialog = () => {
        setActiveAction(Null);
    };

    const resetAddDishForm = () => {
        setSelectedDishId(getLocalText().text.blank);
        setQuantity(Numbers.one);
        setNote(getLocalText().text.blank);
    };

    const handleAddDish = () => {
        if (!currentOrderId || !selectedDishId || quantity < Numbers.one) return;

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

    return <>
        <DialogMolecule open={activeAction === TableDetail.addDish} onClose={closeDialog} maxWidth={MuiSize.sm}>
            <DialogTitleMolecule>{`${getLocalText().text.addDish} ${table?.name ?? getLocalText().text.blank}`}</DialogTitleMolecule>
            <DialogContentMolecule>
                {!hasCurrentOrder ? (
                    <TextAtoms color={TextColor.textSecondary} variant={TextVariant.caption} component={Component.h1}>{getLocalText().text.noCurrentOrder}</TextAtoms>
                ) : (
                    <StackAtoms spacing={Spacing.xlarge}>
                        <DropDownInputMolecule
                            label={getLocalText().text.dish}
                            value={selectedDishId}
                            disabled={isLoadingDishes}
                            onChange={(event) => setSelectedDishId(Number(event.target.value))}>
                            {availableDishes.map((item) => (
                                <MenuItemMolecule key={item.id} value={item.id}>
                                    {`${item.name} - ${formatMoney(item.price)}`}
                                </MenuItemMolecule>
                            ))}
                        </DropDownInputMolecule>
                        <QuantityInputMolecule
                            label={getLocalText().text.quantity}
                            value={quantity}
                            slotProps={{ htmlInput: { min: Numbers.one } }}
                            onChange={(event) => setQuantity(Math.max(Numbers.one, Number(event.target.value) || Numbers.one))}
                        />
                        <InputMolecule
                            label={getLocalText().text.note}
                            value={note}
                            onChange={(event) => setNote(event.target.value)}
                        />
                        <StackAtoms direction={FlexDirection.row} sx={{ justifyContent: JustifyContent.spaceBetween }}>
                            <TextAtoms color={TextColor.textSecondary} variant={TextVariant.body1} component={Component.h1}>{getLocalText().text.tempCalculate}</TextAtoms>
                            <TextAtoms variant={TextVariant.body1} component={Component.h1} sx={{ fontWeight: FontWeight.w700 }}>{formatMoney(addDishTotal)}</TextAtoms>
                        </StackAtoms>
                    </StackAtoms>
                )}
            </DialogContentMolecule>
            <DialogActionsMolecule>
                <ButtonAtoms onClick={closeDialog} variant={ButtonVariant.text}>{getLocalText().text.close}</ButtonAtoms>
                <ButtonAtoms
                    variant={ButtonVariant.contained}
                    onClick={handleAddDish}
                    disabled={!hasCurrentOrder || !selectedDishId || quantity < Numbers.one || isAddingDish}
                >
                    {isAddingDish ? getLocalText().text.addingDish : getLocalText().text.addDish}
                </ButtonAtoms>
            </DialogActionsMolecule>
        </DialogMolecule>
    </>
}

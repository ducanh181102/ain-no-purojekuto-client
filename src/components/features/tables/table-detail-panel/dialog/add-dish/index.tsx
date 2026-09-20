'use client'

import ButtonAtoms from "@/components/common/atoms/button";
import TextAtoms from "@/components/common/atoms/text";
import DialogMolecule from "@/components/common/molecules/dialog";
import DialogActionsMolecule from "@/components/common/molecules/dialog-actions";
import DialogContentMolecule from "@/components/common/molecules/dialog-content";
import DialogTitleMolecule from "@/components/common/molecules/dialog-title";
import DropDownInputMolecule from "@/components/common/molecules/drop-down";
import InputMolecule from "@/components/common/molecules/input";
import MenuItemMolecule from "@/components/common/molecules/menu-item";
import QuantityInputMolecule from "@/components/common/molecules/quantity-input";
import StackMolecule from "@/components/common/molecules/stack";
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
import { Strings } from "@/constants/strings";
import { useCreateOrderItem } from "@/hooks/mutations/useCreateOrderItem";
import { useDishes } from "@/hooks/queries/useDishes";
import { useOrderIdByTableId } from "@/hooks/queries/useOrders";
import { useTableById } from "@/hooks/queries/useTables";
import { getLocalText } from "@/lib/i18n";
import { useTableStore } from "@/stores/useTableStore";
import { useUIStore } from "@/stores/useUIStore";
import { Blank } from "@/types/app/blank";
import { AddDishProps } from "@/types/components/features/tables/table-detail-panel/dialog/add-dish";
import { useState } from "react";

export default function AddDishDialog({ setActiveAction, activeAction }: AddDishProps) {
    const locale = useUIStore((state) => state.locale) ?? Strings.vi.value;

    const [selectedDishId, setSelectedDishId] = useState<number | Blank>(getLocalText().blank);
    const [quantity, setQuantity] = useState<number>(Numbers.one);
    const [note, setNote] = useState<string>(getLocalText().blank);

    const tableId = useTableStore((state) => state.selectedTableId)
    const { data: table } = useTableById(tableId);
    const occupiedTableId = table?.status === UpperCaseTableStatus.occupied ? tableId : Null;
    const { data: currentOrder } = useOrderIdByTableId(occupiedTableId)
    const currentOrderId = currentOrder?.orderId ?? Null;

    const { data: dishes = [], isLoading: isLoadingDishes } = useDishes();
    const { mutate: createOrderItem, isPending: isAddingDish } = useCreateOrderItem();

    const hasCurrentOrder = !!currentOrderId;
    const availableDishes = dishes.filter((dish) => dish.available === getLocalText().oneString);
    const selectedDish = availableDishes.find((dish) => dish.id === selectedDishId);
    const addDishTotal = (selectedDish?.price ?? Numbers.zero) * quantity;

    const closeDialog = () => {
        setActiveAction(Null);
    };

    const resetAddDishForm = () => {
        setSelectedDishId(getLocalText().blank);
        setQuantity(Numbers.one);
        setNote(getLocalText().blank);
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

    const formatMoney = (value?: number | string | null) => {
        const amount = Number(value ?? Numbers.zero);
        const safeAmount = Number.isFinite(amount) ? amount : Numbers.zero;
        return `${safeAmount.toLocaleString(getLocalText().numberLocale)} ${getLocalText().currencySuffix}`;
    };

    return <>
        <DialogMolecule open={activeAction === TableDetail.addDish} onClose={closeDialog} maxWidth={MuiSize.sm}>
            <DialogTitleMolecule>{`${getLocalText().addDish} ${table?.name ?? getLocalText().blank}`}</DialogTitleMolecule>
            <DialogContentMolecule>
                {!hasCurrentOrder ? (
                    <TextAtoms color={TextColor.textSecondary} variant={TextVariant.caption} component={Component.h1}>{getLocalText().noCurrentOrder}</TextAtoms>
                ) : (
                    <StackMolecule spacing={Spacing.xlarge}>
                        <DropDownInputMolecule
                            label={getLocalText().dish}
                            value={selectedDishId}
                            disabled={isLoadingDishes}
                            onChange={(event) => setSelectedDishId(event.target.value ? Number(event.target.value) : getLocalText().blank)}
                        >
                            {availableDishes.map((dish) => (
                                <MenuItemMolecule key={dish.id} value={dish.id}>
                                    {`${dish.name} - ${formatMoney(dish.price)}`}
                                </MenuItemMolecule>
                            ))}
                        </DropDownInputMolecule>
                        <QuantityInputMolecule
                            label={getLocalText().quantity}
                            value={quantity}
                            slotProps={{ htmlInput: { min: Numbers.one } }}
                            onChange={(event) => setQuantity(Math.max(Numbers.one, Number(event.target.value) || Numbers.one))}
                        />
                        <InputMolecule
                            label={getLocalText().note}
                            value={note}
                            onChange={(event) => setNote(event.target.value)}
                        />
                        <StackMolecule direction={FlexDirection.row} sx={{ justifyContent: JustifyContent.spaceBetween }}>
                            <TextAtoms color={TextColor.textSecondary} variant={TextVariant.body1} component={Component.h1}>{getLocalText().tempCalculate}</TextAtoms>
                            <TextAtoms variant={TextVariant.body1} component={Component.h1} sx={{ fontWeight: FontWeight.w700 }}>{formatMoney(addDishTotal)}</TextAtoms>
                        </StackMolecule>
                    </StackMolecule>
                )}
            </DialogContentMolecule>
            <DialogActionsMolecule>
                <ButtonAtoms onClick={closeDialog} variant={ButtonVariant.text}>{getLocalText().close}</ButtonAtoms>
                <ButtonAtoms
                    variant={ButtonVariant.contained}
                    onClick={handleAddDish}
                    disabled={!hasCurrentOrder || !selectedDishId || quantity < Numbers.one || isAddingDish}
                >
                    {isAddingDish ? getLocalText().addingDish : getLocalText().addDish}
                </ButtonAtoms>
            </DialogActionsMolecule>
        </DialogMolecule>
    </>
}

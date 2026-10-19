'use client'

import BoxAtoms from "@/components/common/atoms/box";
import TextAtoms from "@/components/common/atoms/text";
import { SxColor, TextColor } from "@/constants/props/colors";
import { Component } from "@/constants/props/components";
import { Cursor } from "@/constants/props/cursor";
import { Display } from "@/constants/props/displays";
import { AlignItems, FlexDirection, JustifyContent } from "@/constants/props/flexs";
import { FontWeight } from "@/constants/props/input-props";
import { FontSize } from "@/constants/props/sizes";
import { useTotalOrderItemByOrderId } from "@/hooks/queries/useOrderItems";
import { getLocalText } from "@/lib/i18n";
import { useOrderStore } from "@/stores/useOrderStore";
import { formatMoney } from "@/utils/number";

export default function TempOrderClientBox({ orderId }: { orderId: number }) {

    // Lấy tổng tiền của đơn hàng từ orderId
    const { data: { total } = {} } = useTotalOrderItemByOrderId(orderId);

    // set total to store
    // const setTotal = useOrderStore((state) => state.setTotal);
    // setTotal({ orderId, total: total || 0 });

    // Format tổng tiền thành định dạng tiền tệ
    // const formattedTotal = formatMoney(total);



    return <BoxAtoms component={Component.div} sx={{
        display: Display.inlineFlex,
        flexDirection: FlexDirection.column,
        alignItems: AlignItems.flexEnd,
    }}>
        <TextAtoms component={Component.label}
            color={TextColor.textPrimary}
            sx={{
                fontSize: FontSize.medium,
                fontWeight: FontWeight.w600,
            }}
            children={total !== undefined ? formatMoney(total) : "NA"} />
        <BoxAtoms component={Component.div} sx={{
            display: Display.inlineFlex,
            justifyContent: JustifyContent.center,
        }}>
            <TextAtoms component={Component.label}
                children={getLocalText().text.viewDetails}
                color={TextColor.info}
                colorHover={SxColor.textInfoHover}
                sx={{
                    fontSize: FontSize.small,
                    cursor: Cursor.pointer,
                    fontWeight: FontWeight.w400,
                    display: Display.inlineBlock,
                }}
                onClick={() => {
                    console.log("View details for orderId:", orderId);
                }}
            />
        </BoxAtoms>
    </BoxAtoms>

}

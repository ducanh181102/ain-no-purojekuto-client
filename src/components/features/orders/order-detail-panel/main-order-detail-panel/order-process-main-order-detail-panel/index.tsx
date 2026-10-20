'use client'

import BoxAtoms from "@/components/common/atoms/box";
import LineAtoms from "@/components/common/atoms/line";
import TextAtoms from "@/components/common/atoms/text";
import { UpperCaseOrderStatus } from "@/constants/keys";
import { BorderWidth } from "@/constants/props/borders";
import { SxColor, TextColor } from "@/constants/props/colors";
import { Component } from "@/constants/props/components";
import { Display } from "@/constants/props/displays";
import { FlexDirection, Gap } from "@/constants/props/flexs";
import { AlignItems, JustifyContent } from "@/constants/props/grids";
import { FontWeight } from "@/constants/props/input-props";
import { Orientation } from "@/constants/props/orientations";
import { FontSize, Height, Margin, NumSize, Padding, Width } from "@/constants/props/sizes";
import { getLocalText } from "@/lib/i18n";
import { OrderProcessMainOrderDetailPanelProps } from "@/types/components/features/orders/order-detail-panel/main-order-detail-panel/order-process-main-order-detail-panel";
import CircleIcon from '@mui/icons-material/Circle';


export default function OrderProcessMainOrderDetailPanel({ sx, order }: OrderProcessMainOrderDetailPanelProps) {

    const status = order?.status || UpperCaseOrderStatus.pending;

    const proceses = status === UpperCaseOrderStatus.cancelled ? [
        {
            status: UpperCaseOrderStatus.pending,
            label: getLocalText().orderStatus.pending,
        },
        {
            status: UpperCaseOrderStatus.cancelled,
            label: getLocalText().orderStatus.cancelled,
        }
    ] : [
        {
            status: UpperCaseOrderStatus.pending,
            label: getLocalText().orderStatus.pending,
        },
        {
            status: UpperCaseOrderStatus.confirmed,
            label: getLocalText().orderStatus.confirmed,
        },
        {
            status: UpperCaseOrderStatus.preparing,
            label: getLocalText().orderStatus.preparing,
        },
        {
            status: UpperCaseOrderStatus.served,
            label: getLocalText().orderStatus.served,
        },
        {
            status: UpperCaseOrderStatus.paid,
            label: getLocalText().orderStatus.paid,
        },

    ];

    return <BoxAtoms component="main"
        sx={{
            ...sx,
        }} >
        <BoxAtoms component={Component.div} sx={{
            display: Display.flex,
            flexDirection: FlexDirection.column,
            alignItems: AlignItems.start,
            justifyContent: JustifyContent.center,
        }}>{
                proceses.map((process, index) => {
                    // tìm index của status hiện tại trong mảng proceses
                    const activeInIndex = proceses.findIndex((p) => p.status === status);

                    return <BoxAtoms key={index} component={Component.div} sx={{
                        display: Display.flex,
                        flexDirection: FlexDirection.column,
                        alignItems: AlignItems.start,
                    }}>
                        <BoxAtoms key={index} component={Component.div} sx={{
                            display: Display.flex,
                            flexDirection: FlexDirection.row,
                            alignItems: AlignItems.center,
                            gap: Gap.x2Small,
                        }}>
                            <CircleIcon sx={{
                                color: status === UpperCaseOrderStatus.cancelled && process.status === UpperCaseOrderStatus.cancelled ?
                                    SxColor.error : index < activeInIndex ?
                                        SxColor.success : activeInIndex === index ?
                                            SxColor.info : SxColor.default,
                                fontSize: FontSize.x2large
                            }} />
                            <TextAtoms component={Component.label}
                                color={status === UpperCaseOrderStatus.cancelled && process.status === UpperCaseOrderStatus.cancelled ?
                                    TextColor.error : index < activeInIndex ? TextColor.textPrimary : activeInIndex === index ?
                                        TextColor.info : TextColor.textDisabled}
                                sx={{ fontSize: FontSize.medium, fontWeight: FontWeight.w600 }}
                                children={process.label} />
                        </BoxAtoms>
                        <LineAtoms sx={{
                            ml: Margin.x2smallSpace,
                            height: Height.dividerXsmall,
                            borderWidth: BorderWidth.mediumBorder,
                            borderColor: index < activeInIndex ? SxColor.success : SxColor.backgroundItem,
                        }} orientation={Orientation.vertical} />
                    </BoxAtoms>
                })
            }
        </BoxAtoms>
    </BoxAtoms>
}
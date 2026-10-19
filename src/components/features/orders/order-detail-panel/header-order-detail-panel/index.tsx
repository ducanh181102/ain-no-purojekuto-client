'use client'

import BoxAtoms from "@/components/common/atoms/box";
import ButtonAtoms from "@/components/common/atoms/button";
import GridAtoms from "@/components/common/atoms/grid";
import LineAtoms from "@/components/common/atoms/line";
import TextAtoms from "@/components/common/atoms/text";
import { ButtonColor, SxColor, TextColor } from "@/constants/props/colors";
import { Component } from "@/constants/props/components";
import { Display } from "@/constants/props/displays";
import { AlignSelf } from "@/constants/props/flexs";
import { JustifyContent } from "@/constants/props/grids";
import { FontWeight } from "@/constants/props/input-props";
import { Orientation } from "@/constants/props/orientations";
import { FontSize, GridSize, Margin, Padding } from "@/constants/props/sizes";
import { ButtonVariant } from "@/constants/props/variants";
import { getLocalText } from "@/lib/i18n";
import { HeaderOrderDetailPanelProps } from "@/types/components/features/orders/order-detail-panel/header-order-detail-panel";
import { formatVNTime } from "@/utils/date";
import { getOrderCode } from "@/utils/string";
import OrderStatus from "../../order-status";


export default function HeaderOrderDetailPanel({ sx, order }: HeaderOrderDetailPanelProps) {

    return <BoxAtoms component={Component.header}
        sx={{
            ...sx,
        }} >
        <BoxAtoms component={Component.div}
            sx={{
                display: Display.flex,
                justifyContent: JustifyContent.spaceBetween,
            }} >
            <TextAtoms component={Component.label}
                color={TextColor.textPrimary}
                sx={{
                    fontSize: FontSize.x2large,
                    fontWeight: FontWeight.w600,
                    alignSelf: AlignSelf.baseline,
                }}
                children={getLocalText().text.orderDetails} />
            <TextAtoms component={Component.label}
                color={TextColor.info}
                sx={{
                    fontSize: FontSize.medium,
                    fontWeight: FontWeight.w600,
                    alignSelf: AlignSelf.baseline,
                }}
                children={getOrderCode(order?.id)} />
        </BoxAtoms>
        <TextAtoms component={Component.label}
            color={TextColor.textPrimary}
            sx={{
                fontSize: FontSize.x5large,
                fontWeight: FontWeight.w600,
            }}
            children={order?.table?.name || getLocalText().text.blank} />
        <BoxAtoms component={Component.div}
            sx={{
                display: Display.flex,
            }} >
            <OrderStatus status={order?.status} />
        </BoxAtoms>
        <GridAtoms container >
            <GridAtoms size={GridSize.grid5} >
                <TextAtoms component={Component.label}
                    color={TextColor.textSecondary}
                    sx={{
                        fontSize: FontSize.small,
                        fontWeight: FontWeight.w400,
                    }}
                    children={order?.table?.capacity + getLocalText().code.space + getLocalText().text.guest} />
            </GridAtoms>
            <GridAtoms size={GridSize.grid7} >
                <TextAtoms component={Component.label}
                    color={TextColor.textSecondary}
                    sx={{
                        fontSize: FontSize.small,
                        fontWeight: FontWeight.w400,
                    }}
                    children={getLocalText().text.start +
                        getLocalText().text.twoDot +
                        getLocalText().code.space +
                        formatVNTime(order?.createdAt, getLocalText().text.HHmm)} />
            </GridAtoms>
        </GridAtoms>
        <BoxAtoms component={Component.div}
            sx={{
                display: Display.flex,
                justifyContent: JustifyContent.spaceBetween,
            }} >
            <ButtonAtoms variant={ButtonVariant.outlined}
                color={ButtonColor.inherit}
                sx={{
                    fontSize: FontSize.small,
                    borderColor: SxColor.border,
                    color: SxColor.blackText,
                    px: Padding.xsmallSpace,
                }}
                children={getLocalText().text.viewOrderShort} />
            <ButtonAtoms variant={ButtonVariant.contained}
                color={ButtonColor.primary}
                sx={{
                    fontSize: FontSize.small,
                    px: Padding.xsmallSpace,
                }}
                children={getLocalText().text.addDish} />
            <ButtonAtoms variant={ButtonVariant.outlined}
                color={ButtonColor.primary}
                sx={{
                    fontSize: FontSize.small,
                    px: Padding.xsmallSpace,
                }}
                children={getLocalText().text.pay} />
        </BoxAtoms>
        <LineAtoms orientation={Orientation.horizontal} sx={{ my: Margin.x2smallSpace }} />
    </BoxAtoms>
}

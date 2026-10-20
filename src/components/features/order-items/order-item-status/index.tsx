'use client';

import StatusButtonChip from "@/components/common/molecules/status-button-chip";
import StatusChip from "@/components/common/molecules/status-chip";
import { LowerCaseOrderItemStatus } from "@/constants/keys";
import { BgColorOrderItemStatus, ColorOrderItemStatus } from "@/constants/props/colors";
import { FontSize, Padding } from "@/constants/props/sizes";
import { getLocalText } from "@/lib/i18n";
import { Sx } from "@/types/app/props/sx";
import { OrderItemStatusProps } from "@/types/components/features/order-items/order-item-status";
import { PaddingRounded } from "@mui/icons-material";

export default function OrderItemStatus({size, status, count, icon, onClick }: OrderItemStatusProps) {

  const statusLowerCase = status?.toLowerCase() as keyof typeof LowerCaseOrderItemStatus;
  const color = ColorOrderItemStatus[statusLowerCase];
  const bgcolor = BgColorOrderItemStatus[statusLowerCase];
  const label = getLocalText().orderItemStatus[statusLowerCase] + (count !== undefined ? ` ${count}` : getLocalText().text.blank);

  return onClick ? <StatusButtonChip size={size} onClick={onClick} color={color} bgcolor={bgcolor} label={label} icon={icon} /> :
    <StatusChip size={size} color={color} bgcolor={bgcolor} label={label} />;
}
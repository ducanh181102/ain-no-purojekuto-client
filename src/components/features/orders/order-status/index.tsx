'use client';

import StatusButtonChip from "@/components/common/molecules/status-button-chip";
import StatusChip from "@/components/common/molecules/status-chip";
import { LowerCaseOrderStatus } from "@/constants/keys";
import { BgColorOrderStatus, ColorOrderStatus } from "@/constants/props/colors";
import { getLocalText } from "@/lib/i18n";
import { OrderStatusProps } from "@/types/components/features/orders/order-status";

export default function OrderStatus({ status, count, onClick, icon }: OrderStatusProps) {

  const statusLowerCase =  status?.toLowerCase() as keyof typeof LowerCaseOrderStatus;
  const color = ColorOrderStatus[statusLowerCase];
  const bgcolor = BgColorOrderStatus[statusLowerCase];
  const label = getLocalText().LowerCaseOrderStatus[statusLowerCase] + (count !== undefined ? ` ${count}` : getLocalText().text.blank);

  return onClick ? <StatusButtonChip onClick={onClick} color={color} bgcolor={bgcolor} label={label} icon={icon} /> :
    <StatusChip color={color} bgcolor={bgcolor} label={label} />;
}
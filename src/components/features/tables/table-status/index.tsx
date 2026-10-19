'use client';

import StatusButtonChip from "@/components/common/molecules/status-button-chip";
import StatusChip from "@/components/common/molecules/status-chip";
import { LowerCaseTableStatus } from "@/constants/keys";
import { BgColorTableStatus, ColorTableStatus } from "@/constants/props/colors";
import { getLocalText } from "@/lib/i18n";
import { TableStatusProps } from "@/types/components/features/tables/table-status";

export default function TableStatus({ status, count, icon, onClick }: TableStatusProps) {

  const statusLowerCase = status?.toLowerCase() as keyof typeof LowerCaseTableStatus;
  const color = ColorTableStatus[statusLowerCase];
  const bgcolor = BgColorTableStatus[statusLowerCase];
  const label = getLocalText().tableStatus[statusLowerCase] + (count !== undefined ? ` ${count}` : getLocalText().text.blank);

  return onClick ? <StatusButtonChip onClick={onClick} color={color} bgcolor={bgcolor} label={label} icon={icon} /> :
    <StatusChip color={color} bgcolor={bgcolor} label={label} />;
}
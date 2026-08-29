'use client';

import ChipAtoms from "@/components/common/atoms/chip";
import { BgColorTableStatus, ColorTableStatus } from "@/constants/props/colors";
import { Strings } from "@/constants/strings";
import { Locale } from "@/types/app/locales";
import { StatusChipProps } from "@/types/components/common/molecule/status-chip";
import { TableStatusKey } from "@/types/keys";

export default function StatusChip({ status, variant, sx, icon, count, onClick }: StatusChipProps) {

  const locale: Locale = "vi";
  const statusKey: TableStatusKey = status?.toLowerCase() as TableStatusKey;
  const label = `${Strings[locale].tableStatus[statusKey]} ${count ?? ''}`;
  const bgColor = BgColorTableStatus[statusKey];
  const color = ColorTableStatus[statusKey];

  return <ChipAtoms variant={variant}
    color={color}
    label={label}
    onClick={onClick}
    icon={icon}
    sx={{
      ...sx,
      bgcolor: bgColor
    }} />
}
'use client';

import { ChipSize } from "@/types/app/props/sizes";
import { Sx } from "@/types/app/props/sx";


export type OrderItemStatusProps = {
  size?: ChipSize,
  status: string | undefined;
  count?: number;
  icon?: React.ReactElement;
  onClick?: () => void;
};
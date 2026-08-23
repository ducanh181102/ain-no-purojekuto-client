import { MaxWidth, MinWidth, Width } from "@/constants/props/widths";

export type Width = typeof Width[keyof typeof Width];
export type MaxWidth = typeof MaxWidth[keyof typeof MaxWidth];
export type MinWidth = typeof MinWidth[keyof typeof MinWidth];


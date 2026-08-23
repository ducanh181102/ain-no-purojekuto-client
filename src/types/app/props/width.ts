import { Width, MaxWidth, MinWidth } from "@/constants/props/sizes";

export type Width = typeof Width[keyof typeof Width];
export type MaxWidth = typeof MaxWidth[keyof typeof MaxWidth];
export type MinWidth = typeof MinWidth[keyof typeof MinWidth];


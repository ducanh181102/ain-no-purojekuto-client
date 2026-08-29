import { AvatarBackgroundColor, BadgeColor, BgColorTableStatus, ButtonColor, ChipColor, ColorTableStatus, SxColor, TextColor } from "@/constants/props/colors";

export type SxColor = typeof SxColor[keyof typeof SxColor];

export type BadgeColor = typeof BadgeColor[keyof typeof BadgeColor];
export type ChipColor = typeof ChipColor[keyof typeof ChipColor];
export type TextColor = typeof TextColor[keyof typeof TextColor];
export type ButtonColor = typeof ButtonColor[keyof typeof ButtonColor];
export type AvatarBackgroundColor = typeof AvatarBackgroundColor[keyof typeof AvatarBackgroundColor];
export type BgColorTableStatus = typeof BgColorTableStatus[keyof typeof BgColorTableStatus];
export type ColorTableStatus = typeof ColorTableStatus[keyof typeof ColorTableStatus];

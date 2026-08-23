import { ButtonVariant, ChipVariant, TextVariant } from "@/constants/props/variants";

export type ButtonVariant =
  typeof ButtonVariant[keyof typeof ButtonVariant];

export type ChipVariant =
  typeof ChipVariant[keyof typeof ChipVariant];

export type TextVariant =
  typeof TextVariant[keyof typeof TextVariant];

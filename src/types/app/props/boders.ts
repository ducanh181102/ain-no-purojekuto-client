import { BorderStyle, BorderWidth } from "@/constants/props/borders";

export type BorderWidth = typeof BorderWidth[keyof typeof BorderWidth];
export type BorderStyle = typeof BorderStyle[keyof typeof BorderStyle];

import { Position, Inset, ZIndex, Top, Overflow, OverflowY } from "@/constants/props/position";


export type Position = typeof Position[keyof typeof Position];
export type Inset = typeof Inset[keyof typeof Inset];
export type CustomsZIndex = typeof ZIndex[keyof typeof ZIndex];
export type Top = typeof Top[keyof typeof Top];
export type OverflowY = typeof OverflowY[keyof typeof OverflowY];
export type Overflow = typeof Overflow[keyof typeof Overflow];

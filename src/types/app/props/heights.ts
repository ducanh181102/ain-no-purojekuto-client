import { MinHeight, MaxHeight, Height } from "@/constants/props/sizes";

export type MinHeight = typeof MinHeight[keyof typeof MinHeight];
export type MaxHeight = typeof MaxHeight[keyof typeof MaxHeight];
export type Height = typeof Height[keyof typeof Height];


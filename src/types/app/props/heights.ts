import { Height, MaxHeight, MinHeight } from "@/constants/props/heights";

export type MinHeight = typeof MinHeight[keyof typeof MinHeight];
export type MaxHeight = typeof MaxHeight[keyof typeof MaxHeight];
export type Height = typeof Height[keyof typeof Height];


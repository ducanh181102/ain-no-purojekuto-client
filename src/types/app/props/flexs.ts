import {
    AlignContent, AlignItems, AlignSelf, ColumnGap, Flex, FlexDirection,
    FlexGrow, FlexShrink, FlexWrap, Gap, JustifyContent, RowGap
} from "@/constants/props/flexs";

export type Flex = typeof Flex[keyof typeof Flex];
export type FlexDirection = typeof FlexDirection[keyof typeof FlexDirection];
export type FlexWrap = typeof FlexWrap[keyof typeof FlexWrap];
export type JustifyContentFlex = typeof JustifyContent[keyof typeof JustifyContent];
export type AlignItemsFlex = typeof AlignItems[keyof typeof AlignItems];
export type AlignContentFlex = typeof AlignContent[keyof typeof AlignContent];
export type AlignSelf = typeof AlignSelf[keyof typeof AlignSelf];
export type FlexGrow = typeof FlexGrow[keyof typeof FlexGrow];
export type FlexShrink = typeof FlexShrink[keyof typeof FlexShrink];
export type Gap = typeof Gap[keyof typeof Gap];
export type RowGap = typeof RowGap[keyof typeof RowGap];
export type ColumnGap = typeof ColumnGap[keyof typeof ColumnGap];


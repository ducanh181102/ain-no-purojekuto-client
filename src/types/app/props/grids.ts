import {
    AlignContent, AlignItems,
    ColumnGap,
    Gap, GridTemplateColumns, GridTemplateRows, JustifyContent, JustifyItems, RowGap
} from "@/constants/props/grids";

export type GridTemplateColumns = typeof GridTemplateColumns[keyof typeof GridTemplateColumns];
export type GridTemplateRows = typeof GridTemplateRows[keyof typeof GridTemplateRows];

export type AlignItemsGrid = typeof AlignItems[keyof typeof AlignItems];
export type JustifyItemsGrid = typeof JustifyItems[keyof typeof JustifyItems];
export type AlignContentGrid = typeof AlignContent[keyof typeof AlignContent];
export type JustifyContentGrid = typeof JustifyContent[keyof typeof JustifyContent];

export type Gap = typeof Gap[keyof typeof Gap];
export type RowGap = typeof RowGap[keyof typeof RowGap];
export type ColumnGap = typeof ColumnGap[keyof typeof ColumnGap];


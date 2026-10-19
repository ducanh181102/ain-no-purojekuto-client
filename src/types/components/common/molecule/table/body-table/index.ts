import { Gap } from "@/types/app/props/flexs";
import { GridSize, NumSize } from "@/types/app/props/sizes";
import type { ReactNode } from "react";

//? & dùng để gộp type
export type BodyTableMoleculeProps = {
    gridSizes: Array<GridSize>,
    data?: Array<Record<string, ReactNode>>,
    paddingX?: NumSize,
    paddingY?: NumSize,
    gap?: Gap,
    selectedIndex?: number | null,
    onRowClick?: (index: number) => void,
}

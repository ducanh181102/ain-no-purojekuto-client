import { GridSize } from "@/types/app/props/sizes";
import { Sx } from "@/types/app/props/sx";
import type { ReactNode } from "react";

type HeaderProps = {
    titles: Array<string>,
    gridSizes: Array<GridSize>,
}

type BodyProps = {
    data: Array<Record<string, ReactNode>>,
    gridSizes: Array<GridSize>,
    selectedIndex?: number | null,
    onRowClick?: (index: number) => void,
}

//? & dùng để gộp type
export type TableMoleculeProps = {
    sx?: Sx,
    header: HeaderProps,
    body: BodyProps
}

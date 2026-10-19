import { GridSize, NumSize } from "@/types/app/props/sizes";

//? & dùng để gộp type
export type HeaderTableMoleculeProps = {
    titles: Array<string>,
    gridSizes: Array<GridSize>,
    paddingX?: NumSize,
    paddingY?: NumSize,
}

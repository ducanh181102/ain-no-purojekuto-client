import { ChildrenProps } from "@/types/app/children";
import { Sx } from "@/types/app/props/sx";

export type DetailPanelProps = ChildrenProps & {
    sx?: Sx,
    title: string, 
}
import { Sx } from "@/types/app/props/sx";

export type BoxClientProps = {
    children: React.ReactNode,
    sx?: Sx,
    isLoading?: boolean,
    isError?: boolean,
}
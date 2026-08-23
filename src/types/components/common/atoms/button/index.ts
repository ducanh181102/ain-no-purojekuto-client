import { ChildrenProps } from "@/types/app/children";
import { ButtonVariant } from "@/types/app/props/variants";

//? & dùng để gộp type
export type ButtonAtomsProps = ChildrenProps & {
    variant: ButtonVariant,
}
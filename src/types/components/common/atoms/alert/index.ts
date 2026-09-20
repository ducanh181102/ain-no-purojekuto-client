import { ChildrenProps } from "@/types/app/children"
import { Severity } from "@/types/app/props/severity"

//? & dùng để gộp type
export type AlertAtomsProps = ChildrenProps & {
    severity?: Severity,
    onClose?: () => void,
}
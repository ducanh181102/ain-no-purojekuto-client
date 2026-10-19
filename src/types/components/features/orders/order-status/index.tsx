import { UpperCaseOrderStatusKey } from "@/types/keys";

export type OrderStatusProps = {
  status: UpperCaseOrderStatusKey | undefined;
  count?: number;
  icon?: React.ReactElement;
  onClick?: () => void;
}
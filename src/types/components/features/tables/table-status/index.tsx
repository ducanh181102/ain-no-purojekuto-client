import { UpperCaseTableStatusKey } from "@/types/keys";

export type TableStatusProps = {
  status: UpperCaseTableStatusKey | undefined;
  count?: number;
  icon?: React.ReactElement;
  onClick?: () => void;
}
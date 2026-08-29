import { TextColor } from "@/types/app/props/colors";
import { Sx } from "@/types/app/props/sx";

export type PriceProps = {
  price: number,
  sx?: Sx,
  color?: TextColor,
  isNegative?: boolean,
}
import { Smokum } from "next/font/google";
import { NumSize } from "./sizes";

export const Position = {
  // Mặc định, element nằm theo flow bình thường của trang
  static: "static",

  // Element vẫn nằm trong flow, nhưng có thể dùng top/right/bottom/left để dịch chuyển
  relative: "relative",

  // Element thoát khỏi flow, bám theo parent gần nhất có position khác static
  absolute: "absolute",

  // Element thoát khỏi flow, bám cố định theo màn hình khi scroll
  fixed: "fixed",

  // Element vẫn trong flow, nhưng sẽ dính lại khi scroll tới vị trí top/left chỉ định
  sticky: "sticky",
} as const;

export const Inset = {
  // Tất cả cạnh top/right/bottom/left đều bằng 0
  zero: 0,

  // Cách tất cả các cạnh 8px
  small: 8,

  // Cách tất cả các cạnh 16px
  medium: 16,

  // Cách tất cả các cạnh 24px
  large: 24,

  top: " 2 0 0 0",

  // Chỉ cố định full chiều ngang phía trên
  topFull: "0 0 auto 0",

  // Chỉ cố định full chiều ngang phía dưới
  bottomFull: "auto 0 0 0",

  // Chừa sidebar trái 240px
  withSidebarLeft: "0 0 0 240px",

  // Chừa topbar 64px
  withTopbar: "64px 0 0 0",

  // Chừa cả topbar 64px và sidebar 240px
  withTopbarSidebar: "64px 0 0 240px",
} as const;

export const ZIndex = {
  // Nằm dưới layer bình thường
  behind: -1,

  // Layer mặc định
  default: 0,

  // Nhô nhẹ lên trên content bình thường
  content: 1,

  // Dùng cho dropdown nhỏ, menu custom
  dropdown: 10,

  // Dùng cho topbar/sidebar custom
  layout: 100,

  // Dùng cho topbar cố định
  topbar: 1100,

  // Dùng cho sidebar/drawer
  sidebar: 1200,

  // Dùng cho modal/dialog
  modal: 1300,

  // Dùng cho snackbar/toast
  snackbar: 1400,

  // Dùng cho tooltip, cao nhất trong UI thường
  tooltip: 1500,
} as const;

export const Top =  {
  none: NumSize.none,
  small: NumSize.small,
  medium: NumSize.medium,
  large: NumSize.large,
} as const

export const OverflowY = {
  auto: "auto",
  hidden: "hidden",
  scroll: "scroll",
  visible: "visible",
  clip: "clip",
} as const;

export const Overflow = {
  auto: "auto",
  hidden: "hidden",
  scroll: "scroll",
  visible: "visible",
  clip: "clip",
} as const;
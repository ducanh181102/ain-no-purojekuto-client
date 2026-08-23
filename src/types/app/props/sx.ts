import { Display } from "@/types/app/props/displays";
import { BorderStyle, BorderWidth } from "./boders";
import { SxColor } from "./colors";
import {
  AlignContentFlex,
  AlignItemsFlex,
  AlignSelf,
  ColumnGap,
  Flex, FlexDirection,
  FlexGrow, FlexShrink,
  FlexWrap,
  Gap,
  JustifyContentFlex,
  RowGap,
} from "./flexs";
import { FontWeight } from "./font-weight";
import { AlignContentGrid, AlignItemsGrid, GridTemplateColumns, GridTemplateRows, JustifyContentGrid, JustifyItemsGrid } from "./grids";
import { Height, MaxHeight, MinHeight } from "./heights";
import { CustomsZIndex, Inset, Overflow, OverflowY, Position, Top } from "./position";
import { FontSize, NumSize } from "./sizes";
import { MaxWidth, MinWidth, Width } from "./width";

export type Sx = {
  display?: Display,
  bgcolor?: SxColor,

  minHeight?: MinHeight,
  maxHeight?: MaxHeight,
  height?: Height,

  maxWidth?: MaxWidth,
  minWidth?: MinWidth,
  width?: Width,

  // text
  color?: SxColor,
  fontWeight?: FontWeight,
  fontSize?: FontSize,

  // border
  borderColor?: SxColor,
  borderRadius?: NumSize,
  borderWidth?: BorderWidth,
  borderStyle?: BorderStyle,

  // padding
  p?: NumSize,
  pt?: NumSize,
  pb?: NumSize,
  pl?: NumSize,
  pr?: NumSize,
  px?: NumSize,
  py?: NumSize,

  // margin
  m?: NumSize,
  mt?: NumSize,
  mb?: NumSize,
  ml?: NumSize,
  mr?: NumSize,
  mx?: NumSize,
  my?: NumSize,


  // Nhóm prop dùng cho GridBox layout
  // chia cột
  gridTemplateColumns?: GridTemplateColumns,
  // chia hàng
  gridTemplateRows?: GridTemplateRows,
  // Căn item theo chiều ngang trong ô:
  justifyItems?: JustifyItemsGrid,
  // justifyContent = Căn toàn bộ grid theo chiều ngang khi còn khoảng trống:
  // justifyContent?: JustifyContentGrid,
  // dùng để Căn item theo chiều dọc trong ô.
  // alignItems?: AlignItemsGrid,
  // dùng để Căn toàn bộ grid theo chiều dọc khi còn khoảng trống:
  // alignContent?: AlignContentGrid,
  // khoảng cách giữa các item con. (cả row và col)
  // gap?: Gap,
  // khoảng cách giữa các hàng (flexWrap: "wrap")
  // rowGap?: RowGap,
  // khoảng cách giữa các cột
  // columnGap?: ColumnGap,

  // Nhóm prop dùng cho Flexbox layout
  // giản nở đối tượng
  flex?: Flex,
  // Hướng
  flexDirection?: FlexDirection,
  // quyết định item con có được xuống dòng hay không khi không đủ chiều ngang
  flexWrap?: FlexWrap,
  // justifyContent = căn theo hướng đang xếp item
  justifyContent?: JustifyContentFlex | JustifyContentGrid,
  // dùng để dòng flex theo trục phụ.
  alignItems?: AlignItemsFlex | AlignItemsGrid,
  // dùng để căn nhiều dòng flex theo trục phụ. (từ 2 dòng trở lên, flexWrap: "wrap")
  alignContent?: AlignContentFlex | AlignContentGrid,
  // căn riêng cho item con
  alignSelf?: AlignSelf,
  // Quyết định có cho item đó nở ra không (0, 1, 2)
  // tỉ lệ theo phần dư + kích thước có sẵn
  flexGrow?: FlexGrow,
  // Co lại
  flexShrink?: FlexShrink,
  // khoảng cách giữa các item con. (cả row và col)
  gap?: Gap,
  // khoảng cách giữa các hàng (flexWrap: "wrap")
  rowGap?: RowGap,
  // khoảng cách giữa các cột
  columnGap?: ColumnGap,

  // Position
  // Kiểu định vị:
  position?: Position,
  // Khoảng cách từ các cạnh:
  inset?: Inset,
  // Quy định lớp nằm trên/dưới:
  zIndex?: CustomsZIndex,
  // top
  top?: Top,
  // overflowY
  overflowY?: OverflowY,
  // cách CSS xử lý phần nội dung bị tràn ra ngoài kích thước của box
  overflow?: Overflow,

}
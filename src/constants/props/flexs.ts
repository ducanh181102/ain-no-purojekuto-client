import { NumSize } from "./sizes";

export const Flex = {
  // item chiếm phần còn lại
  flex: 1,
  flex2: 2,
  flex3: 3,
  flex4: 4,
  flex5: 5,

  // item không chiếm thêm chỗ, nhưng vẫn có thể bị co nhỏ
  noneGrow: 0,

  // giữ nguyên kích thước tự nhiên, không nở, không co
  none: "none",

  // mềm, tự co giãn theo không gian
  auto: "1 1 auto",

  // không nở, nhưng được co nếu thiếu chỗ
  shrinkOnly: "0 1 auto",

  // nở được, nhưng không co, kích thước gốc auto
  growOnly: "1 0 auto",

  // không nở, không co, kích thước theo nội dung/width
  fixedAuto: "0 0 auto",

  // thường dùng cho sidebar cố định
  sidebar: "0 0 280px",

  // thường dùng cho sidebar nhỏ
  sidebarSmall: "0 0 240px",

  // thường dùng cho sidebar lớn
  sidebarLarge: "0 0 320px",

  // item chia đều, bỏ qua kích thước nội dung ban đầu
  equal: "1 1 0",

  // item chia đều, basis 0%
  equalPercent: "1 1 0%",
} as const;

export const FlexDirection = {
  row: 'row',
  column: 'column',
  rowReverse: "row-reverse",
  columnReverse: "column-reverse",
} as const;

export const FlexWrap = {
  nowrap: 'row',
  wrap: 'column',
  wrapReverse: "wrap-reverse",
} as const;

export const JustifyContent = {
  // A B C........
  flexStart: 'flex-start',
  // ....A B C....
  center: 'center',
  // ........A B C
  flexEnd: "flex-end",
  // A.......B.......C
  spaceBetween: "space-between",
  // ..A....B....C..
  spaceAround: "space-around",
  // ...A...B...C...
  spaceEvenly: "space-evenly",
} as const;

export const AlignItems = {
  // Kéo item theo chiều trục phụ. Đây là mặc định.
  stretch: 'stretch',
  // A / B / C /......
  flexStart: 'flex-start',
  // ....A / B / C....
  center: 'center',
  // ........A / B / C
  flexEnd: "flex-end",
  // Căn theo đường chân chữ
  baseline: "baseline"
} as const;

export const AlignContent = {
  // Kéo item theo chiều trục phụ. Đây là mặc định.
  stretch: 'stretch',

  // A B C
  // D E F
  // ........
  flexStart: 'flex-start',

  // ........
  // A B C
  // D E F
  // ........
  center: 'center',

  // ........
  // A B C
  // D E F
  flexEnd: "flex-end",

  // A B C
  //
  //
  // D E F
  spaceBetween: "space-between",

  // .. 
  // A B C
  //
  // D E F
  // ..
  spaceAround: "space-around",

  // ..
  // A B C
  // ..
  // D E F
  // ..
  spaceEvenly: "space-evenly",
} as const;

export const AlignSelf = {
  // Dùng theo alignItems của cha.
  auto: 'auto',
  // Kéo item theo chiều trục phụ.
  stretch: 'stretch',
  // A / B / C /......
  flexStart: 'flex-start',
  // ....A / B / C....
  center: 'center',
  // ........A / B / C
  flexEnd: "flex-end",
  // Căn theo đường chân chữ
  baseline: "baseline"
} as const;

export const FlexGrow = {
  none: 0,
  grow: 1,
  grow2: 2,
  grow3: 3,
  grow4: 4,
  grow5: 5,
} as const;

export const FlexShrink = {
  none: 0,
  shrink: 1,
  shrink2: 2,
  shrink3: 3,
  shrink4: 4,
  shrink5: 5,
} as const;

export const Gap = {
  none: 0,

  xSmall: NumSize.xsmallSpace,

  small: NumSize.smallSpace,

  medium: NumSize.mediumSpace,

  large: NumSize.largeSpace,

  xLarge: NumSize.xlargeSpace,
} as const;

export const RowGap = {
  none: 0,

  // 4px
  xSmall: 0.5,

  // 8px
  small: 1,

  // 16px
  medium: 2,

  // 24px
  large: 3,

  // 32px
  xLarge: 4,
} as const;


export const ColumnGap = {
  none: 0,

  // 4px
  xSmall: 0.5,

  // 8px
  small: 1,

  // 16px
  medium: 2,

  // 24px
  large: 3,

  // 32px
  xLarge: 4,
} as const;



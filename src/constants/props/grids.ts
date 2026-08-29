export const GridTemplateColumns = {
  // 1 cột, chiếm toàn bộ chiều ngang
  oneColumn: "1fr",

  // 2 cột bằng nhau
  twoColumns: "repeat(2, 1fr)",

  // 3 cột bằng nhau
  threeColumns: "repeat(3, 1fr)",

  // 4 cột bằng nhau
  fourColumns: "repeat(4, 1fr)",

  // 4 cột bằng nhau
  fiveColumns: "repeat(5, 1fr)",

  // Cột trái cố định 240px, cột phải chiếm phần còn lại
  sidebarLeft: "240px 1fr",

  // Cột trái chiếm phần còn lại, cột phải cố định 320px
  sidebarRight: "1fr 320px",

  // Layout 3 cột: trái 200px, giữa co giãn, phải 320px
  threeLayout: "200px 1fr 320px",

  // Card responsive nhỏ, mỗi item tối thiểu 180px
  // Tự động chia số cột theo chiều ngang màn hình/container
  // Mỗi card có chiều rộng ít nhất 280px
  // Nếu còn dư chỗ, card sẽ giãn ra để lấp đầy hàng
  autoCardSmall: "repeat(auto-fit, minmax(180px, 1fr))",

  // Card responsive vừa, mỗi item tối thiểu 220px
  autoCardMedium: "repeat(auto-fit, minmax(220px, 1fr))",

  // Card responsive lớn, mỗi item tối thiểu 280px
  autoCardLarge: "repeat(auto-fit, minmax(280px, 1fr))",
} as const;

export const GridTemplateRows = {
  // 1 hàng, chiều cao tự động theo nội dung
  oneAutoRow: "auto",

  // 2 hàng tự động theo nội dung
  twoAutoRows: "auto auto",

  // 3 hàng tự động theo nội dung
  threeAutoRows: "auto auto auto",

  // 2 hàng bằng nhau
  twoEqualRows: "repeat(2, 1fr)",

  // 3 hàng bằng nhau
  threeEqualRows: "repeat(3, 1fr)",

  // topbar 64px, content chiếm phần còn lại
  topbarContent: "64px 1fr",

  // topbar 64px, content co giãn, footer 56px
  topbarContentFooter: "64px 1fr 56px",

  // Sidebar/page layout: top auto, body chiếm phần còn lại
  autoContent: "auto 1fr",

  // Card responsive nhỏ, mỗi hàng tối thiểu 120px
  autoCardSmall: "repeat(auto-fit, minmax(120px, 1fr))",

  // Card responsive vừa, mỗi hàng tối thiểu 160px
  autoCardMedium: "repeat(auto-fit, minmax(160px, 1fr))",

  // Card responsive lớn, mỗi hàng tối thiểu 220px
  autoCardLarge: "repeat(auto-fit, minmax(220px, 1fr))",
} as const;

export const GridAutoRows = {
  small: "120px",
  medium: "160px",
  large: "220px",

  cardSmall: "120px",
  cardMedium: "160px",
  cardLarge: "220px",

  autoSmall: "minmax(120px, max-content)",
  autoMedium: "minmax(160px, max-content)",
  autoLarge: "minmax(220px, max-content)",

  fitSmall: "minmax(120px, 1fr)",
  fitMedium: "minmax(160px, 1fr)",
  fitLarge: "minmax(220px, 1fr)",

  maxContent: "max-content",
  minContent: "min-content",
  auto: "auto",
} as const

export const JustifyContent = {
  // A / B / C /......
  start: 'start',
  // ....A / B / C....
  center: 'center',
  // ........A / B / C
  end: "end",
  // A.......B.......C
  spaceBetween: "space-between",
} as const;

export const AlignContent = {
  // A / B / C /......
  start: 'start',
  // ....A / B / C....
  center: 'center',
  // ........A / B / C
  end: "end",
  // A.......B.......C
  spaceBetween: "space-between",
} as const;

export const AlignItems = {
  // Kéo item theo chiều trục phụ. Đây là mặc định.
  stretch: 'stretch',
  // A / B / C /......
  start: 'start',
  // ....A / B / C....
  center: 'center',
  // ........A / B / C
  end: "end",
} as const;

export const JustifyItems = {
  // Kéo item theo chiều trục phụ. Đây là mặc định.
  stretch: 'stretch',
  // A / B / C /......
  start: 'start',
  // ....A / B / C....
  center: 'center',
  // ........A / B / C
  end: "end",
} as const;

export const Gap = {
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



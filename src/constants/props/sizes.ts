import { Numbers } from "../numbers";

export const StrSize = {
  small: "small",
  medium: "medium",
  large: "large",
} as const

export const MuiSize = {
  xs: "xs",
  sm: "sm",
  md: "md",
  lg: "lg",
  xl: "xl",
} as const

export const GridSize = {
  auto: "auto",
  grow: "grow",
  grid1: Numbers.one,
  grid2: Numbers.two,
  grid3: Numbers.three,
  grid4: Numbers.four,
  grid5: Numbers.five,
  grid6: Numbers.six,
  grid7: Numbers.seven,
  grid8: Numbers.eight,
  grid9: Numbers.nine,
  grid10: Numbers.ten,
  grid11: Numbers.eleven,
  grid12: Numbers.twelve,
} as const

export const NumSize = {
  none: 0,

  // common for item
  xsmall: 0.4,
  small: 0.8,
  medium: 1.2,
  large: 1.6,
  xlarge: 2,

  half: "50%",
  full: "100%",

  // circle
  circle: "50%",

  // space
  x3smallSpace: 0.5,
  x2smallSpace: 1,
  xsmallSpace: 1.5,
  smallSpace: 2,
  mediumSpace: 3,
  largeSpace: 4,
  xlargeSpace: 5,

  // length text
  xsmallLen: 6,
  smallLen: 12,
  mediumLen: 24,
  largeLen: 46,
  xlargeLen: 96,

  // fontSize
  xsmallFontSize: 8,
  smallFontSize: 10,
  mediumFontSize: 12,
  largeFontSize: 14,
  xlargeFontSize: 16,
  x2largeFontSize: 18,
  x3largeFontSize: 20,
  x4largeFontSize: 24,
  x5largeFontSize: 28,


  // Width App
  screenWidth: "100vw",
  sideBarWidth: "15vw",
  topBarWidth: "85vw",
  filterBarWidth: "60vw",
  detailPanelWidth: "20vw",
  mainAreaWidth: "60vw",

  // Height App
  screenHeight: "100vh",
  topBarHeight: "9vh",
  detailPanelHeight: "76vh",
  mainAreaHeight: "91vh",
  toolBarHeight: "7vh",
  tableClient: "66vh",
  orderClient: "76vh",

  // Width Item
  x2smallChipWidth: "60px",
  xsmallChipWidth: "120px",
  smallChipWidth: "140px",
  mediumChipWidth: "160px",
  largeChipWidth: "180px",
  xlargeChipWidth: "200px",

  xsmallCardWidth: "16px",
  smallCardWidth: "32px",
  mediumCardWidth: "64px",
  largeCardWidth: "128px",
  xlargeCardWidth: "256px",

  xsmallAvatardWidth: "16px",
  smallAvatarWidth: "32px",
  mediumAvatarWidth: "64px",
  largeAvatarWidth: "128px",
  xlargeAvatarWidth: "256px",

  // icon
  smallIcon: "32px",
  mediumIcon: "48px",
  largeIcon: "64px",
  xlargeIcon: "72px",

  // Height Item
  xsmallChipHeight: "8px",
  smallChipHeight: "16px",
  mediumChipHeight: "32px",

  xsmallCardHeight: "16px",
  smallCardHeight: "32px",
  mediumCardHeight: "64px",
  largeCardHeight: "128px",
  xlargeCardHeight: "256px",

  xsmallAvatardHeight: "16px",
  smallAvatarHeight: "32px",
  mediumAvatarHeight: "64px",
  largeAvatarHeight: "128px",
  xlargeAvatarHeight: "256px",

  smallInputWidth: "128px",
  mediumInputWidth: "256px",
  largeInputWidth: "512px",

  smallInputHeight: "32px",
  mediumInputHeight: "40px",
  largeInputHeight: "48px",

  // textarea
  smallTextareaHeight: "32px",
  mediumTextareaHeight: "64px",
  largeTextareaHeight: "128px",

  // table
  headerTableHeight: "32px",
  bodyTableHeight: "480px",

  // divider
  x3smallDivider: "4px",
  x2smallDivider: "8px",
  xsmallDivider: "12px",
  smallDivider: "16px",
  mediumDivider: "24px",
  largeDivider: "32px",
  xlargeDivider: "48px",

  // box
  xsmallBoxHeight: "16px",
  smallBoxHeight: "32px",
  mediumBoxHeight: "64px",
  largeBoxHeight: "128px",
  xlargeBoxHeight: "256px",

} as const;

export const MaxLength = {
  // Text rất ngắn, ví dụ avatar initials: "ADM"
  xsmall: NumSize.xsmallLen,

  // Text ngắn, ví dụ mã bàn: "B01"
  small: NumSize.smallLen,

  // Text vừa, ví dụ tên trạng thái
  medium: NumSize.mediumLen,

  // Text dài hơn, ví dụ tên món ăn
  large: NumSize.largeLen,

  // Text rất dài, ví dụ mô tả ngắn
  xlarge: NumSize.xlargeLen,
} as const;

export const ChipSize = {
  medium: StrSize.medium,
  small: StrSize.small,
  large: StrSize.large,
} as const;

export const MinHeight = {
  // app
  screenHeight: NumSize.screenHeight,
  topbar: NumSize.topBarHeight,
  toolbar: NumSize.toolBarHeight,
  zero: NumSize.none,

  // chip
  chipSmall: NumSize.smallChipHeight,
  chipMedium: NumSize.mediumChipHeight,

  // card
  cardSmall: NumSize.smallCardHeight,
  cardMedium: NumSize.mediumCardHeight,
  cardLarge: NumSize.largeCardHeight,
  cardXlarge: NumSize.xlargeCardHeight,

  // avatar
  avatarSmall: NumSize.smallAvatarHeight,
  avatarMedium: NumSize.mediumAvatarHeight,
  avatarLarge: NumSize.largeAvatarHeight,
  avatarXlarge: NumSize.xlargeAvatarHeight,

  // table
  bodyTable: NumSize.bodyTableHeight,
  headerTable: NumSize.headerTableHeight,

} as const;

export const MaxHeight = {
  // app
  screenHeight: NumSize.screenHeight,
  toolbar: NumSize.toolBarHeight,
  topbar: NumSize.topBarHeight,

  // chip
  chipSmall: NumSize.smallChipHeight,
  chipMedium: NumSize.mediumChipHeight,

  // card
  cardSmall: NumSize.smallCardHeight,
  cardMedium: NumSize.mediumCardHeight,
  cardLarge: NumSize.largeCardHeight,
  cardXlarge: NumSize.xlargeCardHeight,

  // avatar
  avatarSmall: NumSize.smallAvatarHeight,
  avatarMedium: NumSize.mediumAvatarHeight,
  avatarLarge: NumSize.largeAvatarHeight,
  avatarXlarge: NumSize.xlargeAvatarHeight,

  // box
  boxSmall: NumSize.smallBoxHeight,
  boxMedium: NumSize.mediumBoxHeight,
  boxLarge: NumSize.largeBoxHeight,
  boxXlarge: NumSize.xlargeBoxHeight,

} as const;

export const Height = {
  // app
  screenHeight: NumSize.screenHeight,
  topbar: NumSize.topBarHeight,
  detailPanel: NumSize.detailPanelHeight,
  toolbar: NumSize.toolBarHeight,
  mainArea: NumSize.mainAreaHeight,
  tableClient: NumSize.tableClient,
  orderClient: NumSize.orderClient,
  full: NumSize.full,

  // chip
  chipSmall: NumSize.smallChipHeight,
  chipMedium: NumSize.mediumChipHeight,

  // card
  cardSmall: NumSize.smallCardHeight,
  cardMedium: NumSize.mediumCardHeight,
  cardLarge: NumSize.largeCardHeight,
  cardXlarge: NumSize.xlargeCardHeight,

  // avatar
  avatarSmall: NumSize.smallAvatarHeight,
  avatarMedium: NumSize.mediumAvatarHeight,
  avatarLarge: NumSize.largeAvatarHeight,
  avatarXlarge: NumSize.xlargeAvatarHeight,

  // input
  inputSmall: NumSize.smallInputHeight,
  inputMedium: NumSize.mediumInputHeight,
  inputLarge: NumSize.largeInputHeight,

  // icon
  iconSmall: NumSize.smallIcon,
  iconMedium: NumSize.mediumIcon,
  iconLarge: NumSize.largeIcon,
  iconXLarge: NumSize.xlargeIcon,

  // textarea
  textareaSmall: NumSize.smallTextareaHeight,
  textareaMedium: NumSize.mediumTextareaHeight,
  textareaLarge: NumSize.largeTextareaHeight,

  // divider
  dividerX3small: NumSize.x3smallDivider,
  dividerX2small: NumSize.x2smallDivider,
  dividerXsmall: NumSize.xsmallDivider,
  dividerSmall: NumSize.smallDivider,
  dividerMedium: NumSize.mediumDivider,
  dividerLarge: NumSize.largeDivider,
  dividerXlarge: NumSize.xlargeDivider,


} as const;

export const Width = {
  // app
  screen: NumSize.screenWidth,
  topbar: NumSize.topBarWidth,
  sidebar: NumSize.sideBarWidth,
  filterbar: NumSize.filterBarWidth,
  detailPanel: NumSize.detailPanelWidth,
  mainArea: NumSize.mainAreaWidth,
  full: NumSize.full,
  half: NumSize.half,
  fitContent: "fit-content",

  // chip
  chipX2Small: NumSize.x2smallChipWidth,
  chipXSmall: NumSize.xsmallChipWidth,
  chipSmall: NumSize.smallChipWidth,
  chipMedium: NumSize.mediumChipWidth,
  chipLarge: NumSize.largeChipWidth,
  chipXLarge: NumSize.xlargeChipWidth,

  // avatar
  avatarSmall: NumSize.smallAvatarWidth,
  avatarMedium: NumSize.mediumAvatarWidth,
  avatarLarge: NumSize.largeAvatarWidth,
  avatarXlarge: NumSize.xlargeAvatarWidth,

  // input
  inputSmall: NumSize.smallInputWidth,
  inputMedium: NumSize.mediumInputWidth,
  inputLarge: NumSize.largeInputWidth,

  // card
  cardSmall: NumSize.smallCardWidth,
  cardMedium: NumSize.mediumCardWidth,
  cardLarge: NumSize.largeCardWidth,
  cardXlarge: NumSize.xlargeCardWidth,

  // icon
  iconSmall: NumSize.smallIcon,
  iconMedium: NumSize.mediumIcon,
  iconLarge: NumSize.largeIcon,
  iconXLarge: NumSize.xlargeIcon,

  // divider
  dividerX3small: NumSize.x3smallDivider,
  dividerX2small: NumSize.x2smallDivider,
  dividerXsmall: NumSize.xsmallDivider,
  dividerSmall: NumSize.smallDivider,
  dividerMedium: NumSize.mediumDivider,
  dividerLarge: NumSize.largeDivider,
  dividerXlarge: NumSize.xlargeDivider,

} as const;

export const MaxWidth = {
  // app
  screen: NumSize.screenWidth,

  // topbar
  topbar: NumSize.topBarWidth,
  sidebar: NumSize.sideBarWidth,

  // chip
  chipSmall: NumSize.xsmallChipWidth,
  chipMedium: NumSize.xsmallChipWidth,

  // avatar
  avatarSmall: NumSize.smallAvatarWidth,
  avatarMedium: NumSize.mediumAvatarWidth,
  avatarLarge: NumSize.largeAvatarWidth,
  avatarXlarge: NumSize.xlargeAvatarWidth,

  // space
  xsmallSpace: NumSize.xsmallSpace,
  smallSpace: NumSize.smallSpace,
  mediumSpace: NumSize.mediumSpace,
  largeSpace: NumSize.largeSpace,
  xlargeSpace: NumSize.xlargeSpace,

} as const;

export const MinWidth = {
  // app
  screen: NumSize.screenWidth,
  filterbar: NumSize.filterBarWidth,
  detailPanel: NumSize.detailPanelWidth,
  mainArea: NumSize.mainAreaWidth,
  full: NumSize.full,

  // topbar
  topbar: NumSize.topBarWidth,
  sidebar: NumSize.sideBarWidth,

  // chip
  chipSmall: NumSize.xsmallChipWidth,
  chipMedium: NumSize.xsmallChipWidth,

  // avatar
  avatarSmall: NumSize.smallAvatarWidth,
  avatarMedium: NumSize.mediumAvatarWidth,
  avatarLarge: NumSize.largeAvatarWidth,
  avatarXlarge: NumSize.xlargeAvatarWidth,

  // card
  cardSmall: NumSize.smallCardWidth,
  cardMedium: NumSize.mediumCardWidth,
  cardLarge: NumSize.largeCardWidth,
  cardXlarge: NumSize.xlargeCardWidth,
} as const;


export const Margin = {
  // app
  sidebarWidth: NumSize.sideBarWidth,
  topbarHeight: NumSize.topBarHeight,
  toolbar_spaceHeight: NumSize.toolBarHeight,

  // space
  x3smallSpace: NumSize.x3smallSpace,
  x2smallSpace: NumSize.x2smallSpace,
  xsmallSpace: NumSize.xsmallSpace,
  smallSpace: NumSize.smallSpace,
  mediumSpace: NumSize.mediumSpace,
  largeSpace: NumSize.largeSpace,
  xlargeSpace: NumSize.xlargeSpace,
} as const;

export const Padding = {
  // app
  sidebarWidth: NumSize.sideBarWidth,
  topbarHeight: NumSize.topBarHeight,


  // space
  x3smallSpace: NumSize.x3smallSpace,
  x2smallSpace: NumSize.x2smallSpace,
  xsmallSpace: NumSize.xsmallSpace,
  smallSpace: NumSize.smallSpace,
  mediumSpace: NumSize.mediumSpace,
  largeSpace: NumSize.largeSpace,
  xlargeSpace: NumSize.xlargeSpace,

  // input
  inputXSmall: NumSize.xsmall,
  inputSmall: NumSize.small,
  inputMedium: NumSize.medium,
  inputLarge: NumSize.large,
  inputXLarge: NumSize.xlarge,

  // card
  cardXSmall: NumSize.xsmall,
  cardSmall: NumSize.small,
  cardMedium: NumSize.medium,
  cardLarge: NumSize.large,
  cardXLarge: NumSize.xlarge,

  // chip
  chipXSmall: NumSize.xsmall,
  chipSmall: NumSize.small,
  chipMedium: NumSize.medium,
  chipLarge: NumSize.large,
  chipXLarge: NumSize.xlarge,

} as const;

export const BorderRadius = {
  xsmall: NumSize.xsmall,
  small: NumSize.small,
  medium: NumSize.medium,
  large: NumSize.large,
  xlarge: NumSize.xlarge,

  // circel
  circel: NumSize.circle,
} as const;

export const FontSize = {
  small: NumSize.smallFontSize,
  medium: NumSize.mediumFontSize,
  large: NumSize.largeFontSize,
  xlarge: NumSize.xlargeFontSize,
  x2large: NumSize.x2largeFontSize,
  x3large: NumSize.x3largeFontSize,
  x4large: NumSize.x4largeFontSize,
  x5large: NumSize.x5largeFontSize,
} as const;

export const Spacing = {
  xsmall: NumSize.xsmall,
  medium: NumSize.medium,
  large: NumSize.large,
  xlarge: NumSize.xlarge,
} as const;


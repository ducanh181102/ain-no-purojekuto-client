const StrSize = {
  small: "small",
  medium: "medium",
  large: "large",
} as const

export const NumSize = {
  none: 0,

  // common for item
  xsmall: 0.4,
  small: 0.8,
  medium: 1.2,
  large: 1.6,
  xlarge: 2,

  full: "100%",

  // space
  xsmallSpace: 1,
  smallSpace: 2,
  mediumSpace: 3,
  largeSpace: 4,
  xlargeSpace: 5,

  // length text
  xsmallLen: 6,
  smallLen: 12,
  mediumLen: 24,
  largeLen: 48,
  xlargeLen: 96,

  // fontSize
  smallFontSize: 9,
  mediumFontSize: 13,
  largeFontSize: 15,
  xlargeFontSize: 17,
  x2largeFontSize: 19,
  x3largeFontSize: 23,

  // Width App
  screenWidth: "100vw",
  sideBarWidth: "15vw",
  topBarWidth: "85vw",
  filterBarWidth: "60vw",
  detailPanelWidth: "25vw",
  mainAreaWidth: "50vw",

  // Height App
  screenHeight: "100vh",
  topBarHeight: "9vh",
  detailPanelHeight: "66vh",
  mainAreaHeight: "91vh",
  toolBarHeight: "7vh",
  tableClient: "64vh",

  // Width Item
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


} as const;

export const Height = {
  // app
  screenHeight: NumSize.screenHeight,
  topbar: NumSize.topBarHeight,
  detailPanel: NumSize.detailPanelHeight,
  toolbar: NumSize.toolBarHeight,
  mainArea: NumSize.mainAreaHeight,
  tableClient: NumSize.tableClient,
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

  // chip
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
} as const;

export const MinWidth = {
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

} as const;

export const BorderRadius = {
  xsmall: NumSize.xsmall,
  small: NumSize.small,
  medium: NumSize.medium,
  large: NumSize.large,
  xlarge: NumSize.large,
}

export const FontSize = {
  small: NumSize.smallFontSize,
  medium: NumSize.mediumFontSize,
  large: NumSize.largeFontSize,
  xlarge: NumSize.xlargeFontSize,
  x2large: NumSize.x2largeFontSize,
  x3large: NumSize.x3largeFontSize,
  
}


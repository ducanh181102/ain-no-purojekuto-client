
// colors
const Colors = {
    primary: "#1976d2",
    secondary: "#9c27b0",
    success: "#2e7d32",
    error: "#d32f2f",
    warning: "#ed6c02",
    info: "#0288d1",
    default: "#e0e0e0",

    primarySoft: "#E5F2FF",
    secondarySoft: "#9c27b0",
    successSoft: "#E3FAEB",
    errorSoft: "#d32f2f",
    warningSoft: "#FFF2DB",
    infoSoft: "#E5F2FF",
    defaultSoft: "#F0F5FA",

    text: "#111827",
    textSecondary: "#6b7280",

    background: "#F5FAFF",
    backgroundItem: "#FFFFFF",

    border: "#DBE5F2",
    muted: "#f3f4f6",

    black: "#000000",
    white: "#ffffff",
} as const;

// string color value of MUI
const MuiColors = {
    // background
    error: "error",
    primary: "primary",
    secondary: "secondary",
    info: "info",
    success: "success",
    warning: "warning",
    default: "default",

    // text
    txPrimary: 'primary',
    txSecondary: 'secondary',
    txSuccess: 'success',
    txError: 'error',
    txInfo: 'info',
    txDefault: 'default',
    txWarning: 'warning',
    txTextPrimary: 'textPrimary',
    txTextSecondary: 'textSecondary',
    txTextDisabled: 'textDisabled',
} as const;

// string color value of badge
export const BadgeColor = {
    error: MuiColors.error,
    primary: MuiColors.primary,
} as const;

// string backgroundcolor value of avatar
export const AvatarBackgroundColor = {
    info: MuiColors.info,
    success: MuiColors.success,
    warning: MuiColors.warning,
    default: MuiColors.default,
} as const;

// string backgroundcolor value of box
export const SxColor = {
    // background
    success: Colors.success,
    warning: Colors.warning,
    primary: Colors.primary,
    secondary: Colors.secondary,
    error: Colors.error,
    info: Colors.info,
    default: Colors.default,

    successSoft: Colors.successSoft,
    warningSoft: Colors.warningSoft,
    primarySoft: Colors.primarySoft,
    secondarySoft: Colors.secondarySoft,
    errorSoft: Colors.errorSoft,
    infoSoft: Colors.infoSoft,
    defaultSoft: Colors.defaultSoft,

    blackBtn: Colors.black,

    backgroundItem: Colors.backgroundItem,
    background: Colors.background,

    // border
    border: Colors.border,
} as const;

export const ChipColor = {
    success: MuiColors.success,
    warning: MuiColors.warning,
    info: MuiColors.info,
    default: MuiColors.default,
    primary: MuiColors.primary,
    secondary: MuiColors.secondary,
    error: MuiColors.error,
} as const;

export const TextColor = {
    primary: MuiColors.txPrimary,
    secondary: MuiColors.txSecondary,
    success: MuiColors.txSuccess,
    error: MuiColors.txError,
    info: MuiColors.txInfo,
    warning: MuiColors.txWarning,
    textPrimary: MuiColors.txTextPrimary,
    textSecondary: MuiColors.txTextSecondary,
    textDisabled: MuiColors.txTextDisabled,
} as const;

export const ButtonColor = {
    primary: MuiColors.txPrimary,
    secondary: MuiColors.txSecondary,
    success: MuiColors.txSuccess,
    error: MuiColors.txError,
    info: MuiColors.txInfo,
    warning: MuiColors.txWarning,
    default: MuiColors.txDefault,
} as const;

export const ColorTableStatus = {
  all: MuiColors.info,
  available: MuiColors.success,
  occupied: MuiColors.warning,
  reserved: MuiColors.default,
} as const;

export const BgColorTableStatus = {
  all: Colors.infoSoft,
  available: Colors.successSoft,
  occupied: Colors.warningSoft,
  reserved: Colors.defaultSoft,
} as const;

export const InputColor = {
    success: MuiColors.success,
    warning: MuiColors.warning,
    info: MuiColors.info,
    default: MuiColors.default,
    primary: MuiColors.primary,
    secondary: MuiColors.secondary,
    error: MuiColors.error,
}
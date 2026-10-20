export const SideBarItem = {
  home: "home",
  tables: "tables",
  orders: "orders",
  menu: "menu",
  kitchen: "kitchen",
  payments: "payments",
  reports: "reports",
} as const;

// Table status
export const LowerCaseTableStatus = {
  all: "all",
  available: "available",
  occupied: "occupied",
  reserved: "reserved",
} as const;
export const UpperCaseTableStatus = {
  all: "ALL",
  available: "AVAILABLE",
  occupied: "OCCUPIED",
  reserved: "RESERVED",
} as const;

// Order status
export const LowerCaseOrderStatus = {
  all: "all",
  pending: "pending",
  confirmed: "confirmed",
  preparing: "preparing",
  served: "served",
  paid: "paid",
  cancelled: "cancelled",
} as const;
export const UpperCaseOrderStatus = {
  all: "ALL",
  pending: "PENDING",
  confirmed: "CONFIRMED",
  preparing: "PREPARING",
  served: "SERVED",
  paid: "PAID",
  cancelled: "CANCELLED",
} as const;

// Order item status
export const UpperCaseOrderItemStatus = {
  pending: "PENDING",
  confirmed: "CONFIRMED",
  cooking: "COOKING",
  ready: "READY",
  served: "SERVED",
  cancelled: "CANCELLED",
} as const;
export const LowerCaseOrderItemStatus = {
  pending: "pending",
  confirmed: "confirmed",
  cooking: "cooking",
  ready: "ready",
  served: "served",
  cancelled: "cancelled",
} as const;

// payment method
export const UpperCasePaymentMethod = {
  cash: "CASH",
  banking: "BANKING",
  momo: "MOMO",
} as const;
export const LowerCasePaymentMethod = {
  cash: "cash",
  banking: "banking",
  momo: "momo",
} as const;

// payment status
export const UpperCasePaymentStatus = {
  pending: "PENDING",
  completed: "COMPLETED",
  failed: "FAILED",
} as const;
export const LowerCasePaymentStatus = {
  pending: "pending",
  completed: "completed",
  failed: "failed",
} as const;

// reservation status
export const UpperCaseReservationStatus = {
  reserved: "RESERVED",
  checkedIn: "CHECKED_IN",
  cancelled: "CANCELLED",
  expired: "EXPIRED",
} as const;
export const LowerCaseReservationStatus = {
  reserved: "reserved",
  checkedIn: "checked_in",
  cancelled: "cancelled",
  expired: "expired",
} as const;
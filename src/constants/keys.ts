export const TableStatus = {
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

export const OrderStatus = {
  pending: "pending",
  confirmed: "confirmed",
  preparing: "preparing",
  served: "served",
  paid: "paid",
  cancelled: "cancelled",
} as const;

export const UpperCaseOrderStatus = {
  pending: "PENDING",
  confirmed: "CONFIRMED",
  preparing: "PREPARING",
  served: "SERVED",
  paid: "PAID",
  cancelled: "CANCELLED",
} as const;

export const SideBarItem = {
  dashboard: "dashboard",
  tables: "tables",
  orders: "orders",
  menu: "menu",
  kitchen: "kitchen",
  payments: "payments",
  reports: "reports",
} as const;

export const UpperCaseOrderItemStatus = {
  pending: "PENDING",
  confirmed: "CONFIRMED",
  cooking: "COOKING",
  ready: "READY",
  served: "SERVED",
  cancelled: "CANCELLED",
} as const;

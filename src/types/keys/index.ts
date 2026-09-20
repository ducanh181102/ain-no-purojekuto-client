import {
  OrderStatus,
  SideBarItem,
  TableStatus,
  UpperCaseOrderItemStatus,
  UpperCaseOrderStatus,
  UpperCaseReservationStatus,
  UpperCaseTableStatus,
} from "@/constants/keys";

export type TableStatusKey =
  typeof TableStatus[keyof typeof TableStatus];

export type UpperCaseTableStatusKey =
  typeof UpperCaseTableStatus[keyof typeof UpperCaseTableStatus];

export type OrderStatusKey =
  typeof OrderStatus[keyof typeof OrderStatus];

export type UpperCaseOrderStatusKey =
  typeof UpperCaseOrderStatus[keyof typeof UpperCaseOrderStatus];

export type SideBarKey =
  typeof SideBarItem[keyof typeof SideBarItem];

export type UpperCaseOrderItemStatusKey =
  typeof UpperCaseOrderItemStatus[keyof typeof UpperCaseOrderItemStatus];

export type UpperCaseReservationStatusKey =
  typeof UpperCaseReservationStatus[keyof typeof UpperCaseReservationStatus];

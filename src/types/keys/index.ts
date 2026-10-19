import {
  LowerCaseOrderStatus,
  SideBarItem,
  UpperCaseOrderItemStatus,
  UpperCaseOrderStatus,
  UpperCaseReservationStatus,
  UpperCaseTableStatus,
} from "@/constants/keys";

export type UpperCaseTableStatusKey =
  typeof UpperCaseTableStatus[keyof typeof UpperCaseTableStatus];

export type LowerCaseOrderStatusKey =
  typeof LowerCaseOrderStatus[keyof typeof LowerCaseOrderStatus];

export type UpperCaseOrderStatusKey =
  typeof UpperCaseOrderStatus[keyof typeof UpperCaseOrderStatus];

export type SideBarKey =
  typeof SideBarItem[keyof typeof SideBarItem];

export type UpperCaseOrderItemStatusKey =
  typeof UpperCaseOrderItemStatus[keyof typeof UpperCaseOrderItemStatus];

export type UpperCaseReservationStatusKey =
  typeof UpperCaseReservationStatus[keyof typeof UpperCaseReservationStatus];

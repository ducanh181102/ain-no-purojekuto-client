
import { UpperCaseReservationStatusKey } from "@/types/keys";
import { OrderProps } from "../../../features/orders/order";
import { TableProps } from "../../../features/tables";

export type ReservationMoleculeProps = {
  id: number;
  tableId: number;
  orderId: number | null;
  customerName: string;
  phone: string | null;
  guestCount: number | null;
  reservedAt: string;
  note: string | null;
  status: UpperCaseReservationStatusKey;
  isDeleted: string;
  deleteAt: string | null;
  createdAt: string;
  updatedAt: string;
  table?: TableProps;
  order?: OrderProps | null;
}
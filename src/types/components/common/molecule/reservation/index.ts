
import { UpperCaseReservationStatusKey } from "@/types/keys";
import { OrderMoleculeProps } from "../order";
import { TableMoleculeProps } from "../table";

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
  table?: TableMoleculeProps;
  order?: OrderMoleculeProps | null;
}
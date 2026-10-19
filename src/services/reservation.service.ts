import { getLocalText } from "@/lib/i18n";
import { ReservationMoleculeProps } from "@/types/components/common/molecule/reservation";

export type CreateReservationPayload = {
  tableId: number;
  customerName: string;
  phone?: string;
  guestCount?: number;
  reservedAt: string;
  note?: string;
}

export type MoveReservationPayload = {
  reservationId: number;
  tableId: number;
  reason?: string;
}

export async function createReservation(payload: CreateReservationPayload): Promise<ReservationMoleculeProps> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reservations`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json().catch(() => null);

  if (!res.ok) {
    throw new Error(data?.message || getLocalText().text.addReservationError);
  }

  return data;
}

export async function moveReservation(payload: MoveReservationPayload): Promise<ReservationMoleculeProps> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reservations/${payload.reservationId}/move-table`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      tableId: payload.tableId,
      reason: payload.reason,
    }),
  });

  const data = await res.json().catch(() => null);

  if (!res.ok) {
    throw new Error(data?.message || "Không đổi được bàn");
  }

  return data;
}

// Logic: call api get info tables
export async function getReservations(): Promise<ReservationMoleculeProps[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reservations`, {
    cache: 'no-store',
  });

  if (!res.ok) throw new Error("Không lấy được thông tin đặt hàng")

  return res.json();
}

export async function getReservationById(id: number): Promise<ReservationMoleculeProps> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reservations/${id}`)
  if (!res.ok) throw new Error("Không lấy được thông tin đặt hàng")
  return res.json()
}

export async function getReservationIdByTableId(id: number): Promise<ReservationMoleculeProps> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reservations/table/${id}/current`)
  if (!res.ok) throw new Error("Không lấy được thông tin đặt hàng")
  return res.json()
}

export async function checkedInReservation(id: number): Promise<ReservationMoleculeProps> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reservations/${id}/check-in`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await res.json().catch(() => null);

  if (!res.ok) {
    throw new Error(data?.message || "Không nhận được bàn");
  }

  return data;
}

export async function cancelReservation(id: number | null): Promise<ReservationMoleculeProps> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reservations/${id}/cancel`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  const data = await res.json().catch(() => null);

  if (!res.ok) {
    throw new Error(data?.message || "Không hủy được đặt bàn");
  }

  return data;
}

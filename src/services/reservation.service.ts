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
    throw new Error(data?.message || getLocalText().addReservationError);
  }

  return data;
}

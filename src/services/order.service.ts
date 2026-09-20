// Function: createOrder()
// Props: tableId
// Return: data

import { getLocalText } from "@/lib/i18n";
import { OrderMoleculeProps } from "@/types/components/common/molecule/order";
import { PayOrderPayload } from "@/types/components/features/orders";



// Logic: call api create new order
export async function createOrder(tableId: number): Promise<OrderMoleculeProps> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json', 
    },
    body: JSON.stringify({tableId}),
  });

  const data = await res.json().catch(() => null)

  if (!res.ok) {
    throw new Error(data?.message || getLocalText().createOrderError);
  }

  return data;
}

export async function payOrder({ orderId, method }: PayOrderPayload): Promise<unknown> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders/${orderId}/pay`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ method }),
  });

  const data = await res.json().catch(() => null)

  if (!res.ok) {
    throw new Error(data?.message || getLocalText().payOrderError);
  }

  return data;
}

// Logic: call api get info tables
export async function getOrders(): Promise<OrderMoleculeProps[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error(getLocalText().fetchOrdersError);
  }

  return res.json();
}

export async function getOrderById(id: number): Promise<OrderMoleculeProps> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders/${id}`)
  if (!res.ok) throw new Error(getLocalText().fetchTableError)
  return res.json()
}

export async function getOrderIdByTableId(id: number): Promise<{ orderId: number }> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders/${id}/current-order-id`)
  if (!res.ok) throw new Error(getLocalText().fetchTableError)
  return res.json()
}

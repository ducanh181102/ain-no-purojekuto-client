// Function: createOrder()
// Props: tableId
// Return: data

import { getLocalText } from "@/lib/i18n";
import { OrderProps, PayOrderPayload } from "@/types/components/features/orders";



// Logic: call api create new order
export async function createOrder(tableId: number): Promise<OrderProps> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json', 
    },
    body: JSON.stringify({tableId}),
  });

  const data = await res.json().catch(() => null)

  if (!res.ok) {
    throw new Error(data?.message || getLocalText().text.createOrderError);
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
    throw new Error(data?.message || getLocalText().text.payOrderError);
  }

  return data;
}

// Logic: call api get info tables
export async function getOrders(): Promise<OrderProps[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders?includeTable=true`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error(getLocalText().text.fetchOrdersError);
  }

  return res.json();
}

export async function getOrderById(id: number): Promise<OrderProps> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders/${id}`)
  if (!res.ok) throw new Error(getLocalText().text.fetchTableError)
  return res.json()
}

export async function getOrderIdByTableId(id: number): Promise<{ orderId: number }> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders/${id}/current-order-id`)
  if (!res.ok) throw new Error(getLocalText().text.fetchTableError)
  return res.json()
}

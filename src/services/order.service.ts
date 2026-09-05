// Function: createOrder()
// Props: tableId
// Return: data

import { OrderMoleculeProps } from "@/types/components/common/molecule/order";

// Logic: call api create new order
export async function createOrder(tableId: number) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json', 
    },
    body: JSON.stringify({tableId}),
  });

  const data = await res.json().catch(() => null)

  if (!res.ok) {
    throw new Error(data?.message || 'Không thể tạo đơn hàng');
  }

  return data;
}

// Logic: call api get info tables
export async function getOrders(): Promise<OrderMoleculeProps[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch orders');
  }

  return res.json();
}

export async function getOrderById(id: number) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders/${id}`)
  if (!res.ok) throw new Error("Không lấy được thông tin bàn")
  return res.json()
}

export async function getOrderIdByTableId(id: number) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders/${id}/current-order-id`)
  if (!res.ok) throw new Error("Không lấy được thông tin bàn")
  return res.json()
}
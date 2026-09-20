import { getLocalText } from "@/lib/i18n";
import { OrderItemMoleculeProps } from "@/types/components/common/molecule/order-item";

export type CreateOrderItemPayload = {
  orderId: number;
  dishId: number;
  quantity: number;
  note?: string;
}

export async function getOrderItems(): Promise<OrderItemMoleculeProps[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/order-items`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error(getLocalText().fetchOrderItemsError);
  }

  return res.json();
} 

export async function createOrderItem(payload: CreateOrderItemPayload): Promise<OrderItemMoleculeProps> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/order-items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json().catch(() => null);

  if (!res.ok) {
    throw new Error(data?.message || getLocalText().addDishError);
  }

  return data;
}

export async function getTotalOrderItemByOrderId(id: number): Promise<{ orderId: number; total: number }> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/order-items/order/${id}/total`)
  if (!res.ok) throw new Error(getLocalText().fetchOrderItemTotalError)
  return res.json()
}

export async function getOrderItemByOrderId(id: number): Promise<OrderItemMoleculeProps[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/order-items/order/${id}?includeDish=true`)
  if (!res.ok) throw new Error(getLocalText().fetchOrderItemsError)
  return res.json()
}

export async function getOrderItemById(id: number): Promise<OrderItemMoleculeProps> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/order-items/${id}`)
  if (!res.ok) throw new Error(getLocalText().fetchOrderItemsError)
  return res.json()
}

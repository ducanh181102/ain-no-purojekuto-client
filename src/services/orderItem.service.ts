import { getLocalText } from "@/lib/i18n";
import { OrderItemProps } from "@/types/components/features/order-items";

export type CreateOrderItemPayload = {
  orderId: number;
  dishId: number;
  quantity: number;
  note?: string;
}

export async function getOrderItems(): Promise<OrderItemProps[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/order-items?includeOrder=true&includeDish=true`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error(getLocalText().text.fetchOrderItemsError);
  }

  return res.json();
} 

export async function createOrderItem(payload: CreateOrderItemPayload): Promise<OrderItemProps> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/order-items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json().catch(() => null);

  if (!res.ok) {
    throw new Error(data?.message || getLocalText().text.addDishError);
  }

  return data;
}

export async function getTotalOrderItemByOrderId(id: number): Promise<{ orderId: number; total: number }> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/order-items/order/${id}/total`)
  if (!res.ok) throw new Error(getLocalText().text.fetchOrderItemTotalError)
  return res.json()
}

export async function getOrderItemByOrderId(id: number): Promise<OrderItemProps[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/order-items/order/${id}?includeDish=true`)
  if (!res.ok) throw new Error(getLocalText().text.fetchOrderItemsError)
  return res.json()
}

export async function getOrderItemById(id: number): Promise<OrderItemProps> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/order-items/${id}`)
  if (!res.ok) throw new Error(getLocalText().text.fetchOrderItemsError)
  return res.json()
}

import { OrderItemMoleculeProps } from "@/types/components/common/molecule/order-item";

export async function getOrderItems(): Promise<OrderItemMoleculeProps[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/order-items`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch tables');
  }

  return res.json();
} 

export async function getOrderItemByOrderId(id: number) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/order-items/order/${id}`)
  if (!res.ok) throw new Error("Không lấy được thông tin OrderItem")
  return res.json()
}

export async function getOrderItemById(id: number) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/order-items/${id}`)
  if (!res.ok) throw new Error("Không lấy được thông tin OrderItem")
  return res.json()
}
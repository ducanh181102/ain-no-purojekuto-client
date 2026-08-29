// Function: createOrder()
// Props: tableId
// Return: data
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




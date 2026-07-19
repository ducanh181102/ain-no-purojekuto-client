'use client';

import { useRouter } from "next/navigation";

// Create Table Type
type Table = {
    id: number;
    name: string;
    capacity: number;
    status: 'AVAILABLE' | 'OCCUPIED' | 'RESERVED';
}

// Input entry for this component
type Props = {
  tables: Table[];
};

// Component React
// Props: tables from page.tsx
// Return: component 
// Logic: build component combine click handle action
export default function TablesClient({ tables }: Props) {
  const router = useRouter();

  // Function: handleCreateOrder()
  // Props: tableId
  // Return: -
  // Logic: call api create order
  async function handleCreateOrder(tableId: number) {
    try {    
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tableId }),
      });

      if (!res.ok) {
        alert('Không thể tạo order');
        return;
      }

      router.refresh();
    }
    catch (error) {
      console.log(error);
      alert('Không thể kết nối đến Server');
    }
  }

  return (
    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {tables.map((table) => (
        <button
          key={table.id}
          type="button"
          disabled={table.status !== 'AVAILABLE'}
          onClick={() => handleCreateOrder(table.id)}
          className="rounded-lg border bg-white p-4 text-left shadow-sm disabled:cursor-not-allowed disabled:opacity-60"
        >
          <h2 className="text-lg font-semibold text-gray-900">{table.name}</h2>

          <p className="mt-2 text-sm text-gray-600">
            Sức chứa: {table.capacity}
          </p>

          <p className="mt-1 text-sm text-gray-600">
            Trạng thái: {table.status}
          </p>

          {table.status === 'AVAILABLE' && (
            <p className="mt-3 text-sm font-medium text-green-600">
              Bấm để tạo order
            </p>
          )}

          {table.status !== 'AVAILABLE' && (
            <p className="mt-3 text-sm font-medium text-red-600">
              Bàn không khả dụng
            </p>
          )}
        </button>
      ))}
    </div>
  );
}
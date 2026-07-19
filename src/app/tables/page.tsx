import TablesClient from "./TablesClient";

// Create Table type
type Table = {
  id: number;
  name: string;
  capacity: number;
  status: 'AVAILABLE' | 'OCCUPIED' | 'RESERVED';
};

// Function: getTables()
// Props: -
// Return: list table
// Logic: call api get info tables
async function getTables(): Promise<Table[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tables`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch tables');
  }

  return res.json();
}

// Component React
// Props: -
export default async function TablesPage() {
  const tables = await getTables();

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-gray-900">Danh sách bàn</h1>

      <TablesClient tables={tables} />
    </main>
  );
}
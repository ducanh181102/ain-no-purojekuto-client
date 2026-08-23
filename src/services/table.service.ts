import { TableMoleculeProps } from "@/types/components/common/molecule/table";

// Logic: call api get info tables
export async function getTables(): Promise<TableMoleculeProps[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tables`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch tables');
  }

  return res.json();
} 
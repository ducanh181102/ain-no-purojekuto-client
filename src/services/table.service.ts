import { getLocalText } from "@/lib/i18n";
import { TableProps } from "@/types/components/features/tables";

// Logic: call api get info tables
export async function getTables(): Promise<TableProps[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tables`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error(getLocalText().text.fetchTablesError);
  }

  return res.json();
} 

export async function getTableById(id: number) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tables/${id}`)
  if (!res.ok) throw new Error(getLocalText().text.fetchTableError)
  return res.json()
}

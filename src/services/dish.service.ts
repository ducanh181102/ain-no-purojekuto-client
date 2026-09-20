import { getLocalText } from "@/lib/i18n";
import { DishMoleculeProps } from "@/types/components/common/molecule/dish";

export async function getDishes(): Promise<DishMoleculeProps[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dishes`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error(getLocalText().fetchDishesError);
  }

  return res.json();
}

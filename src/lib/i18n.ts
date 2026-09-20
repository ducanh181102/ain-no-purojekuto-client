import { Strings } from "@/constants/strings";
import { useUIStore } from "@/stores/useUIStore";

export const getLocalText = () => {
  const locale = useUIStore.getState().locale ?? "vi";

  return Strings[locale].text;
};

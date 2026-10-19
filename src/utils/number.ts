import { Numbers } from "@/constants/numbers";
import { getLocalText } from "@/lib/i18n";

export const formatMoney = (value?: number | string | null) => {
    const amount = Number(value ?? Numbers.zero);
    const safeAmount = Number.isFinite(amount) ? amount : Numbers.zero;
    return `${safeAmount.toLocaleString(getLocalText().text.numberLocale)} ${getLocalText().text.currencySuffix}`;
};
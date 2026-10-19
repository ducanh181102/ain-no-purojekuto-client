import { getLocalText } from "@/lib/i18n";

export const today = new Date().toISOString().split('T')[0];

export const formatVNTime = (value?: string | Date | null, format?: string) => {
    if (!value) return getLocalText().text.blank;

    const date = value instanceof Date ? value : new Date(value);

    if (Number.isNaN(date.getTime())) {
        return getLocalText().text.blank;
    }

    return date.toLocaleString("vi-VN", format == getLocalText().text.HHmm ? {
        timeZone: "Asia/Ho_Chi_Minh",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
    } : getLocalText().text.ddMMyy ? {
        timeZone: "Asia/Ho_Chi_Minh",
        hour12: false,
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    } : {
        timeZone: "Asia/Ho_Chi_Minh",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
    }
    );
};
import { getLocalText } from "@/lib/i18n"

export const limitText = (text: string, maxLength: number): string => {
  return text.length > maxLength
    ? `${text.slice(0, maxLength)}...`
    : text
}

// tạo mã code 5 số ví dụ 1 => #HD-00001
export const getOrderCode = (code: number | undefined): string => {
  if (code === undefined) return getLocalText().text.blank
  const codeString = code.toString()
  const codeLength = codeString.length
  if (codeLength >= 5) return codeString
  return getLocalText().code.orderCodePrefix + '0'.repeat(5 - codeLength) + codeString
}

export const limitText = (text: string, maxLength: number): string => {
  return text.length > maxLength
    ? `${text.slice(0, maxLength)}...`
    : text
}
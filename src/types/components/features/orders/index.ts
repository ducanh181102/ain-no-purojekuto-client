
export type PaymentMethod = "CASH" | "BANKING" | "MOMO";

export type PayOrderPayload = {
  orderId: number;
  method: PaymentMethod;
}
'use client'

import { UpperCaseOrderStatusKey } from "@/types/keys";
import OrderStatus from "../../../order-status";

export default function StatusOrderClientBox({ status }: { status: UpperCaseOrderStatusKey }) {
    return <OrderStatus status={status} />
}

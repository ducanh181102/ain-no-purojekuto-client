import { UpperCaseTableStatus } from "@/constants/keys"
import { getTableById, getTables } from "@/services/table.service"
import { UpperCaseTableStatusKey } from "@/types/keys"
import { useQuery } from "@tanstack/react-query"

export function useTables() {
  return useQuery({
    queryKey: ["tables"],
    queryFn: getTables,
  })
}

export function useTableById(id: number | null) {
    return useQuery({
        queryKey: ["tables", id],
        queryFn: () => getTableById(id!),
        enabled: !!id, // chay api khi chac chan id ko null
    })
}

function useTableCount(status?: UpperCaseTableStatusKey) {
  return useQuery({
    queryKey: ["tables", "count", status ?? "all"],
    queryFn: getTables,
    select: (tables) => {
      if (!status) return tables.length

      return tables.filter((table) => table.status === status).length
    },
  })
}

export function useTableStatus(status?: UpperCaseTableStatusKey) {
  return useQuery({
    queryKey: ["tables"],
    queryFn: getTables,
    select: (tables) => {
      if (!status || status == UpperCaseTableStatus.all) return tables
      return tables.filter((table) => table.status === status)
    },
  })
}

export function useStatusAvailableTableCount() {
  return useTableCount("AVAILABLE")
}

export function useStatusAllTableCount() {
  return useTableCount()
}

export function useStatusOccupiedTableCount() {
  return useTableCount("OCCUPIED")
}

export function useStatusReservedTableCount() {
  return useTableCount("RESERVED")
}

export function useStatusAvailableTableStatus() {
  return useTableStatus("AVAILABLE")
}

export function useStatusAllTableStatus() {
  return useTableStatus()
}

export function useStatusOccupiedTableStatus() {
  return useTableStatus("OCCUPIED")
}

export function useStatusReservedTableStatus() {
  return useTableStatus("RESERVED")
}
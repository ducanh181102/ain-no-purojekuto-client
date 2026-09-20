'use client'

import FilterBar from "@/components/common/organisms/filter-bar";
import { TableStatus, UpperCaseTableStatus } from "@/constants/keys";
import {
    useStatusAllTableCount,
    useStatusAvailableTableCount,
    useStatusOccupiedTableCount,
    useStatusReservedTableCount
} from "@/hooks/queries/useTables";
import { useTableStore } from "@/stores/useTableStore";
import { FilterTableStatus } from "@/types/components/features/tables/table-filter";
import CheckIcon from "@mui/icons-material/Check";


export default function TableFilter() {

    const {data: allCount = 0} = useStatusAllTableCount();
    const {data: availableCount = 0} = useStatusAvailableTableCount();
    const {data: occupiedCount = 0} = useStatusOccupiedTableCount();
    const {data: reservedCount = 0} = useStatusReservedTableCount();

    const setSelectedStatus = useTableStore((status) => status.setSelectedStatus);
    const status = useTableStore((state) => state.selectedStatus) || UpperCaseTableStatus.all

    const tableStatuses: FilterTableStatus[] = [
        {
            key: TableStatus.all,
            count: allCount,
            status: UpperCaseTableStatus.all,
            icon: status === UpperCaseTableStatus.all ? <CheckIcon /> : undefined,
            onClick: () => setSelectedStatus(UpperCaseTableStatus.all),
        },
        {
            key: TableStatus.available,
            count: availableCount,
            status: UpperCaseTableStatus.available,
            icon: status === UpperCaseTableStatus.available ? <CheckIcon /> : undefined,
            onClick: () => setSelectedStatus(UpperCaseTableStatus.available),
        },
        {
            key: TableStatus.occupied,
            count: occupiedCount,
            status: UpperCaseTableStatus.occupied,
            icon: status === UpperCaseTableStatus.occupied ? <CheckIcon /> : undefined,
            onClick: () => setSelectedStatus(UpperCaseTableStatus.occupied),
        },
        {
            key: TableStatus.reserved,
            count: reservedCount,
            status: UpperCaseTableStatus.reserved,
            icon: status === UpperCaseTableStatus.reserved ? <CheckIcon /> : undefined,
            onClick: () => setSelectedStatus(UpperCaseTableStatus.reserved),
        },
    ]

    return <FilterBar filterBarProps={tableStatuses} />
}
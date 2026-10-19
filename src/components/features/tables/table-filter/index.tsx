'use client'

import FilterBar from "@/components/common/organisms/filter-bar";
import { UpperCaseTableStatus } from "@/constants/keys";
import {
    useStatusAllTableCount,
    useStatusAvailableTableCount,
    useStatusOccupiedTableCount,
    useStatusReservedTableCount
} from "@/hooks/queries/useTables";
import { useTableStore } from "@/stores/useTableStore";
import { FilterBarDataProps } from "@/types/components/common/organisms/filter-bar";
import CheckIcon from "@mui/icons-material/Check";
import TableStatus from "../table-status";


export default function TableFilter() {

    const { data: allCount = 0 } = useStatusAllTableCount();
    const { data: availableCount = 0 } = useStatusAvailableTableCount();
    const { data: occupiedCount = 0 } = useStatusOccupiedTableCount();
    const { data: reservedCount = 0 } = useStatusReservedTableCount();

    const setSelectedStatus = useTableStore((status) => status.setSelectedStatus);
    const status = useTableStore((state) => state.selectedStatus) || UpperCaseTableStatus.all

    const filterBarData: FilterBarDataProps[] = [
        <TableStatus
            key={UpperCaseTableStatus.all}
            onClick={() => setSelectedStatus(UpperCaseTableStatus.all)}
            status={UpperCaseTableStatus.all}
            icon={status === UpperCaseTableStatus.all ? <CheckIcon /> : undefined}
            count={allCount}
        />,
        <TableStatus
            key={UpperCaseTableStatus.available}
            onClick={() => setSelectedStatus(UpperCaseTableStatus.available)}
            status={UpperCaseTableStatus.available}
            icon={status === UpperCaseTableStatus.available ? <CheckIcon /> : undefined}
            count={availableCount}
        />,
        <TableStatus
            key={UpperCaseTableStatus.occupied}
            onClick={() => setSelectedStatus(UpperCaseTableStatus.occupied)}
            status={UpperCaseTableStatus.occupied}
            icon={status === UpperCaseTableStatus.occupied ? <CheckIcon /> : undefined}
            count={occupiedCount}
        />,
        <TableStatus
            key={UpperCaseTableStatus.reserved}
            onClick={() => setSelectedStatus(UpperCaseTableStatus.reserved)}
            status={UpperCaseTableStatus.reserved}
            icon={status === UpperCaseTableStatus.reserved ? <CheckIcon /> : undefined}
            count={reservedCount}
        />,
    ]

    return <FilterBar filterBarData={filterBarData} />
}
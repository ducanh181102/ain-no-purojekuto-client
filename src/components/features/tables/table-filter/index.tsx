'use client'

import FilterBar from "@/components/common/organisms/filter-bar";
import { TableStatusKey, UpperCaseTableStatusKey } from "@/constants/keys";
import { FilterTableStatus } from "@/types/components/features/tables/table-filter";


export default function TableFilter() {

    const tableStatuses: FilterTableStatus[] = [
        {
            key: TableStatusKey.all,
            count: 12,
            status: UpperCaseTableStatusKey.all,
            onClick: () => console.log(TableStatusKey.all),
        },
        {
            key: TableStatusKey.available,
            count: 12,
            status: UpperCaseTableStatusKey.available,
            onClick: () => console.log(TableStatusKey.available),
        },
        {
            key: TableStatusKey.occupied,
            count: 12,
            status: UpperCaseTableStatusKey.occupied,
            onClick: () => console.log(TableStatusKey.occupied),
        },
        {
            key: TableStatusKey.reserved,
            count: 12,
            status: UpperCaseTableStatusKey.reserved,
            onClick: () => console.log(TableStatusKey.reserved),
        },
    ]

    return <FilterBar filterBarProps={tableStatuses} />
}
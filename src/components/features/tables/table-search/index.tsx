'use client'

import Search from "@/components/common/molecules/search";
import { useTableStore } from "@/stores/useTableStore";

export default function TableSearch() {
    const searchKeyword = useTableStore((state) => state.searchKeyword);
    const setSearchKeyword = useTableStore((state) => state.setSearchKeyword);

    return <Search value={searchKeyword} onChange={(event) => setSearchKeyword(event.target.value)} />
}

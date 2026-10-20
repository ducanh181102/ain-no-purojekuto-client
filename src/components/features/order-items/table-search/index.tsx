'use client'

import Search from "@/components/common/molecules/search";
import { getLocalText } from "@/lib/i18n";
import { useTableStore } from "@/stores/useTableStore";

export default function TableSearch() {
    const searchKeyword = useTableStore((state) => state.searchKeyword);
    const setSearchKeyword = useTableStore((state) => state.setSearchKeyword);

    return <Search value={searchKeyword} placeholder={getLocalText().text.searchTableInput} onChange={(event) => setSearchKeyword(event.target.value)} />
}

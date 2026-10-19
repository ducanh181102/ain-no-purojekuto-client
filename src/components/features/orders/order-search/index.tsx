'use client'

import Search from "@/components/common/molecules/search";
import { getLocalText } from "@/lib/i18n";
import { useOrderStore } from "@/stores/useOrderStore";

export default function OrderSearch() {
    const searchKeyword = useOrderStore((state) => state.searchKeyword);
    const setSearchKeyword = useOrderStore((state) => state.setSearchKeyword);

    return <Search value={searchKeyword} placeholder={getLocalText().text.searchOrderInput} onChange={(event) => setSearchKeyword(event.target.value)} />
}

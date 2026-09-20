import { MenuItemMoleculeProps } from "@/types/components/common/molecule/menu-item";
import { MenuItem } from "@mui/material";

export default function MenuItemMolecule({ key, value, children }: MenuItemMoleculeProps) {

    return <MenuItem key={key} value={value}>
        {children}
    </MenuItem>
}

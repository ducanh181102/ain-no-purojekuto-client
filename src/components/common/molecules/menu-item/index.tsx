import { MenuItemMoleculeProps } from "@/types/components/common/molecule/menu-item";
import { MenuItem } from "@mui/material";

export default function MenuItemMolecule({ children, ...props }: MenuItemMoleculeProps) {

    return <MenuItem {...props}>
        {children}
    </MenuItem>
}

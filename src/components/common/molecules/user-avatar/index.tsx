import { TextAlign } from "@/constants/props/aligns"
import { TextColor } from "@/constants/props/colors"
import { Component } from "@/constants/props/components"
import { Display } from "@/constants/props/displays"
import { AlignItems, FlexDirection, Gap } from "@/constants/props/flexs"
import { Height, Width } from "@/constants/props/sizes"
import { TextVariant } from "@/constants/props/variants"
import { getLocalText } from "@/lib/i18n"
import { useUIStore } from "@/stores/useUIStore"
import { UserAvatarMoleculeProps } from "@/types/components/common/molecule/user-avatar"
import AvatarAtoms from "../../atoms/avatar"
import BoxAtoms from "../../atoms/box"
import TextAtoms from "../../atoms/text"

export default function UserAvatarMolecule({ }:
    UserAvatarMoleculeProps) {

    const locale = useUIStore((state) => state.locale)
    return <BoxAtoms component={Component.div} sx={{
        display: Display.flex,
        flexDirection: FlexDirection.row,
        alignItems: AlignItems.center,
        gap: Gap.xSmall,
    }}>
        <AvatarAtoms sx={{
            height: Height.avatarSmall,
            width: Width.avatarSmall,
        }} children={getLocalText().admin.charAt(0)}></AvatarAtoms>
        <TextAtoms variant={TextVariant.caption}
            children={getLocalText().admin}
            component={Component.label}
            align={TextAlign.center}
            color={TextColor.textSecondary}
        />
    </BoxAtoms>
}
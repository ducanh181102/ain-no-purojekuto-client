import { TextAlign } from "@/constants/props/aligns"
import { TextColor } from "@/constants/props/colors"
import { Component } from "@/constants/props/components"
import { Display } from "@/constants/props/displays"
import { AlignItems, Flex, FlexDirection, Gap } from "@/constants/props/flexs"
import { TextVariant } from "@/constants/props/variants"
import { Strings } from "@/constants/strings"
import { Locale } from "@/types/app/locales"
import { UserAvatarMoleculeProps } from "@/types/components/common/molecule/user-avatar"
import AvatarAtoms from "../../atoms/avatar"
import BoxAtoms from "../../atoms/box"
import TextAtoms from "../../atoms/text"
import { Height, Width } from "@/constants/props/sizes"

export default function UserAvatarMolecule({ }:
    UserAvatarMoleculeProps) {

    const locale: Locale = "vi";
    return <BoxAtoms component={Component.div} sx={{
        display: Display.flex,
        flexDirection: FlexDirection.row,
        alignItems: AlignItems.center,
        gap: Gap.xSmall,
    }}>
        <AvatarAtoms sx={{
            height: Height.avatarSmall,
            width: Width.avatarSmall,
        }} children={Strings[locale].text.admin.charAt(0)}></AvatarAtoms>
        <TextAtoms variant={TextVariant.caption}
            children={Strings[locale].text.admin}
            component={Component.label}
            align={TextAlign.center}
            color={TextColor.textSecondary}
        />
    </BoxAtoms>
}
'use client'

import { Booleans } from "@/constants/booleans";
import { TextColor } from "@/constants/props/colors";
import { Component } from "@/constants/props/components";
import { getLocalText } from "@/lib/i18n";
import { BoxClientProps } from "@/types/components/common/organisms/box-client";
import BoxAtoms from "../../atoms/box";
import TextAtoms from "../../atoms/text";

export default function BoxClient({ sx, isLoading, isError, children }: BoxClientProps) {

    return isLoading ?
        <TextAtoms sx={sx} component={Component.div} color={TextColor.textPrimary}>
            {getLocalText().text.loading}
        </TextAtoms> : isError ?
            <TextAtoms sx={sx} component={Component.div} color={TextColor.textPrimary}>
                {getLocalText().text.fetchError}
            </TextAtoms> :
            <BoxAtoms
                component={Component.main}
                isHideScroll={Booleans.true}
                sx={sx}>
                {children}
            </BoxAtoms>
}
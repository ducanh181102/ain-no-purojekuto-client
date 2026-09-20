import { ChildrenProps } from "@/types/app/children";
import { BorderStyle } from "@/types/app/props/boders";
import { SxColor } from "@/types/app/props/colors";
import { Component } from "@/types/app/props/components";
import { NumSize } from "@/types/app/props/sizes";
import { Sx } from "@/types/app/props/sx";
import { Orientation } from "@mui/material";

//? & dùng để gộp type
export type LineAtomsProps = {
    orientation: Orientation,
    sx?: Sx,
}
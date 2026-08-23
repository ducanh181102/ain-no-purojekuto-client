// src/app/(dashboard)/layout.tsx
import BoxAtoms from "@/components/common/atoms/box";
import Sidebar from "@/components/layouts/sidebar";
import Topbar from "@/components/layouts/topbar";
import { SxColor } from "@/constants/props/colors";
import { Component } from "@/constants/props/components";
import { Display } from "@/constants/props/displays";
import { ZIndex } from "@/constants/props/position";
import { Margin, MinHeight, NumSize, Width } from "@/constants/props/sizes";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BoxAtoms component={Component.section} sx={{
      display: Display.flex,
      minHeight: MinHeight.screenHeight,
      bgcolor: SxColor.background,
    }}>
      <Sidebar />

      <BoxAtoms component={Component.section} sx={{
        ml: Margin.sidebarWidth,
      }}>
        <Topbar />
        <BoxAtoms component={Component.section} sx={{
          mt: Margin.topbarHeight,
          width: Width.topbar,
        }}>
          {children}
        </BoxAtoms>
      </BoxAtoms>
    </BoxAtoms>
  );
}
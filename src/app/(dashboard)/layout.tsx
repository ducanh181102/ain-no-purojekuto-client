"use client"
// src/app/(dashboard)/layout.tsx
import BoxAtoms from "@/components/common/atoms/box";
import SnackBarMolecule from "@/components/common/molecules/snackbar";
import Sidebar from "@/components/layouts/sidebar";
import Topbar from "@/components/layouts/topbar";
import { SxColor } from "@/constants/props/colors";
import { Component } from "@/constants/props/components";
import { Display } from "@/constants/props/displays";
import { Margin, MinHeight, Width } from "@/constants/props/sizes";
import { useUIStore } from "@/stores/useUIStore";
import { getLocalText } from "@/lib/i18n";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const errorMsg = useUIStore((state) => state.errorMsg)
  const setErrorMsg = useUIStore((state) => state.setErrorMsg)
  const locale = useUIStore((state) => state.locale)
  
  return (
    <BoxAtoms component={Component.section} sx={{
      display: Display.flex,
      minHeight: MinHeight.screenHeight,
      bgcolor: SxColor.background,
    }}>
      <SnackBarMolecule
        isOpen={!!errorMsg}
        autoHideDuration={3000}
        onClose={() => setErrorMsg("")}
        msg={errorMsg || getLocalText().blank}
      >
      </SnackBarMolecule>
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
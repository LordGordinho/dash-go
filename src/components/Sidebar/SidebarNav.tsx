import { Drawer, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Stack, useBreakpointValue } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav () {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink icon={RiDashboardLine} title="Dashboard" />
        <NavLink icon={RiContactsLine} title="Usuários" />
      </NavSection>
      <NavSection title="AUTOMAÇÃO">
        <NavLink icon={RiInputMethodLine} title="Formulários" />
        <NavLink icon={RiGitMergeLine} title="Automação" />
      </NavSection >
    </Stack>
  )
}
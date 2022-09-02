import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Icon, Link, Stack, Text, useBreakpointValue } from '@chakra-ui/react';
import { RiContactsLine, RiDashboardLine, RiGitMergeFill, RiGitMergeLine, RiInputMethodLine} from 'react-icons/ri'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';
import { NavLink } from './NavLink';
import { NavSection } from './NavSection';
import { SidebarNav } from './SidebarNav';

export function SideBar(){
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false
  })

  const { onClose, isOpen } = useSidebarDrawer()

  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} >
        <DrawerOverlay>
          <DrawerContent bg="gray.800" p="4" >
            <DrawerCloseButton mt="6" />

            <DrawerHeader>Navegação</DrawerHeader>

            <DrawerBody>
              <SidebarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }

  return (
    <Box as='aside' w='64' mr='8'>
      <SidebarNav />
    </Box>
  )
}
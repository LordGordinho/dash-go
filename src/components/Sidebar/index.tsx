import { Box, Icon, Link, Stack, Text } from '@chakra-ui/react';
import { RiContactsLine, RiDashboardLine, RiGitMergeFill, RiGitMergeLine, RiInputMethodLine} from 'react-icons/ri'
import { NavLink } from './NavLink';
import { NavSection } from './NavSection';

export function SideBar(){
  return (
    <Box as='aside' w='64' mr='8'>
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
    </Box>
  )
}
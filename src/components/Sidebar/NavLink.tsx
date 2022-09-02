import { Icon, Link, Text } from "@chakra-ui/react";
import { ElementType } from "react";
import { RiDashboardLine } from "react-icons/ri";

interface NavLinkProps{
  title: string;
  icon: ElementType;
}

export function NavLink({ icon, title}: NavLinkProps){
  return (
    <Link display="flex" alignItems="center" >
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium" >{title}</Text>
    </Link>
  )
}
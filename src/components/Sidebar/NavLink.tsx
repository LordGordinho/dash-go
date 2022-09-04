import { Icon, Link as ChakraLink, Text } from "@chakra-ui/react";
import Link from "next/link";
import { ElementType } from "react";
import { RiDashboardLine } from "react-icons/ri";
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps{
  title: string;
  icon: ElementType;
  href: string;
}

export function NavLink({ icon, title, href}: NavLinkProps){
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" alignItems="center" >
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium" >{title}</Text>
      </ChakraLink>
    </ActiveLink>
  )
}
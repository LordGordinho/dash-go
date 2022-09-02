import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface PropfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: PropfileProps){
  return (
    <Flex align="center">
      {
        showProfileData && (
          <Box mr="4" textAlign="right">
            <Text>Jorge Felipe</Text>
            <Text color="gray.300" fontSize="small" >jorgefelipess08@gmail.com</Text>
          </Box>
        )
      }
      <Avatar size="md" name="Jorge Felipe" src=""/>
    </Flex>
  )
}
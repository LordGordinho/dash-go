import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { SideBar } from "../../components/SideBar";

export default function ListUser() {
  return (
    <Box>
      <Header />

      <Flex w="100%" flex="1" maxWidth={1480} mx="auto" px="6">
        <SideBar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg">Usuários</Heading>

            <Button 
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
            >
              Criar Novo
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha" >
            <Thead >
              <Tr>
                <Th px="6" color="gray.300" width="8" >
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuários</Th>
                <Th>Data de Cadastro</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Jorge Felipe</Text>
                    <Text fontSize="sm" color="gray.300">jorgefelipess08@gmail.com</Text>
                  </Box>
                </Td>
                <Td>
                  <Text>31 de agosto de 2022</Text>
                </Td>
                <Td>
                  <Button 
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="facebook"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Sara Wellyda</Text>
                    <Text fontSize="sm" color="gray.300">sarawellyda7@gmail.com</Text>
                  </Box>
                </Td>
                <Td>
                  <Text>25 de junho de 2022</Text>
                </Td>
                <Td>
                  <Button 
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="facebook"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}
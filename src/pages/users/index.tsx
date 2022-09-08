import { Box, Button, Checkbox, Flex, Heading, Icon, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect } from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { useQuery } from '@tanstack/react-query'

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { SideBar } from "../../components/Sidebar";

type User = {
  id: number;
  name: string;
  email: string;
  createdAt: string;
}

export default function ListUser() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  const { data, error, isLoading } = useQuery(['users'], async () => {
    const response = await fetch('http://localhost:3000/api/users')
    const data = await response.json()
    console.log(data)
    
    const users: [User] = data.users.map( (user: User) => {
      return {
        ...user,
        createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR')
      }
    })

    return users;
  })



  return (
    <Box>
      <Header />

      <Flex w="100%" flex="1" maxWidth={1480} mx="auto" px={["4", "4", "6"]}>
        <SideBar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg">Usuários</Heading>
            <Link href="/users/create" passHref>
              <Button 
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar Novo
              </Button>
            </Link>
          </Flex>
          {
            isLoading ? (
              <Flex justifyContent="center">
                <Spinner />
              </Flex>
            ) : (
              <>
                <Table colorScheme="whiteAlpha" >
                  <Thead >
                    <Tr>
                      <Th px={["4", "4", "6"]} color="gray.300" width="8" >
                        <Checkbox colorScheme="pink" />
                      </Th>
                      <Th>Usuários</Th>
                      {
                        isWideVersion && (
                          <>
                            <Th>Data de Cadastro</Th>
                            <Th></Th>
                          </>
                        )
                      }
                    </Tr>
                  </Thead>
                  <Tbody>
                    { data && data.map(user => (
                      <Tr>
                        <Td px={["4", "4", "6"]}>
                          <Checkbox colorScheme="pink" />
                        </Td>
                        <Td>
                          <Box>
                            <Text fontWeight="bold">{user.name}</Text>
                            <Text fontSize="sm" color="gray.300">{user.email}</Text>
                          </Box>
                        </Td>
                        {
                          isWideVersion && (
                            <>
                              <Td>
                                <Text>{user.createdAt}</Text>
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
                            </>
                          )
                        }
                      </Tr>
                    )) }
                  </Tbody>
                </Table>

                <Pagination />
              </>
            )
          }
        </Box>
      </Flex>
    </Box>
  )
}
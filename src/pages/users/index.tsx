import { Box, Button, Checkbox, Flex, Heading, Icon, Link, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { useQuery } from '@tanstack/react-query'

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { SideBar } from "../../components/Sidebar";
import { api } from "../../services/axios"
import { useUser } from "../../services/hooks/useUsers";
import { queryClient } from "../../services/queryClient";

type User = {
  id: number;
  name: string;
  email: string;
  createdAt: string;
}

export default function ListUser() {
  const [currentPage, setCurrentPage] = useState(1)
  const [isFirstPage, setIsFirstPage] = useState(true)
  const [isLastPage, setIsLastPage] = useState(false)

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  const { data, error, isLoading, isFetching } = useUser(currentPage)

  const nextPageHandle = () => {
    if(!data) return;
    if(data?.length < 10) return setIsLastPage(true);

    setIsFirstPage(false)
    setCurrentPage((currentPage + 1))
  }

  const previusPageHandle = () => {
    if(currentPage <= 1) return setIsFirstPage(true); 
    if(currentPage == 1) setIsFirstPage(true); 
    
    setIsLastPage(false)
    setCurrentPage((currentPage - 1))
  }

  const handlePrefetchUser = async (userId: number) => {
    await queryClient.prefetchQuery(["user", userId], async () => {
      const reponse = await api.get(`/users/${userId}`)
      console.log(reponse.data)
      return reponse.data
    })
  }

  return (
    <Box>
      <Header />

      <Flex w="100%" flex="1" maxWidth={1480} mx="auto" px={["4", "4", "6"]}>
        <SideBar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg">
              Usuários
              {
                !isLoading && isFetching && <Spinner size="sm" color="gray.500" ml="4" />
              }
            </Heading>
            <NextLink href="/users/create" passHref>
              <Button 
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar Novo
              </Button>
            </NextLink>
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
                      <Tr key={user.id}>
                        <Td px={["4", "4", "6"]}>
                          <Checkbox colorScheme="pink" />
                        </Td>
                        <Td>
                          <Box>
                            <Link color="purple.300" onMouseEnter={() => handlePrefetchUser(user.id)} >
                              <Text fontWeight="bold">{user.name}</Text>
                            </Link>
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

                <Pagination 
                  nextPageHandle={nextPageHandle} 
                  previusPageHandle={previusPageHandle} 
                  currentPage={currentPage} 
                  isFirstPage={isFirstPage}
                  isLastPage={isLastPage}
                />
              </>
            )
          }
        </Box>
      </Flex>
    </Box>
  )
}
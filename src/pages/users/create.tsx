import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/Sidebar";

export default function CreateUser() {
  return (
    <Box>
      <Header />

      <Flex w="100%" flex="1" maxWidth={1480} mx="auto" px="6">
        <SideBar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Heading size="lg">Criar Usuário</Heading>

          <Divider my="4" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid w="100%" minChildWidth="240px" spacing="8">
              <Input name="name" type="text" label="Nome Completo" />
              <Input name="email" type="email" label="Email" />
            </SimpleGrid>

            <SimpleGrid w="100%" minChildWidth="240px" spacing="8">
              <Input name="password" type="password" label="Senha" />
              <Input name="password_confirmation" type="password" label="Confirmação da Senha" />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button colorScheme="whiteAlpha">
                  Cancelar
                </Button>
              </Link>
              <Button colorScheme="pink">
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
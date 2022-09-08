import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/Sidebar";

interface CreateUserFormProps {
  email: string
  name: string
  password: string
  password_confirmation: string
}

export default function CreateUser() {
  const CreateUserSchema =  yup.object().shape({
    email: yup.string().required("E-mail necessário").email("E-email inálido"),
    name: yup.string().required("Nome necessário"),
    password: yup.string().required("Senha necessária"),
    password_confirmation: yup.string().oneOf([null, yup.ref("password")], "Senhas são diferentes")
  })

  const { register, handleSubmit, formState } = useForm<CreateUserFormProps>({
    resolver: yupResolver(CreateUserSchema)
  })

  const errors = formState.errors

  const handleCreateUser: SubmitHandler<CreateUserFormProps> = async (data, event) => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log(data)
  }
  
  return (
    <Box>
      <Header />

      <Flex w="100%" flex="1" maxWidth={1480} mx="auto" px="6">
        <SideBar />

        <Box 
          as="form"
          flex="1" 
          borderRadius={8} 
          bg="gray.800" 
          p="8"
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg">Criar Usuário</Heading>

          <Divider my="4" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid w="100%" minChildWidth="240px" spacing="8">
              <Input errors={errors.name}  label="Nome Completo" {...register("name")} />
              <Input errors={errors.email}  type="email" label="Email" {...register("email")} />
            </SimpleGrid>

            <SimpleGrid w="100%" minChildWidth="240px" spacing="8">
              <Input errors={errors.password} type="password" label="Senha" {...register("password")}/>
              <Input errors={errors.password_confirmation} type="password" label="Confirmação da Senha"  {...register("password_confirmation")}/>
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button colorScheme="whiteAlpha">
                  Cancelar
                </Button>
              </Link>
              <Button 
                colorScheme="pink" 
                type="submit"
                isLoading={formState.isSubmitting}  
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
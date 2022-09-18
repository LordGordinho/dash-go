import type { NextPage } from 'next'
import { Button, Flex, Stack, FormControl, FormLabel} from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup'
import { resolve } from 'path'

import { Input } from '../components/Form/Input'

interface SignInFormProps {
  email: string
  password: string
}

const SignIn: NextPage = () => {
  const signInSchema =  yup.object().shape({
    email: yup.string().required("E-mail necessário").email("E-email inálido"),
    password: yup.string().required("Senha necessária")
  })

  const { register, handleSubmit, formState } = useForm<SignInFormProps>({
    resolver: yupResolver(signInSchema)
  })
  const errors = formState.errors

  const handleSignIn: SubmitHandler<SignInFormProps> = async (data, event) => {
    await new Promise(resolve => setTimeout(resolve, 1000))
  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex 
        as="form" 
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDirection="column"
        onSubmit={handleSubmit(handleSignIn)}
        noValidate
      >
        <Stack
          spacing={4}
        >
          <Input errors={errors.email} type="email" label="Email" {...register("email")}/>
          <Input errors={errors.password} type="password" label="Senha" {...register("password")}/>
          <Button
            type='submit'
            colorScheme="pink"
            size={'lg'}
            isLoading={formState.isSubmitting}
          >
            Entrar
          </Button>
        </Stack>

      </Flex>
    </Flex>
  )
}

export default SignIn

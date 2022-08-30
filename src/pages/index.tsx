import type { NextPage } from 'next'
import { Button, Flex, Stack, FormControl, FormLabel} from '@chakra-ui/react'

import { Input } from '../components/Form/Input'

const SignIn: NextPage = () => {
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
      >
        <Stack
          spacing={4}
        >
          <Input name="email" label="Email" />
          <Input name="password" label="Senha" />
          <Button
            type='submit'
            colorScheme="pink"
            size={'lg'}
          >
            Entrar
          </Button>
        </Stack>

      </Flex>
    </Flex>
  )
}

export default SignIn

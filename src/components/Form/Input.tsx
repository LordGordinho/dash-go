import { FormControl, FormErrorMessage, FormLabel, Input as InputChakra, InputProps as InputPropsChakra } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from 'react'
import { FieldError } from "react-hook-form";
interface InputProps extends InputPropsChakra {
  name: string
  label?: string
  errors?: FieldError
} 
const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({name, label, errors = null,...rest}, ref) => {
  return (
    <FormControl isInvalid={!!errors}>
      { label && <FormLabel htmlFor={name} > {label} </FormLabel> }
      <InputChakra 
        name={name}
        size={'lg'}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: 'gray.900'
        }}
        ref={ref}
        {...rest}
      />

      { errors && <FormErrorMessage>{errors.message}</FormErrorMessage> }
    </FormControl>
  )
}

export const Input = forwardRef(InputBase)
import { Button } from "@chakra-ui/react"
interface PaginationItemProps {
  number: string
  isCurrent?: boolean
}
export function PaginationItem({ number, isCurrent = false}: PaginationItemProps){
  return (
    isCurrent ? (
      <Button 
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bg: 'pink.500',
          cursor: "default"
        }}
      > 1 </Button>
    ) : (
      <Button 
        size="sm"
        fontSize="xs"
        width="4"
        bg="gray.700"
        _hover={{
          bg: 'gray.500'
        }}
      > 2 </Button>
    )
  )
}
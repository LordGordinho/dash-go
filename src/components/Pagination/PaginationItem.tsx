import { Button } from "@chakra-ui/react"
interface PaginationItemProps {
  number: number
}
export function PaginationItem({ number }: PaginationItemProps){
  return (
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
    > {number} </Button>
  )
}
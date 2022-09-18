import { Box, Button, HStack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps { 
  currentPage?: number;
  nextPageHandle: () => void;
  previusPageHandle: () => void;
  isLastPage?: boolean;
  isFirstPage?: boolean;
}

export function Pagination({previusPageHandle, nextPageHandle, currentPage = 1, isLastPage = false, isFirstPage = true}: PaginationProps){
  return(
    <HStack
      mt="8"
      justifyContent="space-between"
      align="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <HStack spacing="2">
        <Button 
          size="sm"
          fontSize="xs"
          width="4"
          bg="gray.500"
          disabled={isFirstPage}
          onClick={previusPageHandle}
        > {"<"} </Button>
        <PaginationItem number={currentPage} />
        <Button 
          size="sm"
          fontSize="xs"
          width="4"
          bg="gray.500"
          disabled={isLastPage}
          _hover={{
            bg: "gray.700"
          }}
          onClick={nextPageHandle}
        > {">"} </Button>
      </HStack>
    </HStack>
  )
}
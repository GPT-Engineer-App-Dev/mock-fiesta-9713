// Complete the Index page component here
// Use chakra-ui
import { Grid, GridItem, Center, Square } from "@chakra-ui/react";

const Index = () => {
  return (
    <Center h="100vh">
      <Grid templateColumns="repeat(3, 1fr)" gap={2}>
        {[...Array(9)].map((_, index) => (
          <GridItem key={index} colSpan={1}>
            <Square size="lg" bg="gray.200" _hover={{ bg: "gray.300" }} cursor="pointer" />
          </GridItem>
        ))}
      </Grid>
    </Center>
  );
};

export default Index;

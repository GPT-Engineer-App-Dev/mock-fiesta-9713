import { Grid, GridItem, Center, Square, Box } from "@chakra-ui/react";

const Index = () => {
  return (
    <Center h="100vh">
      <Box p={4}>
        <Grid templateColumns="repeat(3, 1fr)" gap={2}>
          {[...Array(9)].map((_, index) => (
            <GridItem key={index} colSpan={1}>
              <Square size="md" bg="gray.200" _hover={{ bg: "gray.300" }} cursor="pointer" />
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Center>
  );
};

export default Index;

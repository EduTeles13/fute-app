import { Grid, GridItem, SlideFade } from '@chakra-ui/react';

export const PageLayout = ({ children }) => {
  return (
    <Grid gridTemplateColumns="auto 1fr" h="100vh">
      <GridItem position="relative" zIndex="docked">
        {/* sidebar */}
      </GridItem>
      <GridItem
        position="relative"
        overflowY="auto"
        px="12"
        py="16"
        as={SlideFade}
        in={true}
        offsetY="0"
        offsetX="-40px"
      >
        {children}
      </GridItem>
    </Grid>
  );
};

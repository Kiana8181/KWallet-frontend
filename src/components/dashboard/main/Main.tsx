import { Grid, GridItem } from "@chakra-ui/react";
import Balance from "./Balance";
import { GridItemContainerStyle, GridNewsContainerStyle } from "./MainStyle";
import News from "./News";
import QuickAccess from "./QuickAccess";

const Main = () => {
  return (
    <>
      <Grid
        p="48px 48px 72px"
        overflowY="scroll"
        maxH="100vh"
        templateColumns={{
          md: "repeat(2, 1fr)",
          base: "1fr",
        }}
        templateRows={{
          md: "repeat(2, 1fr)",
          base: "1fr",
        }}
        gap={8}
      >
        <GridItem sx={GridItemContainerStyle}>
          <Balance />
        </GridItem>

        <GridItem rowSpan={2} sx={GridItemContainerStyle}>
          <QuickAccess />
        </GridItem>
        <GridItem sx={GridNewsContainerStyle}>
          <News />
        </GridItem>
      </Grid>
    </>
  );
};

export default Main;

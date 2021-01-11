import { Grid, useMediaQuery, GridItem } from "@chakra-ui/react";
import PropTypes from "prop-types";

export default function OssContainer({ photo, content, stack }) {
  const [md] = useMediaQuery("(max-width: 880px)");
  return (
    <Grid
      as="article"
      templateColumns="2fr 1fr"
      templateRows="repeat(3, minmax(min-content, max-content))"
      autoFlow="dense"
      alignItems="flex-start"
      gap="1rem"
      margin="2rem auto"
      padding="0px 1rem"
    >
      <GridItem width="100%" gridColumn={md ? "1/3" : "1/2"}>
        {photo}
      </GridItem>
      <GridItem width="100%" gridColumn={md ? "1/3" : "1/2"}>
        {content}
      </GridItem>
      <GridItem
        width="100%"
        gridColumn={md ? "1/3" : "2/3"}
        gridRow={md ? "2/3" : "1/-1"}
        padding="1rem"
      >
        {stack}
      </GridItem>
    </Grid>
  );
}

OssContainer.propTypes = {
  photo: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  stack: PropTypes.node.isRequired,
};

import { Avatar, Grid, GridItem, Heading, Link, Text } from "@chakra-ui/react";

export default function Hero() {
  return (
    <Grid
      templateColumns={["1fr", "20rem 1fr"]}
      templateRows={["14rem 1fr", null]}
      textAlign={["center", "left"]}
      gap="1rem"
      position="relative"
      justifyContent="center"
      alignItems="center"
      marginBottom="50px"
    >
      <GridItem>
        <a target="_blank" href="https://github.com/usamahbass">
          <Avatar
            width={256}
            height={256}
            objectPosition="middle"
            src="/me.jpeg"
            name="Usamah Basalamah"
          />
        </a>
      </GridItem>
      <GridItem>
        <Text fontSize="1.3rem" fontWeight="bold" color="blue.500">
          Ahlann
          <span className="emoji wave" role="img" aria-label="hand wave"></span>
        </Text>
        <Heading fontSize={{ base: "1.70rem", md: "3.5rem" }}>
          Usamah Basalamah .
        </Heading>

        <Text fontSize={{ base: "1rem", md: "1.125rem" }} color="gray.500">
          An
          <Link
            ml={1}
            mr={1}
            target="_blank"
            _hover={{ color: "blue.500" }}
            href="https://www.google.com/search?q=front+end+developer"
          >
            Frontend Developer,
          </Link>
          21 tahun Indonesia.
        </Text>

        <Text fontSize={{ base: "1rem", md: "1.125rem" }} color="gray.500">
          Berkulik di dunia per
          <Link
            ml={1}
            mr={1}
            href="https://www.javascript.com/"
            _hover={{ color: "#E5D14B" }}
          >
            javascript
          </Link>
          pan, ama per
          <Link
            ml={1}
            mr={1}
            href="https://www.typescriptlang.org/"
            _hover={{ color: "#2E75C1" }}
          >
            typescript
          </Link>
          pan.
        </Text>
      </GridItem>
    </Grid>
  );
}

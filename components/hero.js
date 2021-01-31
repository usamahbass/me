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
        <a href="https://github.com/usamahbass">
          <Avatar
            width={256}
            height="auto"
            src="/me.jpg"
            name="Usamah Basalamah"
          />
        </a>
      </GridItem>
      <GridItem>
        <Text fontSize="1.3rem" fontWeight="bold" color="blue.500">
          Ahlan
          <span className="emoji wave" role="img" aria-label="hand wave"></span>
        </Text>
        <Heading fontSize={{ base: "1.70rem", md: "3.5rem" }}>
          Ane Usamah Basalamah .
        </Heading>

        <Text fontSize={{ base: "1rem", md: "1.125rem" }} color="gray.500">
          Bikin
          <Link
            ml={1}
            mr={1}
            href="https://raksyedev.netlify.app/"
            _hover={{ color: "blue.500" }}
          >
            RaksyeDev .
          </Link>
        </Text>

        <Text fontSize={{ base: "1rem", md: "1.125rem" }} color="gray.500">
          Kadang suka
          <Link
            ml={1}
            mr={1}
            href="https://reactjs.org/"
            _hover={{ color: "blue.500" }}
          >
            React
          </Link>
          , kadang juga
          <Link
            ml={1}
            mr={1}
            href="https://svelte.dev/"
            _hover={{ color: "#FF3E00" }}
          >
            Svelte
          </Link>
          tapi buat ini pake
          <Link
            ml={1}
            mr={1}
            href="https://nextjs.org/"
            _hover={{ color: "#000" }}
          >
            Next
          </Link>
          .
        </Text>
      </GridItem>
    </Grid>
  );
}

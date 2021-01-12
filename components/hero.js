import {
  Avatar,
  Grid,
  GridItem,
  Heading,
  Link,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";

export default function Hero() {
  const [md] = useMediaQuery("(max-width: 960px)");
  return (
    <Grid
      templateColumns={md ? "1fr" : "20rem 1fr"}
      templateRows={md ? "14rem 1fr" : null}
      textAlign={md ? "center" : "left"}
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
            src="/bass.jpg"
            name="Usamah Basalamah"
          />
        </a>
      </GridItem>
      <GridItem>
        <Text fontSize="1.3rem" fontWeight="bold" color="blue.500">
          Ahlan &#128075; !
        </Text>
        <Heading fontSize={{ base: "1.70rem", md: "3.5rem" }}>
          Ane Usamah Basalamah .
        </Heading>

        <Heading position='relative' bottom="5px" fontWeight="lighter" fontSize={{ base: "1.5rem", md: "2rem" }}>
          FrontEndDeveloper ? yes : !no
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
            _hover={{ color: "blue.500" }}
          >
            Svelte
          </Link>
          tapi buat ini pake
          <Link
            ml={1}
            mr={1}
            href="https://nextjs.org/"
            _hover={{ color: "blue.500" }}
          >
            Next
          </Link>
          .
        </Text>
      </GridItem>
    </Grid>
  );
}

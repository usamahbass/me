import {
  Avatar,
  Grid,
  GridItem,
  Heading,
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
          Ahlan !
        </Text>
        <Heading fontSize={{ base: "1.70rem", md: "3.5rem" }}>
          Ane Usamah Basalamah .
        </Heading>

        <Heading fontWeight="lighter" fontSize={{ base: "1.5rem", md: "2rem" }}>
          FrontEnd Developer ? 'yes' : '!no'
        </Heading>

        <Text fontSize={{ base: "1rem", md: "1.125rem" }} color="gray.500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam in quod
          deserunt excepturi sit dignissimos impedit consequuntur molestias
          cupiditate fuga eaque, officia assumenda! Omnis magnam repellat
          repudiandae ipsa, ratione asperiores?
        </Text>
      </GridItem>
    </Grid>
  );
}

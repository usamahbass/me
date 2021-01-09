import { Box, Badge, Divider, Text, ScaleFade } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Calendar } from "react-feather";

export default function Card() {
  const [open, setOpen] = useState(false);

  const property = {
    title: "Modern home in city center in the heart of historic Los Angeles",
    date: "25 November 2020",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam in quod
    deserunt excepturi sit dignissimos impedit consequuntur molestias
    cupiditate fuga eaque, officia assumenda! Omnis magnam repellat
    repudiandae ipsa, ratione asperiores?`,
  };

  useEffect(() => {
    setOpen(!open);
  }, []);
  return (
    <ScaleFade in={open} initialScale={0.8}>
      <Box
        transition=".25s ease,transform .25s ease,-webkit-transform .25s ease"
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        _hover={{
          transform: "translate3d(0,-5px,0)",
          boxShadow:
            "0 1.5rem 2.5rem rgba(22,28,45,.1),0 .3rem 0.5rem -.50rem rgba(22,28,45,.05) !important",
        }}
      >
        <Box p="6">
          <Box d="flex" alignItems="center">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              New
            </Badge>

            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              <Calendar size="1rem" />
            </Box>

            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {property.date}
            </Box>
          </Box>

          <Box
            mt="3"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            _hover={{
              color: "blue.500",
              cursor: "pointer",
              transition: "linear 0.3s",
            }}
            isTruncated
          >
            {property.title}
          </Box>

          <Divider mt="3" />

          <Text mt="3" as="p" color="gray.500" isTruncated>
            {property.desc}
          </Text>
        </Box>
      </Box>
    </ScaleFade>
  );
}

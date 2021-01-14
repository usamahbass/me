import {
  Box,
  Badge,
  Divider,
  Text,
  Image,
  ScaleFade,
  Heading,
  Avatar,
  Link as LinkChakra,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Calendar, Code, Globe } from "react-feather";
import Proptypes from "prop-types";

export const Card = ({
  title,
  date,
  desc,
  isNew,
  isImage,
  image,
  alt,
  source_code,
  demo,
}) => {
  const [open, setOpen] = useState(false);

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
        {isImage ? <Image width="100%" height="206px" src={image} alt={alt} /> : null}
        <Box p="6">
          <Box d="flex" alignItems="center">
            {isNew ? (
              <Badge borderRadius="full" px="2" colorScheme="teal">
                Baru
              </Badge>
            ) : null}
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
              position="relative"
              top="2px"
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {date}
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
            {title}
          </Box>

          <Divider mt="3" />

          <Text mt="3" as="p" color="gray.500" isTruncated>
            {desc}
          </Text>

          {isImage ? (
            <Box mt="5">
              {source_code == null ? null : (
                <Button
                  as="a"
                  href={source_code}
                  mr="5"
                  mb={["3", "0"]}
                  colorScheme="blue"
                  rightIcon={<Code />}
                >
                  Kode
                </Button>
              )}
              {demo == null ? null : (
                <Button
                  as="a"
                  href={demo}
                  color="grey.500"
                  rightIcon={<Globe />}
                >
                  Demo
                </Button>
              )}
            </Box>
          ) : null}
        </Box>
      </Box>
    </ScaleFade>
  );
};

export const CardStack = ({ stack }) => {
  return (
    <Box
      padding="15px"
      borderRadius="5px"
      display="block"
      border="1px solid #EDF2F7"
    >
      <Heading size="md">Teknologi yang digunakan</Heading>
      <Divider
        borderColor="#EDF2F7"
        opacity="1"
        borderWidth="2px"
        mt={3}
        mb={3}
      />

      {stack.map((el, i) => (
        <Box key={i}>
          <Box display="flex" mt="5" alignItems="center">
            <Avatar
              bg={!el ? null : "none"}
              src={el[1]}
              name={el[0]}
              mr="2"
            />
            <LinkChakra
              href={el[2]}
              mr="2"
              fontSize="1.2rem"
              _hover={{ color: "blue.500" }}
              size="md"
            >
              {el[0]}
            </LinkChakra>
          </Box>

          <Divider
            borderColor="#EDF2F7"
            opacity="1"
            borderWidth="2px"
            mt={3}
            mb={3}
          />
        </Box>
      ))}
    </Box>
  );
};

Card.propTypes = {
  title: Proptypes.string.isRequired,
  desc: Proptypes.string.isRequired,
  date: Proptypes.string.isRequired,
  isNew: Proptypes.bool,
  isImage: Proptypes.bool,
  image: Proptypes.string,
  alt: Proptypes.string,
  source_code: Proptypes.string,
  demo: Proptypes.string,
};

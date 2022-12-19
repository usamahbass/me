import { Box, Text, Link } from "@chakra-ui/react";
import { GitHub, Linkedin, Mail, Twitter } from "react-feather";

const social = [
  {
    path: "mailto:basalamahusamah7@gmail.com",
    icon: <Mail />,
  },
  {
    path: "https://github.com/usamahbass",
    icon: <GitHub />,
  },
  {
    path: "https://twitter.com/usamahbass",
    icon: <Twitter />,
  },
  {
    path: "https://www.linkedin.com/in/usamah-basalamah-1b88a71a3",
    icon: <Linkedin />,
  },
];

export default function Footer() {
  return (
    <Box textAlign="center">
      <Box marginLeft="50px" display="flex" justifyContent="center">
        {social.map((el, i) => (
          <Link
            _hover={{ opacity: 0.9, color: "blue.500" }}
            mr={10}
            href={el.path}
            key={i}
          >
            {el.icon}
          </Link>
        ))}
      </Box>
      <Box mt={3} display="block">
        <Text mb={1}>
          Dibuat dengan
          <Link
            href="https://nextjs.org"
            ml={1}
            mr={1}
            _hover={{ color: "#000" }}
          >
            NextJS
          </Link>
          dan
          <Link
            ml={1}
            mr={1}
            href="https://chakra-ui.com/"
            _hover={{ color: "#38B2AC" }}
          >
            ChakraUI
          </Link>
          • Kode sumber tersedia di
          <Link
            ml={1}
            href="https://github.com/usamahbass/me"
            _hover={{ color: "#000" }}
          >
            Github
          </Link>
        </Text>
        <Text>UsamahBass - Bassdev • 2020</Text>
      </Box>
    </Box>
  );
}

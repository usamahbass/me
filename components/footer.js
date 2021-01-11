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
      <Box display="flex" justifyContent="center">
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
            _hover={{ color: "blue.500" }}
          >
            NextJS
          </Link>
          dan
          <Link
            ml={1}
            mr={1}
            href="https://chakra-ui.com/"
            _hover={{ color: "blue.500" }}
          >
            ChakraUI
          </Link>
          • Kode sumber tersedia di
          <Link
            ml={1}
            href="https://github.com/usamahbass/me"
            _hover={{ color: "blue.500" }}
          >
            Github
          </Link>
        </Text>
        <Text>Hak Cipta &copy; UsamahBass</Text>
      </Box>
    </Box>
  );
}

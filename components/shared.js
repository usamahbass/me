import { useContext } from "react";
import {
  HStack,
  Button,
  Heading,
  useClipboard,
  useColorMode,
  color,
} from "@chakra-ui/react";
import { Facebook, Twitter, Linkedin, Copy, Check } from "react-feather";
import { facebook, linkedin } from "./sharelink";
import { IsContext } from "../context";

export default function Shared() {
  const [path] = useContext(IsContext);
  const url = `https://usamahbass.vercel.app${path.path}`;

  const { colorMode } = useColorMode();

  const { hasCopied, onCopy } = useClipboard(url);
  function shareTwitter() {
    window.open(`http://twitter.com/share?text=${path.twitterName}&url=${url}`);
  }

  function shareFacebook() {
    window.open(`${facebook}${url}`);
  }

  function shareLinkedin() {
    window.open(`${linkedin}${url}`);
  }

  return (
    <HStack mb="10" alignItems="center" flexDirection={["column", "row"]}>
      <Heading
        mr="3"
        color={colorMode === "dark" ? "#fff" : "#333"}
        mb="5"
        size="md"
      >
        Bagiin
      </Heading>

      <Button
        onClick={shareFacebook}
        mb="5"
        colorScheme="facebook"
        leftIcon={<Facebook />}
      >
        ke Facebook ?
      </Button>
      <Button
        onClick={shareTwitter}
        mb="5"
        colorScheme="twitter"
        leftIcon={<Twitter />}
      >
        Twitter ?
      </Button>
      <Button
        onClick={shareLinkedin}
        mb="5"
        colorScheme="linkedin"
        leftIcon={<Linkedin />}
      >
        atau Linkedin ?
      </Button>
      <Button
        colorScheme={hasCopied ? "green" : null}
        onClick={onCopy}
        mb="5"
        leftIcon={hasCopied ? <Check /> : <Copy />}
      >
        {hasCopied ? "tersalin !" : "atau mau disalin aja ?"}
      </Button>
    </HStack>
  );
}

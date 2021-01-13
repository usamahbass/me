import { HStack, Button, Heading, useClipboard } from "@chakra-ui/react";
import { Facebook, Twitter, Linkedin, Copy, Check } from "react-feather";
import { twitter, facebook, linkedin } from "./sharelink";
import Proptypes from "prop-types";

export default function Shared({ urlTwitter, urlFacebook, urlLinkedin }) {
  const { hasCopied, onCopy } = useClipboard(window.location);
  function shareTwitter() {
    window.open(`${twitter}/${urlTwitter}`);
  }

  function shareFacebook() {
    window.open(`${facebook}/${urlFacebook}`);
  }

  function shareLinkedin() {
    window.open(`${linkedin}/${urlLinkedin}`);
  }
  return (
    <HStack mb="10" flexDirection={["column", "row"]}>
      <Heading mr="3" color="#333" mb="5" size="md">
        Bagiin dong :(
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
        leftIcon={hasCopied ? <Check/> : <Copy/>}
      >
        {hasCopied ? "tersalin !" : "atau mau disalin aja ?"}
      </Button>
    </HStack>
  );
}

Shared.propTypes = {
  urlTwitter: Proptypes.string.isRequired,
  urlLinkedin: Proptypes.string.isRequired,
  urlFacebook: Proptypes.string.isRequired,
};

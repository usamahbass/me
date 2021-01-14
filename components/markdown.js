import { Box, useColorMode } from "@chakra-ui/react";
import Proptypes from "prop-types";

export default function Markdown({ source }) {
  const { colorMode } = useColorMode();
  return (
    <Box
      as="article"
      className="markdown-body"
      marginBottom="50px"
      dangerouslySetInnerHTML={{ __html: source }}
      style={{
        color: colorMode === "dark" ? "#fff" : null,
      }}
    />
  );
}

Markdown.propTypes = {
  source: Proptypes.string.isRequired,
};

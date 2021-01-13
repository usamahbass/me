import { IconButton, ScaleFade, Tooltip } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ArrowUp } from "react-feather";

export default function Backtop() {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState("");
  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        setScroll("flex");
        setIsOpen(true);
      } else {
        setScroll("none");
        setIsOpen(true);
      }
    }
  }, []);

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  return (
    <ScaleFade initialScale={0.6} in={isOpen}>
      <Tooltip label="ke atas" aria-label="ke atas" >
        <IconButton
          size="md"
          borderRadius="100%"
          display={scroll}
          alignItems="center"
          justifyContent="center"
          position="fixed"
          right="20px"
          bottom="20px"
          onClick={topFunction}
          icon={<ArrowUp />}
        />
      </Tooltip>
    </ScaleFade>
  );
}

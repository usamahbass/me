import { Container, Box } from "@chakra-ui/react";
import { Topbar, Footer, Divider } from "../components";

export default function Layout({ children }) {
  return (
    <>
      <Box as="header" boxShadow="0 0 32px -4px rgba(0,0,0,.15)">
        <Container maxWidth="1080px" padding="10px">
          <Topbar />
        </Container>
      </Box>
      <Container maxWidth="1080px" padding="10px">
        <main style={{ padding: "2rem 1rem 0" }}>{children}</main>
      </Container>

      <Divider width="99.7%" />

      <Box as="footer">
        <Container maxWidth="1080px" padding="50px">
          <Footer />
        </Container>
      </Box>
    </>
  );
}

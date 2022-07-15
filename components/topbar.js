import {
  Box,
  List,
  Heading,
  ListItem,
  useMediaQuery,
  Drawer,
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Tooltip,
  useColorMode,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { useState } from "react";
import { Menu, Moon, Sun } from "react-feather";
import Link from "next/link";
import ActiveLink from "./activelink";

const navLink = [
  {
    name: "Beranda",
    path: "/",
  },
  {
    name: "Coretan",
    path: "/coretan",
  },
  {
    name: "Eksperimen",
    path: "/eksperimen",
  },
  {
    name: "Ane",
    path: "/ane",
  },
];

export default function Topbar() {
  const [toggle, setToggle] = useState(false);
  const [md] = useMediaQuery("(max-width: 960px)");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  function handleTheme() {
    setToggle(!toggle);
    toggleColorMode();
  }

  return (
    <Box display="flex" justifyContent="space-between">
      <Box p="2">
        <Link href="/">
          <a>
            <Heading size="md">UsamahBass</Heading>
          </a>
        </Link>
      </Box>

      {md ? (
        <Box>
          <Box onClick={onOpen} className="nav-link" padding="7px">
            <Menu
              style={{
                color: colorMode === "dark" ? "#718096" : null,
              }}
            />
          </Box>

          <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay>
              <DrawerContent>
                <DrawerBody>
                  <List
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    gridGap="1rem"
                  >
                    {navLink.map((nav, i) => (
                      <ListItem key={i}>
                        <ActiveLink
                          activeClassName="nav-link-active"
                          href={nav.path}
                        >
                          <a
                            className="nav-link"
                            style={{
                              // color: colorMode === "dark" ? "#718096" : null,
                            }}
                          >
                            {nav.name}
                          </a>
                        </ActiveLink>
                      </ListItem>
                    ))}
                    <Tooltip
                      label={toggle ? "Terangin" : "Gelapin"}
                      aria-label={toggle ? "Terangin" : "Gelapin"}
                    >
                      <ListItem
                        className="nav-link"
                        onClick={handleTheme}
                        style={{
                          color: colorMode === "dark" ? "#718096" : null,
                        }}
                      >
                        {toggle ? <Sun /> : <Moon />}
                      </ListItem>
                    </Tooltip>
                  </List>
                </DrawerBody>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>
        </Box>
      ) : (
        <List display="flex" alignItems="center" gridGap="1rem">
          {navLink.map((nav, i) => (
            <ListItem key={i}>
              <ActiveLink activeClassName="nav-link-active" href={nav.path}>
                <a
                  className="nav-link"
                  style={{
                    color: colorMode === "dark" ? "#718096" : null,
                  }}
                >
                  {nav.name}
                </a>
              </ActiveLink>
            </ListItem>
          ))}
          <Tooltip
            label={toggle ? "Terangin" : "Gelapin"}
            aria-label={toggle ? "Terangin" : "Gelapin"}
          >
            <ListItem
              className="nav-link"
              onClick={handleTheme}
              style={{
                color: colorMode === "dark" ? "#718096" : null,
              }}
            >
              {toggle ? <Sun /> : <Moon />}
            </ListItem>
          </Tooltip>
        </List>
      )}
    </Box>
  );
}

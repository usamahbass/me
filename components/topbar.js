import {
  Box,
  IconButton,
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
    name: "OSS",
    path: "/oss",
  },
  {
    name: "Proyek",
    path: "/proyek",
  },
  {
    name: "Tentang Ane",
    path: "/tentang-ane",
  },
];

export default function Topbar() {
  const [toggle, setToggle] = useState(false);
  const [md] = useMediaQuery("(max-width: 960px)");

  const { isOpen, onOpen, onClose } = useDisclosure();

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
            <Menu />
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
                          <a className="nav-link">{nav.name}</a>
                        </ActiveLink>
                      </ListItem>
                    ))}
                    <ListItem
                      className="nav-link"
                      onClick={() => setToggle(!toggle)}
                    >
                      {toggle ? <Sun /> : <Moon />}
                    </ListItem>
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
                <a className="nav-link">{nav.name}</a>
              </ActiveLink>
            </ListItem>
          ))}
          <Tooltip
            label={toggle ? "Terangin" : "Gelapin"}
            aria-label={toggle ? "Terangin" : "Gelapin"}
          >
            <ListItem className="nav-link" onClick={() => setToggle(!toggle)}>
              {toggle ? <Sun /> : <Moon />}
            </ListItem>
          </Tooltip>
        </List>
      )}
    </Box>
  );
}

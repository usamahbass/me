import {
  Box,
  Flex,
  Heading,
  IconButton,
  List,
  ListItem,
  Spacer,
} from "@chakra-ui/react";
import { useState } from "react";
import { Moon, Sun } from "react-feather";
import ActiveLink from "./activelink";

const navLink = [
  {
    name: "Beranda",
    path: "/",
  },
  {
    name: "Proyek",
    path: "/proyek",
  },
  {
    name: "OSS",
    path: "/oss",
  },
];

export default function Topbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <Box display="flex" justifyContent="space-between">
      <Box p="2">
        <h1 className="font-me" size="md">
          UsamahBass
        </h1>
      </Box>

      <List display="flex" alignItems="center" gridGap="1rem">
        {navLink.map((nav, i) => (
          <ListItem key={i}>
            <ActiveLink activeClassName="nav-link-active" href={nav.path}>
              <a className="nav-link">{nav.name}</a>
            </ActiveLink>
          </ListItem>
        ))}
        <ListItem>
          <IconButton
            onClick={() => setToggle(!toggle)}
            icon={toggle ? <Sun /> : <Moon />}
          />
        </ListItem>
      </List>
    </Box>
  );
}

import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { useState } from "react";
import { Search } from "react-feather";
import { Title, Card } from "../../components";
import Link from "next/link";

const styleIcon = {
  position: "absolute",
  left: "10px",
  bottom: "10px",
  width: "1.2rem",
};

export default function Coretan({ coretan }) {
  const [valueSearch, setValueSearch] = useState("");

  return (
    <Box display="flex" justifyContent="center" flexDirection="column" mb="20">
      <Title title="Coretan" />

      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<Search style={styleIcon} />}
        />
        <Input
          onChange={(e) => setValueSearch(e.target.value)}
          type="tel"
          placeholder="Cari coretan ?"
        />
      </InputGroup>

      <Grid
        mt="10"
        gap="1.25rem"
        templateColumns="repeat(auto-fit, minmax(18rem, 1fr))"
      >
        {coretan
          ? coretan
              .filter(
                (el, i) =>
                  el.title.toLowerCase().indexOf(valueSearch.toLowerCase()) !==
                  -1
              )
              .map((el, i) => (
                <GridItem key={i}>
                  <Link href={`/coretan/${el.slug}`}>
                    <a>
                      <Card title={el.title} date={el.date} desc={el.slug} />
                    </a>
                  </Link>
                </GridItem>
              ))
          : "loading..."}
      </Grid>
    </Box>
  );
}

export async function getStaticProps() {
  const fs = require("fs");
  const matter = require("gray-matter");

  const { v4: uuid } = require("uuid");

  const filesCoretan = fs.readdirSync(
    `${process.cwd()}/contents/coretan`,
    "utf-8"
  );

  const coretan = filesCoretan
    .filter((fn) => fn.endsWith(".md"))
    .map((fn) => {
      const path = `${process.cwd()}/contents/coretan/${fn}`;
      const rawContent = fs.readFileSync(path, {
        encoding: "utf-8",
      });
      const { data } = matter(rawContent);

      return { ...data, id: uuid() };
    });

  return {
    props: {
      coretan,
    },
  };
}

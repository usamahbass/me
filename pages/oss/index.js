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
import { NextSeo } from "next-seo";
import { Title, Card } from "../../components";
import { OssSEO } from "../../next-seo.config";
import Link from "next/link";


const styleIcon = {
  position: "absolute",
  left: "10px",
  bottom: "10px",
  width: "1.2rem",
};

export default function OSS({ oss }) {
  const [valueSearch, setValueSearch] = useState("");

  return (
    <>
      <NextSeo {...OssSEO} />
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        mb="20"
      >
        <Title title="OSS" />

        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<Search style={styleIcon} />}
          />
          <Input
            onChange={(e) => setValueSearch(e.target.value)}
            type="tel"
            placeholder="Cari OSS ?"
          />
        </InputGroup>

        <Grid
          mt="10"
          gap="1.25rem"
          templateColumns="repeat(auto-fit, minmax(18rem, 1fr))"
        >
          {oss
            ? oss
                .filter(
                  (el, i) =>
                    el.title
                      .toLowerCase()
                      .indexOf(valueSearch.toLowerCase()) !== -1
                )
                .map((el, i) => (
                  <GridItem key={i}>
                    <Link href={`/oss/${el.slug}`}>
                      <a>
                        <Card
                          isImage
                          source_code={el.source_code}
                          demo={el.demo}
                          image={el.thumbnail}
                          alt={el.title}
                          title={el.title}
                          date={el.date}
                          desc={el.slug}
                        />
                      </a>
                    </Link>
                  </GridItem>
                ))
            : "memuat data..."}
        </Grid>
      </Box>
    </>
  );
}

export async function getStaticProps() {
  const fs = require("fs");
  const matter = require("gray-matter");

  const { v4: uuid } = require("uuid");

  const filesOSS = fs.readdirSync(`${process.cwd()}/contents/oss`, "utf-8");

  const oss = filesOSS
    .filter((fn) => fn.endsWith(".md"))
    .map((fn) => {
      const path = `${process.cwd()}/contents/oss/${fn}`;
      const rawContent = fs.readFileSync(path, {
        encoding: "utf-8",
      });
      const { data } = matter(rawContent);

      return { ...data, id: uuid() };
    });

  return {
    props: {
      oss,
    },
  };
}

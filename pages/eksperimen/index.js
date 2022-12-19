import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Grid,
  GridItem,
  Button,
  Stack,
  Text,
  Radio,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  useDisclosure,
  RadioGroup,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Search, BarChart as SortIcon } from "react-feather";
import { NextSeo } from "next-seo";
import fs from "fs";
import matter from "gray-matter";
import { v4 as uuid } from "uuid";
import { Title, Card } from "../../components";
import { EksperimenSEO } from "../../next-seo.config";
import Link from "next/link";

const styleIcon = {
  position: "absolute",
  left: "10px",
  bottom: "10px",
  width: "1.2rem",
};

export default function Eksperimen({ eksperimen }) {
  const [valueSearch, setValueSearch] = useState("");

  const [sortDate, setSortDate] = useState("1");
  const [sortTitle, setSortTitle] = useState("1");

  const [isEksperimen, setIsEksperimen] = useState(eksperimen);

  const {
    isOpen: isOpenDrawerFilter,
    onOpen: onOpenDrawerFilter,
    onClose: onCloseDrawerFilter,
  } = useDisclosure();

  useEffect(() => {
    if (sortDate === "1") {
      const newEksperimen = isEksperimen.sort(
        (a, b) =>
          Math.abs(Date.now() - new Date(a.date)) -
          Math.abs(Date.now() - new Date(b.date))
      );

      setIsEksperimen(newEksperimen);
    }

    if (sortDate === "2") {
      const newEksperimen = isEksperimen.sort(
        (a, b) =>
          Math.abs(Date.now() - new Date(b.date)) -
          Math.abs(Date.now() - new Date(a.date))
      );

      setIsEksperimen(newEksperimen);
    }
  }, [sortDate]);

  useEffect(() => {
    if (sortTitle === "1") {
      const newEksperimen = isEksperimen.sort(
        (a, b) =>
          a.title[0].length - b.title[0].length ||
          a.title[0].localeCompare(b.title[0])
      );

      setIsEksperimen(newEksperimen);
    }

    if (sortTitle === "2") {
      const newEksperimen = isEksperimen.sort(
        (a, b) =>
          b.title[0].length - a.title[0].length ||
          b.title[0].localeCompare(a.title[0])
      );

      setIsEksperimen(newEksperimen);
    }
  }, [sortTitle]);

  return (
    <>
      <NextSeo {...EksperimenSEO} />
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        mb="20"
      >
        <Title title="Eksperimen" />

        <Stack direction="row" alignItems="center" spacing={5}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<Search style={styleIcon} />}
            />
            <Input
              onChange={(e) => setValueSearch(e.target.value)}
              type="tel"
              placeholder="Cari Eksperimen ?"
            />
          </InputGroup>

          <Button leftIcon={<SortIcon />} onClick={onOpenDrawerFilter}>
            Urutkan
          </Button>
        </Stack>

        <Grid
          mt="10"
          gap="1.25rem"
          templateColumns="repeat(auto-fit, minmax(18rem, 1fr))"
        >
          {isEksperimen
            ? isEksperimen
                .filter(
                  (el, i) =>
                    el.title
                      .toLowerCase()
                      .indexOf(valueSearch.toLowerCase()) !== -1
                )
                .map((el, i) => (
                  <GridItem key={i}>
                    <Link href={`/eksperimen/${el.slug}`}>
                      <Card
                        isImage
                        source_code={el.source_code}
                        demo={el.demo}
                        image={el.thumbnail}
                        alt={el.title}
                        title={el.title}
                        date={el.date}
                        desc={el.spoiler}
                      />
                    </Link>
                  </GridItem>
                ))
            : "memuat data..."}
        </Grid>

        <Drawer
          size="lg"
          placement="bottom"
          onClose={onCloseDrawerFilter}
          isOpen={isOpenDrawerFilter}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">
              Urutkan Eksperimen
            </DrawerHeader>
            <DrawerBody mt={4} pb={5}>
              <Stack spacing={5}>
                <Box>
                  <Text mb={3} fontSize="1.2rem">
                    Urutkan Judul
                  </Text>

                  <RadioGroup
                    defaultValue={sortTitle}
                    onChange={(val) => setSortTitle(val)}
                  >
                    <Stack spacing={4}>
                      <Radio value={"1"}>A - Z</Radio>
                      <Radio value={"2"}>Z - A</Radio>
                    </Stack>
                  </RadioGroup>
                </Box>

                <Box>
                  <Text mb={3} fontSize="1.2rem">
                    Urutkan Tanggal
                  </Text>

                  <RadioGroup
                    defaultValue={sortDate}
                    onChange={(val) => setSortDate(val)}
                  >
                    <Stack spacing={4}>
                      <Radio alignItems="center" value={"1"}>
                        Terbaru
                      </Radio>
                      <Radio alignItems="center" value={"2"}>
                        Terlama
                      </Radio>
                    </Stack>
                  </RadioGroup>
                </Box>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
}

export async function getStaticProps() {
  const filesEksperimen = fs.readdirSync(
    `${process.cwd()}/contents/eksperimen`,
    "utf-8"
  );

  const eksperimen = filesEksperimen
    .filter((fn) => fn.endsWith(".md"))
    .map((fn) => {
      const path = `${process.cwd()}/contents/eksperimen/${fn}`;
      const rawContent = fs.readFileSync(path, {
        encoding: "utf-8",
      });
      const { data } = matter(rawContent);

      return { ...data, id: uuid() };
    });

  return {
    props: {
      eksperimen,
    },
  };
}

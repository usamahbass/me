import { useEffect } from "react";
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Grid,
  GridItem,
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
  Button,
  Checkbox,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  Search,
  Filter as FilterIcon,
  BarChart as SortIcon,
} from "react-feather";
import { NextSeo } from "next-seo";
import Link from "next/link";
import fs from "fs";
import matter from "gray-matter";
import { v4 as uuid } from "uuid";
import { CoretanSEO } from "../../next-seo.config";
import { Title, Card } from "../../components";
import { uniqueArray } from "../../utils/uniqueArray";

const styleIcon = {
  position: "absolute",
  left: "10px",
  bottom: "10px",
  width: "1.2rem",
};

export default function Coretan({ coretan }) {
  const [valueSearch, setValueSearch] = useState("");

  const [allTags, setAllTags] = useState([]);
  const [sortDate, setSortDate] = useState("1");
  const [sortTitle, setSortTitle] = useState("1");
  const [filterTags, setFilterTags] = useState([]);

  const [isCoretan, setIsCoretan] = useState(coretan);

  const {
    isOpen: isOpenDrawerSort,
    onOpen: onOpenDrawerSort,
    onClose: onCloseDrawerSort,
  } = useDisclosure();

  const {
    isOpen: isOpenDrawerFilter,
    onOpen: onOpenDrawerFilter,
    onClose: onCloseDrawerFilter,
  } = useDisclosure();

  useEffect(() => {
    coretan?.map((elem) =>
      elem.tags.map((tag) => {
        setAllTags((prevAllTags) => uniqueArray([...prevAllTags, tag]));
        setFilterTags((prevAllTags) => uniqueArray([...prevAllTags, tag]));
      })
    );
  }, []);

  useEffect(() => {
    if (sortDate === "1") {
      const newCoretan = isCoretan.sort(
        (a, b) =>
          Math.abs(Date.now() - new Date(a.date)) -
          Math.abs(Date.now() - new Date(b.date))
      );

      setIsCoretan(newCoretan);
    }

    if (sortDate === "2") {
      const newCoretan = isCoretan.sort(
        (a, b) =>
          Math.abs(Date.now() - new Date(b.date)) -
          Math.abs(Date.now() - new Date(a.date))
      );

      setIsCoretan(newCoretan);
    }
  }, [sortDate]);

  useEffect(() => {
    if (sortTitle === "1") {
      const newCoretan = isCoretan.sort(
        (a, b) =>
          a.title[0].length - b.title[0].length ||
          a.title[0].localeCompare(b.title[0])
      );

      setIsCoretan(newCoretan);
    }

    if (sortTitle === "2") {
      const newCoretan = isCoretan.sort(
        (a, b) =>
          b.title[0].length - a.title[0].length ||
          b.title[0].localeCompare(a.title[0])
      );

      setIsCoretan(newCoretan);
    }
  }, [sortTitle]);

  useEffect(() => {
    const newCoretan = coretan
      ?.map((elem) => {
        if (elem?.tags?.some((tag) => filterTags?.includes(tag))) {
          return elem;
        }
      })
      .filter((elem) => typeof elem !== "undefined");

    setIsCoretan(newCoretan);
  }, [filterTags]);

  return (
    <>
      <NextSeo {...CoretanSEO} />
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        mb="20"
      >
        <Title title="Coretan" />

        <Stack direction="row" alignItems="center" spacing={5}>
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

          <Button leftIcon={<FilterIcon />} onClick={onOpenDrawerFilter}>
            Filter
          </Button>

          <Button leftIcon={<SortIcon />} onClick={onOpenDrawerSort}>
            Urutkan
          </Button>
        </Stack>

        <Grid
          mt="10"
          gap="1.25rem"
          templateColumns="repeat(auto-fit, minmax(18rem, 1fr))"
        >
          {isCoretan
            ? isCoretan
                .filter(
                  (el, i) =>
                    el.title
                      .toLowerCase()
                      .indexOf(valueSearch.toLowerCase()) !== -1
                )
                .map((el, i) => (
                  <GridItem key={i}>
                    <Link href={`/coretan/${el.slug}`}>
                      <a>
                        <Card
                          tags={el.tags}
                          title={el.title}
                          date={el.date}
                          desc={el.spoiler}
                        />
                      </a>
                    </Link>
                  </GridItem>
                ))
            : "memuat data..."}
        </Grid>

        {/* DRAWER SORT */}
        <Drawer
          size="lg"
          placement="bottom"
          onClose={onCloseDrawerSort}
          isOpen={isOpenDrawerSort}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">Urutkan Coretan</DrawerHeader>
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

        {/* DRAWER FILTER */}
        <Drawer
          size="lg"
          placement="bottom"
          onClose={onCloseDrawerFilter}
          isOpen={isOpenDrawerFilter}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">Filter Coretan</DrawerHeader>
            <DrawerBody mt={4} pb={5}>
              <Stack spacing={5}>
                <Box>
                  <Text mb={3} fontSize="1.2rem">
                    Filter by tags
                  </Text>

                  <Stack mt={3} spacing={3}>
                    {allTags?.map((tag, i) => (
                      <Checkbox
                        key={i}
                        defaultChecked={filterTags?.includes(tag)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFilterTags((prevFilterTags) =>
                              uniqueArray([...prevFilterTags, tag])
                            );
                          } else {
                            setFilterTags(
                              filterTags?.filter((el) => el !== tag)
                            );
                          }
                        }}
                      >
                        {tag}
                      </Checkbox>
                    ))}
                  </Stack>
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

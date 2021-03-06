import { useContext, useEffect } from "react";
import { Box, Button, Divider, Heading, Image } from "@chakra-ui/react";
import { Code, Globe } from "react-feather";
import { NextSeo } from "next-seo";
import { CardStack, Markdown } from "../../components";
import { IsContext } from "../../context";
import { OssContainer } from "../../containers";

export default function IsProyek({ proyek }) {
  const [path, setPath] = useContext(IsContext);

  useEffect(() => {
    setPath((path) => ({ ...path, path: window.location.pathname }));
  }, []);
  return (
    <>
      <NextSeo
        title={`${proyek.title} - @usamahbass`}
        description={proyek.spoiler}
        type="blog"
        openGraph={{
          type: "blog",
          url: `https://usamahbass.vercel.app${path.path}`,
          title: proyek.title,
          description: proyek.spoiler,
          images: [
            {
              url: proyek.thumbnail,
            },
          ],
        }}
      />
      <OssContainer
        photo={
          <Image
            display="block"
            width="100%"
            height={["100%", "406px"]}
            src={proyek.thumbnail}
            alt={proyek.title}
          />
        }
        stack={<CardStack stack={proyek.tech} />}
        content={
          <Box display="block" mt="3">
            <Heading>{proyek.title}</Heading>

            <Box display="flex" mt="3">
              {proyek.source_code == null ? null : (
                <Button
                  as="a"
                  href={proyek.source_code}
                  mr="5"
                  colorScheme="blue"
                  rightIcon={<Code />}
                >
                  Kode Sumber
                </Button>
              )}
              {proyek.demo == null ? null : (
                <Button
                  as="a"
                  href={proyek.demo}
                  color="grey.500"
                  rightIcon={<Globe />}
                >
                  Demo
                </Button>
              )}
            </Box>

            <Divider
              mt={10}
              mb={10}
              borderColor="#EDF2F7"
              opacity="1"
              borderWidth="2px"
            />

            <Markdown source={proyek.content} />
          </Box>
        }
      />
    </>
  );
}

export async function getStaticProps({ params }) {
  const fs = require("fs");
  const html = require("remark-html");
  const highlight = require("remark-highlight.js");
  const unified = require("unified");
  const markdown = require("remark-parse");
  const matter = require("gray-matter");

  const slug = params.slug;
  const path = `${process.cwd()}/contents/proyek/${slug}.md`;

  const rawContent = fs.readFileSync(path, {
    encoding: "utf-8",
  });

  const { data, content } = matter(rawContent);

  const result = await unified()
    .use(markdown)
    .use(highlight)
    .use(html)
    .process(content);

  return {
    props: {
      proyek: {
        ...data,
        content: result.toString(),
      },
    },
  };
}

export async function getStaticPaths() {
  const fs = require("fs");

  const path = `${process.cwd()}/contents/proyek`;
  const files = fs.readdirSync(path, "utf-8");

  const markdownFileNames = files
    .filter((fn) => fn.endsWith(".md"))
    .map((fn) => fn.replace(".md", ""));

  return {
    paths: markdownFileNames.map((fileName) => {
      return {
        params: {
          slug: fileName,
        },
      };
    }),
    fallback: false,
  };
}

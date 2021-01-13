import { useContext } from "react";
import { Box, Button, Divider, Heading, Image } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import { Code, Globe } from "react-feather";
import { CardStack, Markdown } from "../../components";
import { IsContext } from "../../context";
import { OssContainer } from "../../containers";

export default function IsOSS({ oss }) {
  const [path] = useContext(IsContext);
  return (
    <>
      <NextSeo
        title={`${oss.title} - @usamahbass`}
        description={oss.spoiler}
        type="blog"
        openGraph={{
          type: "blog",
          url: `https://usamahbass.vercel.app${path}`,
          title: oss.title,
          description: oss.spoiler,
          images: [
            {
              url: oss.thumbnail,
            },
          ],
        }}
      />
      <OssContainer
        photo={
          <Image
            display="block"
            width="100%"
            height="100%"
            src={oss.thumbnail}
            alt={oss.title}
          />
        }
        stack={<CardStack stack={oss.tech} />}
        content={
          <Box display="block" mt="3">
            <Heading>{oss.title}</Heading>

            <Box display="flex" mt="3">
              <Button
                as="a"
                href={oss.source_code}
                mr="5"
                colorScheme="blue"
                rightIcon={<Code />}
              >
                Kode Sumber
              </Button>
              <Button
                as="a"
                href={oss.demo}
                color="grey.500"
                rightIcon={<Globe />}
              >
                Demo
              </Button>
            </Box>

            <Divider
              mt={10}
              mb={10}
              borderColor="#EDF2F7"
              opacity="1"
              borderWidth="2px"
            />

            <Markdown source={oss.content} />
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
  const path = `${process.cwd()}/contents/oss/${slug}.md`;

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
      oss: {
        ...data,
        content: result.toString(),
      },
    },
  };
}

export async function getStaticPaths() {
  const fs = require("fs");

  const path = `${process.cwd()}/contents/oss`;
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

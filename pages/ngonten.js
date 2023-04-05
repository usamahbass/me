import { Box } from "@chakra-ui/react";
import axios from "axios";
import { NextSeo } from "next-seo";
import { Title } from "../components";
import { NgontenSEO } from "../next-seo.config";

export default function Ngoten({ tiktok }) {
  return (
    <>
      <NextSeo {...NgontenSEO} />
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        mb="20"
      >
        <Title title="Ngonten" />

        <div dangerouslySetInnerHTML={{ __html: tiktok?.html }} />
      </Box>
    </>
  );
}

export async function getServerSideProps() {
  const { data: tiktok } = await axios.get(
    "https://www.tiktok.com/oembed?url=https://www.tiktok.com/@usamah.bass"
  );

  return {
    props: {
      tiktok,
    },
  };
}

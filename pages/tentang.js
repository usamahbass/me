import { Box, Heading, Text } from "@chakra-ui/react";
import { Title } from "../components";

export default function Tentang() {
  return (
    <Box display="flex" justifyContent="center" flexDirection="column" mb={15}>
      <Title title="Tentang Ane" />

      <Heading mt="5" size="md" fontWeight="100">
        Ahlan, ane Usamah Basalamah. Ane tinggal Indonesia, ane berusia 19 tahun
        ane suka membangun situs web maupun aplikasi dan berkontribusi pada
        proyek sumber terbuka apa pun yang ane suka.
      </Heading>
    </Box>
  );
}

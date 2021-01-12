import { Box, Heading, Text, Link } from "@chakra-ui/react";
import { Title } from "../components";

export default function Tentang() {
  return (
    <Box display="flex" justifyContent="center" flexDirection="column" mb={15}>
      <Title title="Tentang Ane" />
      <Heading mt="5" size="md" fontWeight="100">
        Ahlan &#128075;, ane Usamah Basalamah. Ane tinggal Indonesia, berusia 19
        tahun ama suka membangun situs web maupun aplikasi dan berkontribusi
        pada proyek sumber terbuka apa pun yang ane suka.
      </Heading>
      <Heading mt="5" size="md" fontWeight="100">
        Ane terjun ke dunia programming pada awal tahun 2019, pada waktu itu ane
        belajar pemograman menggunakan HP dan bahasa yang ane gunakan adalah
        <Link
          ml="1"
          mr="1"
          color="blue.500"
          href="https://www.python.org"
          _hover={{
            opacity: "0.8",
            borderBottom: "2px solid",
            transition: "all 0.15s ease-out",
          }}
        >
          Python
        </Link>
        , belajar dasar pemograman
        <Link
          mr="1"
          ml="1"
          color="blue.500"
          href="https://www.python.org"
          _hover={{
            opacity: "0.8",
            borderBottom: "2px solid",
            transition: "all 0.15s ease-out",
          }}
        >
          python
        </Link>
        itu sendiri. Karya yang ter-repository hanya
        <Link
          mr="1"
          ml="1"
          color="blue.500"
          _hover={{
            opacity: "0.8",
            borderBottom: "2px solid",
            transition: "all 0.15s ease-out",
          }}
          href="https://github.com/usamahbass/python-uwu"
        >
          ini
        </Link>
        , hanya saja ane belajar
        <Link
          mr="1"
          ml="1"
          color="blue.500"
          href="https://www.python.org"
          _hover={{
            opacity: "0.8",
            borderBottom: "2px solid",
            transition: "all 0.15s ease-out",
          }}
        >
          python
        </Link>
        gak lama, karena bosan akhirnya ane memutuskan terjun ke dunia web
        development.
      </Heading>
      <Heading mt="5" size="md" fontWeight="100">
        Nah, karena gak tau mau mulai dari mane akhirnya ane memutuskan untuk
        melakukan research &#x1F50D; terlebih dahulu. Search sana sini, akhirnya
        ane memutuskan untuk memulai dengan belajar
        <Link
          mr="1"
          ml="1"
          color="blue.500"
          _hover={{
            opacity: "0.8",
            borderBottom: "2px solid",
            transition: "all 0.15s ease-out",
          }}
          href="https://www.php.net/"
        >
          PHP
        </Link>
        dan belajar databasenya, waktu itu pake
        <Link
          ml="1"
          mr="1"
          color="blue.500"
          _hover={{
            opacity: "0.8",
            borderBottom: "2px solid",
            transition: "all 0.15s ease-out",
          }}
          href="https://www.mysql.com/"
        >
          MySQL.
        </Link>
      </Heading>
      <Heading mt="5" size="md" fontWeight="100">
        Karena suka, ane tekuni dunia web development selama kurang lebih 1
        bulan. Pada bulan September 2019 , ane memutuskan untuk mondok di
        <Link
          mr="1"
          ml="1"
          color="blue.500"
          _hover={{
            opacity: "0.8",
            borderBottom: "2px solid",
            transition: "all 0.15s ease-out",
          }}
          href="https://pondokprogrammer.com/"
        >
          Pondok Programmer
        </Link>
        , disana ane masuk ke dalam divisi FrontEnd Developer dengan bahasa
        <Link
          ml="1"
          mr="1"
          color="blue.500"
          _hover={{
            opacity: "0.8",
            borderBottom: "2px solid",
            transition: "all 0.15s ease-out",
          }}
          href="https://www.javascript.com/"
        >
          JavaScript
        </Link>
        sebagai landasannye.
      </Heading>
      <Title title="Setup Ane" style={{ marginTop: "30px" }} />
      <Heading mt="5" size="md" fontWeight="100">
        Ane make Laptop Lenovo ideapad 330. Ane make OS Linux,
        <Link
          ml="1"
          mr="1"
          color="blue.500"
          _hover={{
            opacity: "0.8",
            borderBottom: "2px solid",
            transition: "all 0.15s ease-out",
          }}
          href="https://lubuntu.net/"
        >
          Lubuntu
        </Link>
        untuk lebih spesifik. Sebelumnye juga sempat lama di
        <Link
          ml="1"
          mr="1"
          color="blue.500"
          _hover={{
            opacity: "0.8",
            borderBottom: "2px solid",
            transition: "all 0.15s ease-out",
          }}
          href="https://ubuntu.com/"
        >
          Ubuntu
        </Link>
        lalu pindah ke
        <Link
          ml="1"
          mr="1"
          color="blue.500"
          _hover={{
            opacity: "0.8",
            borderBottom: "2px solid",
            transition: "all 0.15s ease-out",
          }}
          href="https://linuxmint.com/"
        >
          Linux Mint.
        </Link>
        Ngoding pake
        <Link
          ml="1"
          mr="1"
          color="blue.500"
          _hover={{
            opacity: "0.8",
            borderBottom: "2px solid",
            transition: "all 0.15s ease-out",
          }}
          href="https://code.visualstudio.com/"
        >
          VScode
        </Link>
        tapi pernah juga pake
        <Link
          ml="1"
          mr="1"
          color="blue.500"
          _hover={{
            opacity: "0.8",
            borderBottom: "2px solid",
            transition: "all 0.15s ease-out",
          }}
          href="https://atom.io/"
        >
          Atom.
        </Link>
        Sebelum ngoding ane kadang research &#x1F50D; untuk designnya, kalo
        kagak ketemu ya kadang ane buat sendiri pake
        <Link
          ml="1"
          mr="1"
          color="blue.500"
          _hover={{
            opacity: "0.8",
            borderBottom: "2px solid",
            transition: "all 0.15s ease-out",
          }}
          href="https://figma.com/"
        >
          Figma
        </Link>
        ( kadang ya kalo ga lagi semangat buat designnya &#9786;).
      </Heading>
    </Box>
  );
}

import { Metadata } from "next";
import { getAllEksperimen } from "@/lib/markdown";
import { EksperimenList } from "@/components/eksperimen-list";

export const metadata: Metadata = {
  title: "Eksperimen & Lab Proyek",
  description:
    "Laboratorium mini berisi kumpulan eksperimen kode, proyek open source, dan eksplorasi antarmuka.",
};

export default function EksperimenPage() {
  const allEksperimen = getAllEksperimen();

  return <EksperimenList initialEksperimen={allEksperimen} />;
}

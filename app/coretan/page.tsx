import { Metadata } from "next";
import { getAllCoretan, getAllTags } from "@/lib/markdown";
import { CoretanList } from "@/components/coretan-list";

export const metadata: Metadata = {
  title: "Coretan & Catatan Teknis",
  description:
    "Kumpulan catatan teknis, rangkuman eksperimen, dan tulisan seputar web engineering.",
};

export default function CoretanPage() {
  const allCoretan = getAllCoretan();
  const allTags = getAllTags();

  return <CoretanList initialCoretan={allCoretan} allTags={allTags} />;
}

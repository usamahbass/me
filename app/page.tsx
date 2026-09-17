import { Hero } from "@/components/hero";
import { HomeSections } from "@/components/home-sections";
import { getAllCoretan, getAllEksperimen } from "@/lib/markdown";

export default function HomePage() {
  const allCoretan = getAllCoretan();
  const allEksperimen = getAllEksperimen();

  const latestCoretan = allCoretan.slice(0, 3);
  const latestEksperimen = allEksperimen.slice(0, 3);

  return (
    <>
      <Hero />
      <HomeSections coretan={latestCoretan} eksperimen={latestEksperimen} />
    </>
  );
}

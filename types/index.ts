export interface CoretanMeta {
  title: string;
  slug: string;
  date: string;
  tags: string[];
  thumbnail?: string;
  edit?: string;
  spoiler: string;
  readingTime?: string;
}

export interface CoretanItem extends CoretanMeta {
  content: string;
}

export interface TechStackItem {
  name: string;
  logo: string;
  url: string;
}

export interface EksperimenMeta {
  title: string;
  slug: string;
  date: string;
  demo?: string;
  source_code?: string;
  thumbnail: string;
  spoiler: string;
  tech?: [string, string, string][];
}

export interface EksperimenItem extends EksperimenMeta {
  content: string;
}

export type Locale = "id" | "en";

export interface TranslationDictionary {
  nav: {
    home: string;
    coretan: string;
    eksperimen: string;
  };
  hero: {
    status: string;
    role: string;
    greeting: string;
    bio1: string;
    bio2: string;
    bio3: string;
    exploreWork: string;
    readNotes: string;
    techTitle: string;
  };
  home: {
    latestCoretan: string;
    latestCoretanDesc: string;
    latestEksperimen: string;
    latestEksperimenDesc: string;
    viewAll: string;
  };
  coretan: {
    title: string;
    desc: string;
    searchPlaceholder: string;
    filterByTag: string;
    allTags: string;
    sortBy: string;
    sortNewest: string;
    sortOldest: string;
    sortAZ: string;
    sortZA: string;
    emptyTitle: string;
    emptyDesc: string;
    readTime: string;
    backToAll: string;
    editOnGithub: string;
    shareTitle: string;
    shareTwitter: string;
    shareFacebook: string;
    shareLinkedin: string;
    copyLink: string;
    copied: string;
    relatedTitle: string;
  };
  eksperimen: {
    title: string;
    desc: string;
    searchPlaceholder: string;
    sourceCode: string;
    liveDemo: string;
    techUsed: string;
    emptyTitle: string;
    emptyDesc: string;
    backToAll: string;
    shareTitle: string;
  };
  footer: {
    craftedWith: string;
    sourceAvailable: string;
    rights: string;
  };
  common: {
    newBadge: string;
    loading: string;
    reset: string;
    themeLight: string;
    themeDark: string;
  };
}

export const translations: Record<"id" | "en", TranslationDictionary> = {
  id: {
    nav: {
      home: "Beranda",
      coretan: "Coretan",
      eksperimen: "Eksperimen",
    },
    hero: {
      status: "Tersedia untuk proyek & kolaborasi",
      role: "Frontend Engineer",
      greeting: "Usamah Basalamah",
      bio1: "Membangun antarmuka web yang rapi, cepat, dan interaktif dengan",
      bio2: "serta ekosistem",
      bio3: ".",
      exploreWork: "Jelajahi Karya",
      readNotes: "Baca Coretan",
      techTitle: "Teknologi Utama",
    },
    home: {
      latestCoretan: "Coretan Terbaru",
      latestCoretanDesc: "Catatan teknis, pemikiran seputar web development, dan eksperimen kode.",
      latestEksperimen: "Eksperimen Pilihan",
      latestEksperimenDesc: "Eksplorasi kode sumber terbuka, prototipe, dan aplikasi web interaktif.",
      viewAll: "Lihat Semua",
    },
    coretan: {
      title: "Coretan",
      desc: "Kumpulan catatan teknis, rangkuman eksperimen, dan tulisan seputar frontend development.",
      searchPlaceholder: "Cari coretan atau topik...",
      filterByTag: "Filter Tag:",
      allTags: "Semua",
      sortBy: "Urutkan",
      sortNewest: "Terbaru",
      sortOldest: "Terlama",
      sortAZ: "Judul A - Z",
      sortZA: "Judul Z - A",
      emptyTitle: "Tidak ada coretan ditemukan",
      emptyDesc: "Coba kata kunci lain atau reset filter tag yang dipilih.",
      readTime: "menit baca",
      backToAll: "Kembali ke semua coretan",
      editOnGithub: "Ubah di GitHub",
      shareTitle: "Bagikan tulisan ini",
      shareTwitter: "Bagikan ke X / Twitter",
      shareFacebook: "Facebook",
      shareLinkedin: "LinkedIn",
      copyLink: "Salin Tautan",
      copied: "Tersalin!",
      relatedTitle: "Coretan Terkait",
    },
    eksperimen: {
      title: "Eksperimen",
      desc: "Laboratorium mini berisi proyek web, open source, dan eksplorasi teknologi.",
      searchPlaceholder: "Cari eksperimen...",
      sourceCode: "Kode Sumber",
      liveDemo: "Live Demo",
      techUsed: "Teknologi Digunakan",
      emptyTitle: "Tidak ada eksperimen ditemukan",
      emptyDesc: "Coba gunakan kata kunci pencarian yang berbeda.",
      backToAll: "Kembali ke semua eksperimen",
      shareTitle: "Bagikan proyek ini",
    },
    footer: {
      craftedWith: "Dibuat dengan",
      sourceAvailable: "Kode sumber terbuka di",
      rights: "Hak cipta dilindungi undang-undang.",
    },
    common: {
      newBadge: "Baru",
      loading: "Memuat data...",
      reset: "Reset",
      themeLight: "Mode Terang",
      themeDark: "Mode Gelap",
    },
  },
  en: {
    nav: {
      home: "Home",
      coretan: "Notes",
      eksperimen: "Lab",
    },
    hero: {
      status: "Available for projects & collaboration",
      role: "Frontend Engineer",
      greeting: "Usamah Basalamah",
      bio1: "Building clean, fast, and interactive web interfaces with",
      bio2: "and the",
      bio3: "ecosystem.",
      exploreWork: "Explore Work",
      readNotes: "Read Notes",
      techTitle: "Core Technologies",
    },
    home: {
      latestCoretan: "Recent Notes",
      latestCoretanDesc: "Technical notes, thoughts on web engineering, and code experiments.",
      latestEksperimen: "Featured Experiments",
      latestEksperimenDesc: "Open-source projects, interactive prototypes, and web experiments.",
      viewAll: "View All",
    },
    coretan: {
      title: "Notes & Writings",
      desc: "A collection of technical write-ups, deep dives, and thoughts on modern frontend development.",
      searchPlaceholder: "Search notes or topics...",
      filterByTag: "Filter by tag:",
      allTags: "All",
      sortBy: "Sort by",
      sortNewest: "Newest first",
      sortOldest: "Oldest first",
      sortAZ: "Title A - Z",
      sortZA: "Title Z - A",
      emptyTitle: "No notes found",
      emptyDesc: "Try adjusting your search query or clearing selected tags.",
      readTime: "min read",
      backToAll: "Back to all notes",
      editOnGithub: "Edit on GitHub",
      shareTitle: "Share this article",
      shareTwitter: "Share on X / Twitter",
      shareFacebook: "Facebook",
      shareLinkedin: "LinkedIn",
      copyLink: "Copy Link",
      copied: "Copied!",
      relatedTitle: "Related Notes",
    },
    eksperimen: {
      title: "Lab & Experiments",
      desc: "A sandbox of open-source projects, web tools, and technical experiments.",
      searchPlaceholder: "Search experiments...",
      sourceCode: "Source Code",
      liveDemo: "Live Demo",
      techUsed: "Technologies Used",
      emptyTitle: "No experiments found",
      emptyDesc: "Try searching with a different keyword.",
      backToAll: "Back to all experiments",
      shareTitle: "Share this project",
    },
    footer: {
      craftedWith: "Crafted with",
      sourceAvailable: "Open source on",
      rights: "All rights reserved.",
    },
    common: {
      newBadge: "New",
      loading: "Loading data...",
      reset: "Reset",
      themeLight: "Light Mode",
      themeDark: "Dark Mode",
    },
  },
};

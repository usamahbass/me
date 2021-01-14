---
title: Makanye Ngaji
slug: makanye-ngaji
demo: https://makanyengaji.vercel.app/
source_code: https://github.com/usamahbass/makanyengaji
thumbnail: https://www.covesia.com/assets/foto/berita/thumb_20181111074640.jpg
spoiler: Makanye Ngaji adalah platform qur'an digital yang dibuat dengan tujuan menyadarkan kaum muslim khususnya di Indonesia untuk membiasakan ngaji setiap hari.
date: November 2020
tech:
  - [
      "Sapper",
      "https://styles.redditmedia.com/t5_u8ynk/styles/communityIcon_s6agobh56o541.png?width=256&s=c053025991637179047f2141be64b3cdc8500cae",
      "https://sapper.svelte.dev/",
    ]
  - [
      "Tailwind CSS",
      "https://avatars3.githubusercontent.com/u/67109815?s=200&v=4",
      "https://tailwindcss.com/",
    ]
---

# Makanye Ngaji

adalah platform qur'an digital yang dibuat dengan tujuan menyadarkan kaum muslim khususnya di Indonesia untuk membiasakan ngaji setiap hari. Dan juga kaum muslim yang sedang tidak tenang hatinya , ditegur "Makanye Ngaji" agar tenang.

# API Quran

[Link](https://api.quran.sutanlab.id/)

[Github](http://github.com/sutanlab/quran-api/)

# API Hadist

untuk saat ini baru tersedia API hadist arbain, insya allah akan tersedia API hadist yang lain

### get semua sub hadist arbain

[Link](https://makanyengaji.vercel.app/hadist/arbain.json)

### get per slug, contoh:

[Link](http://makanyengaji.vercel.app/hadist/arbain/amalan-bergantung-pada-niat.json)

## Ingin berkontribusi ?

semua data ada di _\_posts.js_ masing masing folder, contohnya antum bisa menambahkan data hadist lain dengan menambahkan folder di _/src/routes/hadist_, lalu menambahkan pathnya di _/src/routes/\_hadist.js_,
dan terakhir menambahkan navigasi di _/src/componentes/header.svelte_ pada variabel routes tepatnya.

bingung ? coba baca dokumentasi [disini](https://sapper.svelte.dev/docs#File_naming_rules) untuk lebih mudah kontribusi nantinya.

*Barakallahufiikum.*

---
title: Peta Persebaran Covid 19
slug: peta-covid19
demo: https://petacovid19.vercel.app
source_code: https://github.com/usamahbass/peta-covid19/
thumbnail: https://images.unsplash.com/photo-1619468129361-605ebea04b44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFwc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60
spoiler: Peta Persebaran Covid 19 di Indonesia, yang disertai dengan data data rumah sakit rujukan terdekat.
date: Juli 2021
tech:
  - [
      "Typescript",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png",
      "https://www.typescriptlang.org/",
    ]
  - [
      "React",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
      "https://getbootstrap.com",
    ]
  - [
      "Leaflet",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-5VTQ4ZXILM1XNUDHDEAkKQ5qlSc0lvl8bbsabDe9gDqvW9_A3HlvDVOUR2cbZZrId28&usqp=CAU",
      "https://leafletjs.com/",
    ]
  - [
      "Chakra UI",
      "https://pbs.twimg.com/profile_images/1244925541448286208/rzylUjaf_400x400.jpg",
      "https://chakra-ui.com/",
    ]
---

<h3>API</h3>
<hr/>

<ul>
    <li>
        Data Covid19: <a href="https://data.covid19.go.id/public/api/prov.json" target="blank">https://data.covid19.go.id/public/api/prov.json</a>
    </li>
    <li>
         Dekontaminasi: <a href="https://dekontaminasi.com" target="blank">https://dekontaminasi.com</a>
    </li>
    <li>
         Geocoding: <a href="https://nominatim.openstreetmap.org" target="blank">https://nominatim.openstreetmap.org</a>
    </li>
</ul>

<br/>

<h3>Data</h3>
<hr/>

<ul>
    <li>
        GeoJSON Provinsi: <a href="https://github.com/superpikar/indonesia-geojson" target="blank">https://github.com/superpikar/indonesia-geojson</a>
    </li>
    <li>
         GeoJSON Kab: <a href="https://github.com/rifani/geojson-political-indonesia" target="blank">https://github.com/rifani/geojson-political-indonesia</a>
    </li>
</ul>

<h3>Requirement Setup</h3>
<hr/>

<ul>
    <li>Node v12 ++</li>
    <li>Yarn 1.22 ++</li>
</ul>

<h3>Develop</h3>
<hr/>

```bash
# install
$ yarn

# development build
yarn dev
# or
vite

# development and expost it
yarn dev --host
# or
vite --host

# production build
$ yarn build
# or
vite build

```

<h3>Licence</h3>

MIT

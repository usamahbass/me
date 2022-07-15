---
title: Nyoba recoil yuk
slug: nyoba-recoil-yuk
date: 12 Februari 2021
tags: [react, javascript, recoil]
edit: https://github.com/usamahbass/me/blob/develop/contents/coretan/nyoba-recoil-yuk.md
thumbnail: https://cdn.pixabay.com/photo/2016/01/19/14/47/laptop-work-1148958__340.jpg
spoiler: Kalo yang sudah familiar ama React, biasanya kalo ingin ngepass state atau functionalitas lainnya dari component satu ke component 1 ke component lainnya bisa pake yang namanya...
---

Kalo yang sudah familiar ama React, biasanya kalo ingin ngepass state atau functionalitas lainnya dari component satu ke component 1 ke component lainnya bisa pake yang namanya **_props ?_**, tapi beda kasus lagi kalo contohnya kek gini nih

![alur props](https://res.cloudinary.com/dvsffkyli/image/upload/v1612892839/MacBook_Pro_-_2_hycbvo.png)

nah kalo di **react** kan kalo kita mau ngelempar props dari component 1 ke 6 maka kita harus melewati component 2, 4, baru dapat 6. Itu baru contoh, bagaimana jika kasusnya udah besar banyak component yang ente buat. Ente bakal kesulitan melempar props dari 1 ke 2 dst. Nah, maka dari itu ada yang namanya state management jadi ada store yang membungkus **app** dan bisa disalurkan ke component-componentnya tanpa harus melalui component sebelumnya.

di JavaScript sendiri banyak library state management, contoh **redux**, **mobx** dll, untuk di React bisa pake **react-redux**, **recoil**, dst

Nah untuk sekarang, ane mau bagi sedikit cara menggunakan state management dengan bantuan library **recoiljs**.

## Recoil JS

nah sebelumnya apasih itu recoiljs ?, singkat aja ya recoil adalah library state management untuk **react** yang cara kerja nya sama seperti kita buat state di **react** menggunankan **hooks**.

sebelumnye install dulu dah recoil nya, bisa make **yarn** atau **npm** bebas,
kalo ane sih pake yarn jadi

```bash
yarn install recoil
```

## RecoilRoot

Ketika menggunakan recoil, aplikasi ente harus dibungkus dengan provider **RecoilRoot** ini, contohnye gini:

**src/index.js**

```js
import React from 'react'; // kalo ente pake react versi 17 keatas bisa tidak melakukan ini ya
import { render } from 'react-dom';
import { RecoilRoot } from 'recoil';
import App from './App';

render (
	<RecoilRoot>
		<App/>
	</RecoilRoot>
	document.getElementById("root");
);
```

## Atom

nah, **atom** ini adalah tempat mendeklarasikan global statenya . State yang disimpan menggunakan **atom** bisa dibaca, dirubah, dan di reset oleh seluruh komponen yang telah berlangganan dengan global state yang dideklarasikan. Maksudnya berlangganan gimana sih ??, nih kekgini :

sebelumnya buat aja folder **recoil** di dalam root structure , didalamnya beri folder dengan nama **atom**, dan masukkan file **index.js** sebagai root file, lalu masukkan juga file **state.js** atau apa terserah ente nanti:

**src/recoil/atom/state.js**

```js
import { atom } from 'recoil';

export const stateReducers = atom({
	key: 'stateReducers' // key ini adalah tring unik yang digunakan untuk mengidentifikasi atom secara internal,
	default: 'bass' // default adalah nilai default state yang dideklarasikan
})
```

**src/recoil/atom/index.js**

```js
export * from "./state";
```

nah, setelah mengintegrasikan global state dengan **atom**, sekarang kita coba melakukan **langganan** ke state tersebut

**src/App.js**

_membaca state_

```js
import React from "react"; // kalo ente pake react versi 17 keatas bisa tidak melakukan ini ya
import { useRecoilState } from "recoil";
import { stateReducers } from "./recoil";

const App = () => {
  const [state, setState] = useRecoilState(stateReducers);
  return (
    <div>
      <h1>{state}</h1>
    </div>
  );
};
```

_merubah state_

```javascript
import React from "react"; // kalo ente pake react versi 17 keatas bisa tidak melakukan ini ya
import { useRecoilState } from "recoil";
import { stateReducers } from "./recoil";

const App = () => {
  const [state, setState] = useRecoilState(stateReducers);
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => setState("basalamah")}>ubah state</button>
    </div>
  );
};
```

atau juga bisa dengan useSetRecoilState

```javascript
import React from "react"; // kalo ente pake react versi 17 keatas bisa tidak melakukan ini ya
import { useRecoilState, useSetRecoilState } from "recoil";
import { stateReducers } from "./recoil";

const App = () => {
  const state = useRecoilState(stateReducers);
  const setRecoil = useSetRecoilState(stateReducers);
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => setRecoil("basalamah")}>ubah state</button>
    </div>
  );
};
```

_mereset state_

```js
import React from "react"; // kalo ente pake react versi 17 keatas bisa tidak melakukan ini ya
import { useRecoilState } from "recoil";
import { stateReducers } from "./recoil";

const App = () => {
  const resetState = useResetRecoilState(stateReducers);
  const [state, setState] = useRecoilState(stateReducers);
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => setState("basalamah")}>ubah state</button>
      <button onClick={resetState}>reset state</button>
    </div>
  );
};
```

bentar, kek nya kepanjangan nih.

udah dulu ye, perkenalan **recoil** nya , ntar coba coba lagi deh

kalo mau baca langsung dokumentasinya, bisa dibaca [disini](https://recoiljs.org)

**Barakallahufiikum**

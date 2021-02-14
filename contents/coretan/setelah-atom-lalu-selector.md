---
title: Setelah atom lalu selector
slug: setelah-atom-lalu-selector
date: 15 Februari 2021
edit: https://github.com/usamahbass/me/blob/develop/contents/coretan/setelah-atom-lalu-selector.md
thumbnail: https://cdn.pixabay.com/photo/2016/09/23/20/54/doors-1690423__340.jpg
spoiler: nah, kalo kemaren kite dah bahas recoil ama atom nye. Sekarang kite akan bahas yang namanye selector, sebelum masuk ke selector coba baca baca coretan sebelumnye...
---


## Selector

nah, kalo kemaren kite dah bahas **recoil** ama **atom** nye. Sekarang kite akan bahas yang namanye **selector**.

sebelum masuk ke **selector** coba baca baca coretan sebelumnye kalo yang belum baca ye, bisa dilihat [disini](https://usamahbass.vercel.app/coretan/nyoba-recoil-yuk) atau langsung dari documentasi recoilnya [disini](https://recoiljs.org).

## Apa sih selector itu ?

simplenya si **selector** adalah fungsi untuk memanipulasi data si **atom** atau **state** yang ente pernah buat, kalo di istilah **redux** sih ini **reducers** nya anggaplah begitu.

contoh simple nya gini

```js
import { selector } from 'recoil';
import { myAtom }  from './atom';

const mySelector = selector({
	key: 'mySelector', // key ini sama fungsinya kayak key pada atom
	get: ({ get }) => get(myAtom) * 50 // get ini adalah fungsi untuk mendapatkan nilai atom saat ini.
})
```
contoh lain, membuat filter state 

*src/recoil/atom.js*
```js
import { atom } from 'recoil';

export const myAtom = atom({
	key: 'myAtom',
	default: ['one', 'two', 'three', 'four', 'five']
})

export const myFilter = atom({
	key: 'myFilter',
	default: ''
})
```

*src/recoil/selector.js*

```js
import { selector } from 'recoil';
import { myAtom, myFilter } from './atom.js';

export filterAtom = selector({
	key: 'filterAtom',
	get: ({ get }) => {
		const atom = get(myAtom);
		const filter = get(myFilter);
			
		switch(filter) {
			case 'TWO':
				return atom.filter((el) => atom.length <= 2)
			case 'THREE':
				return atom.filter((el) => atom.length <= 3)
			case: 'FOUR':
				return atom.filter((el) => atom.length <= 4)
			default:
				return atom
		}
	}
}) 
```

*src/components/filterList.js*

```js
import React from 'react';
import { useRecoilState } from 'recoil';
import { myFilter } from '../recoil/atom';

const FilterList = () => {
	const [filter, setFilter] = useRecoilState(myFilter);
	
	const handleChange = ({ target: {value} }) => {
		setFilter(value);
	}
	
	return (
		<select value={filter} onChange={handleChange}>
			<option value="TWO">2 length</option>
			<option value="THREE">3 length</option>
			<option value="FOUR">4 length</option>
		</select>
	)
}

export default FilterList
```

*src/components/App.js*

```js
import React from 'react';
import { useRecoilValue } from 'recoil';
import { filterAtom } from './recoil/selector';
import FilterList from './components/filterList';

const App = () => {
	const list = useRecoilValue(filterAtom);
	
	return (
		<div>
			<h3>FilterList</h3>
			<FilterList/>
			
			{list.map((el, i) => <p key={i}>{el}</p> )}
		</div>
	)
}
```

bentar, kek nya kepanjangan nih.

udah dulu ye, perkenalan  **selecor**  nye , ntar coba coba lagi deh

**Barakallahufiikum**
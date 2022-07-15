---
title: Basit Toast
slug: basit-toast
source_code: https://github.com/raksyedev/basit-toast/
thumbnail: https://images.unsplash.com/photo-1619095762086-66b82f914dcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dG9hc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60
spoiler: a basit (simple) toast like notification
date: Mei 2021
tech:
  - [
      "JavaScript",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png",
      "https://javascript.com",
    ]
  - [
      "React",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
      "https://reactjs.org/",
    ]
---

## BASIT TOAST 🔔🔔

a basit (simple) toast like notification 🔔🔔.

### Daftar Isi 📚

- [Instalasi](#instalasi)
- [BasitToastComponents](#basit-toast-components)
- [useBasitToast](#use-basit-toast)
- [basittoast](#basittoast)
- [Props](#props)
- [How to Contribute ?](#how-to-contribute)
- [License](#license)

<br/>

## Instalasi

<br/>

```bash
yarn add basit-toast
```

```bash
npm install basit-toast
```

<br/>

## BasitToastComponents

```jsx
import React, { useState } from 'react'
import { BasitToast } from 'basit-toast'
import 'basit-toast/dist/basit-toast.css'

const ExampleBasitToast = () => {
  const [openToast, setOpenToast] = useState(false)

  const handleClick = () => {
    setOpenToast(true)
  }

  return (
    <>
      <BasitToast
        isOpen={openToast}
        handleClose={() => setOpenToast(false)}
        position='bottomcenter'
        severity='errors'
        handleCloseDuration={3000}
        message='Your errors toast here !'
      />
      <button onClick={handleClick}>Click</button>
    </>
  )
}

export default ExampleBasitToast
```

<br/>

## useBasitToast

```jsx
import React from 'react'
import { useBasitToast } from 'basit-toast'
import 'basit-toast/dist/basit-toast.css'

const ExampleUseBasitToast = () => {
  const { defaults } = useBasitToast()

  const handleClick = () => {
    defaults('Hallo', 'bottomcenter')
  }

  return <button onClick={handleClick}>click</button>
}

export default ExampleUseBasitToast
```

<br/>

## basittoast

```jsx
import React from 'react'
import { basittoast } from 'basit-toast'
import 'basit-toast/dist/basit-toast.css'

const ExampleBasitToast = () => {
  const handleClick = () => {
    basittoast.info('HELLO', 'bottomcenter', 3000)
  }

  return <button onClick={handleClick}>click</button>
}

export default ExampleBasitToast
```

<br/>

## Props

<table>
    <thead>
     <tr>
        <th>Props</th>
        <th>Type</th>
        <th>Required</th>
     </tr>   
    </thead>
    <tbody>
        <tr>
            <td>isOpen</td>
            <td>boolean</td>
            <td>true</td>
        </tr>
        <tr>
            <td>severity ["default", "success", "warning", "errors", "info"]</td>
            <td>string</td>
            <td>true</td>
        </tr>
        <tr>
            <td>position ["topright",
    "topleft",
    "topcenter",
    "bottomright",
    "bottomleft",
    "bottomcenter",]</td>
            <td>string</td>
            <td>true</td>
        </tr> 
        <tr>
            <td>message</td>
            <td>string</td>
            <td>true</td>
        </tr>
        <tr>
            <td>handleClose</td>
            <td>func</td>
            <td>true</td>
        </tr>
        <tr>
            <td>handleCloseDuration</td>
            <td>number</td>
            <td>false</td>
        </tr>
    </tbody>

</table>

<br/>

## How to Contribute ?

<br/>

1. clone this repository
2. install dependencies

```bash
yarn
```

3. checkout to new branch

```bash
git checkout -B new-feature
```

4. modify and push in your branch
5. add pull request and done.

<br/>

## Licence

MIT.

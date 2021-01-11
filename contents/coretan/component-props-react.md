---
title: Component dan Props di React
slug: component-props-react
date: "10 Januari 2021"
---

Jika anda sudah pernah belajar JavaScript , anda pasti tau dengan fungsi dalam JavaScript. Secara konsep, komponen mirip dengan fungsi pada JavaScript. Komponen menerima beberapa masukan (*props*) dan mengembalikan element yang dideskripsikan .


### Class Komponen dan Fungsi Komponen

Cara untuk mendefinisikan sebuah komponen adalah dengan menuliskan fungsi JavaScript atau di React disebut dengan React Hooks

```js
function Hai(props) {
    return <h1>Halo {props.name}</h1>
}
```

atau juga bisa dengan Class Komponen (*ES6* *class*) 

```js
class Hai extends React.Component {
    render() {
        return (
            <h1>Halo {this.props.name}</h1>;
        );
    }
}
```

### Merender Komponen

```js
function Hai(props) {
    return <h1>Halo {props.name}</h1>
}

const el = <Halo name="Bass" />

ReactDOM.render(
    el,
    document.getElementById("root");
);
```

### Menyusun Komponen

Sebuah dialog,tombol,form, di dalam React itu semua dinyatakan sebagai sebuah komponen.

contoh :

```js
const Hai = (props) => {
    return <h1>Halo {props.name}</h1>
}

const App = () => {
    return (
        <>
            <Hai name="Hai"/>
            <Hai name="Usamah"/>
            <Hai name="Basalamah"/>
        </>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById("root")
);

```

### Contoh Lain

Misal kita akan membuat page Login , terdiri dari 3 Komponen

1. Sapaan User
2. Form Login
3. Footer Login
   
sekarang kita buat komponen "Sapaan User" dahulu, kita buat dengan nama file *sapa.js*

```js
import React from "react";

const SapaUser = (props) => {
    return <h6>Halo, {props.user}. <br/> Silahkan Login !</h6>
}

export default SapaUser
```

untuk form login kita buat dengan nama file *form.js*

```js
import React from "react";

const Form = () => {
    return (
        <form>
            <input type="email" placeholder="Masukkan Email" />
            <input type="password" placeholder="Masukkan Password" />
            <button type="submit">Login</button>
        </form>
    )
}

export default Form
```

untuk footer kita buat dengan nama file *footer.js*

```js
import React from "react"

const Footer = () => {
    return (
        <footer>
            <p>&copy; Your Website</p>
        </footer>
    )
}

export default Footer
```

nah, setelah itu kita import 3 komponen itu ke dalam file *app.js*

```js
import React from "react"
import Sapa from "./sapa.js"
import Form from "./form.js"
import Footer from "./footer.js"

const App = () => {
    return (
        <>
            <Sapa/>
            <Form/>
            <Footer/>
        </>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById("root")
);
```

### Selanjutnya Apa ?

pelajari tentang state , lifecycle dalam ReactJs dengan melihat dokumentasinya di [sini](https://id.reactjs.org/docs/state-and-lifecycle.html)

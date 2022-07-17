---
title: Membuat Form Management dengan React Hook Form
slug: membuat-form-management-dengan-react-hook-form
date: 18 Juli 2022
tags: [react hook form, react]
thumbnail: https://images.unsplash.com/photo-1554252116-ed7971ea7623?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9ybXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60
edit: https://github.com/usamahbass/me/blob/develop/contents/coretan/membuat-form-management-dengan-react-hook-form.md
spoiler: Form bisa dibilang bagian penting didalam pengembangan aplikasi, web, maupun sistem lainnya, yakni cara pengguna berinteraksi dengan aplikasi itu sendiri. Memvalidasi data pengguna yang dikemas melalui form adalah suatu hal penting bagi pengembang.
---

**Form** bisa dibilang bagian penting didalam pengembangan aplikasi, web, maupun sistem lainnya, yakni cara pengguna berinteraksi dengan aplikasi itu sendiri. Memvalidasi data pengguna yang dikemas melalui form adalah suatu hal penting bagi pengembang.

## Isi

- <a  href="#reacthookform">Apa itu React Hook Form</a>
- <a  href="#formskema">Membuat Form Management di React Hook Form</a>
- <a href="#kesimpulan">Kesimpulan</a>

<h2  id="reacthookform">Apa Itu React Hook Form</h2>

**React Hook Form** adalah library form manegement javascript yang dikhususkan untuk <a href="https://reactjs.org" target="_blank">React</a>. **React Hook Form** menggunakan `ref` untuk mengontrol input, untuk meminimalisir agar tidak terjadi perenderan ulang atau disebut dengan `re render`.

Salah satu fitur keren **React Hook Form** ini adalah bisa integrasi dengan component UI React karena component UI tersebut mendukung atribut `ref`.

Untuk menginstall **React Hook Form** cukup dengan menjalankan perintah

```sh
npm install react-hook-form
```

<h2 id="formskema">Membuat Form Management di React Hook Form</h2>

```jsx
<form>
  <input type="text" />
  <input type="email" />
</form>
```

Semua input harus berada di dalam child form atau di dalam cakupan form.

Lalu import hook function `useForm` dari `react-hook-form`.

```jsx
import { useForm } from "react-hook-form";
```

lalu di dalam component mu desctruct hasil dari si hook function `useForm` ini

```jsx
const { handleSubmit, register } = useForm();
```

`useForm` mengembalikan objek yang berisi beberapa properties, untuk sekarang kita hanya membutuhkan `handleSubmit` dan `register`

untuk meregister input cukup dengan mengikuti code ini

```jsx
<input type="text" {...register("yourInputName")} />
```

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax" target="_blank">Spread Opertator Syntax</a> adalah implementasi terbaru dari **React Hook Form** yang terdapat di v7 keatas jika anda menggunakan versi dibawah versi 7 maka anda harus menggunakan atribut `register`di prop `ref`, seperti ini:

```jsx
<input type="text" name="yourInputName" ref={register} />
```

yang harus menyertakan prop `name` yang dimana itu harus unik.

Setelah meregistrasikan input, lalu pakai function `handleSubmit` untuk mendapatkan value input yang telah di registrasi tadi.

Function `handleSubmit` memiliki dua parameter fungsi,

- Fungsi yang pertama akan menghasilkan value form saat validasi form berhasil
- Fungsi yang kedua akan menghasilkan pesan error saat validasi gagal.

```jsx
const App = () => {
  
  const handleSubmitForm = (values) => console.log(values);
  const handleErrorsForm = (errors) => console.log(errors);

  return (
    <form onSubmit={handleSubmit(handleSubmitForm, handleErrosForm)}>
    </form>
  );
};
export default App;
```

Setelah mengikuti langkah langkah diatas maka dapat disimpulkan anda memiliki kode full seperti ini

```jsx
import { useForm } from "react-hook-form";

const App = () => {
  const { register, handleSubmit } = useForm();

  const handleSubmitForm = (values) => console.log(values);
  const handleErrorsForm = (errors) => console.log(errors);

  return (
    <form onSubmit={handleSubmit(handleSubmitForm, handleErrorsForm)}>
      <input type="text" {...register("name")} />
      <input type="email" {...register("email")} />
    </form>
  );
};

export default App;
```

<h2 id="kesimpulan">Kesimpulan</h2>

**React Hook Form** adalah library opensource yang bagus untuk ekosistem React, library ini juga bisa digunakan pada **React Native**, dengan library ini management form di aplikasi atau web bisa mudah dibuat.

Untuk selanjutnya, pembahasan mengenai validasi di **React Hook Form** cocok dipelajari.



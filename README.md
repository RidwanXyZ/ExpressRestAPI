# ExpressRestAPI

![ExpressRestAPI](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSykpncxPOINFYXoKS-UHlqujlBdWObpObzcA&usqp=CAU)

## Deskripsi Proyek
ExpressRestAPI adalah proyek yang dibuat oleh seorang siswa SMK jurusan RPL yang sedang mempelajari Node.js dan framework Express. Proyek ini bertujuan untuk melakukan scraping data dari situs web detik.com dan otakudesu.lol. Dengan menggunakan API yang disediakan, Anda dapat mengakses data terpopuler dari detik.com dan mencari informasi tentang anime dari otakudesu.lol.

## Instalasi
Untuk menginstal dan menjalankan proyek ini, ikuti langkah-langkah berikut:

1. Clone repositori ini dengan perintah:
   ```
   $ git clone https://github.com/RidwanXyZ/ExpressRestAPI
   ```
2. Pindah ke direktori ExpressRestAPI:
   ```
   $ cd ExpressRestAPI
   ```
   
3. Install semua dependensi dengan menggunakan npm:
   ```
   $ npm install
   ```
4. Jalankan aplikasi menggunakan Node.js:
   ```
   $ node app
   ```

## Referensi API

### GET /api/detik
Endpoint ini digunakan untuk mendapatkan semua data terpopuler dari detik.com/terpopuler.

Response:
```json
[
  {
    "title": "mega watt",
    "link": "https://anjay.example.com",
    "date": "23 Juni 2023"
  }
]
```

### GET /api/animesearch?judul={judul}
Endpoint ini digunakan untuk mencari informasi anime dari web otakudesu.lol berdasarkan judul yang diberikan.

Parameter:
- `judul` (string): Judul anime yang ingin dicari.

Response:
```json
[
  {
    "title": "Isekai mahou soukan",
    "link": "https://example.com",
    "img": "https://img.example.com"
  }
]
```

Silakan gunakan API references di atas untuk mengakses data yang Anda butuhkan.

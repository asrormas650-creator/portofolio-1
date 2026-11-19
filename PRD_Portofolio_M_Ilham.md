# Product Requirements Document (PRD)

## Website Portofolio Pribadi M. Ilham

**Versi:** 1.0\
**Status:** Draft awal / Tahap 1\
**Platform:** Website statis\
**Target deployment:** GitHub Pages\
**Tanggal:** 19 November 2026

------------------------------------------------------------------------

## 1. Ringkasan Produk

Website portofolio pribadi M. Ilham merupakan website statis yang
berfungsi memperkenalkan identitas, latar belakang akademik, minat
profesional, serta kompetensi teknis kepada dosen, rekan komunitas
koding SIKOKI, dan rekruter magang.

Website dikembangkan menggunakan HTML5 semantik, Tailwind CSS melalui
CDN resmi, dan Vanilla JavaScript. Pendekatan tanpa framework JavaScript
berat dipilih agar struktur proyek sederhana, mudah dipahami, ringan,
dan dapat di-deploy secara langsung ke GitHub Pages.

Pada tahap pertama, ruang lingkup implementasi berfokus pada empat
bagian utama: navbar, hero, tentang saya, dan keahlian.

## 2. Latar Belakang dan Permasalahan

Mahasiswa yang ingin menunjukkan kemampuan teknis dan pengalaman belajar
membutuhkan media perkenalan profesional yang dapat diakses secara
daring. Informasi yang tersebar di berbagai platform belum tentu
memberikan gambaran singkat dan terstruktur mengenai identitas serta
kompetensi pemiliknya.

Website portofolio ini dirancang untuk menjawab kebutuhan tersebut
melalui satu halaman yang: - Menampilkan identitas dan peran profesional
secara langsung. - Menjelaskan latar belakang pendidikan dan aktivitas
komunitas. - Memperlihatkan teknologi yang dipelajari atau digunakan. -
Menyediakan navigasi yang jelas menuju bagian-bagian website. - Menjadi
fondasi untuk penambahan proyek dan kontak pada tahap berikutnya.

## 3. Tujuan Produk

### 3.1 Tujuan Utama

Membangun website portofolio statis yang profesional, responsif,
aksesibel, dan mudah dipelihara sebagai representasi identitas digital
M. Ilham.

### 3.2 Tujuan Pengguna

Pengunjung diharapkan dapat: 1. Mengenali nama, status akademik, dan
peran pemilik website dalam sekitar 10 detik pertama. 2. Memahami
ringkasan latar belakang dan minat pemilik. 3. Mengetahui teknologi dan
tools yang sedang dipelajari atau digunakan. 4. Menemukan navigasi
menuju bagian proyek dan kontak ketika bagian tersebut telah
dikembangkan.

### 3.3 Indikator Keberhasilan

-   Identitas dan peran utama terlihat tanpa perlu menggulir halaman
    pada layar desktop umum.
-   Navigasi desktop dan menu hamburger pada perangkat mobile berfungsi.
-   Seluruh bagian tahap pertama dapat dibuka melalui tautan navigasi.
-   Konten tetap terbaca dan tata letak tidak mengalami horizontal
    overflow pada ukuran layar umum.
-   Website dapat dijalankan secara lokal dan dipublikasikan melalui
    GitHub Pages.
-   Tidak terdapat error JavaScript yang mengganggu fungsi utama.

## 4. Target Pengguna

  -----------------------------------------------------------------------
  Pengguna                Kebutuhan               Informasi yang dicari
  ----------------------- ----------------------- -----------------------
  Dosen                   Menilai identitas,      Profil, pendidikan,
                          minat, dan perkembangan keahlian
                          kompetensi mahasiswa    

  Rekan komunitas SIKOKI  Mengenal minat dan      Tech stack, aktivitas,
                          kemampuan teknis        proyek

  Rekruter magang         Menilai kecocokan awal  Peran, ringkasan
                          kandidat                profil, keahlian,
                                                  proyek

  Pengunjung umum         Memahami siapa pemilik  Identitas dan informasi
                          website                 singkat
  -----------------------------------------------------------------------

## 5. Profil Pemilik Website

Informasi awal yang digunakan dalam konten:

-   **Nama tampilan:** M. Ilham
-   **Program studi:** Sistem Informasi
-   **Semester:** 3
-   **Perguruan tinggi:** Universitas Nusantara PGRI Kediri
-   **Komunitas:** SIKOKI
-   **Peran yang ditampilkan:** Web Developer & UI/UX Enthusiast

Nama lengkap sesuai identitas resmi, foto profil, tautan sosial, dan
rincian kemampuan perlu dikonfirmasi atau diperbarui oleh pemilik
sebelum website dipublikasikan. Jangan menampilkan kemampuan yang belum
benar-benar dimiliki.

## 6. Ruang Lingkup Produk

### 6.1 Fitur Tahap 1 (In Scope)

1.  Navbar sticky dengan logo teks dan tautan navigasi.
2.  Menu hamburger untuk perangkat mobile.
3.  Hero section berisi sapaan, nama, peran, deskripsi, CTA, dan foto
    profil berbentuk lingkaran.
4.  About section berisi latar belakang pendidikan, minat, dan aktivitas
    komunitas.
5.  Tech Stack section berisi kartu teknologi dan tools.
6.  Ikon antarmuka menggunakan Lucide Icons melalui CDN.
7.  Footer sederhana dengan tahun otomatis.
8.  Perilaku dasar aksesibilitas, termasuk label tombol, atribut ARIA,
    dan dukungan tombol Escape pada menu mobile.

### 6.2 Di Luar Ruang Lingkup Tahap 1 (Out of Scope)

-   Halaman detail proyek.
-   Formulir kontak yang mengirim data ke server.
-   Backend, database, autentikasi, dan dashboard admin.
-   Blog atau sistem pengelolaan artikel.
-   Animasi kompleks dan efek interaksi berat.
-   Integrasi API eksternal selain CDN aset yang diperlukan.

Tautan Proyek dan Kontak dapat ditampilkan sebagai navigasi persiapan,
tetapi bagian lengkapnya dijadwalkan pada tahap pengembangan
selanjutnya.

## 7. Persyaratan Fungsional

  -----------------------------------------------------------------------
  ID                      Fitur                   Persyaratan
  ----------------------- ----------------------- -----------------------
  FR-01                   Navbar sticky           Navbar tetap berada di
                                                  bagian atas ketika
                                                  halaman digulir.

  FR-02                   Navigasi desktop        Tautan Tentang,
                                                  Keahlian, Proyek, dan
                                                  Kontak tersedia pada
                                                  layar desktop.

  FR-03                   Menu mobile             Tombol hamburger
                                                  membuka dan menutup
                                                  menu pada layar kecil.

  FR-04                   Aksesibilitas menu      Tombol menu memiliki
                                                  `aria-expanded`,
                                                  `aria-controls`, dan
                                                  label yang sesuai. Menu
                                                  dapat ditutup dengan
                                                  Escape dan setelah
                                                  tautan dipilih.

  FR-05                   Hero                    Menampilkan sapaan,
                                                  nama, peran, deskripsi
                                                  maksimal dua kalimat,
                                                  CTA, dan foto profil.

  FR-06                   CTA proyek              Tombol "Lihat Proyek"
                                                  mengarah ke elemen atau
                                                  section Proyek.

  FR-07                   About                   Menampilkan ringkasan
                                                  pendidikan, minat, dan
                                                  aktivitas komunitas.

  FR-08                   Tech Stack              Menampilkan daftar
                                                  teknologi/tools dalam
                                                  bentuk kartu.

  FR-09                   Ikon                    Ikon Lucide dirender
                                                  pada elemen yang
                                                  sesuai.

  FR-10                   Footer                  Tahun pada footer
                                                  diperbarui otomatis
                                                  menggunakan JavaScript.
  -----------------------------------------------------------------------

## 8. Persyaratan Nonfungsional

### 8.1 Responsivitas

-   Pendekatan desain menggunakan prinsip mobile-first.
-   Tata letak menyesuaikan layar ponsel, tablet, laptop, dan desktop.
-   Tidak ada elemen penting yang terpotong atau menyebabkan scroll
    horizontal.
-   Menu navigasi berubah menjadi hamburger pada breakpoint mobile.

### 8.2 Aksesibilitas

-   Gunakan elemen HTML semantik seperti `header`, `nav`, `main`,
    `section`, `article`, `aside`, dan `footer`.
-   Gunakan struktur heading secara berurutan.
-   Setiap gambar informatif memiliki teks alternatif yang relevan.
-   Tombol dan tautan dapat diakses melalui keyboard.
-   Kontras teks dan latar belakang harus cukup untuk dibaca.
-   Status menu mobile disampaikan melalui atribut ARIA.

### 8.3 Kinerja

-   Hindari framework JavaScript berat.
-   Gunakan aset gambar yang ukurannya dioptimalkan.
-   Gunakan `loading="lazy"` untuk gambar yang tidak berada di area awal
    halaman.
-   Minimalkan JavaScript dan hindari dependensi yang tidak diperlukan.
-   CDN membutuhkan koneksi internet; pertimbangkan aset lokal jika
    kelak diperlukan dukungan offline.

### 8.4 Kompatibilitas

Website ditargetkan dapat digunakan pada versi terbaru browser umum
seperti Google Chrome, Microsoft Edge, Mozilla Firefox, dan Safari.

### 8.5 Pemeliharaan

-   HTML dan JavaScript dipisahkan sesuai tanggung jawabnya.
-   Kode diberi komentar singkat pada awal setiap section.
-   Gunakan penamaan ID dan class yang konsisten.
-   Hindari duplikasi logika JavaScript.

## 9. Panduan UI/UX dan Visual

### 9.1 Arah Visual

Tema yang digunakan adalah dark mode elegan, modern, minimalis, dan
berorientasi pada keterbacaan.

### 9.2 Palet Warna

  Penggunaan        Warna
  ----------------- -----------------------
  Latar utama       `slate-950`
  Permukaan/kartu   `slate-900`
  Border            `slate-800`
  Teks utama        `white` / `slate-100`
  Teks sekunder     `slate-400`
  Aksen utama       `emerald-400`
  Aksen pendukung   `cyan-400`

### 9.3 Tipografi

-   **Plus Jakarta Sans:** judul, heading, dan elemen yang perlu
    penekanan.
-   **Inter:** paragraf, deskripsi, label, dan teks pendukung.

### 9.4 Komponen Visual

-   Navbar dengan latar semi-transparan dan efek blur.
-   Hero dengan hierarki teks yang jelas, CTA menonjol, serta foto
    profil dalam bingkai lingkaran.
-   Kartu About dan Tech Stack menggunakan permukaan slate-900 dan
    border slate-800.
-   Ikon Lucide digunakan secara konsisten dan tidak menggantikan label
    teks penting.
-   Transisi visual dibuat ringan dan tidak mengganggu aksesibilitas.

## 10. Struktur Informasi dan Konten

### 10.1 Navbar

-   Logo teks: M. Ilham.
-   Tautan: Tentang, Keahlian, Proyek, Kontak.
-   Tombol hamburger untuk mobile.

### 10.2 Hero Section

-   Sapaan singkat.
-   Nama pemilik.
-   Peran: Web Developer & UI/UX Enthusiast.
-   Deskripsi maksimal dua kalimat.
-   CTA utama: "Lihat Proyek".
-   Foto profil berbentuk lingkaran.

### 10.3 About Section

-   Ringkasan status sebagai mahasiswa Sistem Informasi semester 3.
-   Universitas Nusantara PGRI Kediri.
-   Aktivitas di komunitas koding SIKOKI.
-   Minat pada pengembangan web dan UI/UX.

### 10.4 Tech Stack Section

Daftar awal yang dapat ditampilkan setelah diverifikasi: - HTML5 -
CSS3 - JavaScript - Tailwind CSS - Figma - Git dan GitHub

Daftar harus mencerminkan kemampuan aktual. Kartu teknologi tidak boleh
memberi kesan bahwa seluruh teknologi telah dikuasai secara profesional
apabila masih dalam tahap pembelajaran.

## 11. Teknologi dan Arsitektur

  Teknologi            Peran
  -------------------- ----------------------------------------------
  HTML5                Struktur dokumen dan elemen semantik
  Tailwind CSS CDN     Styling dan layout responsif
  Vanilla JavaScript   Interaksi menu mobile dan perilaku sederhana
  Google Fonts         Tipografi Plus Jakarta Sans dan Inter
  Lucide Icons CDN     Ikon antarmuka
  GitHub Pages         Hosting website statis

### 11.1 Struktur Folder

``` text
portfolio-ilham/
├── index.html
└── script.js
```

Tidak diperlukan proses build atau instalasi package manager untuk tahap
awal. File dapat dibuka langsung melalui browser atau dijalankan
menggunakan ekstensi server lokal seperti Live Server.

### 11.2 Pembagian Tanggung Jawab

-   `index.html`: metadata, pemanggilan CDN, konfigurasi Tailwind,
    struktur semantik, konten, dan komponen visual.
-   `script.js`: inisialisasi ikon, menu hamburger, penutupan menu,
    dukungan Escape, dan tahun footer.

## 12. Alur Pengguna

1.  Pengunjung membuka website.
2.  Pengunjung melihat navbar dan Hero Section.
3.  Pengunjung mengenali nama, peran, dan ringkasan profil.
4.  Pengunjung memilih CTA atau navigasi.
5.  Pengunjung membaca About untuk memahami latar belakang.
6.  Pengunjung melihat Tech Stack untuk mengetahui kompetensi teknis.
7.  Pada pengembangan berikutnya, pengunjung dapat membuka daftar proyek
    dan informasi kontak.

## 13. Kriteria Penerimaan (Acceptance Criteria)

Tahap pertama dinyatakan memenuhi kebutuhan apabila:

-   [ ] Website memiliki satu file `index.html` dan satu file
    `script.js`.
-   [ ] Dokumen menggunakan `lang="id"` dan meta viewport.
-   [ ] Navbar memiliki posisi sticky.
-   [ ] Navigasi desktop menampilkan empat tautan yang diminta.
-   [ ] Menu hamburger dapat dibuka dan ditutup pada layar mobile.
-   [ ] Menu mobile tertutup setelah tautan dipilih.
-   [ ] Menu mobile dapat ditutup menggunakan tombol Escape.
-   [ ] Hero menampilkan sapaan, nama, peran, deskripsi maksimal dua
    kalimat, CTA, dan foto profil lingkaran.
-   [ ] CTA "Lihat Proyek" memiliki tujuan navigasi yang valid.
-   [ ] About menjelaskan latar belakang dan minat pemilik.
-   [ ] Tech Stack menampilkan kartu teknologi/tools.
-   [ ] Ikon Lucide tampil dengan benar.
-   [ ] Komentar HTML tersedia pada awal setiap section.
-   [ ] Layout dapat digunakan pada layar mobile dan desktop.
-   [ ] Tidak ada error JavaScript yang menghambat fitur.
-   [ ] Website dapat dipublikasikan melalui GitHub Pages.

## 14. Rencana Pengujian

  -----------------------------------------------------------------------
  ID                      Skenario                Hasil yang diharapkan
  ----------------------- ----------------------- -----------------------
  TC-01                   Buka website pada       Navbar desktop dan
                          desktop                 seluruh konten tampil
                                                  rapi.

  TC-02                   Buka website pada       Menu desktop diganti
                          ponsel                  tombol hamburger.

  TC-03                   Tekan tombol hamburger  Menu mobile muncul dan
                                                  `aria-expanded` menjadi
                                                  true.

  TC-04                   Tekan tombol hamburger  Menu mobile tertutup
                          kembali                 dan `aria-expanded`
                                                  menjadi false.

  TC-05                   Pilih tautan pada menu  Halaman menuju section
                          mobile                  dan menu tertutup.

  TC-06                   Tekan Escape ketika     Menu tertutup dan fokus
                          menu terbuka            kembali ke tombol
                                                  hamburger.

  TC-07                   Tekan CTA Lihat Proyek  Browser menuju target
                                                  section Proyek.

  TC-08                   Periksa gambar profil   Gambar tampil,
                                                  berbentuk lingkaran,
                                                  dan memiliki alt text.

  TC-09                   Periksa ikon            Ikon Lucide tampil
                                                  tanpa placeholder yang
                                                  tertinggal.

  TC-10                   Uji beberapa lebar      Tidak ada konten
                          layar                   terpotong atau scroll
                                                  horizontal yang tidak
                                                  diperlukan.

  TC-11                   Periksa footer          Tahun tampil otomatis
                                                  sesuai tahun saat
                                                  halaman dibuka.

  TC-12                   Buka melalui GitHub     Semua aset CDN dan
                          Pages                   tautan internal bekerja
                                                  dengan benar.
  -----------------------------------------------------------------------

## 15. Deployment ke GitHub Pages

Rencana publikasi: 1. Buat repository GitHub, misalnya
`portfolio-ilham`. 2. Masukkan `index.html` dan `script.js` ke root
repository. 3. Commit dan push file ke branch utama. 4. Buka **Settings
→ Pages** pada repository. 5. Pada bagian Build and deployment, pilih
deploy dari branch. 6. Pilih branch utama dan folder root (`/`), lalu
simpan. 7. Tunggu proses deployment selesai dan uji URL GitHub Pages.

Pastikan nama file utama tepat `index.html`, kapitalisasi nama file
konsisten, dan seluruh tautan aset menggunakan path yang sesuai. GitHub
Pages bersifat statis sehingga fitur yang memerlukan backend tidak
termasuk dalam tahap ini.

## 16. Risiko dan Mitigasi

  -----------------------------------------------------------------------
  Risiko                  Dampak                  Mitigasi
  ----------------------- ----------------------- -----------------------
  CDN tidak dapat diakses Font, ikon, atau        Sediakan fallback font
                          styling eksternal tidak dan pertimbangkan
                          tampil                  menyimpan aset lokal.

  Foto profil masih       Identitas visual tidak  Ganti dengan foto milik
  berupa gambar contoh    akurat                  sendiri sebelum
                                                  publikasi.

  Konten keahlian terlalu Kredibilitas portofolio Cantumkan hanya
  dilebihkan              menurun                 teknologi yang
                                                  benar-benar pernah
                                                  dipelajari/digunakan.

  Tautan Proyek/Kontak    Pengunjung menemukan    Tandai sebagai fitur
  belum memiliki section  bagian kosong           tahap berikutnya dan
  lengkap                                         lengkapi sebelum
                                                  peluncuran final.

  Perubahan breakpoint    Pengalaman mobile       Uji pada beberapa
  menyebabkan layout      menurun                 ukuran viewport.
  rusak                                           

  Nama file atau path     Aset gagal dimuat       Gunakan path relatif
  salah di GitHub Pages                           dan periksa
                                                  kapitalisasi file.
  -----------------------------------------------------------------------

## 17. Roadmap Pengembangan

### Tahap 1 --- Fondasi Portofolio

-   Navbar sticky dan menu mobile.
-   Hero Section.
-   About Section.
-   Tech Stack Section.
-   Footer dan interaksi dasar.

### Tahap 2 --- Portofolio Proyek

-   Daftar proyek unggulan.
-   Kartu proyek dengan deskripsi, teknologi, tautan demo, dan
    repository.
-   Filter kategori proyek jika jumlah proyek sudah memadai.

### Tahap 3 --- Kontak dan Kredibilitas

-   Informasi kontak.
-   Tautan GitHub, LinkedIn, dan platform profesional lain yang relevan.
-   CV yang dapat diakses jika sudah siap.
-   Validasi seluruh informasi profil.

### Tahap 4 --- Optimasi dan Peluncuran

-   Audit aksesibilitas.
-   Optimasi ukuran gambar dan performa.
-   Pemeriksaan metadata SEO dan social sharing.
-   Pengujian lintas browser dan perangkat.
-   Deployment final ke GitHub Pages.

## 18. Asumsi dan Hal yang Perlu Dikonfirmasi

-   Nama "M. Ilham" merupakan nama tampilan sementara; gunakan nama
    lengkap yang memang ingin dipublikasikan.
-   Foto pada Hero harus diganti dengan foto profil milik pemilik
    website.
-   Daftar teknologi adalah daftar awal dan perlu disesuaikan dengan
    kemampuan aktual.
-   URL GitHub, LinkedIn, email, dan kontak lain belum ditentukan.
-   Section Proyek dan Kontak disiapkan sebagai tujuan navigasi, tetapi
    konten lengkapnya berada di luar tahap pertama.

## 19. Definisi Selesai (Definition of Done)

Pekerjaan tahap pertama dianggap selesai ketika seluruh kriteria
penerimaan terpenuhi, website berjalan tanpa error yang mengganggu,
tampilan responsif dan dapat diakses, konten identitas telah
diverifikasi, serta versi statis berhasil dipublikasikan melalui GitHub
Pages.

------------------------------------------------------------------------

**Dokumen ini merupakan PRD tahap awal.** Perubahan kebutuhan, konten,
atau fitur pada tahap berikutnya perlu dicatat sebagai revisi agar
implementasi tetap terarah dan ruang lingkup proyek tidak melebar tanpa
kendali.

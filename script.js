let wisata = JSON.parse(localStorage.getItem('wisata')) || [
  {
    nama: "Pantai Kuta",
    kategori: "Alam",
    harga: "Rp 15.000",
    lokasi: "Pantai Kuta Bali",
    deskripsi: "Pantai indah dengan pasir putih dan ombak yang terkenal.",
    foto: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Kuta_Beach_Bali.JPG"
  },
  {
    nama: "Gudeg Yogyakarta",
    kategori: "Kuliner",
    harga: "Rp 20.000 / porsi",
    lokasi: "Yogyakarta",
    deskripsi: "Makanan khas Yogyakarta berbahan nangka muda.",
    foto: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Gudeg_Yogyakarta.jpg"
  },
  {
    nama: "Candi Borobudur",
    kategori: "Religi",
    harga: "Rp 50.000",
    lokasi: "Magelang Jawa Tengah",
    deskripsi: "Candi Buddha terbesar di dunia dan warisan budaya dunia.",
    foto: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Borobudur-Nothwest-view.jpg"
  }
];

let kategoriAktif = 'all';
let keyword = '';

function tampilWisata() {
  const list = document.getElementById('listWisata');
  if (!list) return;

  list.innerHTML = '';

  wisata
    .filter(w =>
      (kategoriAktif === 'all' || w.kategori === kategoriAktif) &&
      (w.nama.toLowerCase().includes(keyword) ||
       w.deskripsi.toLowerCase().includes(keyword))
    )
    .forEach((w, i) => {
      list.innerHTML += `
        <div class="card">
          <img src="${w.foto}">
          <h3>${w.nama}</h3>
          <p><b>Kategori:</b> ${w.kategori}</p>
          <a href="detail.html?id=${i}" class="btn">Lihat Detail</a>
        </div>
      `;
    });
}

function filterKategori(kat) {
  kategoriAktif = kat;
  tampilWisata();
}

function cariWisata() {
  keyword = document.getElementById('searchInput').value.toLowerCase();
  tampilWisata();
}

tampilWisata();

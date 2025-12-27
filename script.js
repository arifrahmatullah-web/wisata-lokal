let wisata = JSON.parse(localStorage.getItem('wisata')) || [];


function tampilWisata() {
const list = document.getElementById('listWisata');
if (!list) return;
list.innerHTML = '';
wisata.forEach((w, i) => {
list.innerHTML += `
<div class="card">
<h3>${w.nama}</h3>
<img src="${w.foto}">
<p>${w.kategori}</p>
<a href="detail.html?id=${i}">Lihat Detail</a>
<button onclick="hapusWisata(${i})">Hapus</button>
</div>`;
});
}


function tambahWisata() {
wisata.push({
nama: nama.value,
kategori: kategori.value,
harga: harga.value,
lokasi: lokasi.value,
foto: foto.value,
deskripsi: deskripsi.value
});
localStorage.setItem('wisata', JSON.stringify(wisata));
tampilWisata();
}


function hapusWisata(i) {
wisata.splice(i,1);
localStorage.setItem('wisata', JSON.stringify(wisata));
tampilWisata();
}


function detailWisata() {
const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const w = wisata[id];
document.getElementById('detail').innerHTML = `
<div class="card">
<h2>${w.nama}</h2>
<img src="${w.foto}">
<p>${w.deskripsi}</p>
<p><b>Kategori:</b> ${w.kategori}</p>
<p><b>Harga:</b> ${w.harga}</p>
<p><b>Lokasi:</b> ${w.lokasi}</p>
<iframe width="100%" height="250" src="https://maps.google.com/maps?q=${w.lokasi}&output=embed"></iframe>
</div>`;
}


tampilWisata();
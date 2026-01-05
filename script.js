// DOM Elements
const navbar = document.getElementById('navbar');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const backToTopBtn = document.getElementById('back-to-top');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Destination Data
const destinations = [
    {
        id: 1,
        name: "Gili Trawangan",
        category: "Pulau & Pantai",
        desc: "Pulau terbesar dari tiga Gili di barat laut Lombok. Trawangan adalah satu-satunya gili yang ketinggiannya di atas permukaan laut cukup signifikan. Dengan panjang 3 km dan lebar 2 km, Trawangan berpopulasi sekitar 800 jiwa. Di Trawangan tidak terdapat kendaraan bermotor, karena tidak diizinkan oleh aturan lokal. Sarana transportasi yang lazim adalah sepeda dan cidomo. Gili Trawangan terkenal dengan keindahan terumbu karang yang cocok untuk snorkeling dan diving, serta kehidupan malam yang meriah.",
        image: "https://thelangkahtravel.com/wp-content/uploads/2019/05/Gili-Trawangan-Lombok-1-1.jpg",
        details: {
            time: "24 Jam",
            rating: "★★★★☆",
            price: "Gratis (Masuk Pulau)",
            features: "Kehidupan Malam, Snorkeling, Menyelam, Bersepeda"
        },
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15797.106208960246!2d116.03541665!3d-8.35166665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcc01b0f588c2cd%3A0x62c0b3d87042540d!2sGili%20Trawangan!5e0!3m2!1sid!2sid!4v1716900000000!5m2!1sid!2sid"
    },
    {
        id: 2,
        name: "Air Terjun Tiu Kelep",
        category: "Alam & Petualangan",
        desc: "Air Terjun Tiu Kelep terletak di Desa Senaru, Kecamatan Bayan, Kabupaten Lombok Utara. Air terjun ini berada di kaki Gunung Rinjani. Nama Tiu Kelep diambil dari bahasa Sasak yang berarti Kolam Terbang. Air terjun ini memiliki ketinggian sekitar 42 meter dan bertingkat-tingkat. Debit airnya cukup deras dan besar. Konon, mandi di air terjun ini dipercaya dapat membuat awet muda.",
        image: "https://gerbanglombok.co.id/wp-content/uploads/2018/05/Tiu-Kelep-1.jpg",
        details: {
            time: "07.00 - 17.00",
            rating: "★★★★★",
            price: "Rp 10.000 (WNA Rp 20.000)",
            features: "Trekking, Alam, Fotografi"
        },
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.667954930353!2d116.4045833!3d-8.3038889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcc47e5b5b5b5b5%3A0x5b5b5b5b5b5b5b5b!2sAir%20Terjun%20Tiu%20Kelep!5e0!3m2!1sid!2sid!4v1716900000000!5m2!1sid!2sid"
    },
    {
        id: 3,
        name: "Air Terjun Sendang Gile",
        category: "Alam & Santai",
        desc: "Air Terjun Sendang Gile adalah air terjun yang terletak di desa Senaru, kabupaten Lombok Utara, provinsi Nusa Tenggara Barat. Air terjun ini berada di pintu masuk pendakian Gunung Rinjani. Untuk mencapai lokasi air terjun ini pengunjung harus melalui ratusan anak tangga yang sudah tertata rapi. Ketinggian air terjun ini sekitar 31 meter. Suasana di sekitar sangat sejuk dan asri.",
        image: "https://media.istockphoto.com/id/831411546/id/foto/air-terjun-sendang-gile-adalah-air-terjun-yang-menakjubkan-di-lombok.jpg?s=612x612&w=0&k=20&c=Lv_EwPTRPkBr2DvXCDKHKjc_gqnAvGuwoUoaRSvsZMA=",
            time: "07.00 - 17.00",
            rating: "★★★★☆",
            price: "Rp 10.000",
            features: "Air Terjun, Mendaki, Ramah Keluarga"
        },
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.604609804588!2d116.41703277490278!3d-8.311756291723555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcc47cf4dc5f23d%3A0xe67b0775d7145293!2sAir%20Terjun%20Sendang%20Gile!5e0!3m2!1sen!2sid!4v1716904000000!5m2!1sen!2sid"
    },
    {
        id: 4,
        name: "Bukit Nipah",
        category: "Pemandangan & Kuliner",
        desc: "Bukit Nipah menawarkan pemandangan laut yang menakjubkan dengan latar belakang tiga gili (Trawangan, Meno, Air). Tempat ini menjadi favorit untuk menikmati matahari terbenam sambil menyantap hidangan laut segar, terutama ikan bakar, di warung-warung yang berjejer di sepanjang jalan.",
        image: "https://firstlomboktour.com/wp-content/uploads/2019/09/Bukit-Nipah-sumber-ig-harryhermanan.jpg",
        details: {
            time: "08.00 - 22.00",
            rating: "★★★★☆",
            price: "Gratis (Bayar Makan)",
            features: "Sunset, Makanan Laut, Fotografi"
        },
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.992225883656!2d116.03588937490333!3d-8.40243679163624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcc082103333333%3A0x3333333333333333!2sPantai%20Nipah!5e0!3m2!1sen!2sid!4v1716904000000!5m2!1sen!2sid"
    },
    {
        id: 5,
        name: "Pantai Sire",
        category: "Pantai",
        desc: "Pantai Sire terkenal dengan hamparan pasir putih yang luas dan air laut yang sangat tenang, membuatnya aman untuk berenang dan bermain kano. Pantai ini juga memiliki lapangan golf kelas dunia di tepi pantai dan sering menjadi lokasi upacara adat Larung Sesaji.",
        image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?q=80&w=1935&auto=format&fit=crop",
        details: {
            time: "24 Jam",
            rating: "★★★★☆",
            price: "Parkir Saja",
            features: "Berenang, Kayak, Piknik"
        },
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15796.386001090335!2d116.11305435!3d-8.36944445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcc041444444445%3A0x4444444444444444!2sPantai%20Sire!5e0!3m2!1sen!2sid!4v1716904000000!5m2!1sen!2sid"
    },
    {
        id: 6,
        name: "Air Terjun Kerta Gangga",
        category: "Hidden Gem",
        desc: "Air Terjun Kerta Gangga memiliki keunikan berupa kolam-kolam alami yang bertingkat-tingkat di tengah area persawahan dan perbukitan. Pemandangan hijau di sekitarnya sangat memanjakan mata. Tempat ini cocok bagi mereka yang mencari ketenangan dan ingin menjauh dari keramaian.",
        image: "https://datulomboktour.com/wp-content/uploads/2020/02/Air-Terjun-Kerta-Gangga-Lombok1.jpg",
        details: {
            time: "08.00 - 17.00",
            rating: "★★★★☆",
            price: "Rp 15.000",
            features: "Kolam Alami, Sawah, Santai"
        },
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.585507914041!2d116.2341666749028!3d-8.31422799172111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcc1a21e4c7d0d9%3A0x4a4a4a4a4a4a4a4a!2sKerta%20Gangga%20Waterfall!5e0!3m2!1sen!2sid!4v1716904000000!5m2!1sen!2sid"
    },
    {
        id: 7,
        name: "Museum Desa Genggelang",
        category: "Budaya & Sejarah",
        desc: "Museum Desa Genggelang menyimpan berbagai koleksi benda bersejarah dan artefak yang menceritakan peradaban masyarakat Lombok Utara di masa lampau. Pengunjung dapat belajar tentang sejarah, budaya, dan tradisi masyarakat setempat.",
        image: "https://jadesta.kemenparekraf.go.id/imgpost/75937.jpg",
        details: {
            time: "09.00 - 16.00",
            rating: "★★★★☆",
            price: "Donasi",
            features: "Sejarah, Budaya, Edukasi"
        },
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.362148174785!2d116.2081944!3d-8.3344444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcc19ab3b3b3b3b%3A0x7777777777777777!2sDesa%20Wisata%20Genggelang!5e0!3m2!1sen!2sid!4v1716904000000!5m2!1sen!2sid"
    },
    {
        id: 8,
        name: "Pantai Koloh Penggolong",
        category: "Jalan & Pantai",
        desc: "Pantai Koloh Penggolong sering disebut sebagai 'Private Beach' karena suasananya yang sepi dan tenang. Pasir pantainya unik, berbentuk butiran kasar menyerupai merica. Air lautnya jernih, dan tempat ini sangat cocok untuk berkemah (camping) di tepi pantai.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKz0DhmsZxBI9UbK-vucEaq8qTqp9juJdaPQ&s",
        details: {
            time: "24 Jam",
            rating: "★★★★☆",
            price: "Gratis",
            features: "Berkemah, Tenang, Pasir Putih"
        },
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31590.87654321098!2d116.15!3d-8.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMjEnMDAuMCJTIDExNsKwMDknMDAuMCJF!5e0!3m2!1sen!2sid!4v1625641234567!5m2!1sen!2sid" // Placeholder location near Sire
    },
    {
        id: 9,
        name: "Rumah Pohon Gangga",
        category: "Foto & Pemandangan",
        desc: "Rumah Pohon Gangga adalah destinasi wisata kekinian yang menawarkan spot foto menarik di atas pohon dengan latar belakang pemandangan lembah hijau dan laut biru dari kejauhan. Tempat ini sangat populer di kalangan anak muda pemburu foto Instagramable.",
        image: "https://www.gemasulawesi.com/storage/photos/10012024023650.webp",
        details: {
            time: "07.00 - 18.00",
            rating: "★★★☆☆",
            price: "Rp 5.000",
            features: "Spot Foto, Pemandangan, Alam"
        },
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.5!2d116.2!3d-8.31!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMTgnMzYuMCJTIDExNsKwMTInMDAuMCJF!5e0!3m2!1sen!2sid!4v1625641234567!5m2!1sen!2sid" // Placeholder Gangga area
    },
    {
        id: 10,
        name: "Mata Air Kakong",
        category: "Alam & Desa",
        desc: "Mata Air Kakong adalah sumber mata air alami yang sangat jernih dan dingin. Terletak di tengah suasana pedesaan yang asri, tempat ini menjadi lokasi favorit warga lokal dan wisatawan untuk mandi dan menyegarkan diri. Airnya dipercaya memiliki khasiat kesehatan.",
        image: "https://assets.pikiran-rakyat.com/crop/0x0:0x0/720x0/webp/photo/2023/05/16/2425704867.jpeg",
        details: {
            time: "07.00 - 17.00",
            rating: "★★★★☆",
            price: "Rp 5.000",
            features: "Mata Air Alami, Berenang, Suasana Pedesaan"
        },
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.5!2d116.22!3d-8.30!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMTgnMDAuMCJTIDExNsKwMTMnMTIuMCJF!5e0!3m2!1sen!2sid!4v1625641234567!5m2!1sen!2sid" // Placeholder Kakong area
    },
    {
        id: 11,
        name: "Masjid Kuno Bayan Beleq",
        category: "Religi & Warisan",
        desc: "Masjid Kuno Bayan Beleq adalah masjid tertua di Pulau Lombok, berdiri sejak abad ke-16. Masjid ini memiliki arsitektur unik dengan dinding dari anyaman bambu dan atap rumbia. Masjid ini menjadi saksi bisu sejarah penyebaran Islam di Lombok dan masih digunakan untuk ritual adat tertentu.",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Bayan_Beleq_Mosque%2C_Lombok%2C_Indonesia.jpg",
        details: {
            time: "08.00 - 17.00",
            rating: "★★★★★",
            price: "Donasi",
            features: "Warisan, Sejarah, Situs Religi"
        },
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.697472093786!2d116.4258333!3d-8.2913889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcc48705c5c5c5d%3A0x5c5c5c5c5c5c5c5c!2sMasjid%20Kuno%20Bayan%20Beleq!5e0!3m2!1sen!2sid!4v1716904000000!5m2!1sen!2sid"
    },
    {
        id: 12,
        name: "Opak-opak",
        category: "Kuliner Khas",
        desc: "Opak-opak adalah kerupuk tradisional khas Lombok Utara yang terbuat dari ubi kayu dan kelapa, dipanggang di atas bara api hingga renyah. Sering disajikan sebagai pelengkap pelecing kangkung atau dinikmati langsung sebagai camilan sehat.",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhJ5-EERM_hkvvv_eACACBMP7T5xd3sxu6KijtSolCiuUhBGEzx0ShMX5K0xYwXTD0dGV6o6rJYxJp_KZxSu-kMV_xyWRCensrPKLH3txQPXvHGCb7mUoh00cIccLOTJtmqVzsJFM96Nhc/s1600/Opak-Pelecing-Khas-Lombok-Utara.jpg",
        details: {
            time: "08.00 - 22.00",
            rating: "★★★★☆",
            price: "Rp 5.000 - Rp 10.000",
            features: "Kuliner, Tradisional, Oleh-oleh"
        },
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15797.776606399583!2d116.1488889!3d-8.3586111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcc048674747475%3A0x8888888888888888!2sKecamatan%20Tanjung!5e0!3m2!1sen!2sid!4v1716904000000!5m2!1sen!2sid" // Placeholder Tanjung area
    }
];

// Sticky Navbar Scroll Effect
if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '0.5rem 0';
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            navbar.style.padding = '1rem 0';
            navbar.style.boxShadow = 'none';
        }

        // Show/Hide Back to Top Button
        if (backToTopBtn) {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        }
    });
}

// Mobile Menu Toggle
if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks) navLinks.classList.remove('active');
    });
});

// Back to Top Function
if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Dark Mode Toggle
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        // Change Icon
        if (body.classList.contains('dark-mode')) {
            themeToggle.textContent = '☀️';
        } else {
            themeToggle.textContent = '🌙';
        }
    });
}

// Global Dark Mode Persistence (Simple)
const isDarkMode = localStorage.getItem('darkMode') === 'true';
if (isDarkMode) {
    body.classList.add('dark-mode');
    if (themeToggle) themeToggle.textContent = '☀️';
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        // Toggle logic already above, just saving state here
        localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
    });
}


// DETAIL PAGE LOGIC
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function loadDetailPage() {
    const id = getQueryParam('id');
    const path = window.location.pathname;

    // Check if we are on detail.html
    if (path.includes('detail.html')) {
        if (!id) {
            // Redirect to home if no ID
            window.location.href = 'index.html';
            return;
        }

        const destination = destinations.find(d => d.id == id);

        if (destination) {
            document.title = `${destination.name} — Travel Explore`;

            // Hero
            const heroSection = document.getElementById('detail-hero');
            heroSection.style.backgroundImage = `url('${destination.image}')`;

            document.getElementById('detail-category').textContent = destination.category;
            document.getElementById('detail-title').textContent = destination.name;

            // Info
            document.getElementById('detail-time').textContent = destination.details.time;
            document.getElementById('detail-price').textContent = destination.details.price;
            document.getElementById('detail-rating').textContent = destination.details.rating;
            document.getElementById('detail-features').textContent = destination.details.features;

            // Desc
            document.getElementById('detail-desc').textContent = destination.desc;

            // Map
            const mapFrame = document.getElementById('detail-map');
            mapFrame.src = destination.mapUrl;

            // Google Maps Link (Open in new tab)
            // Extract lat/long or query from embed URL is hard, so we just link to a search query
            const mapsLink = document.getElementById('google-maps-link');
            mapsLink.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(destination.name + " Lombok tara")}`;

        } else {
            // Handle not found
            document.getElementById('detail-title').textContent = "Destinasi Tidak Ditemukan";
        }
    }
}

// Run Detail Page Load
document.addEventListener('DOMContentLoaded', loadDetailPage);

// Smooth Scroll for Anchor Links (Backup for older browsers)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Only run if on index.html or same page anchors
        if (window.location.pathname.includes('index.html') || window.location.pathname === '/' || this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

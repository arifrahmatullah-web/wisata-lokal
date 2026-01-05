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
        image: "data:image/jpeg;base64,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",
        details: {
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

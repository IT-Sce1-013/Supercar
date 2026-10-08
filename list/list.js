/**
 * SUPERCAR P - Exclusive Luxury & Supercar Dealership
 * Core Client-side Logic for Navigation & Car Inventory Showcase
 */

// ==========================================
// 1. CAR INVENTORY DATASET
// ==========================================
const CAR_DATABASE = [
  {
    id: 1,
    name: "Ferrari F80",
    brand: "Ferrari",
    type: "Hypercar",
    year: 2025,
    price: 135000000,
    priceDisplay: "135,000,000",
    image: "pic/F80.png",
    hp: 1200,
    acceleration: "2.15s",
    topSpeed: "350 km/h",
    engine: "3.0L Twin-Turbo V6 Hybrid",
    transmission: "8-Speed Dual-Clutch F1",
    mileage: "50 km (New Car)",
    color: "Rosso Corsa Speciale",
    status: "Limited Edition (799 คันทั่วโลก)",
    featured: true,
    badges: ["Hypercar", "1,200 HP", "New Arrival"],
    description: "ม้าลำพองตัวท็อปเจเนอเรชันใหม่ล่าสุด ถ่ายทอดดีเอ็นเอแชมป์เลอม็องส์ 24 ชั่วโมง 499P สู่รถถนนที่แรงและล้ำสมัยที่สุดของเฟอร์รารี่ พร้อมระบบขับเคลื่อนทุกล้อไฟฟ้า E-4WD"
  },
  {
    id: 2,
    name: "Porsche 911 GT3 RS (992)",
    brand: "Porsche",
    type: "Track-Focused",
    year: 2024,
    price: 28900000,
    priceDisplay: "28,900,000",
    image: "pic/GT3-911.png",
    hp: 525,
    acceleration: "3.2s",
    topSpeed: "296 km/h",
    engine: "4.0L Naturally Aspirated Boxer-6",
    transmission: "7-Speed PDK",
    mileage: "1,200 km",
    color: "Arctic Grey / Pyro Red Accents",
    status: "Weissach Package",
    featured: true,
    badges: ["Track-Focused", "Weissach Pack", "NA 9,000 RPM"],
    description: "อาวุธสำหรับแทร็กเดย์ที่จดทะเบียนวิ่งบนถนนได้จริง มาพร้อมระบบแอร์โรไดนามิกส์แบบแอคทีฟ DRS และชุดแต่ง Weissach Package คาร์บอนไฟเบอร์รอบคัน"
  },
  {
    id: 3,
    name: "Nissan GT-R Nismo (R35 Special Edition)",
    brand: "Nissan",
    type: "Supercar",
    year: 2024,
    price: 18500000,
    priceDisplay: "18,500,000",
    image: "pic/GTR-R35.png",
    hp: 600,
    acceleration: "2.8s",
    topSpeed: "315 km/h",
    engine: "3.8L Twin-Turbo VR38DETT V6 (Takumi Hand-built)",
    transmission: "6-Speed Dual Clutch ATTESA E-TS AWD",
    mileage: "850 km",
    color: "Stealth Gray / Clear Carbon Hood",
    status: "Collector Edition",
    featured: true,
    badges: ["Godzilla", "Nismo Special", "AWD"],
    description: "ตำนานก๊อดซิลล่ารุ่นสั่งลาที่ประกอบมือโดยช่างทาคูมิ ฝากระโปรงหน้าคาร์บอนเคลือบเงา ล้อเรย์ Forged ขนาด 20 นิ้ว พร้อมเบรกคาร์บอนเซรามิก Brembo ขนาดมหึมา"
  },
  {
    id: 4,
    name: "Lamborghini Revuelto",
    brand: "Lamborghini",
    type: "Hypercar",
    year: 2024,
    price: 49500000,
    priceDisplay: "49,500,000",
    image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=800&q=80",
    hp: 1015,
    acceleration: "2.5s",
    topSpeed: "350 km/h",
    engine: "6.5L Naturally Aspirated V12 + 3 Electric Motors",
    transmission: "8-Speed Dual Clutch",
    mileage: "300 km",
    color: "Giallo Inti (Pearl Yellow)",
    status: "HPEV V12 Hybrid",
    featured: false,
    badges: ["V12 HPEV", "1,015 HP", "Bespoke"],
    description: "กระทิงดุสายพันธุ์แรกที่มาพร้อมเครื่องยนต์ V12 ไฮบริด ให้กำลังทะลุ 1,015 แรงม้า เสียงคำรามที่เป็นเอกลักษณ์ ผสานเทคโนโลยีโมโนค็อกคาร์บอนใหม่ล่าสุด"
  },
  {
    id: 5,
    name: "McLaren 750S Spider",
    brand: "McLaren",
    type: "Supercar",
    year: 2024,
    price: 36000000,
    priceDisplay: "36,000,000",
    image: "https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=800&q=80",
    hp: 750,
    acceleration: "2.8s",
    topSpeed: "332 km/h",
    engine: "4.0L Twin-Turbo V8",
    transmission: "7-Speed Seamless Shift Gearbox (SSG)",
    mileage: "1,500 km",
    color: "Papaya Spark (MSO)",
    status: "Convertible / Hardtop",
    featured: false,
    badges: ["Spider", "MSO Paint", "Lightweight"],
    description: "ซูเปอร์คาร์เปิดประทุนที่เบาที่สุดในคลาส โครงสร้าง Monocage II-S คาร์บอนไฟเบอร์ เปิดปิดประทุนในเวลาเพียง 11 วินาที สมรรถนะและความคมในการขับขี่ที่ไร้คู่แข่ง"
  },
  {
    id: 6,
    name: "Rolls-Royce Spectre",
    brand: "Rolls-Royce",
    type: "Ultra-Luxury",
    year: 2024,
    price: 35800000,
    priceDisplay: "35,800,000",
    image: "https://images.unsplash.com/photo-1631295868223-63265840d001?auto=format&fit=crop&w=800&q=80",
    hp: 584,
    acceleration: "4.5s",
    topSpeed: "250 km/h",
    engine: "Dual Electric Motors (AWD 102 kWh)",
    transmission: "Single-Speed Automatic",
    mileage: "600 km",
    color: "Chartreuse & Black Diamond Two-Tone",
    status: "Ultra-Luxury EV",
    featured: false,
    badges: ["Ultra-Luxury", "Starlight Doors", "Pure Electric"],
    description: "คูเป้ไฟฟ้าหรูหราระดับอัลตราลักชัวรีคันแรกของโรลส์-รอยซ์ ความเงียบสงบดุจห้องนั่งเล่นลอยฟ้า พร้อมเพดานและแผงประตูดวงดาว Starlight Doors กว่า 4,796 จุด"
  },
  {
    id: 7,
    name: "Aston Martin DBS 770 Ultimate",
    brand: "Aston Martin",
    type: "GT",
    year: 2023,
    price: 33900000,
    priceDisplay: "33,900,000",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80",
    hp: 770,
    acceleration: "3.4s",
    topSpeed: "340 km/h",
    engine: "5.2L Twin-Turbo V12",
    transmission: "ZF 8-Speed Automatic",
    mileage: "2,400 km",
    color: "Aston Martin Racing Green",
    status: "Limited 1 of 300",
    featured: false,
    badges: ["V12 Grand Tourer", "Limited Edition", "770 HP"],
    description: "จุดสูงสุดแห่งตระกูล DBS รุ่นฉลองอำลาเครื่องยนต์ Twin-Turbo V12 พลัง 770 แรงม้า สง่างาม ดุดัน และหายากยิ่ง เหมาะสำหรับการสะสมระดับพรีเมียม"
  },
  {
    id: 8,
    name: "Porsche Taycan Turbo GT",
    brand: "Porsche",
    type: "Track-Focused",
    year: 2025,
    price: 19800000,
    priceDisplay: "19,800,000",
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=800&q=80",
    hp: 1034,
    acceleration: "2.2s",
    topSpeed: "305 km/h",
    engine: "Dual Permanent Magnet Electric Motors",
    transmission: "2-Speed Transmission on Rear Axle",
    mileage: "100 km",
    color: "Pale Blue Metallic",
    status: "Attack Mode + Weissach",
    featured: false,
    badges: ["EV Track Beast", "1,034 HP", "Nürburgring Record"],
    description: "เจ้าของสถิติรถยนต์ไฟฟ้า 4 ประตูที่เร็วที่สุดในสนามนูร์เบิร์กริง มาพร้อมโหมด Attack Mode ชั่วคราวเพิ่มพลังทะลุ 1,100 แรงม้า ควบคุมได้แม่นยำดุจรถแข่ง"
  }
];

// ==========================================
// 2. STATE MANAGEMENT
// ==========================================
let currentBrandFilter = "all";
let currentTypeFilter = "all";
let currentSearchQuery = "";
let currentSort = "featured";
let currentViewMode = "grid"; // 'grid' | 'list'
let wishlist = JSON.parse(localStorage.getItem("supercar_wishlist") || "[]");

// ==========================================
// 3. DOM ELEMENTS
// ==========================================
const carsContainer = document.getElementById("carsContainer");
const carCountElem = document.getElementById("carCount");
const noResultsElem = document.getElementById("noResults");
const searchInput = document.getElementById("searchInput");
const clearSearchBtn = document.getElementById("clearSearch");
const sortSelect = document.getElementById("sortSelect");
const brandPills = document.getElementById("brandPills");
const typePills = document.getElementById("typePills");
const viewGridBtn = document.getElementById("viewGrid");
const viewListBtn = document.getElementById("viewList");
const wishlistCountElem = document.getElementById("wishlistCount");
const resetFiltersBtn = document.getElementById("resetFiltersBtn");

// Modal Elements
const carModal = document.getElementById("carModal");
const modalBody = document.getElementById("modalBody");
const modalCloseBtn = document.getElementById("modalCloseBtn");

// Mobile Menu Elements
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navMenu = document.getElementById("navMenu");

// ==========================================
// 4. INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  if (typeof getAllCars === "function") {
    CAR_DATABASE = getAllCars();
  }
  renderCars();
  setupFilterEvents();
  updateWishlistBadge();
  setupNavbarScroll();
});

// ==========================================
// 5. CAR LISTING & FILTERING
// ==========================================
function filterCars() {
  return CAR_DATABASE.filter(car => {
    // Brand Match
    const matchBrand = currentBrandFilter === "all" || car.brand.toLowerCase() === currentBrandFilter.toLowerCase();
    
    // Type Match
    const matchType = currentTypeFilter === "all" || car.type.toLowerCase() === currentTypeFilter.toLowerCase();

    // Query Match
    const query = currentSearchQuery.trim().toLowerCase();
    const matchQuery = !query || 
      car.name.toLowerCase().includes(query) || 
      car.brand.toLowerCase().includes(query) ||
      car.engine.toLowerCase().includes(query);

    return matchBrand && matchType && matchQuery;
  }).sort((a, b) => {
    if (currentSort === "price-desc") return b.price - a.price;
    if (currentSort === "price-asc") return a.price - b.price;
    if (currentSort === "hp-desc") return b.hp - a.hp;
    if (currentSort === "year-desc") return b.year - a.year;
    return (b.featured ? 1 : 0) - (a.featured ? 1 : 0); // Featured first
  });
}

function renderCars() {
  const filteredCars = filterCars();

  if (carCountElem) {
    carCountElem.textContent = filteredCars.length;
  }

  if (filteredCars.length === 0) {
    carsContainer.innerHTML = "";
    if (noResultsElem) noResultsElem.style.display = "block";
    return;
  }

  if (noResultsElem) noResultsElem.style.display = "none";

  const cardsHtml = filteredCars.map(car => {
    const isFav = wishlist.includes(car.id);
    const badgesHtml = car.badges.map((b, i) => `
      <span class="badge-tag ${i === 0 ? 'badge-gold' : 'badge-dark'}">${b}</span>
    `).join("");
    const imgSrc = car.image.startsWith("pic/") ? ("../" + car.image) : car.image;

    return `
      <div class="car-card glass-panel" data-id="${car.id}">
        <div class="car-badge-container">
          ${badgesHtml}
        </div>

        <button class="card-fav-btn ${isFav ? 'active' : ''}" 
                title="${isFav ? 'นำออกจากรถที่ถูกใจ' : 'บันทึกเป็นรถที่ถูกใจ'}" 
                onclick="toggleWishlist(${car.id}, event)">
          <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
        </button>

        <div class="car-img-wrapper" onclick="window.location.href='../car_details.html?id=${car.id}'" style="cursor: pointer;">
          <img src="${imgSrc}" alt="${car.name}" loading="lazy">
        </div>

        <div class="car-card-body">
          <div class="car-brand-row">
            <span class="car-brand-name">${car.brand}</span>
            <span class="car-year">${car.year}</span>
          </div>

          <h3 class="car-model-name" onclick="window.location.href='../car_details.html?id=${car.id}'" style="cursor: pointer;">
            ${car.name}
          </h3>

          <div class="car-specs-grid">
            <div class="spec-cell">
              <span class="spec-cell-label"><i class="fa-solid fa-gauge-high"></i> กำลัง</span>
              <span class="spec-cell-val">${car.hp} HP</span>
            </div>
            <div class="spec-cell">
              <span class="spec-cell-label"><i class="fa-solid fa-stopwatch"></i> 0-100</span>
              <span class="spec-cell-val">${car.acceleration}</span>
            </div>
            <div class="spec-cell">
              <span class="spec-cell-label"><i class="fa-solid fa-tachograph-digital"></i> ความเร็ว</span>
              <span class="spec-cell-val">${car.topSpeed}</span>
            </div>
          </div>

          <div class="car-price-row">
            <div class="price-meta">
              <span class="price-caption">ราคาจำหน่ายพิเศษ</span>
              <span class="price-number">฿ ${car.priceDisplay}</span>
            </div>
          </div>

          <div class="car-actions">
            <a href="../car_details.html?id=${car.id}" class="btn btn-outline btn-sm">
              <i class="fa-solid fa-circle-info"></i> สเปกรถ
            </a>
            <button class="btn btn-gold btn-sm" onclick="viewCarDetail(${car.id})">
              <i class="fa-solid fa-eye"></i> ดูด่วน
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");

  carsContainer.innerHTML = cardsHtml;
}

// ==========================================
// 6. FILTER EVENT LISTENERS
// ==========================================
function setupFilterEvents() {
  // Brand Pills
  if (brandPills) {
    brandPills.addEventListener("click", e => {
      if (e.target.classList.contains("pill-btn")) {
        brandPills.querySelectorAll(".pill-btn").forEach(btn => btn.classList.remove("active"));
        e.target.classList.add("active");
        currentBrandFilter = e.target.getAttribute("data-brand");
        renderCars();
      }
    });
  }

  // Body Type Pills
  if (typePills) {
    typePills.addEventListener("click", e => {
      if (e.target.classList.contains("pill-btn")) {
        typePills.querySelectorAll(".pill-btn").forEach(btn => btn.classList.remove("active"));
        e.target.classList.add("active");
        currentTypeFilter = e.target.getAttribute("data-type");
        renderCars();
      }
    });
  }

  // Search Input
  if (searchInput) {
    searchInput.addEventListener("input", e => {
      currentSearchQuery = e.target.value;
      if (clearSearchBtn) {
        clearSearchBtn.style.display = currentSearchQuery ? "block" : "none";
      }
      renderCars();
    });
  }

  // Clear Search Button
  if (clearSearchBtn) {
    clearSearchBtn.addEventListener("click", () => {
      searchInput.value = "";
      currentSearchQuery = "";
      clearSearchBtn.style.display = "none";
      renderCars();
      searchInput.focus();
    });
  }

  // Sort Select Dropdown
  if (sortSelect) {
    sortSelect.addEventListener("change", e => {
      currentSort = e.target.value;
      renderCars();
    });
  }

  // View Mode Toggles (Grid / List)
  if (viewGridBtn && viewListBtn) {
    viewGridBtn.addEventListener("click", () => {
      viewGridBtn.classList.add("active");
      viewListBtn.classList.remove("active");
      carsContainer.classList.remove("list-view");
      currentViewMode = "grid";
    });

    viewListBtn.addEventListener("click", () => {
      viewListBtn.classList.add("active");
      viewGridBtn.classList.remove("active");
      carsContainer.classList.add("list-view");
      currentViewMode = "list";
    });
  }

  // Reset Filters Button
  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener("click", () => {
      currentBrandFilter = "all";
      currentTypeFilter = "all";
      currentSearchQuery = "";
      currentSort = "featured";
      if (searchInput) searchInput.value = "";
      if (clearSearchBtn) clearSearchBtn.style.display = "none";
      if (sortSelect) sortSelect.value = "featured";

      brandPills.querySelectorAll(".pill-btn").forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-brand") === "all");
      });
      typePills.querySelectorAll(".pill-btn").forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-type") === "all");
      });

      renderCars();
    });
  }

  // Mobile Menu Toggle
  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });

    navMenu.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
      });
    });
  }
}

// Global brand filter function for navbar links
window.filterByBrand = function(brandName) {
  currentBrandFilter = brandName;
  if (brandPills) {
    brandPills.querySelectorAll(".pill-btn").forEach(btn => {
      const btnBrand = btn.getAttribute("data-brand");
      btn.classList.toggle("active", btnBrand.toLowerCase() === brandName.toLowerCase());
    });
  }
  renderCars();
  const showroomElem = document.getElementById("showroom");
  if (showroomElem) showroomElem.scrollIntoView({ behavior: "smooth" });
};

// ==========================================
// 7. CAR DETAIL MODAL
// ==========================================
window.viewCarDetail = function(carId) {
  const car = CAR_DATABASE.find(c => c.id === carId);
  if (!car) return;
  const modalImg = car.image.startsWith("pic/") ? ("../" + car.image) : car.image;

  modalBody.innerHTML = `
    <div class="modal-detail-grid">
      <div class="modal-car-image">
        <img src="${modalImg}" alt="${car.name}">
      </div>

      <div class="modal-car-info">
        <span class="sub-heading">${car.brand} • ${car.type}</span>
        <h2 style="font-size: 1.8rem; margin: 6px 0 10px;">${car.name}</h2>
        <div style="font-size: 1.6rem; font-weight: 800; color: var(--color-gold-light); margin-bottom: 14px;">
          ฿ ${car.priceDisplay}
        </div>
        <p style="color: var(--text-muted); font-size: 0.92rem; line-height: 1.6; margin-bottom: 20px;">
          ${car.description}
        </p>

        <div class="modal-specs-list">
          <div class="spec-box">
            <span class="spec-box-label">เครื่องยนต์ (Engine)</span>
            <div class="spec-box-val">${car.engine}</div>
          </div>
          <div class="spec-box">
            <span class="spec-box-label">กำลังสูงสุด (Max Power)</span>
            <div class="spec-box-val">${car.hp} แรงม้า (HP)</div>
          </div>
          <div class="spec-box">
            <span class="spec-box-label">อัตราเร่ง 0-100 km/h</span>
            <div class="spec-box-val">${car.acceleration}</div>
          </div>
          <div class="spec-box">
            <span class="spec-box-label">ความเร็วสูงสุด (Top Speed)</span>
            <div class="spec-box-val">${car.topSpeed}</div>
          </div>
          <div class="spec-box">
            <span class="spec-box-label">ระบบเกียร์ (Transmission)</span>
            <div class="spec-box-val">${car.transmission}</div>
          </div>
          <div class="spec-box">
            <span class="spec-box-label">ระยะทางวิ่ง (Mileage)</span>
            <div class="spec-box-val">${car.mileage}</div>
          </div>
          <div class="spec-box">
            <span class="spec-box-label">สีตัวถัง (Exterior Color)</span>
            <div class="spec-box-val">${car.color}</div>
          </div>
          <div class="spec-box">
            <span class="spec-box-label">สถานะ (Status)</span>
            <div class="spec-box-val" style="color: #2ed573;">${car.status}</div>
          </div>
        </div>

        <div style="display: flex; gap: 12px; margin-top: 24px;">
          <button class="btn btn-gold" style="flex: 1;" onclick="contactAboutCar(${car.id})">
            <i class="fa-solid fa-phone"></i> สอบถามข้อมูลคันนี้
          </button>
          <button class="btn btn-outline" onclick="closeModal()">
            <i class="fa-solid fa-xmark"></i> ปิดหน้าต่าง
          </button>
        </div>
      </div>
    </div>
  `;

  carModal.style.display = "flex";
  document.body.style.overflow = "hidden";
};

window.contactAboutCar = function(carId) {
  const car = CAR_DATABASE.find(c => c.id === carId);
  closeModal();
  showToast(`ติดต่อสอบถาม ${car ? car.name : 'รถยนต์'}: โทร 02-999-8888 หรือ LINE: @supercarp`, "success", 6000);
};

if (modalCloseBtn) {
  modalCloseBtn.addEventListener("click", closeModal);
}

if (carModal) {
  carModal.addEventListener("click", e => {
    if (e.target === carModal) closeModal();
  });
}

function closeModal() {
  if (carModal) carModal.style.display = "none";
  document.body.style.overflow = "auto";
}

document.addEventListener("keydown", e => {
  if (e.key === "Escape" && carModal && carModal.style.display === "flex") {
    closeModal();
  }
});

// ==========================================
// 8. WISHLIST / FAVORITES
// ==========================================
window.toggleWishlist = function(carId, event) {
  if (event) event.stopPropagation();

  const index = wishlist.indexOf(carId);
  const car = CAR_DATABASE.find(c => c.id === carId);

  if (index > -1) {
    wishlist.splice(index, 1);
    showToast(`นำ ${car ? car.name : 'รถ'} ออกจากรายการโปรดแล้ว`, "info");
  } else {
    wishlist.push(carId);
    showToast(`เพิ่ม ${car ? car.name : 'รถ'} ลงในรายการโปรดเรียบร้อย`, "success");
  }

  localStorage.setItem("supercar_wishlist", JSON.stringify(wishlist));
  updateWishlistBadge();
  renderCars();
};

function updateWishlistBadge() {
  if (wishlistCountElem) {
    wishlistCountElem.textContent = wishlist.length;
  }
}

// Wishlist button click on Navbar
const wishlistToggle = document.getElementById("wishlistToggle");
if (wishlistToggle) {
  wishlistToggle.addEventListener("click", () => {
    if (wishlist.length === 0) {
      showToast("คุณยังไม่มีรถที่ถูกใจในรายการ คลิกที่ไอคอนหัวใจบนการ์ดรถเพื่อบันทึก", "info");
      return;
    }
    const favCars = CAR_DATABASE.filter(c => wishlist.includes(c.id));
    if (carCountElem) carCountElem.textContent = favCars.length;
    showToast(`แสดงรายการที่คุณถูกใจ ${favCars.length} คัน`, "success");

    const cardsHtml = favCars.map(car => `
      <div class="car-card glass-panel" data-id="${car.id}">
        <div class="car-badge-container">
          <span class="badge-tag badge-gold">FAVORITE</span>
        </div>
        <button class="card-fav-btn active" onclick="toggleWishlist(${car.id}, event)">
          <i class="fa-solid fa-heart"></i>
        </button>
        <div class="car-img-wrapper" onclick="viewCarDetail(${car.id})" style="cursor: pointer;">
          <img src="${car.image}" alt="${car.name}">
        </div>
        <div class="car-card-body">
          <div class="car-brand-row">
            <span class="car-brand-name">${car.brand}</span>
            <span class="car-year">${car.year}</span>
          </div>
          <h3 class="car-model-name" onclick="viewCarDetail(${car.id})" style="cursor: pointer;">${car.name}</h3>
          <div class="car-price-row">
            <div class="price-meta">
              <span class="price-caption">ราคาจำหน่าย</span>
              <span class="price-number">฿ ${car.priceDisplay}</span>
            </div>
          </div>
          <div class="car-actions">
            <button class="btn btn-outline btn-sm" onclick="viewCarDetail(${car.id})">รายละเอียด</button>
            <button class="btn btn-gold btn-sm" onclick="contactAboutCar(${car.id})">สอบถาม</button>
          </div>
        </div>
      </div>
    `).join("");

    carsContainer.innerHTML = cardsHtml;
  });
}

// ==========================================
// 9. TOAST NOTIFICATIONS
// ==========================================
function showToast(message, type = "info", duration = 4000) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  
  let icon = "fa-circle-info";
  if (type === "success") icon = "fa-circle-check";
  if (type === "warning") icon = "fa-triangle-exclamation";

  toast.innerHTML = `
    <i class="fa-solid ${icon}"></i>
    <div>${message}</div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    toast.style.transition = "all 0.3s ease-out";
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// ==========================================
// 10. NAVBAR SCROLL EFFECT
// ==========================================
function setupNavbarScroll() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.style.padding = "10px 0";
      navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.8)";
    } else {
      navbar.style.padding = "14px 0";
      navbar.style.boxShadow = "none";
    }
  });
}

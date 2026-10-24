/**
 * SUPERCAR P - Cars Showroom Client-side Logic
 */

let currentBrandFilter = "all";
let currentTypeFilter = "all";
let currentSearchQuery = "";
let currentPriceFilter = "all";
let currentSort = "featured";
let currentViewMode = "grid";
let wishlistOnly = false;

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
const resetFiltersBtn = document.getElementById("resetFiltersBtn");
const carModal = document.getElementById("carModal");
const modalBody = document.getElementById("modalBody");
const modalCloseBtn = document.getElementById("modalCloseBtn");

document.addEventListener("DOMContentLoaded", () => {
  // Check query params
  const params = new URLSearchParams(window.location.search);
  if (params.get("q")) {
    currentSearchQuery = params.get("q").toLowerCase();
    if (searchInput) {
      searchInput.value = params.get("q");
      if (clearSearchBtn) clearSearchBtn.classList.remove("is-hidden");
    }
  }
  if (params.get("brand")) {
    currentBrandFilter = params.get("brand");
    if (brandPills) {
      brandPills.querySelectorAll(".pill-btn").forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-brand") === currentBrandFilter);
      });
    }
  }
  if (params.get("type")) {
    currentTypeFilter = params.get("type");
    if (typePills) {
      typePills.querySelectorAll(".pill-btn").forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-type") === currentTypeFilter);
      });
    }
  }
  if (params.get("price")) {
    currentPriceFilter = params.get("price");
  }
  if (params.get("view") === "wishlist") {
    wishlistOnly = true;
  }

  initEventListeners();
  renderCars();
});

function initEventListeners() {
  if (searchInput) {
    searchInput.addEventListener("input", e => {
      currentSearchQuery = e.target.value.trim().toLowerCase();
      if (clearSearchBtn) {
        if (currentSearchQuery.length > 0) {
          clearSearchBtn.classList.remove("is-hidden");
        } else {
          clearSearchBtn.classList.add("is-hidden");
        }
      }
      renderCars();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener("click", () => {
      searchInput.value = "";
      currentSearchQuery = "";
      clearSearchBtn.classList.add("is-hidden");
      renderCars();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener("change", e => {
      currentSort = e.target.value;
      renderCars();
    });
  }

  if (brandPills) {
    brandPills.addEventListener("click", e => {
      const btn = e.target.closest(".pill-btn");
      if (!btn) return;
      brandPills.querySelectorAll(".pill-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentBrandFilter = btn.getAttribute("data-brand");
      renderCars();
    });
  }

  if (typePills) {
    typePills.addEventListener("click", e => {
      const btn = e.target.closest(".pill-btn");
      if (!btn) return;
      typePills.querySelectorAll(".pill-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentTypeFilter = btn.getAttribute("data-type");
      renderCars();
    });
  }

  if (viewGridBtn && viewListBtn) {
    viewGridBtn.addEventListener("click", () => {
      currentViewMode = "grid";
      viewGridBtn.classList.add("active");
      viewListBtn.classList.remove("active");
      if (carsContainer) carsContainer.className = "cars-grid";
    });

    viewListBtn.addEventListener("click", () => {
      currentViewMode = "list";
      viewListBtn.classList.add("active");
      viewGridBtn.classList.remove("active");
      if (carsContainer) carsContainer.className = "cars-grid list-mode";
    });
  }

  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener("click", resetAllFilters);
  }

  const wishlistToggle = document.getElementById("wishlistToggle");
  if (wishlistToggle) {
    wishlistToggle.addEventListener("click", () => {
      const list = getWishlist();
      if (list.length === 0 && !wishlistOnly) {
        showToast("คุณยังไม่มีรถที่ถูกใจในรายการ คลิกไอคอนหัวใจบนการ์ดรถเพื่อบันทึก", "info");
        return;
      }
      wishlistOnly = !wishlistOnly;
      if (wishlistOnly) {
        showToast("แสดงเฉพาะรถที่คุณถูกใจ", "success");
      }
      renderCars();
    });
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeQuickModal);
  if (carModal) {
    carModal.addEventListener("click", e => {
      if (e.target === carModal) closeQuickModal();
    });
  }
}

function filterCars() {
  const wishlist = getWishlist();

  return CAR_DATABASE.filter(car => {
    if (wishlistOnly && !wishlist.includes(car.id)) return false;

    if (currentBrandFilter !== "all" && car.brand.toLowerCase() !== currentBrandFilter.toLowerCase()) {
      return false;
    }

    if (currentTypeFilter !== "all" && car.type.toLowerCase() !== currentTypeFilter.toLowerCase()) {
      return false;
    }

    if (currentPriceFilter !== "all") {
      if (currentPriceFilter === "under-1m" && car.price > 1000000) return false;
      if (currentPriceFilter === "1m-20m" && (car.price < 1000000 || car.price > 20000000)) return false;
      if (currentPriceFilter === "20m-50m" && (car.price < 20000000 || car.price > 50000000)) return false;
      if (currentPriceFilter === "50m-plus" && car.price < 50000000) return false;
    }

    if (currentSearchQuery) {
      const q = currentSearchQuery;
      const matchName = car.name.toLowerCase().includes(q);
      const matchBrand = car.brand.toLowerCase().includes(q);
      const matchType = car.type.toLowerCase().includes(q);
      const matchEngine = car.engine && car.engine.toLowerCase().includes(q);
      const matchDesc = car.description && car.description.toLowerCase().includes(q);

      if (!matchName && !matchBrand && !matchType && !matchEngine && !matchDesc) {
        return false;
      }
    }

    return true;
  });
}

function sortCars(cars) {
  const sorted = [...cars];
  switch (currentSort) {
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price);
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price);
    case "hp-desc":
      return sorted.sort((a, b) => b.hp - a.hp);
    case "year-desc":
      return sorted.sort((a, b) => b.year - a.year);
    case "featured":
    default:
      return sorted.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }
}

function renderCars() {
  if (!carsContainer) return;

  const filtered = filterCars();
  const sorted = sortCars(filtered);
  const wishlist = getWishlist();

  if (carCountElem) {
    carCountElem.textContent = sorted.length;
  }

  if (sorted.length === 0) {
    carsContainer.innerHTML = "";
    if (noResultsElem) noResultsElem.style.display = "block";
    return;
  }

  if (noResultsElem) noResultsElem.style.display = "none";

  carsContainer.innerHTML = sorted.map(car => {
    const isFav = wishlist.includes(car.id);
    return `
      <div class="car-card">
        <div class="car-img-wrapper">
          <img src="${car.image}" alt="${car.name}" loading="lazy">
          
          <div class="car-card-badges">
            ${car.badges.map((b, i) => `
              <span class="badge-pill ${i === 0 ? 'gold' : 'dark'}">${b}</span>
            `).join('')}
          </div>

          <button class="card-fav-btn ${isFav ? 'active' : ''}" 
                  data-wishlist-id="${car.id}"
                  onclick="toggleWishlist(${car.id}, event)" 
                  title="ถูกใจ">
            <i class="${isFav ? 'fa-solid fav-active' : 'fa-regular'} fa-heart"></i>
          </button>
        </div>

        <div class="car-info">
          <div class="car-meta-top">
            <span class="car-brand-name">${car.brand}</span>
            <span class="car-year">${car.year} • ${car.mileage}</span>
          </div>

          <h3 class="car-title">${car.name}</h3>

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
            <span class="price-caption">ราคาจำหน่ายพิเศษ</span>
            <span class="price-number">฿ ${car.priceDisplay}</span>
          </div>

          <div class="car-actions">
            <a href="car_details.html?id=${car.id}" class="btn btn-outline btn-sm">
              <i class="fa-solid fa-circle-info"></i> สเปกเต็ม
            </a>
            <button class="btn btn-gold btn-sm" onclick="viewQuickDetail(${car.id})">
              <i class="fa-solid fa-bolt"></i> ดูแบบย่อ
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function resetAllFilters() {
  currentBrandFilter = "all";
  currentTypeFilter = "all";
  currentSearchQuery = "";
  currentPriceFilter = "all";
  currentSort = "featured";
  wishlistOnly = false;

  if (searchInput) searchInput.value = "";
  if (clearSearchBtn) clearSearchBtn.classList.add("is-hidden");
  if (sortSelect) sortSelect.value = "featured";

  if (brandPills) {
    brandPills.querySelectorAll(".pill-btn").forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-brand") === "all");
    });
  }
  if (typePills) {
    typePills.querySelectorAll(".pill-btn").forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-type") === "all");
    });
  }

  renderCars();
}

function viewQuickDetail(carId) {
  const car = CAR_DATABASE.find(c => c.id === carId);
  if (!car) return;

  modalBody.innerHTML = `
    <div class="quick-modal-grid">
      <div class="quick-modal-img-wrap">
        <img src="${car.image}" alt="${car.name}" class="quick-modal-img">
      </div>
      <div>
        <span class="sub-heading">${car.brand} • ${car.type}</span>
        <h2 class="quick-modal-title">${car.name}</h2>
        <div class="quick-modal-price">
          ฿ ${car.priceDisplay}
        </div>
        <p class="quick-modal-desc">
          ${car.description}
        </p>
        <div class="quick-modal-specs">
          <div class="quick-modal-spec-item">
            <span class="quick-modal-spec-label">เครื่องยนต์</span>
            <div class="quick-modal-spec-val">${car.engine}</div>
          </div>
          <div class="quick-modal-spec-item">
            <span class="quick-modal-spec-label">กำลังสูงสุด</span>
            <div class="quick-modal-spec-gold">${car.hp} HP</div>
          </div>
          <div class="quick-modal-spec-item">
            <span class="quick-modal-spec-label">0-100 km/h</span>
            <div class="quick-modal-spec-val">${car.acceleration}</div>
          </div>
          <div class="quick-modal-spec-item">
            <span class="quick-modal-spec-label">ความเร็วสูงสุด</span>
            <div class="quick-modal-spec-val">${car.topSpeed}</div>
          </div>
        </div>
        <div class="quick-modal-actions">
          <a href="car_details.html?id=${car.id}" class="btn btn-gold quick-modal-btn-grow">
            <i class="fa-solid fa-up-right-from-square"></i> ดูหน้าข้อมูลเต็ม & จอง
          </a>
          <button class="btn btn-outline" onclick="closeQuickModal()">ปิด</button>
        </div>
      </div>
    </div>
  `;

  carModal.classList.add("is-flex");
  document.body.style.overflow = "hidden";
}

function closeQuickModal() {
  if (carModal) carModal.classList.remove("is-flex");
  document.body.style.overflow = "auto";
}

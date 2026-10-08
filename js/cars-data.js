/**
 * SUPERCAR P - Master Car Dataset & Shared Services
 * Unifies all car records from across the project
 */

// Master Seed Car Dataset
const DEFAULT_CARS = [
  {
    id: 1,
    name: "Ferrari F80",
    brand: "Ferrari",
    type: "Hypercar",
    year: 2025,
    price: 135000000,
    priceDisplay: "135,000,000",
    image: "pic/F80.png",
    gallery: [
      "pic/F80.png",
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80"
    ],
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
    description: "ม้าลำพองตัวท็อปเจเนอเรชันใหม่ล่าสุด ถ่ายทอดดีเอ็นเอแชมป์เลอม็องส์ 24 ชั่วโมง 499P สู่รถถนนที่แรงและล้ำสมัยที่สุดของเฟอร์รารี่ พร้อมระบบขับเคลื่อนทุกล้อไฟฟ้า E-4WD",
    seller: {
      name: "Supercar P Gallery (Official)",
      phone: "02-999-8888",
      line: "@supercarp",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80",
      verified: true
    }
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
    gallery: [
      "pic/GT3-911.png",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80"
    ],
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
    description: "อาวุธสำหรับแทร็กเดย์ที่จดทะเบียนวิ่งบนถนนได้จริง มาพร้อมระบบแอร์โรไดนามิกส์แบบแอคทีฟ DRS และชุดแต่ง Weissach Package คาร์บอนไฟเบอร์รอบคัน",
    seller: {
      name: "คุณธนินท์ (Prestige Owner)",
      phone: "081-888-9999",
      line: "@thanin_gt3",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      verified: true
    }
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
    gallery: [
      "pic/GTR-R35.png",
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
    ],
    hp: 600,
    acceleration: "2.8s",
    topSpeed: "315 km/h",
    engine: "3.8L Twin-Turbo VR38DETT V6",
    transmission: "6-Speed Dual Clutch ATTESA E-TS AWD",
    mileage: "850 km",
    color: "Stealth Gray / Clear Carbon Hood",
    status: "Collector Edition",
    featured: true,
    badges: ["Godzilla", "Nismo Special", "Takumi Engine"],
    description: "ตำนานก๊อดซิลล่ารุ่นสั่งลาที่ประกอบมือโดยช่างทาคูมิ ฝากระโปรงหน้าคาร์บอนเคลือบเงา ล้อเรย์ Forged ขนาด 20 นิ้ว พร้อมเบรกคาร์บอนเซรามิก Brembo",
    seller: {
      name: "Supercar P Gallery (Official)",
      phone: "02-999-8888",
      line: "@supercarp",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80",
      verified: true
    }
  },
  {
    id: 4,
    name: "Koenigsegg Agera RS",
    brand: "Koenigsegg",
    type: "Hypercar",
    year: 2018,
    price: 150000000,
    priceDisplay: "150,000,000",
    image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80",
      "pic/F80.png",
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=1200&q=80"
    ],
    hp: 1160,
    acceleration: "2.8s",
    topSpeed: "440 km/h",
    engine: "5.0L Twin-Turbo V8",
    transmission: "7-Speed Paddle Shift Automatic",
    mileage: "1,200 km",
    color: "ดำ / ทอง (Carbon Black & Gold)",
    status: "World Record Legend",
    featured: true,
    badges: ["Hypercar", "440 km/h", "Carbon Body"],
    description: "ไฮเปอร์คาร์สีดำตกแต่งทอง สมรรถนะสุดขั้ว งานคาร์บอนไฟเบอร์ทั้งคัน เบรกคาร์บอนเซรามิก ภายในหนังแท้เย็บด้ายทอง ระบบเสียงพรีเมียม",
    seller: {
      name: "VIP Prestige Concierge",
      phone: "089-777-6666",
      line: "@vip_prestige",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      verified: true
    }
  },
  {
    id: 5,
    name: "Lamborghini Revuelto",
    brand: "Lamborghini",
    type: "Hypercar",
    year: 2024,
    price: 49500000,
    priceDisplay: "49,500,000",
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
    ],
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
    description: "กระทิงดุสายพันธุ์แรกที่มาพร้อมเครื่องยนต์ V12 ไฮบริด ให้กำลังทะลุ 1,015 แรงม้า เสียงคำรามอันเป็นเอกลักษณ์ ผสานเทคโนโลยีโมโนค็อกคาร์บอนใหม่ล่าสุด",
    seller: {
      name: "Supercar P Gallery (Official)",
      phone: "02-999-8888",
      line: "@supercarp",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80",
      verified: true
    }
  },
  {
    id: 6,
    name: "McLaren 750S Spider",
    brand: "McLaren",
    type: "Supercar",
    year: 2024,
    price: 36000000,
    priceDisplay: "36,000,000",
    image: "https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=80"
    ],
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
    description: "ซูเปอร์คาร์เปิดประทุนที่เบาที่สุดในคลาส โครงสร้าง Monocage II-S คาร์บอนไฟเบอร์ เปิดปิดประทุนในเวลาเพียง 11 วินาที สมรรถนะและความคมในการขับขี่ที่ไร้คู่แข่ง",
    seller: {
      name: "คุณกิตติศักดิ์",
      phone: "084-555-4321",
      line: "@kittisak_750s",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      verified: true
    }
  },
  {
    id: 7,
    name: "Rolls-Royce Spectre",
    brand: "Rolls-Royce",
    type: "Ultra-Luxury",
    year: 2024,
    price: 35800000,
    priceDisplay: "35,800,000",
    image: "https://images.unsplash.com/photo-1631295868223-63265840d001?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1631295868223-63265840d001?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
    ],
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
    description: "คูเป้ไฟฟ้าหรูหราระดับอัลตราลักชัวรีคันแรกของโรลส์-รอยซ์ ความเงียบสงบดุจห้องนั่งเล่นลอยฟ้า พร้อมเพดานและแผงประตูดวงดาว Starlight Doors กว่า 4,796 จุด",
    seller: {
      name: "Supercar P Gallery (Official)",
      phone: "02-999-8888",
      line: "@supercarp",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80",
      verified: true
    }
  },
  {
    id: 8,
    name: "Aston Martin DBS 770 Ultimate",
    brand: "Aston Martin",
    type: "GT",
    year: 2023,
    price: 33900000,
    priceDisplay: "33,900,000",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80"
    ],
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
    description: "จุดสูงสุดแห่งตระกูล DBS รุ่นฉลองอำลาเครื่องยนต์ Twin-Turbo V12 พลัง 770 แรงม้า สง่างาม ดุดัน และหายากยิ่ง เหมาะสำหรับการสะสมระดับพรีเมียม",
    seller: {
      name: "คุณอภิชาติ (Private Collector)",
      phone: "081-999-1234",
      line: "@apichat_collector",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80",
      verified: true
    }
  },
  {
    id: 9,
    name: "Porsche Taycan Turbo GT",
    brand: "Porsche",
    type: "Track-Focused",
    year: 2025,
    price: 19800000,
    priceDisplay: "19,800,000",
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80",
      "pic/GT3-911.png",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=80"
    ],
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
    description: "เจ้าของสถิติรถยนต์ไฟฟ้า 4 ประตูที่เร็วที่สุดในสนามนูร์เบิร์กริง มาพร้อมโหมด Attack Mode ชั่วคราวเพิ่มพลังทะลุ 1,100 แรงม้า ควบคุมได้แม่นยำดุจรถแข่ง",
    seller: {
      name: "Supercar P Gallery (Official)",
      phone: "02-999-8888",
      line: "@supercarp",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80",
      verified: true
    }
  },
  {
    id: 10,
    name: "Honda City RS Turbo 2023",
    brand: "Honda",
    type: "Sedan",
    year: 2023,
    price: 450000,
    priceDisplay: "450,000",
    image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80"
    ],
    hp: 122,
    acceleration: "9.2s",
    topSpeed: "200 km/h",
    engine: "1.0L VTEC TURBO 3 สูบ DOHC",
    transmission: "CVT อัตโนมัติ",
    mileage: "35,000 km",
    color: "Platinum White Pearl",
    status: "รถบ้านมือเดียว สภาพนางฟ้า",
    featured: false,
    badges: ["รถบ้านมือเดียว", "VTEC Turbo", "ประหยัดน้ำมัน"],
    description: "รถบ้านมือเดียว สภาพดีมาก เข้าศูนย์ตลอด ไม่เคยชนหนัก ไม่เคยน้ำท่วม ภายในสะอาด เครื่องยนต์สมบูรณ์ พร้อมใช้งาน สมุดรับประกันและกุญแจครบ",
    seller: {
      name: "คุณสมชาย ใจดี",
      phone: "081-234-5678",
      line: "@somchai_city",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80",
      verified: true
    }
  }
];

// Helper to get all cars (built-in + user added)
function getAllCars() {
  try {
    const userCars = JSON.parse(localStorage.getItem("supercar_user_cars") || "[]");
    return [...DEFAULT_CARS, ...userCars];
  } catch (e) {
    return DEFAULT_CARS;
  }
}

// Global CAR_DATABASE reference
let CAR_DATABASE = getAllCars();

// Helper to save a new car to local storage
function saveNewCar(carData) {
  try {
    const userCars = JSON.parse(localStorage.getItem("supercar_user_cars") || "[]");
    const newId = 100 + userCars.length + 1;
    const formattedCar = {
      id: newId,
      name: carData.name || "รถยนต์ลงขายใหม่",
      brand: carData.brand || "แบรนด์อื่นๆ",
      type: carData.type || "Sedan",
      year: parseInt(carData.year) || 2024,
      price: parseInt(carData.price) || 0,
      priceDisplay: (parseInt(carData.price) || 0).toLocaleString(),
      image: carData.image || "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        carData.image || "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=80"
      ],
      hp: parseInt(carData.hp) || 300,
      acceleration: carData.acceleration || "4.5s",
      topSpeed: carData.topSpeed || "250 km/h",
      engine: carData.engine || "เบนซิน",
      transmission: carData.transmission || "อัตโนมัติ",
      mileage: carData.mileage || "10,000 km",
      color: carData.color || "ไม่ระบุ",
      status: "ประกาศใหม่ พร้อมส่งมอบ",
      featured: false,
      badges: ["ประกาศใหม่", "รถบ้านเจ้าของขายเอง"],
      description: carData.description || "รถสภาพดีมาก ผ่านการตรวจเช็กเรียบร้อย พร้อมส่งมอบทันที",
      seller: {
        name: carData.sellerName || "ผู้ขายอิสระ",
        phone: carData.sellerPhone || "08X-XXX-XXXX",
        line: carData.sellerLine || "@supercarp",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80",
        verified: true
      }
    };
    userCars.unshift(formattedCar);
    localStorage.setItem("supercar_user_cars", JSON.stringify(userCars));
    CAR_DATABASE = getAllCars();
    return formattedCar;
  } catch (e) {
    console.error("Error saving car", e);
    return null;
  }
}

// ==========================================
// USER AUTHENTICATION STATE
// ==========================================
function getCurrentUser() {
  try {
    return JSON.parse(localStorage.getItem("supercar_current_user") || "null");
  } catch (e) {
    return null;
  }
}

function loginUser(userData) {
  localStorage.setItem("supercar_current_user", JSON.stringify(userData));
  updateNavbarAuth();
}

function logoutUser() {
  localStorage.removeItem("supercar_current_user");
  updateNavbarAuth();
  showToast("ออกจากระบบเรียบร้อยแล้ว", "info");
}

function updateNavbarAuth() {
  const user = getCurrentUser();
  const authContainer = document.getElementById("navbarAuth");
  if (!authContainer) return;

  if (user && user.name) {
    authContainer.innerHTML = `
      <div class="user-profile-badge" style="display:flex; align-items:center; gap:8px;">
        <div style="width:32px; height:32px; border-radius:50%; background:var(--gold-gradient); display:flex; align-items:center; justify-content:center; color:#0b0c10; font-weight:700; font-size:0.85rem;">
          ${user.name.charAt(0).toUpperCase()}
        </div>
        <span style="font-size:0.88rem; font-weight:600; color:var(--text-main); display:none; @media(min-width:640px){display:inline;}">
          ${user.name}
        </span>
        <button onclick="logoutUser()" class="btn btn-outline btn-sm" style="padding:6px 12px; font-size:0.8rem; border-radius:20px; border-color:rgba(255,255,255,0.15);" title="ออกจากระบบ">
          <i class="fa-solid fa-arrow-right-from-bracket"></i>
        </button>
      </div>
    `;
  } else {
    // Determine relative path based on page location
    const isSubdir = window.location.pathname.includes('/list/') || window.location.pathname.includes('/login/');
    const loginHref = isSubdir ? '../login.html' : 'login.html';
    authContainer.innerHTML = `
      <a href="${loginHref}" class="btn btn-gold btn-sm" style="border-radius:20px; padding:7px 16px; font-size:0.88rem;">
        <i class="fa-regular fa-user"></i>
        <span>เข้าสู่ระบบ</span>
      </a>
    `;
  }
}

// ==========================================
// WISHLIST MANAGEMENT
// ==========================================
function getWishlist() {
  try {
    return JSON.parse(localStorage.getItem("supercar_wishlist") || "[]");
  } catch (e) {
    return [];
  }
}

function toggleWishlist(carId, event) {
  if (event) {
    event.stopPropagation();
    event.preventDefault();
  }
  let wishlist = getWishlist();
  const car = CAR_DATABASE.find(c => c.id === carId);
  const index = wishlist.indexOf(carId);

  if (index > -1) {
    wishlist.splice(index, 1);
    showToast(`นำ ${car ? car.name : 'รถ'} ออกจากรายการโปรดแล้ว`, "info");
  } else {
    wishlist.push(carId);
    showToast(`เพิ่ม ${car ? car.name : 'รถ'} ลงในรายการโปรดเรียบร้อย`, "success");
  }

  localStorage.setItem("supercar_wishlist", JSON.stringify(wishlist));
  updateWishlistBadge();
  
  // Update heart icons across the page
  document.querySelectorAll(`[data-wishlist-id="${carId}"]`).forEach(btn => {
    const isFav = wishlist.includes(carId);
    btn.classList.toggle("active", isFav);
    const icon = btn.querySelector("i");
    if (icon) {
      if (isFav) {
        icon.className = "fa-solid fa-heart";
        icon.style.color = "#ff4757";
      } else {
        icon.className = "fa-regular fa-heart";
        icon.style.color = "";
      }
    }
  });

  // If in list view or grid view callback exists
  if (typeof renderCars === "function") {
    renderCars();
  }
}

function updateWishlistBadge() {
  const badge = document.getElementById("wishlistCount");
  if (badge) {
    const wishlist = getWishlist();
    badge.textContent = wishlist.length;
  }
}

// ==========================================
// TOAST NOTIFICATIONS
// ==========================================
function showToast(message, type = "success", duration = 3500) {
  let container = document.getElementById("toastContainer");
  if (!container) {
    container = document.createElement("div");
    container.id = "toastContainer";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  
  let iconHtml = '<i class="fa-solid fa-circle-check"></i>';
  if (type === "info") iconHtml = '<i class="fa-solid fa-circle-info"></i>';
  if (type === "error") iconHtml = '<i class="fa-solid fa-circle-exclamation"></i>';

  toast.innerHTML = `
    ${iconHtml}
    <span style="font-size:0.92rem; font-weight:500;">${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// Auto-run common listeners on load
document.addEventListener("DOMContentLoaded", () => {
  updateWishlistBadge();
  updateNavbarAuth();

  // Mobile menu toggle if present
  const mobileBtn = document.getElementById("mobileMenuBtn");
  const navMenu = document.getElementById("navMenu");
  if (mobileBtn && navMenu) {
    mobileBtn.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });
  }
});

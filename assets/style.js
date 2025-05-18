// Combined product detail handling script for ASUS, Acer, and Lenovo laptops
document.addEventListener('DOMContentLoaded', function() {
  // Product data for all laptops (ASUS, Acer, and now Lenovo)
  const productData = {
    // ========== ASUS Products ==========
    // For buttons using data-product attribute
    vivobook2: {
      name: "ASUS VivoBook 15",
      specs: "Intel i5, 8GB RAM, 512GB SSD, Layar 15.6\"",
      description: "ASUS VivoBook 15 adalah laptop stylish dan ringan, ideal untuk pelajar, mahasiswa, dan pekerja kantoran. Laptop ini memiliki performa yang mumpuni untuk multitasking dan produktivitas sehari-hari dengan desain yang elegan.",
      price: "Rp8.499.000",
      image: "img/asus/laptop4.webp",
      brand: "ASUS"
    },
    chromebook: {
      name: "ASUS Chromebook C425",
      specs: "Intel Core m3, 8GB RAM, 128GB eMMC, Layar 14\"",
      description: "ASUS Chromebook C425 adalah perangkat portabel dengan desain NanoEdge yang ramping. Menawarkan performa lebih baik dari Chromebook biasa untuk multitasking dan produktivitas.",
      price: "Rp6.799.000",
      image: "img/asus/chromebook-c425.webp",
      brand: "ASUS"
    },
    zephyrus1: {
      name: "ASUS ROG Zephyrus G14",
      specs: "Ryzen 9, RTX 4060, 32GB RAM, 1TB SSD",
      description: "ASUS ROG Zephyrus G14 adalah laptop gaming premium yang menggabungkan performa tinggi dalam bentuk yang ringkas. Dilengkapi prosesor AMD Ryzen 9 dan GPU NVIDIA RTX 4060, laptop ini mampu menjalankan game berat dan aplikasi kreatif dengan lancar.",
      price: "Rp27.499.000",
      image: "img/asus/laptop5.webp",
      brand: "ASUS"
    },
    zephyrus2: {
      name: "ASUS ROG Zephyrus G14 (2024)",
      specs: "Ryzen 9 7940HS, RTX 4060, 32GB RAM, 1TB SSD",
      description: "Model terbaru dari lini ROG Zephyrus dengan performa yang ditingkatkan dan sistem pendingin yang lebih efisien. Ideal untuk gaming kompetitif dan content creation profesional.",
      price: "Rp28.999.000",
      image: "img/asus/laptop2.png",
      brand: "ASUS"
    },
    zephyrus3: {
      name: "ASUS ROG Zephyrus G14 OLED",
      specs: "Ryzen 9, RTX 4070, 32GB RAM, 2TB SSD",
      description: "Versi premium dengan layar OLED 2.8K 120Hz yang memberikan pengalaman visual terbaik. Dengan spesifikasi yang lebih tinggi, laptop ini mampu menangani semua kebutuhan gaming dan kreasi konten profesional.",
      price: "Rp31.999.000",
      image: "img/asus/laptop2.png",
      brand: "ASUS"
    },
    zephyrus4: {
      name: "ASUS ROG Zephyrus G14 Eclipse",
      specs: "Ryzen 9, RTX 4060, 16GB RAM, 1TB SSD",
      description: "Edisi spesial dengan desain Eclipse yang elegan dan performa tinggi. Dilengkapi dengan keyboard RGB dan sistem audio premium untuk pengalaman gaming yang imersif.",
      price: "Rp26.499.000",
      image: "img/asus/laptop2.png",
      brand: "ASUS"
    },
    zephyrus5: {
      name: "ASUS ROG Zephyrus G14 Advantage Edition",
      specs: "Ryzen 9, Radeon RX 7600M XT, 32GB RAM, 1TB SSD",
      description: "Laptop gaming all-AMD dengan performa grafis yang luar biasa dan teknologi AMD SmartShift. Cocok untuk gamer yang menginginkan alternatif dari NVIDIA.",
      price: "Rp25.999.000",
      image: "img/asus/laptop2.png",
      brand: "ASUS"
    },
    zephyrus6: {
      name: "ASUS ROG Zephyrus G14 White",
      specs: "Ryzen 7, RTX 4050, 16GB RAM, 1TB SSD",
      description: "Varian warna putih eksklusif dengan spesifikasi yang tetap mumpuni untuk gaming modern dan tugas komputasi berat lainnya.",
      price: "Rp22.499.000",
      image: "img/asus/laptop2.png",
      brand: "ASUS"
    },
    zephyrus7: {
      name: "ASUS ROG Zephyrus G14 Creator",
      specs: "Ryzen 9, RTX 4070, 64GB RAM, 2TB SSD",
      description: "Laptop khusus untuk kreator konten dengan RAM dan penyimpanan ekstra besar. Dilengkapi dengan kalibrasi warna pabrik untuk akurasi warna maksimal.",
      price: "Rp34.999.000",
      image: "img/asus/laptop2.png",
      brand: "ASUS"
    },
    zephyrus8: {
      name: "ASUS ROG Zephyrus G14 Pro",
      specs: "Ryzen 9, RTX 4080, 32GB RAM, 2TB SSD",
      description: "Versi paling powerful dari lini G14 dengan GPU RTX 4080. Dirancang untuk gaming di resolusi tinggi dan workload profesional yang intensif.",
      price: "Rp37.999.000",
      image: "img/asus/laptop2.png",
      brand: "ASUS"
    },
    zephyrus9: {
      name: "ASUS ROG Zephyrus G14 Esports",
      specs: "Ryzen 9, RTX 4060, 32GB RAM, 1TB SSD + 1TB SSD",
      description: "Edisi khusus untuk esports dengan penyimpanan ganda dan teknologi pendingin ROG Intelligent Cooling untuk performa stabil dalam sesi gaming yang panjang.",
      price: "Rp29.499.000",
      image: "img/asus/laptop2.png",
      brand: "ASUS"
    },
    zenbook: {
      name: "ASUS ZenBook 14",
      specs: "Intel i7, 16GB RAM, 512GB SSD, Windows 11",
      description: "ASUS ZenBook 14 adalah laptop premium ultraportable dengan bodi metal yang premium. Ideal untuk profesional yang membutuhkan laptop ringan namun berperforma tinggi dengan daya tahan baterai yang lama.",
      price: "Rp15.299.000",
      image: "img/asus/laptop3.webp",
      brand: "ASUS"
    },
    
    // ========== Acer Products ==========
    swift: {
      name: "Acer Swift 5",
      specs: "Intel i7, 16GB RAM, 512GB SSD, Layar 14\"",
      description: "Acer Swift 5 adalah laptop ultraportable premium dengan bodi antimicrobial yang ringan dan tipis. Ideal untuk profesional yang membutuhkan mobilitas tinggi dengan performa yang mumpuni dan daya tahan baterai yang lama.",
      price: "Rp14.999.000",
      image: "img/acer/swift5.webp",
      brand: "Acer"
    },
    aspire: {
      name: "Acer Aspire 5",
      specs: "Intel i5, 8GB RAM, 512GB SSD, Layar 15.6\"",
      description: "Acer Aspire 5 adalah laptop serbaguna dengan performa yang handal untuk kebutuhan sehari-hari. Dilengkapi dengan layar Full HD yang jernih dan keyboard yang nyaman, laptop ini cocok untuk pelajar, mahasiswa, dan pekerja kantoran.",
      price: "Rp8.999.000",
      image: "img/acer/aspire5.webp",
      brand: "Acer"
    },
    nitro1: {
      name: "Acer Nitro 5",
      specs: "Intel i7, RTX 3060, 16GB RAM, 512GB SSD",
      description: "Acer Nitro 5 adalah laptop gaming dengan performa tinggi namun dengan harga yang terjangkau. Dilengkapi dengan sistem pendingin yang efisien dan keyboard RGB, laptop ini memberi pengalaman gaming yang maksimal untuk game-game modern.",
      price: "Rp15.499.000",
      image: "img/acer/nitro5.webp",
      brand: "Acer"
    },
    nitro2: {
      name: "Acer Nitro 5 (2024)",
      specs: "Intel i7-13700H, RTX 4060, 16GB RAM, 1TB SSD",
      description: "Versi terbaru dari Acer Nitro 5 dengan prosesor generasi terbaru dan GPU yang lebih bertenaga. Menawarkan gaming di resolusi yang lebih tinggi dengan frame rate yang stabil.",
      price: "Rp18.999.000",
      image: "img/acer/nitro5-2024.webp",
      brand: "Acer"
    },
    nitro3: {
      name: "Acer Nitro 5 Obsidian Black",
      specs: "AMD Ryzen 7, RTX 3070, 16GB RAM, 1TB SSD",
      description: "Edisi khusus Acer Nitro 5 dengan warna Obsidian Black yang menawan. Bertenaga AMD Ryzen 7 dan RTX 3070 untuk pengalaman gaming yang maksimal dan efisien.",
      price: "Rp17.499.000",
      image: "img/acer/nitro5-obsidian.webp",
      brand: "Acer"
    },
    predator1: {
      name: "Acer Predator Helios 300",
      specs: "Intel i7, RTX 4060, 16GB RAM, 1TB SSD",
      description: "Acer Predator Helios 300 adalah laptop gaming premium dengan performa tinggi. Dilengkapi dengan sistem pendingin AeroBlade 3D generasi ke-5, laptop ini menjaga suhu tetap optimal bahkan saat menjalankan game-game berat.",
      price: "Rp22.499.000",
      image: "img/acer/predator-helios300.webp",
      brand: "Acer"
    },
    predator2: {
      name: "Acer Predator Triton 500 SE",
      specs: "Intel i9, RTX 4080, 32GB RAM, 2TB SSD",
      description: "Laptop gaming premium dengan layar mini-LED 16\" 240Hz dan performa kelas atas. Dirancang untuk gamer dan kreator konten profesional yang menginginkan yang terbaik.",
      price: "Rp36.999.000",
      image: "img/acer/predator-triton500se.webp",
      brand: "Acer"
    },
    predator3: {
      name: "Acer Predator Helios Neo 16",
      specs: "Intel i7, RTX 4060, 16GB RAM, 1TB SSD",
      description: "Laptop gaming dengan layar besar 16\" dan performa handal untuk gaming modern. Menawarkan pengalaman imersif dengan sistem audio DTS:X Ultra.",
      price: "Rp20.999.000",
      image: "img/acer/predator-helios-neo16.webp",
      brand: "Acer"
    },
    chromebookSpin: {
      name: "Acer Chromebook Spin 713",
      specs: "Intel i5, 8GB RAM, 256GB SSD, Layar 13.5\" 2K",
      description: "Acer Chromebook Spin 713 adalah laptop 2-in-1 premium dengan ChromeOS. Memiliki layar sentuh 2K yang dapat diputar 360 derajat, ideal untuk produktivitas dan entertainment dengan baterai tahan lama.",
      price: "Rp9.999.000",
      image: "img/acer/chromebook-spin713.webp",
      brand: "Acer"
    },
    travelmate: {
      name: "Acer TravelMate P6",
      specs: "Intel i7, 16GB RAM, 512GB SSD, Windows 11 Pro",
      description: "Acer TravelMate P6 adalah laptop bisnis premium dengan fitur keamanan tingkat enterprise. Dirancang untuk profesional yang membutuhkan performa dan keamanan tinggi dengan daya tahan baterai hingga 20 jam.",
      price: "Rp18.499.000",
      image: "img/acer/travelmate-p6.webp",
      brand: "Acer"
    },

    // ========== Lenovo Products ==========
    legion_pro_7i: {
      name: "Legion Pro 7i (16'', Gen 10)",
      specs: "Intel i5, 8GB RAM, 512GB SSD, Layar 15.6\"",
      description: "Legion Pro 7i Gen 10 adalah laptop gaming premium dari Lenovo dengan performa kencang dan sistem pendingin yang efisien. Ideal untuk gaming dan kreasi konten yang membutuhkan daya komputasi tinggi.",
      price: "Rp8.499.000",
      image: "img/lenovo/laptop4.webp",
      brand: "Lenovo"
    },
    legion_pro_5i: {
      name: "Legion Pro 5i (16'', Gen 9)",
      specs: "Intel Celeron N4500, 8GB RAM, 512GB, Layar 15.6\"",
      description: "Legion Pro 5i Gen 9 menawarkan performa gaming yang solid dengan harga yang lebih terjangkau dari seri Pro 7i. Cocok untuk gamer yang mencari keseimbangan antara performa dan nilai.",
      price: "Rp5.149.000",
      image: "img/lenovo/laptop5.1.webp",
      brand: "Lenovo"
    },
    loq_15arp9: {
      name: "Lenovo LOQ 15ARP9",
      specs: "AMD Ryzen 3 7320U, 8GB RAM, 512GB SSD",
      description: "Lenovo LOQ 15ARP9 adalah laptop gaming entry-level dengan performa AMD Ryzen yang handal. Menawarkan pengalaman gaming yang baik untuk game-game populer dengan harga yang lebih terjangkau.",
      price: "Rp6.399.000",
      image: "img/lenovo/laptop7.webp",
      brand: "Lenovo"
    },
    legion_7i: {
      name: "Legion 7i (16'', Gen 9)",
      specs: "Intel Celeron, 4GB RAM, 64GB eMMC, Layar 15.6\"",
      description: "Legion 7i Gen 9 adalah laptop gaming flagship dari Lenovo dengan bodi premium dan komponen berkualitas tinggi. Dirancang untuk gamer dan kreator konten yang menginginkan perangkat tanpa kompromi.",
      price: "Rp4.999.000",
      image: "img/lenovo/laptop8.png",
      brand: "Lenovo"
    },
    yoga_book_9i: {
      name: "Yoga Book 9i (14\", Gen 10)",
      specs: "Ryzen 9, RTX 4060, 32GB RAM, 1TB SSD",
      description: "Yoga Book 9i Gen 10 adalah laptop inovatif dengan dual screen yang memberikan fleksibilitas maksimal dalam produktivitas. Ideal untuk para profesional kreatif dan multitasker.",
      price: "Rp27.499.000",
      image: "img/lenovo/laptop9.png",
      brand: "Lenovo"
    },
    thinkbook_14_2in1: {
      name: "ThinkBook 14 2-in-1 Gen 5 (14\" Intel)",
      specs: "Intel Core m3, 8GB RAM, 128GB eMMC, Layar 14\"",
      description: "ThinkBook 14 2-in-1 Gen 5 menawarkan fleksibilitas convertible untuk produktivitas bisnis. Laptop bisnis ini menggabungkan performa yang andal dengan fitur keamanan yang dibutuhkan oleh profesional.",
      price: "Rp6.799.000",
      image: "img/lenovo/laptop10.png",
      brand: "Lenovo"
    },
    thinkpad_x1_yoga: {
      name: "ThinkPad X1 Yoga Gen 7 (14\" Intel)",
      specs: "Intel Celeron, 8GB RAM, 128GB eMMC, Layar Touch 15.6\"",
      description: "ThinkPad X1 Yoga Gen 7 adalah laptop bisnis premium convertible dengan fitur keamanan kelas enterprise. Desain konvertibel memberikan fleksibilitas maksimal untuk profesional dalam berbagai situasi.",
      price: "Rp7.299.000",
      image: "img/lenovo/laptop11.png",
      brand: "Lenovo"
    },
    thinkpad_l13: {
      name: "ThinkPad L13 Gen 4 13\" Intel",
      specs: "Intel Core i3-1215U, 8GB RAM, 256GB SSD, Layar Touch 14\"",
      description: "ThinkPad L13 Gen 4 adalah laptop bisnis kompak dengan durabilitas ThinkPad yang legendaris. Cocok untuk profesional yang membutuhkan perangkat andal dengan mobilitas tinggi.",
      price: "Rp8.999.000",
      image: "img/lenovo/laptop12.png",
      brand: "Lenovo"
    },
    thinkbook_14_gen6: {
      name: "ThinkBook 14 Gen 6 (14 inch Intel)",
      specs: "Intel Core i5-1235U, 16GB RAM, 256GB SSD, Layar 14\"",
      description: "ThinkBook 14 Gen 6 adalah laptop bisnis modern dengan desain premium dan fitur produktivitas cerdas. Ideal untuk profesional dan usaha kecil yang mencari perangkat bisnis stylish namun powerful.",
      price: "Rp10.499.000",
      image: "img/lenovo/laptop13.png",
      brand: "Lenovo"
    },
    thinkbook_14s_yoga: {
      name: "ThinkBook 14s Yoga Gen 3 (14″ Intel)",
      specs: "Intel Core i9-13900H, RTX 4060, 32GB RAM, 1TB SSD",
      description: "ThinkBook 14s Yoga Gen 3 adalah laptop bisnis convertible premium dengan performa tinggi. Menggabungkan fleksibilitas mode Yoga dengan kemampuan grafis yang kuat untuk profesional kreatif.",
      price: "Rp34.999.000",
      image: "img/lenovo/laptop14.png",
      brand: "Lenovo"
    },
    thinkpad_x12: {
      name: "ThinkPad X12 Gen 2 (12\" Intel)",
      specs: "Intel Core i7-1355U, 32GB RAM, 2TB SSD, Layar OLED 14\"",
      description: "ThinkPad X12 Gen 2 adalah laptop bisnis ultraportable premium dengan layar sentuh dan dukungan stylus. Dirancang untuk eksekutif dan profesional yang menginginkan mobilitas maksimal tanpa mengorbankan performa.",
      price: "Rp29.999.000",
      image: "img/lenovo/laptop15.png",
      brand: "Lenovo"
    },
    ideapad_flex_5i: {
      name: "IdeaPad Flex 5i (16\", Gen 8)",
      specs: "AMD Ryzen 9 8945HS, RTX 4070, 16GB RAM, 1TB SSD",
      description: "IdeaPad Flex 5i Gen 8 adalah laptop 2-in-1 yang menggabungkan performa tinggi dengan fleksibilitas. Cocok untuk pelajar, mahasiswa, dan profesional yang membutuhkan perangkat versatile untuk berbagai kebutuhan.",
      price: "Rp23.299.000",
      image: "img/lenovo/laptop16.png",
      brand: "Lenovo"
    },
    flex_d330: {
      name: "Lenovo Flex D330",
      specs: "Intel Core i9-14900HX, RTX 4080, 32GB RAM, 2TB SSD",
      description: "Lenovo Flex D330 adalah laptop convertible dengan performa tinggi dan fitur premium. Laptop ini menggabungkan mode tablet dan laptop untuk pengalaman komputasi yang fleksibel.",
      price: "Rp39.999.000",
      image: "img/lenovo/laptop17.webp",
      brand: "Lenovo"
    },
    ideapad_slim_1: {
      name: "Lenovo Ideapad Slim 1",
      specs: "AMD Ryzen 7 3700U, 12GB RAM, 512GB SSD, Layar 15.6\"",
      description: "Lenovo Ideapad Slim 1 adalah laptop ultraslim dengan performa yang mumpuni untuk produktivitas sehari-hari. Desain ramping dan ringan membuatnya ideal untuk mobilitas tinggi.",
      price: "Rp9.199.000",
      image: "img/lenovo/laptop18.webp",
      brand: "Lenovo"
    },
    legion_slim_5: {
      name: "Legion Slim 5 (16\", Gen 8)",
      specs: "Intel Core i9-13980HX, RTX 4070, 32GB RAM, 1TB SSD",
      description: "Legion Slim 5 Gen 8 adalah laptop gaming tipis dengan performa premium. Menggabungkan mobilitas dengan kemampuan gaming yang kuat, cocok untuk gamer yang sering berpergian.",
      price: "Rp36.149.000",
      image: "img/lenovo/laptop19.png",
      brand: "Lenovo"
    },
    ideapad_flex_5i_chromebook: {
      name: "IdeaPad Flex 5i Chromebook Gen 7 (14\" Intel)",
      specs: "Intel Core i9-13980HX, RTX 4070, 32GB RAM, 1TB SSD",
      description: "IdeaPad Flex 5i Chromebook Gen 7 adalah laptop 2-in-1 dengan Chrome OS yang cepat dan efisien. Ideal untuk pelajar dan profesional yang mengutamakan kecepatan, keamanan, dan kemudahan penggunaan.",
      price: "Rp36.149.000",
      image: "img/lenovo/laptop20.png",
      brand: "Lenovo"
    },
    yoga_7i: {
      name: "Yoga 7i 2-in-1 (16'', Gen 9)",
      specs: "Intel Core i9-13980HX, RTX 4070, 32GB RAM, 1TB SSD",
      description: "Yoga 7i 2-in-1 Gen 9 adalah laptop premium convertible dengan layar besar 16 inci. Memberikan fleksibilitas maksimal dan performa tinggi untuk kreativitas dan produktivitas.",
      price: "Rp36.149.000",
      image: "img/lenovo/laptop21.png",
      brand: "Lenovo"
    },
    ideapad_slim_5: {
      name: "IdeaPad Slim 5 (15'', Gen 10)",
      specs: "Intel Core i9-13980HX, RTX 4070, 32GB RAM, 1TB SSD",
      description: "IdeaPad Slim 5 Gen 10 adalah laptop ultraslim dengan performa tinggi dan desain premium. Cocok untuk profesional dan pengguna yang membutuhkan laptop powerful dengan mobilitas tinggi.",
      price: "Rp36.149.000",
      image: "img/lenovo/laptop22.png",
      brand: "Lenovo"
    }
  };

  // Render isi modal
  function renderProductModal(product) {
    const modalContent = document.getElementById('productDetailContent');
    // Tentukan brand dari nama produk jika tidak tersedia
    let brandName = product.brand || "Unknown";
    
    // Deteksi brand dari nama produk jika masih "Unknown"
    if (brandName === "Unknown") {
      if (product.name.includes("ASUS") || product.name.includes("ROG") || product.name.includes("ZenBook") || product.name.includes("VivoBook")) {
        brandName = "ASUS";
      } else if (product.name.includes("Acer") || product.name.includes("Predator") || product.name.includes("Swift") || product.name.includes("Nitro") || product.name.includes("Aspire")) {
        brandName = "Acer";
      } else if (product.name.includes("Lenovo") || product.name.includes("Legion") || product.name.includes("ThinkPad") || product.name.includes("ThinkBook") || product.name.includes("Yoga") || product.name.includes("IdeaPad")) {
        brandName = "Lenovo";
      }
    }
    
    // Badge color berdasarkan brand
    let badgeClass = "bg-secondary";
    if (brandName === "ASUS") {
      badgeClass = "bg-primary";
    } else if (brandName === "Acer") {
      badgeClass = "bg-success";
    } else if (brandName === "Lenovo") {
      badgeClass = "bg-danger";
    }
    
    modalContent.innerHTML = `
      <div class="row">
        <div class="col-md-6 mb-3">
          <img src="${product.image}" class="img-fluid rounded" alt="${product.name}">
        </div>
        <div class="col-md-6">
          <h3>${product.name}</h3>
          <p class="text-muted">${product.specs}</p>
          <h4 class="text-primary mb-3">${product.price}</h4>
          <div class="mb-3">
            <h5>Spesifikasi:</h5>
            <ul>${product.specs.split(', ').map(spec => `<li>${spec}</li>`).join('')}</ul>
          </div>
          <div>
            <h5>Deskripsi:</h5>
            <p>${product.description}</p>
          </div>
          <div class="mt-3">
            <span class="badge ${badgeClass}">${brandName}</span>
          </div>
        </div>
      </div>
    `;
  }

  // Event untuk tombol berbasis data-product (produk statis)
  document.querySelectorAll('.btn-detail').forEach(button => {
    button.addEventListener('click', function () {
      const key = this.getAttribute('data-product');
      const product = productData[key];
      if (product) renderProductModal(product);
    });
  });

  // Event untuk tombol berbasis data-nama (produk dinamis)
  document.querySelectorAll('.lihat-detail-btn').forEach(button => {
    button.addEventListener('click', function () {
      const productName = this.getAttribute('data-nama');
      // Mendeteksi brand dari nama produk
      let brand = this.getAttribute('data-brand');
      if (!brand) {
        if (productName.includes("ASUS") || productName.includes("ROG") || productName.includes("ZenBook") || productName.includes("VivoBook")) {
          brand = "ASUS";
        } else if (productName.includes("Acer") || productName.includes("Predator") || productName.includes("Swift") || productName.includes("Nitro") || productName.includes("Aspire")) {
          brand = "Acer";
        } else if (productName.includes("Lenovo") || productName.includes("Legion") || productName.includes("ThinkPad") || productName.includes("ThinkBook") || productName.includes("Yoga") || productName.includes("IdeaPad")) {
          brand = "Lenovo";
        }
      }
      
      const product = {
        name: productName,
        specs: this.getAttribute('data-spesifikasi'),
        description: this.getAttribute('data-deskripsi'),
        price: this.getAttribute('data-harga'),
        image: this.getAttribute('data-img'),
        brand: brand
      };
      renderProductModal(product);
    });
  });

  // Add data-brand attribute to all Lenovo product cards
  document.querySelectorAll('.product-card').forEach(card => {
    const titleElement = card.querySelector('.product-title');
    if (titleElement) {
      const productName = titleElement.textContent;
      if (productName.includes("Legion") || productName.includes("ThinkPad") || 
          productName.includes("ThinkBook") || productName.includes("Yoga") || 
          productName.includes("IdeaPad") || productName.includes("Lenovo")) {
        card.setAttribute('data-brand', 'Lenovo');
      }
    }
  });


  // =======================
  // Filter Kategori Produk
  // =======================
  const categoryLinks = document.querySelectorAll('.dropdown-item[data-category]');
  const allCategories = document.querySelectorAll('.laptop-category');
  const semuaBtn = document.getElementById('semua');
  if (semuaBtn) semuaBtn.classList.add('active');

  categoryLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const selected = this.getAttribute('data-category');

      // Tampilkan kategori sesuai pilihan
      allCategories.forEach(cat => cat.classList.remove('active'));
      document.getElementById(selected)?.classList.add('active');

      // Update tampilan kategori aktif
      categoryLinks.forEach(l => l.classList.remove('active-category'));
      this.classList.add('active-category');
    });
  });

  // =======================
  // Filter Brand (Tambahan)
  // =======================
  const brandLinks = document.querySelectorAll('.dropdown-item[data-brand]');
  
  brandLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const selectedBrand = this.getAttribute('data-brand');
      
      // Tampilkan semua produk jika "semua" dipilih
      if (selectedBrand === 'semua') {
        document.querySelectorAll('.product-card').forEach(card => {
          card.style.display = 'block';
        });
      } else {
        // Filter produk berdasarkan brand
        document.querySelectorAll('.product-card').forEach(card => {
          const cardBrand = card.getAttribute('data-brand');
          if (cardBrand === selectedBrand) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      }
      
      // Update tampilan brand aktif
      brandLinks.forEach(l => l.classList.remove('active-brand'));
      this.classList.add('active-brand');
    });
  });
});

// =======================
// Modal Open/Close Logic
// =======================
function openModal(modalId) {
  document.getElementById(modalId).style.display = 'block';
  document.body.style.overflow = 'hidden'; // Cegah scroll
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
  document.body.style.overflow = ''; // Pulihkan scroll
}

// Tutup modal saat klik luar
window.onclick = function (event) {
  if (event.target.classList.contains('product-modal')) {
    event.target.style.display = 'none';
    document.body.style.overflow = '';
  }
};

// Tutup modal dengan tombol Escape
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    document.querySelectorAll('.product-modal').forEach(modal => {
      modal.style.display = 'none';
    });
    document.body.style.overflow = '';
  }
});


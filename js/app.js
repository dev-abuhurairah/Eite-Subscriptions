/**
 * ELite Subscriptions - Application Logic
 * Powers dynamic product rendering, LiteAPKs carousels, curated collections, search & filters
 */

document.addEventListener("DOMContentLoaded", () => {
  initCatalog();
  initHomeFeatured();
  initTrendingCarousel();
  initCuratedCollections();
  initContactForm();
});

/**
 * Render a single LiteAPKs List Card (.app-list-card)
 * Optimized to fit titles without ugly truncation
 */
function createProductCardHTML(product) {
  const defaultPlan = product.plans ? product.plans[0] : { pricePKR: product.ourPricePKR, priceUSD: product.ourPriceUSD, duration: product.duration };
  const waDirectLink = getWhatsAppOrderLink(product, defaultPlan.duration);

  return `
    <div class="app-list-card group" onclick="openOrderModal('${product.id}')" data-category="${product.category}" data-id="${product.id}">
      
      <!-- App Icon Thumb with Soft Subtle Background -->
      <div class="app-card-thumb" style="background-color: ${product.accentColor}15;">
        ${product.iconSvg}
      </div>

      <!-- App Details -->
      <div class="app-card-details">
        <h3 class="app-card-title" title="${product.fullName || product.name}">
          ${product.name}
        </h3>
        
        <div class="app-card-meta">
          <div class="flex items-center gap-0.5 text-xs">
            <span class="font-bold text-dark">${product.rating || '5.0'}</span>
            <svg class="w-3 h-3 text-star" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
          </div>
          <span>&bull;</span>
          <span class="truncate">${product.categoryLabel.split('&')[0].trim()}</span>
        </div>

        <div class="app-card-badge">
          ${product.duration} &bull; ${defaultPlan.pricePKR}
        </div>
      </div>

      <!-- Compact WhatsApp Order Button -->
      <button 
        type="button" 
        class="btn-whatsapp-lite" 
        onclick="event.stopPropagation(); window.open('${waDirectLink}', '_blank');"
        title="Order on WhatsApp"
      >
        <svg class="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.599 2.679-.702c.97.53 1.77.822 2.78.822 3.18 0 5.767-2.587 5.768-5.766.001-3.182-2.585-5.806-5.767-5.806zm0 10.455c-.93 0-1.74-.26-2.45-.73l-.18-.11-1.82.48.49-1.77-.12-.19c-.53-.84-.81-1.71-.81-2.61 0-2.66 2.17-4.83 4.88-4.83 2.68 0 4.87 2.17 4.87 4.83 0 2.66-2.19 4.92-4.88 4.92z"/></svg>
        <span>Order</span>
      </button>

    </div>
  `;
}

/**
 * 1. Initialize Trending Snap Carousel with 100% Reliable Branded Artwork Banners
 * (Zero broken images, instant rendering, high-tech aesthetic)
 */
function initTrendingCarousel() {
  const carouselContainer = document.getElementById("trending-carousel");
  if (!carouselContainer) return;

  const trendingIds = ["chatgpt-plus", "netflix-premium", "claude-pro", "canva-pro", "gemini-advanced", "spotify-premium"];
  const trendingProducts = trendingIds.map(id => getProductById(id)).filter(Boolean);

  carouselContainer.innerHTML = trendingProducts.map(p => {
    const defaultPlan = p.plans ? p.plans[0] : { pricePKR: p.ourPricePKR };
    return `
      <div class="snap-start snap-banner-card cursor-pointer group" onclick="openOrderModal('${p.id}')">
        
        <!-- Branded Artwork Banner Box -->
        <div class="banner-cover-box" style="background: ${p.bannerGradient};">
          <!-- Ambient Glow Circle -->
          <div class="absolute -right-8 -bottom-8 w-36 h-36 rounded-full opacity-35 blur-2xl pointer-events-none" style="background-color: ${p.accentColor};"></div>
          
          <div class="relative z-10 flex flex-col items-center justify-center p-4 text-center">
            <div class="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg mb-2.5 border border-white/20" style="background: rgba(255, 255, 255, 0.12); backdrop-filter: blur(8px);">
              <div class="[&_svg]:w-8 [&_svg]:h-8 [&_svg]:text-white">
                ${p.iconSvg}
              </div>
            </div>
            <span class="text-white font-extrabold text-base tracking-tight drop-shadow-sm font-heading">
              ${p.fullName || p.name}
            </span>
            <span class="text-[11px] text-white/80 font-semibold mt-0.5 drop-shadow-sm">
              ${p.tagline || p.categoryLabel}
            </span>
          </div>

          <!-- Top Free Promo Tag -->
          <div class="absolute top-3 right-3 bg-primary text-white text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full shadow-md">
            ${defaultPlan.pricePKR}
          </div>
        </div>

        <!-- Glass Footer -->
        <div class="card-glass-footer">
          <div class="w-9 h-9 rounded-xl p-1.5 shadow-sm shrink-0 flex items-center justify-center" style="background-color: ${p.accentColor}15;">
            ${p.iconSvg}
          </div>
          <div class="min-w-0 flex-1">
            <h4 class="font-extrabold text-dark text-sm truncate m-0 leading-tight group-hover:text-primary transition-colors font-heading">
              ${p.name}
            </h4>
            <p class="text-xs font-semibold text-primary mt-0.5 truncate">
              ${p.categoryLabel} &bull; ${p.duration}
            </p>
          </div>
        </div>

      </div>
    `;
  }).join("");
}

/**
 * 2. Initialize Curated Collections Grid with Branded CSS Meshes
 */
function initCuratedCollections() {
  const container = document.getElementById("curated-collections-grid");
  if (!container || typeof COLLECTIONS === "undefined") return;

  container.innerHTML = COLLECTIONS.map(col => {
    const colProducts = col.productIds.map(id => getProductById(id)).filter(Boolean);
    
    return `
      <div class="collection-card group cursor-pointer" onclick="window.location.href='catalog.html?category=${col.category}'">
        <div class="collection-bg-mesh" style="background: ${col.gradient};">
          <div class="absolute -right-6 -bottom-6 w-32 h-32 rounded-full opacity-35 blur-xl pointer-events-none" style="background-color: ${col.accent};"></div>
        </div>
        
        <div class="collection-content">
          <h4 class="collection-title">${col.title}</h4>
          
          <div class="collection-icons">
            ${colProducts.map(cp => `
              <div class="collection-mini-icon" title="${cp.name}">
                ${cp.iconSvg}
              </div>
            `).join("")}
            <span class="text-xs font-extrabold text-white ml-1 drop-shadow-sm font-heading">
              +Bundle Free
            </span>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

/**
 * 3. Initialize Home Page Featured Products Grid
 */
function initHomeFeatured() {
  const featuredGrid = document.getElementById("home-featured-grid");
  if (!featuredGrid) return;

  // Show top 8 products
  const featuredList = PRODUCTS.slice(0, 8);
  featuredGrid.innerHTML = featuredList.map(createProductCardHTML).join('');
}

/**
 * 4. Initialize Catalog Page (LiteAPKs Store Browse View)
 */
function initCatalog() {
  const catalogGrid = document.getElementById("catalog-products-grid");
  if (!catalogGrid) return;

  const searchInput = document.getElementById("catalog-search-input");
  const categoryTabsContainer = document.getElementById("category-tabs");
  const sortSelect = document.getElementById("catalog-sort-select");
  const productCountDisplay = document.getElementById("product-count-display");
  const noResultsState = document.getElementById("catalog-no-results");

  // Read URL query params: category & search
  const urlParams = new URLSearchParams(window.location.search);
  let activeCategory = urlParams.get("category") || "all";
  let searchQuery = urlParams.get("search") || "";
  let currentSort = "featured";

  if (searchInput && searchQuery) {
    searchInput.value = searchQuery;
  }

  // Render Category Filter Pills
  if (categoryTabsContainer) {
    categoryTabsContainer.innerHTML = CATEGORIES.map(cat => `
      <button type="button" class="tab-pill ${cat.id === activeCategory ? 'active' : ''}" data-category="${cat.id}">
        ${cat.label}
      </button>
    `).join('');

    categoryTabsContainer.addEventListener("click", (e) => {
      const btn = e.target.closest(".tab-pill");
      if (!btn) return;
      categoryTabsContainer.querySelectorAll(".tab-pill").forEach(t => t.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = btn.dataset.category;
      
      const params = new URLSearchParams(window.location.search);
      if (activeCategory === "all") {
        params.delete("category");
      } else {
        params.set("category", activeCategory);
      }
      const newQuery = params.toString() ? `?${params.toString()}` : "catalog.html";
      window.history.replaceState({}, "", newQuery);

      filterAndRender();
    });
  }

  // Filter & Sort Products
  function filterAndRender() {
    let filtered = PRODUCTS.filter(product => {
      const matchesCategory = (activeCategory === "all" || product.category === activeCategory);
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        product.name.toLowerCase().includes(q) || 
        (product.fullName && product.fullName.toLowerCase().includes(q)) ||
        product.description.toLowerCase().includes(q) ||
        product.features.some(f => f.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });

    if (currentSort === "rating") {
      filtered.sort((a, b) => (parseFloat(b.rating || 5.0) - parseFloat(a.rating || 5.0)));
    } else if (currentSort === "name") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (productCountDisplay) {
      productCountDisplay.textContent = `Showing ${filtered.length} subscription${filtered.length === 1 ? '' : 's'}`;
    }

    if (filtered.length === 0) {
      catalogGrid.innerHTML = "";
      if (noResultsState) noResultsState.classList.remove("hidden");
    } else {
      if (noResultsState) noResultsState.classList.add("hidden");
      catalogGrid.innerHTML = filtered.map(createProductCardHTML).join('');
    }
  }

  // Search input listener
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      filterAndRender();
    });
  }

  // Sort select listener
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      currentSort = e.target.value;
      filterAndRender();
    });
  }

  // Initial render
  filterAndRender();
}

/**
 * 5. Initialize Quick WhatsApp Support Form
 */
function initContactForm() {
  const form = document.getElementById("quick-contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("contact-name").value.trim();
    const service = document.getElementById("contact-service").value.trim();
    const message = document.getElementById("contact-message").value.trim();

    const formattedMessage = `Hello ELite Subscriptions,\n\nName: ${name}\nInterested In: ${service || 'Official Subscriptions'}\nMessage: ${message}`;
    
    window.open(`https://wa.me/${STORE_CONFIG.phoneRaw}?text=${encodeURIComponent(formattedMessage)}`, "_blank");
  });
}

/**
 * Abu Hurairah Subscriptions - Application Logic
 * Powers dynamic product rendering, live search, category filtering, and sorting
 */

document.addEventListener("DOMContentLoaded", () => {
  // If we are on the catalog page or home page with product grids
  initCatalog();
  initHomeFeatured();
  initContactForm();
});

/**
 * Render a single minimalist product card
 */
function createProductCardHTML(product) {
  const defaultPlan = product.plans ? product.plans[0] : { pricePKR: product.ourPricePKR, priceUSD: product.ourPriceUSD, duration: product.duration };
  const waDirectLink = getWhatsAppOrderLink(product, defaultPlan.duration);

  return `
    <div class="minimal-card flex flex-col justify-between p-3 group relative bg-white" data-category="${product.category}" data-id="${product.id}">
      
      <!-- Card Top: Badge & Icon -->
      <div>
        <div class="flex items-start justify-between gap-2 mb-2">
          <div class="w-7 h-7 rounded-md bg-slate-50 border border-slate-100 flex items-center justify-center p-1 group-hover:scale-105 transition-transform shrink-0 [&_svg]:w-4 [&_svg]:h-4">
            ${product.iconSvg}
          </div>
          <div class="flex items-center gap-1 flex-wrap justify-end">
            ${product.badge ? `<span class="badge-pill text-[9px] py-0.5 px-1.5 font-semibold ${product.badgeClass}">${product.badge}</span>` : ''}
          </div>
        </div>

        <!-- Title & 1-Line Tagline -->
        <h3 class="font-heading font-bold text-slate-900 text-xs sm:text-[13px] leading-snug group-hover:text-blue-600 transition-colors truncate" title="${product.name}">
          ${product.name}
        </h3>
        <p class="text-[10px] text-slate-500 mt-0.5 line-clamp-1 leading-normal" title="${product.description}">
          ${product.description}
        </p>

        <!-- Compact Inline Price Row -->
        <div class="mt-2.5 pt-2 border-t border-slate-100 flex items-baseline justify-between">
          <div>
            <span class="text-xs sm:text-sm font-extrabold text-slate-900">${defaultPlan.pricePKR}</span>
            <span class="text-[10px] text-slate-400 line-through ml-1">${product.officialPrice}</span>
          </div>
          <span class="text-[9px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-1.5 py-0.5 rounded">
            ${defaultPlan.duration}
          </span>
        </div>

        <!-- Micro Feature Tags -->
        <div class="mt-1.5 flex items-center justify-between text-[9px] text-slate-500 font-medium">
          <span class="flex items-center gap-1 text-emerald-700 font-semibold">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
            ${product.deliveryTime}
          </span>
          <span class="truncate max-w-[110px] text-slate-400">${product.accountType}</span>
        </div>
      </div>

      <!-- Card Bottom Actions -->
      <div class="mt-2.5 pt-2 border-t border-slate-100 grid grid-cols-2 gap-1.5">
        <button onclick="openOrderModal('${product.id}')" class="btn-secondary text-[10px] py-1 px-1.5 font-semibold text-center justify-center">
          Plans (${product.plans ? product.plans.length : 1})
        </button>
        <a href="${waDirectLink}" target="_blank" rel="noopener" class="btn-whatsapp text-[10px] py-1 px-1.5 font-bold justify-center">
          <svg class="w-2.5 h-2.5 shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.599 2.679-.702c.97.53 1.77.822 2.78.822 3.18 0 5.767-2.587 5.768-5.766.001-3.182-2.585-5.806-5.767-5.806zm0 10.455c-.93 0-1.74-.26-2.45-.73l-.18-.11-1.82.48.49-1.77-.12-.19c-.53-.84-.81-1.71-.81-2.61 0-2.66 2.17-4.83 4.88-4.83 2.68 0 4.87 2.17 4.87 4.83 0 2.66-2.19 4.92-4.88 4.92zm2.66-3.66c-.15-.07-.86-.42-.99-.47-.14-.05-.24-.07-.34.07-.1.15-.38.47-.47.57-.09.1-.18.12-.32.05-.72-.36-1.39-.77-1.92-1.3-.43-.44-.72-.94-.85-1.16-.08-.14-.01-.22.06-.29.07-.07.15-.17.22-.25.07-.09.1-.15.15-.25.05-.1.02-.19-.01-.26-.03-.07-.34-.81-.46-1.12-.12-.29-.25-.26-.34-.26h-.29c-.1 0-.26.04-.4.19-.14.15-.53.52-.53 1.27s.55 1.47.62 1.57c.07.1 1.07 1.64 2.6 2.3 1.53.66 1.53.44 1.8.41.28-.03.88-.36 1-.71.13-.35.13-.65.09-.71-.04-.07-.14-.11-.28-.18z"/></svg>
          Order
        </a>
      </div>

    </div>
  `;
}

/**
 * Initialize Catalog Page
 */
function initCatalog() {
  const catalogGrid = document.getElementById("catalog-products-grid");
  if (!catalogGrid) return;

  const searchInput = document.getElementById("catalog-search-input");
  const categoryTabsContainer = document.getElementById("category-tabs");
  const sortSelect = document.getElementById("catalog-sort-select");
  const productCountDisplay = document.getElementById("product-count-display");
  const noResultsState = document.getElementById("catalog-no-results");

  // Read URL query params e.g. ?category=ai
  const urlParams = new URLSearchParams(window.location.search);
  let activeCategory = urlParams.get("category") || "all";
  let searchQuery = "";
  let currentSort = "featured";

  // Render Category Filter Pills
  if (categoryTabsContainer) {
    categoryTabsContainer.innerHTML = CATEGORIES.map(cat => `
      <button type="button" class="filter-tab ${cat.id === activeCategory ? 'active' : ''}" data-category="${cat.id}">
        ${cat.label}
      </button>
    `).join('');

    categoryTabsContainer.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-tab");
      if (!btn) return;
      categoryTabsContainer.querySelectorAll(".filter-tab").forEach(t => t.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = btn.dataset.category;
      
      // Update browser URL without reload
      const newUrl = activeCategory === "all" ? "catalog.html" : `catalog.html?category=${activeCategory}`;
      window.history.replaceState({}, "", newUrl);

      filterAndRender();
    });
  }

  // Filter & Sorting function
  function filterAndRender() {
    let filtered = PRODUCTS.filter(product => {
      const matchesCategory = (activeCategory === "all" || product.category === activeCategory);
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        product.name.toLowerCase().includes(q) || 
        product.description.toLowerCase().includes(q) ||
        product.features.some(f => f.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });

    // Sort
    if (currentSort === "price-low") {
      filtered.sort((a, b) => {
        const pA = parseInt(a.ourPricePKR.replace(/\D/g, '')) || 0;
        const pB = parseInt(b.ourPricePKR.replace(/\D/g, '')) || 0;
        return pA - pB;
      });
    } else if (currentSort === "price-high") {
      filtered.sort((a, b) => {
        const pA = parseInt(a.ourPricePKR.replace(/\D/g, '')) || 0;
        const pB = parseInt(b.ourPricePKR.replace(/\D/g, '')) || 0;
        return pB - pA;
      });
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

  // Search input handler
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      filterAndRender();
    });
  }

  // Sort select handler
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
 * Initialize Home Page Featured Grid
 */
function initHomeFeatured() {
  const featuredGrid = document.getElementById("home-featured-grid");
  if (!featuredGrid) return;

  // Take top 8 popular subscriptions for 4-column balanced grid
  const featuredList = PRODUCTS.slice(0, 8);
  featuredGrid.innerHTML = featuredList.map(createProductCardHTML).join('');
}

/**
 * Initialize Contact Page Form
 */
function initContactForm() {
  const form = document.getElementById("quick-contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("contact-name").value.trim();
    const service = document.getElementById("contact-service").value.trim();
    const message = document.getElementById("contact-message").value.trim();

    const formattedMessage = `Hello Abu Hurairah,\n\nName: ${name}\nInterested In: ${service || 'Official Subscriptions'}\nMessage: ${message}`;
    
    // Redirect to WhatsApp with message
    window.open(`https://wa.me/${STORE_CONFIG.phoneRaw}?text=${encodeURIComponent(formattedMessage)}`, "_blank");
  });
}

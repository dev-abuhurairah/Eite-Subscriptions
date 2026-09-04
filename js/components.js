/**
 * ELite Subscriptions - Universal Components
 * LiteAPKs Navigation, Mobile Drawer, Mobile Bottom Nav, Clean Footer & Order Modal
 */

document.addEventListener("DOMContentLoaded", () => {
  renderLiteNavbar();
  renderLiteBottomNav();
  renderLiteFooter();
  renderFloatingWhatsApp();
  setupOrderModal();
  setupSearchAndSidebarEvents();
});

/**
 * 1. LiteAPKs Header with Clean Icon Alignment & Expandable Search
 */
function renderLiteNavbar() {
  const container = document.getElementById("universal-navbar");
  if (!container) return;

  const currentPath = (window.location.pathname || "").toLowerCase();
  const currentSearch = (window.location.search || "").toLowerCase();

  const isAi = currentSearch.includes("ai");
  const isCatalog = currentPath.includes("catalog.html") && !isAi;
  const isGuide = currentPath.includes("how-it-works.html");
  const isHowItWorks = isGuide;
  const isPolicy = currentPath.includes("policy.html");
  const isContact = currentPath.includes("contact.html");
  const isHome = !isCatalog && !isAi && !isGuide && !isPolicy && !isContact;

  container.innerHTML = `
    <!-- Main Sticky Header -->
    <header class="site-header">
      <div class="max-w-gp mx-auto px-4 md:px-6 relative header-container">
        
        <!-- Default Header Bar -->
        <div id="header-default" class="flex items-center gap-1.5 sm:gap-2 w-full transition-all duration-200 ease-out">
          <!-- Mobile Drawer Hamburger -->
          <button id="menuToggle" class="md:hidden w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full hover:bg-slate-100 text-[#5f6368] transition-colors shrink-0" aria-label="Open menu">
            <svg class="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
          </button>

          <!-- Brand Logo -->
          <a href="index.html" class="flex items-center gap-2 sm:gap-2.5 shrink min-w-0 no-underline mr-1 sm:mr-3 group">
            <img src="assets/logo-icon.png" alt="ELite Subscriptions" class="w-8 h-8 sm:w-9 sm:h-9 rounded-xl object-cover shadow-sm ring-1 ring-indigo-500/20 group-hover:scale-105 transition-transform duration-200 shrink-0">
            <div class="min-w-0">
              <h1 class="brand-title truncate">ELITE SUBSCRIPTIONS</h1>
              <span class="text-[8px] sm:text-[9.5px] font-extrabold uppercase tracking-wider text-indigo-500 block truncate">OFFICIAL SUBSCRIPTIONS</span>
            </div>
          </a>

          <!-- Desktop Navigation with Uniform Crisp SVG Icons -->
          <nav class="hidden md:flex items-center gap-1 ml-4 lg:ml-6">
            <a href="index.html" class="nav-link-lite ${isHome ? 'active' : ''}">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
              <span>Home</span>
            </a>
            <a href="catalog.html" class="nav-link-lite ${isCatalog ? 'active' : ''}">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/></svg>
              <span>Subscriptions</span>
            </a>
            <a href="catalog.html?cat=ai" class="nav-link-lite ${isAi ? 'active' : ''}">
              <!-- Sleek AI Sparkles SVG -->
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="m19 9 1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z"/></svg>
              <span>AI Tools</span>
            </a>
            <a href="how-it-works.html" class="nav-link-lite ${isGuide ? 'active' : ''}">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z"/></svg>
              <span>How It Works</span>
            </a>
            <a href="policy.html" class="nav-link-lite ${isPolicy ? 'active' : ''}">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
              <span>Policy</span>
            </a>
            <a href="contact.html" class="nav-link-lite ${isContact ? 'active' : ''}">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/></svg>
              <span>Contact</span>
            </a>
          </nav>

          <!-- Right Controls -->
          <div class="flex items-center gap-1.5 sm:gap-2.5 ml-auto shrink-0">
            <!-- Search Trigger Button -->
            <button id="searchToggle" class="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full hover:bg-slate-100 text-[#5f6368] transition-colors border border-border shrink-0" aria-label="Open search">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
            </button>

            <!-- WhatsApp Store Button (Hidden on Mobile, Available in Bottom Nav) -->
            <a href="https://wa.me/${STORE_CONFIG.phoneRaw}?text=${encodeURIComponent('Hi ELite Subscriptions, I would like to order an official subscription.')}" target="_blank" rel="noopener" class="btn-whatsapp-lite hidden sm:inline-flex py-2 px-3.5 text-xs">
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.599 2.679-.702c.97.53 1.77.822 2.78.822 3.18 0 5.767-2.587 5.768-5.766.001-3.182-2.585-5.806-5.767-5.806zm0 10.455c-.93 0-1.74-.26-2.45-.73l-.18-.11-1.82.48.49-1.77-.12-.19c-.53-.84-.81-1.71-.81-2.61 0-2.66 2.17-4.83 4.88-4.83 2.68 0 4.87 2.17 4.87 4.83 0 2.66-2.19 4.92-4.88 4.92zm2.66-3.66c-.15-.07-.86-.42-.99-.47-.14-.05-.24-.07-.34.07-.1.15-.38.47-.47.57-.09.1-.18.12-.32.05-.72-.36-1.39-.77-1.92-1.3-.43-.44-.72-.94-.85-1.16-.08-.14-.01-.22.06-.29.07-.07.15-.17.22-.25.07-.09.1-.15.15-.25.05-.1.02-.19-.01-.26-.03-.07-.34-.81-.46-1.12-.12-.29-.25-.26-.34-.26h-.29c-.1 0-.26.04-.4.19-.14.15-.53.52-.53 1.27s.55 1.47.62 1.57c.07.1 1.07 1.64 2.6 2.3 1.53.66 1.53.44 1.8.41.28-.03.88-.36 1-.71.13-.35.13-.65.09-.71-.04-.07-.14-.11-.28-.18z"/></svg>
              <span>WhatsApp Store</span>
            </a>
          </div>
        </div>

        <!-- Expandable Header Search Bar -->
        <div id="header-search" role="search">
          <div class="search-input-pill">
            <svg class="w-4 h-4 text-gray-3 shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
            <input id="headerSearchInput" type="search" placeholder="Search official subscriptions (ChatGPT, Netflix, Claude, Canva)..." autocomplete="off">
          </div>
          <button id="searchClose" type="button" class="w-9 h-9 flex items-center justify-center rounded-full hover:bg-slate-100 text-[#5f6368] transition-colors" aria-label="Close search">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
          </button>
        </div>

      </div>
    </header>

    <!-- Mobile Sidebar Drawer & Overlay -->
    <div id="sidebarOverlay"></div>
    <nav id="sidebar" class="hide-sb">
      <div class="flex items-center justify-between px-5 py-4 border-b border-border">
        <div class="flex items-center gap-2.5">
          <img src="assets/logo-icon.png" alt="ELite Subscriptions" class="w-8 h-8 rounded-xl object-cover shadow-sm ring-1 ring-indigo-500/20">
          <div>
            <span class="text-sm font-extrabold text-dark block leading-none font-heading">ELITE SUBSCRIPTIONS</span>
            <span class="text-[9px] font-bold text-indigo-500 uppercase tracking-wider">Subscriptions Store</span>
          </div>
        </div>
        <button id="sidebarClose" type="button" class="w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 text-slate-500 transition-colors" aria-label="Close menu">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
        </button>
      </div>
      <div class="py-3">
        <a class="sidebar-menu-item ${isHome ? 'menu-active' : ''}" href="index.html">
          <svg class="mr-3 w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
          Home
        </a>
        <a class="sidebar-menu-item ${isCatalog ? 'menu-active' : ''}" href="catalog.html">
          <svg class="mr-3 w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/></svg>
          All Subscriptions
        </a>
        <a class="sidebar-menu-item" href="catalog.html?category=ai">
          <svg class="mr-3 w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z"/></svg>
          AI Tools
        </a>
        <a class="sidebar-menu-item ${isHowItWorks ? 'menu-active' : ''}" href="how-it-works.html">
          <svg class="mr-3 w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
          How It Works
        </a>
        <a class="sidebar-menu-item ${isPolicy ? 'menu-active' : ''}" href="policy.html">
          <svg class="mr-3 w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
          Policy
        </a>
        <a class="sidebar-menu-item ${isContact ? 'menu-active' : ''}" href="contact.html">
          <svg class="mr-3 w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/></svg>
          Contact Support
        </a>
      </div>
      <div class="px-6 pt-4 mt-6 border-t border-border">
        <p class="text-xs font-bold text-gray-3 mb-2">DIRECT WHATSAPP</p>
        <a href="https://wa.me/${STORE_CONFIG.phoneRaw}" target="_blank" rel="noopener" class="btn-install text-xs py-2.5 justify-center">
          Chat: ${STORE_CONFIG.phoneDisplay}
        </a>
      </div>
    </nav>
  `;
}

/**
 * 2. Mobile Bottom Navigation Bar (LiteAPKs Style)
 */
function renderLiteBottomNav() {
  const existing = document.querySelector(".mobile-bottom-nav");
  if (existing) return;

  const currentPath = window.location.pathname.toLowerCase();
  const isHome = currentPath.endsWith("index.html") || currentPath === "/" || currentPath.endsWith("/abu-hurairah-subscriptions/") || currentPath.endsWith("/abu-hurairah-subscriptions");
  const isCatalog = currentPath.endsWith("catalog.html");
  const isHowItWorks = currentPath.endsWith("how-it-works.html");

  const bottomNav = document.createElement("nav");
  bottomNav.className = "mobile-bottom-nav md:hidden";
  bottomNav.innerHTML = `
    <a href="index.html" class="mobile-nav-item ${isHome ? 'active' : ''}">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
      <span>Home</span>
    </a>
    <a href="catalog.html" class="mobile-nav-item ${isCatalog ? 'active' : ''}">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/></svg>
      <span>Store</span>
    </a>
    <a href="catalog.html?category=ai" class="mobile-nav-item">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z"/></svg>
      <span>AI Tools</span>
    </a>
    <a href="how-it-works.html" class="mobile-nav-item ${isHowItWorks ? 'active' : ''}">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
      <span>Guide</span>
    </a>
    <a href="https://wa.me/${STORE_CONFIG.phoneRaw}" target="_blank" rel="noopener" class="mobile-nav-item text-[#25D366]">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.599 2.679-.702c.97.53 1.77.822 2.78.822 3.18 0 5.767-2.587 5.768-5.766.001-3.182-2.585-5.806-5.767-5.806zm0 10.455c-.93 0-1.74-.26-2.45-.73l-.18-.11-1.82.48.49-1.77-.12-.19c-.53-.84-.81-1.71-.81-2.61 0-2.66 2.17-4.83 4.88-4.83 2.68 0 4.87 2.17 4.87 4.83 0 2.66-2.19 4.92-4.88 4.92z"/></svg>
      <span>WhatsApp</span>
    </a>
  `;
  document.body.appendChild(bottomNav);
}

/**
 * 3. Clean LiteAPKs Universal Footer (Without the safety callout banner)
 */
function renderLiteFooter() {
  const container = document.getElementById("universal-footer");
  if (!container) return;

  container.innerHTML = `
    <footer class="border-t border-border pt-10 pb-8 mt-12 bg-white">
      <div class="max-w-gp mx-auto px-4 md:px-6">
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 pb-8">
          <div>
            <div class="flex items-center gap-2.5 mb-3">
              <img src="assets/logo-icon.png" alt="ELite Subscriptions" class="w-7 h-7 rounded-lg object-cover shadow-sm ring-1 ring-indigo-500/20">
              <span class="font-extrabold text-dark font-heading text-sm">${STORE_CONFIG.storeName}</span>
            </div>
            <div class="flex flex-col gap-2 text-xs text-gray font-medium">
              <p class="leading-relaxed">Leading direct provider of cheap official premium digital tools, AI models, and streaming accounts.</p>
              <span class="text-primary font-bold">⚡ 5 - 15 Min Instant Activation</span>
            </div>
          </div>

          <div>
            <h4 class="text-[13px] font-extrabold text-dark uppercase tracking-wider mb-3 font-heading">Popular Categories</h4>
            <div class="flex flex-col gap-2 text-xs text-gray font-medium">
              <a class="no-underline hover:text-primary transition-colors" href="catalog.html?category=ai">AI & Smart Tools</a>
              <a class="no-underline hover:text-primary transition-colors" href="catalog.html?category=streaming">Streaming & Movies</a>
              <a class="no-underline hover:text-primary transition-colors" href="catalog.html?category=dev">Developer & Coding Tools</a>
              <a class="no-underline hover:text-primary transition-colors" href="catalog.html?category=design">Design & Creative Suite</a>
              <a class="no-underline hover:text-primary transition-colors" href="catalog.html?category=security">VPN & Security</a>
            </div>
          </div>

          <div>
            <h4 class="text-[13px] font-extrabold text-dark uppercase tracking-wider mb-3 font-heading">Help & Links</h4>
            <div class="flex flex-col gap-2 text-xs text-gray font-medium">
              <a class="no-underline hover:text-primary transition-colors" href="how-it-works.html">How Ordering Works</a>
              <a class="no-underline hover:text-primary transition-colors" href="how-it-works.html#payment">Supported Payment Methods</a>
              <a class="no-underline hover:text-primary transition-colors" href="policy.html">Terms & Policy</a>
              <a class="no-underline hover:text-primary transition-colors" href="contact.html">Customer Support</a>
            </div>
          </div>

          <div>
            <h4 class="text-[13px] font-extrabold text-dark uppercase tracking-wider mb-3 font-heading">Direct Contact</h4>
            <div class="flex flex-col gap-2 text-xs text-gray font-medium">
              <div class="flex items-center gap-2">
                <span class="font-bold text-dark">WhatsApp:</span>
                <a href="https://wa.me/${STORE_CONFIG.phoneRaw}" class="text-primary font-extrabold no-underline hover:underline">${STORE_CONFIG.phoneDisplay}</a>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-dark">Email:</span>
                <a href="mailto:${STORE_CONFIG.email}" class="text-gray-3 no-underline hover:text-dark truncate">${STORE_CONFIG.email}</a>
              </div>
              <p class="text-[11px] text-gray-3 mt-1">Orders confirmed directly by ELite Subscriptions Support with 24/7 responsiveness.</p>
            </div>
          </div>
        </div>

        <div class="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-3 font-medium">
          <p><strong>&copy; ${new Date().getFullYear()} ${STORE_CONFIG.storeName}. All rights reserved.</strong></p>
          <div class="flex items-center gap-4">
            <a href="policy.html" class="no-underline hover:text-dark">Terms of Service</a>
            <span>&bull;</span>
            <a href="contact.html" class="no-underline hover:text-dark">Support</a>
          </div>
        </div>

      </div>
    </footer>
  `;
}

/**
 * 4. Header Search & Mobile Drawer Event Handlers
 */
function setupSearchAndSidebarEvents() {
  const searchToggle = document.getElementById("searchToggle");
  const headerSearch = document.getElementById("header-search");
  const searchClose = document.getElementById("searchClose");
  const searchInput = document.getElementById("headerSearchInput");

  const menuToggle = document.getElementById("menuToggle");
  const sidebar = document.getElementById("sidebar");
  const sidebarOverlay = document.getElementById("sidebarOverlay");

  if (searchToggle && headerSearch) {
    searchToggle.addEventListener("click", () => {
      headerSearch.classList.add("active");
      if (searchInput) searchInput.focus();
    });
  }

  if (searchClose && headerSearch) {
    searchClose.addEventListener("click", () => {
      headerSearch.classList.remove("active");
      if (searchInput) searchInput.value = "";
    });
  }

  if (searchInput) {
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && searchInput.value.trim()) {
        const q = encodeURIComponent(searchInput.value.trim());
        window.location.href = `catalog.html?search=${q}`;
      }
    });
  }

  const sidebarClose = document.getElementById("sidebarClose");

  const openSidebar = () => {
    if (sidebar) sidebar.classList.add("active");
    if (sidebarOverlay) sidebarOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  const closeSidebar = () => {
    if (sidebar) sidebar.classList.remove("active");
    if (sidebarOverlay) sidebarOverlay.classList.remove("active");
    document.body.style.overflow = "";
  };

  if (menuToggle) menuToggle.addEventListener("click", openSidebar);
  if (sidebarClose) sidebarClose.addEventListener("click", closeSidebar);
  if (sidebarOverlay) sidebarOverlay.addEventListener("click", closeSidebar);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeSidebar();
      if (headerSearch) headerSearch.classList.remove("active");
    }
  });
}

/**
 * 5. Floating WhatsApp Button
 */
function renderFloatingWhatsApp() {
  const existing = document.querySelector(".floating-whatsapp");
  if (existing) return;

  const btn = document.createElement("a");
  btn.href = `https://wa.me/${STORE_CONFIG.phoneRaw}?text=${encodeURIComponent('Hi ELite Subscriptions, I need assistance with an official subscription.')}`;
  btn.target = "_blank";
  btn.rel = "noopener";
  btn.className = "floating-whatsapp";
  btn.setAttribute("aria-label", "Order on WhatsApp");
  btn.innerHTML = `
    <svg class="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.599 2.679-.702c.97.53 1.77.822 2.78.822 3.18 0 5.767-2.587 5.768-5.766.001-3.182-2.585-5.806-5.767-5.806zm0 10.455c-.93 0-1.74-.26-2.45-.73l-.18-.11-1.82.48.49-1.77-.12-.19c-.53-.84-.81-1.71-.81-2.61 0-2.66 2.17-4.83 4.88-4.83 2.68 0 4.87 2.17 4.87 4.83 0 2.66-2.19 4.92-4.88 4.92zm2.66-3.66c-.15-.07-.86-.42-.99-.47-.14-.05-.24-.07-.34.07-.1.15-.38.47-.47.57-.09.1-.18.12-.32.05-.72-.36-1.39-.77-1.92-1.3-.43-.44-.72-.94-.85-1.16-.08-.14-.01-.22.06-.29.07-.07.15-.17.22-.25.07-.09.1-.15.15-.25.05-.1.02-.19-.01-.26-.03-.07-.34-.81-.46-1.12-.12-.29-.25-.26-.34-.26h-.29c-.1 0-.26.04-.4.19-.14.15-.53.52-.53 1.27s.55 1.47.62 1.57c.07.1 1.07 1.64 2.6 2.3 1.53.66 1.53.44 1.8.41.28-.03.88-.36 1-.71.13-.35.13-.65.09-.71-.04-.07-.14-.11-.28-.18z"/></svg>
  `;
  document.body.appendChild(btn);
}

/**
 * 6. LiteAPKs Styled Product Order Modal
 */
let currentModalProduct = null;
let currentSelectedPlan = null;

function setupOrderModal() {
  const modalHTML = `
    <div id="order-modal" class="modal-backdrop">
      <div class="modal-content p-4 sm:p-7">
        
        <!-- Modal Top Title -->
        <div class="flex items-start justify-between pb-3 sm:pb-4 border-b border-border gap-2">
          <div class="flex items-center gap-3 min-w-0">
            <div id="modal-product-icon" class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gray-50 flex items-center justify-center p-2 shadow-sm shrink-0"></div>
            <div class="min-w-0">
              <h3 id="modal-product-name" class="font-extrabold text-dark text-base sm:text-xl leading-tight font-heading truncate">Product Title</h3>
              <div class="flex items-center gap-2 mt-1 font-medium">
                <span class="flex items-center gap-0.5 text-xs font-bold text-dark shrink-0">
                  <span id="modal-product-rating">5.0</span>
                  <svg class="w-3.5 h-3.5 text-star" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                </span>
                <span class="text-xs text-gray-3">&bull;</span>
                <span id="modal-product-type" class="text-xs font-semibold text-primary truncate">Official Upgrade</span>
              </div>
            </div>
          </div>
          <button id="modal-close-btn" class="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-gray-3 hover:bg-slate-100 transition-colors shrink-0" aria-label="Close modal">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
          </button>
        </div>

        <!-- Modal Body -->
        <div class="py-4 space-y-4">
          
          <!-- Select Plan Duration -->
          <div>
            <label class="block text-xs font-extrabold text-gray uppercase tracking-wider mb-2 font-heading">Select Duration Plan:</label>
            <div id="modal-plans-container" class="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <!-- Dynamically rendered -->
            </div>
          </div>

          <!-- What's Included -->
          <div>
            <label class="block text-xs font-extrabold text-gray uppercase tracking-wider mb-2 font-heading">What is included:</label>
            <ul id="modal-features-list" class="space-y-1.5 text-xs text-dark font-medium">
              <!-- Dynamically rendered -->
            </ul>
          </div>

          <!-- Activation Info Row -->
          <div class="flex items-center justify-between text-xs py-2 px-3 bg-gray-50 rounded-xl border border-border font-medium">
            <span class="text-gray font-semibold">Activation Time:</span>
            <span id="modal-delivery-time" class="font-bold text-dark font-heading">5 - 15 mins</span>
          </div>

        </div>

        <!-- Modal Footer Actions -->
        <div class="pt-3 border-t border-border flex flex-col sm:flex-row items-center gap-2.5">
          <a id="modal-whatsapp-cta" href="#" target="_blank" rel="noopener" class="btn-install">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.599 2.679-.702c.97.53 1.77.822 2.78.822 3.18 0 5.767-2.587 5.768-5.766.001-3.182-2.585-5.806-5.767-5.806zm0 10.455c-.93 0-1.74-.26-2.45-.73l-.18-.11-1.82.48.49-1.77-.12-.19c-.53-.84-.81-1.71-.81-2.61 0-2.66 2.17-4.83 4.88-4.83 2.68 0 4.87 2.17 4.87 4.83 0 2.66-2.19 4.92-4.88 4.92z"/></svg>
            Order On WhatsApp
          </a>
          <button id="modal-cancel-btn" class="btn-secondary-lite w-full sm:w-auto py-2.5 px-4 font-bold">
            Close
          </button>
        </div>

      </div>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", modalHTML);

  const modal = document.getElementById("order-modal");
  const closeBtn = document.getElementById("modal-close-btn");
  const cancelBtn = document.getElementById("modal-cancel-btn");

  const closeModal = () => {
    modal.classList.remove("active");
  };

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (cancelBtn) cancelBtn.addEventListener("click", closeModal);
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }
}

function openOrderModal(productId, defaultPlanDuration) {
  const product = getProductById(productId);
  if (!product) return;

  currentModalProduct = product;
  const modal = document.getElementById("order-modal");
  const modalName = document.getElementById("modal-product-name");
  const modalType = document.getElementById("modal-product-type");
  const modalIcon = document.getElementById("modal-product-icon");
  const modalRating = document.getElementById("modal-product-rating");
  const modalDelivery = document.getElementById("modal-delivery-time");
  const plansContainer = document.getElementById("modal-plans-container");
  const featuresList = document.getElementById("modal-features-list");
  const whatsappCta = document.getElementById("modal-whatsapp-cta");

  modalName.textContent = product.fullName || product.name;
  modalType.textContent = `${product.categoryLabel} • ${product.accountType}`;
  modalIcon.innerHTML = product.iconSvg;
  if (modalRating) modalRating.textContent = product.rating || "5.0";
  modalDelivery.textContent = product.deliveryTime;

  featuresList.innerHTML = product.features.map(f => `
    <li class="flex items-center gap-2">
      <svg class="w-4 h-4 text-primary shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
      <span>${f}</span>
    </li>
  `).join("");

  plansContainer.innerHTML = "";
  const plans = product.plans || [{ duration: product.duration, pricePKR: product.ourPricePKR, priceUSD: product.ourPriceUSD }];
  
  let activePlan = plans[0];
  if (defaultPlanDuration) {
    const found = plans.find(p => p.duration === defaultPlanDuration);
    if (found) activePlan = found;
  }
  currentSelectedPlan = activePlan;

  plans.forEach(plan => {
    const planBtn = document.createElement("button");
    const isSelected = plan.duration === activePlan.duration;
    planBtn.type = "button";
    planBtn.className = `text-left p-2.5 rounded-xl border transition-all ${
      isSelected 
        ? "border-primary bg-primary/10 text-dark shadow-sm ring-2 ring-primary/20" 
        : "border-border bg-white text-dark hover:border-slate-300"
    }`;

    planBtn.innerHTML = `
      <div class="flex items-center justify-between text-xs font-bold mb-1 font-heading">
        <span>${plan.duration}</span>
        ${plan.save ? `<span class="text-[9px] px-1.5 py-0.2 rounded bg-primary text-white font-extrabold">${plan.save}</span>` : ''}
      </div>
      <div class="text-sm font-extrabold text-primary font-heading">${plan.pricePKR}</div>
      <div class="text-[10px] text-gray-3">${plan.priceUSD}</div>
    `;

    planBtn.addEventListener("click", () => {
      currentSelectedPlan = plan;
      openOrderModal(productId, plan.duration);
    });

    plansContainer.appendChild(planBtn);
  });

  whatsappCta.href = getWhatsAppOrderLink(product, currentSelectedPlan.duration);
  modal.classList.add("active");
}
window.openOrderModal = openOrderModal;

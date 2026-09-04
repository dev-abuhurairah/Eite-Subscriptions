/**
 * Universal Components for Abu Hurairah Subscriptions
 * Injects Navigation, Persistent Warning Banners, Footer, and Floating WhatsApp
 */

document.addEventListener("DOMContentLoaded", () => {
  renderUniversalWarningBanner();
  renderUniversalNavbar();
  renderUniversalFooter();
  renderFloatingWhatsApp();
  setupOrderModal();
});

/**
 * 1. Persistent Top Warning Banner (Mandatory on Every Page)
 */
function renderUniversalWarningBanner() {
  const container = document.getElementById("universal-warning-banner");
  if (!container) return;
  container.innerHTML = ""; // Warning banner removed from top per user request
}

/**
 * 2. Universal Navigation Bar
 */
function renderUniversalNavbar() {
  const container = document.getElementById("universal-navbar");
  if (!container) return;

  const currentPath = window.location.pathname.toLowerCase();
  
  const isHome = currentPath.endsWith("index.html") || currentPath === "/" || currentPath.endsWith("/abu-hurairah-subscriptions/") || currentPath.endsWith("/abu-hurairah-subscriptions");
  const isCatalog = currentPath.endsWith("catalog.html");
  const isHowItWorks = currentPath.endsWith("how-it-works.html");
  const isPolicy = currentPath.endsWith("policy.html");
  const isContact = currentPath.endsWith("contact.html");

  container.innerHTML = `
    <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-14">
          
          <!-- Logo & Brand -->
          <a href="index.html" class="flex items-center gap-2.5 group text-decoration-none py-1">
            <img src="assets/logo-icon-transparent.png" alt="Abu Hurairah Subscriptions Logo" class="h-8 sm:h-9 w-auto object-contain group-hover:scale-105 transition-transform shrink-0" />
            <div>
              <div class="font-heading font-bold text-slate-900 text-sm sm:text-base leading-tight flex items-center gap-1.5">
                Abu Hurairah
                <span class="inline-flex items-center text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.2 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">Official</span>
              </div>
              <p class="text-[11px] text-slate-500 font-medium leading-tight">Authentic Subscriptions</p>
            </div>
          </a>

          <!-- Desktop Navigation -->
          <nav class="hidden md:flex items-center gap-1 text-xs">
            <a href="index.html" class="px-3 py-1.5 rounded-lg font-semibold transition-colors ${isHome ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}">Home</a>
            <a href="catalog.html" class="px-3 py-1.5 rounded-lg font-semibold transition-colors ${isCatalog ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}">All Subscriptions</a>
            <a href="how-it-works.html" class="px-3 py-1.5 rounded-lg font-semibold transition-colors ${isHowItWorks ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}">How It Works</a>
            <a href="policy.html" class="px-3 py-1.5 rounded-lg font-semibold transition-colors ${isPolicy ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}">Policy</a>
            <a href="contact.html" class="px-3 py-1.5 rounded-lg font-semibold transition-colors ${isContact ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}">Contact</a>
          </nav>

          <!-- Action CTA & WhatsApp -->
          <div class="hidden lg:flex items-center gap-2.5">
            <a href="mailto:${STORE_CONFIG.email}" class="text-xs font-medium text-slate-500 hover:text-slate-800 transition-colors flex items-center gap-1">
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              ${STORE_CONFIG.email}
            </a>
            <a href="https://wa.me/${STORE_CONFIG.phoneRaw}?text=${encodeURIComponent('Hi Abu Hurairah, I would like to buy a subscription.')}" target="_blank" rel="noopener" class="btn-whatsapp text-xs py-1.5 px-3">
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.599 2.679-.702c.97.53 1.77.822 2.78.822 3.18 0 5.767-2.587 5.768-5.766.001-3.182-2.585-5.806-5.767-5.806zm0 10.455c-.93 0-1.74-.26-2.45-.73l-.18-.11-1.82.48.49-1.77-.12-.19c-.53-.84-.81-1.71-.81-2.61 0-2.66 2.17-4.83 4.88-4.83 2.68 0 4.87 2.17 4.87 4.83 0 2.66-2.19 4.92-4.88 4.92zm2.66-3.66c-.15-.07-.86-.42-.99-.47-.14-.05-.24-.07-.34.07-.1.15-.38.47-.47.57-.09.1-.18.12-.32.05-.72-.36-1.39-.77-1.92-1.3-.43-.44-.72-.94-.85-1.16-.08-.14-.01-.22.06-.29.07-.07.15-.17.22-.25.07-.09.1-.15.15-.25.05-.1.02-.19-.01-.26-.03-.07-.34-.81-.46-1.12-.12-.29-.25-.26-.34-.26h-.29c-.1 0-.26.04-.4.19-.14.15-.53.52-.53 1.27s.55 1.47.62 1.57c.07.1 1.07 1.64 2.6 2.3 1.53.66 1.53.44 1.8.41.28-.03.88-.36 1-.71.13-.35.13-.65.09-.71-.04-.07-.14-.11-.28-.18z"/></svg>
              Claim 100% Free on WhatsApp
            </a>
          </div>

          <!-- Mobile Hamburger Toggle -->
          <div class="flex items-center gap-2 md:hidden">
            <a href="https://wa.me/${STORE_CONFIG.phoneRaw}" class="p-2 text-emerald-600 bg-emerald-50 rounded-lg" aria-label="WhatsApp">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.599 2.679-.702c.97.53 1.77.822 2.78.822 3.18 0 5.767-2.587 5.768-5.766.001-3.182-2.585-5.806-5.767-5.806z"/></svg>
            </a>
            <button id="mobile-menu-btn" class="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none" aria-label="Toggle Menu">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
          </div>

        </div>

        <!-- Mobile Navigation Menu -->
        <div id="mobile-menu" class="hidden md:hidden border-t border-slate-200 py-3 space-y-1">
          <a href="index.html" class="block px-3 py-2 rounded-lg font-semibold text-sm ${isHome ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:bg-slate-50'}">Home</a>
          <a href="catalog.html" class="block px-3 py-2 rounded-lg font-semibold text-sm ${isCatalog ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:bg-slate-50'}">All Subscriptions</a>
          <a href="how-it-works.html" class="block px-3 py-2 rounded-lg font-semibold text-sm ${isHowItWorks ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:bg-slate-50'}">How It Works</a>
          <a href="policy.html" class="block px-3 py-2 rounded-lg font-semibold text-sm ${isPolicy ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:bg-slate-50'}">Policy & Security Warning</a>
          <a href="contact.html" class="block px-3 py-2 rounded-lg font-semibold text-sm ${isContact ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:bg-slate-50'}">Contact</a>
          <div class="pt-2 border-t border-slate-100 mt-2 space-y-2">
            <a href="tel:${STORE_CONFIG.phoneRaw}" class="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-600">
              <svg class="w-4 h-4 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              ${STORE_CONFIG.phoneDisplay}
            </a>
            <a href="mailto:${STORE_CONFIG.email}" class="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-600">
              <svg class="w-4 h-4 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              ${STORE_CONFIG.email}
            </a>
            <a href="https://wa.me/${STORE_CONFIG.phoneRaw}?text=${encodeURIComponent('Hi Abu Hurairah, I would like to buy a subscription.')}" class="btn-whatsapp w-full text-center text-sm py-2.5">
              Order via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  `;

  // Mobile menu toggle event
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }
}

/**
 * 3. Universal Footer (With Disclaimer & Contact)
 */
function renderUniversalFooter() {
  const container = document.getElementById("universal-footer");
  if (!container) return;

  container.innerHTML = `
    <footer class="bg-white border-t border-slate-200 mt-auto pt-12 pb-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Crucial Notice Box inside Footer -->
        <div class="bg-amber-50/70 border border-amber-200 rounded-xl p-4 sm:p-6 mb-12">
          <div class="flex items-start gap-3">
            <div class="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            </div>
            <div class="space-y-1">
              <h4 class="text-sm font-bold text-amber-900 tracking-tight">Crucial Security & Guarantee Statement</h4>
              <p class="text-xs sm:text-sm text-amber-800 leading-relaxed">
                All subscriptions offered on this platform are 100% genuine and official services. 
                <strong>Strictly No Refunds:</strong> Because digital activations and invites are processed and delivered directly upon purchase, we cannot offer any refunds or chargebacks once access is provisioned. 
                <strong>Security Warning:</strong> Never purchase subscriptions from unverified third-party impersonators. Abu Hurairah will <u>never</u> ask for your private passwords, PINs, or confidential banking details.
              </p>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-200">
          <!-- Brand & Bio -->
          <div class="md:col-span-1 space-y-3">
            <div class="flex items-center gap-2.5">
              <img src="assets/logo-icon-transparent.png" alt="Abu Hurairah Subscriptions Logo" class="h-8 sm:h-9 w-auto object-contain shrink-0" />
              <span class="font-heading font-bold text-slate-900 text-base sm:text-lg">Abu Hurairah</span>
            </div>
            <p class="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Trusted provider of cheap, official apps & tool subscriptions. Get premium access to ChatGPT, Gemini, Claude, Netflix, Canva, and more at fractional costs.
            </p>
            <div class="pt-1 flex items-center gap-2">
              <span class="inline-flex items-center text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block mr-1.5 animate-pulse"></span>
                Fast 5-15 Min Delivery
              </span>
            </div>
          </div>

          <!-- Quick Navigation -->
          <div>
            <h4 class="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">Browse Store</h4>
            <ul class="space-y-2 text-sm">
              <li><a href="index.html" class="text-slate-600 hover:text-slate-900 transition-colors">Home Page</a></li>
              <li><a href="catalog.html" class="text-slate-600 hover:text-slate-900 transition-colors">All Subscriptions</a></li>
              <li><a href="catalog.html?category=ai" class="text-slate-600 hover:text-slate-900 transition-colors">AI Tools (ChatGPT, Gemini)</a></li>
              <li><a href="catalog.html?category=streaming" class="text-slate-600 hover:text-slate-900 transition-colors">Streaming (Netflix, Spotify)</a></li>
              <li><a href="catalog.html?category=dev" class="text-slate-600 hover:text-slate-900 transition-colors">Developer Tools (Copilot, Cursor)</a></li>
            </ul>
          </div>

          <!-- Help & Policies -->
          <div>
            <h4 class="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">Customer Information</h4>
            <ul class="space-y-2 text-sm">
              <li><a href="how-it-works.html" class="text-slate-600 hover:text-slate-900 transition-colors">How Ordering Works</a></li>
              <li><a href="how-it-works.html#payment" class="text-slate-600 hover:text-slate-900 transition-colors">Payment Methods</a></li>
              <li><a href="policy.html" class="text-slate-600 hover:text-slate-900 transition-colors font-semibold text-amber-700">No-Refund Policy</a></li>
              <li><a href="policy.html#security" class="text-slate-600 hover:text-slate-900 transition-colors">Anti-Scam Verification</a></li>
              <li><a href="contact.html" class="text-slate-600 hover:text-slate-900 transition-colors">Help & Inquiries</a></li>
            </ul>
          </div>

          <!-- Direct Verified Contact -->
          <div>
            <h4 class="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">Direct Contact</h4>
            <p class="text-xs text-slate-500 mb-3">Orders are confirmed and activated directly with Abu Hurairah:</p>
            <div class="space-y-2.5 text-sm">
              <a href="https://wa.me/${STORE_CONFIG.phoneRaw}" target="_blank" rel="noopener" class="flex items-center gap-2.5 text-slate-700 hover:text-emerald-600 transition-colors font-medium">
                <span class="w-7 h-7 rounded bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.599 2.679-.702c.97.53 1.77.822 2.78.822 3.18 0 5.767-2.587 5.768-5.766.001-3.182-2.585-5.806-5.767-5.806z"/></svg>
                </span>
                <span>WhatsApp: <strong>${STORE_CONFIG.phoneDisplay}</strong></span>
              </a>
              <a href="tel:${STORE_CONFIG.phoneRaw}" class="flex items-center gap-2.5 text-slate-700 hover:text-blue-600 transition-colors">
                <span class="w-7 h-7 rounded bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </span>
                <span>Phone: ${STORE_CONFIG.phoneDisplay}</span>
              </a>
              <a href="mailto:${STORE_CONFIG.email}" class="flex items-center gap-2.5 text-slate-700 hover:text-blue-600 transition-colors break-all">
                <span class="w-7 h-7 rounded bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </span>
                <span class="text-xs sm:text-sm">${STORE_CONFIG.email}</span>
              </a>
            </div>
          </div>

        </div>

        <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>&copy; ${new Date().getFullYear()} ${STORE_CONFIG.storeName}. All rights reserved.</p>
          <div class="flex items-center gap-4">
            <span>Official Digital Goods</span>
            <span>&bull;</span>
            <span>No Refunds Policy</span>
            <span>&bull;</span>
            <a href="policy.html" class="text-slate-500 hover:text-slate-800 underline">Terms & Fraud Disclaimer</a>
          </div>
        </div>

      </div>
    </footer>
  `;
}

/**
 * 4. Floating WhatsApp Quick Contact Button
 */
function renderFloatingWhatsApp() {
  const existing = document.querySelector(".floating-whatsapp");
  if (existing) return;

  const btn = document.createElement("a");
  btn.href = `https://wa.me/${STORE_CONFIG.phoneRaw}?text=${encodeURIComponent('Hi Abu Hurairah, I need assistance with a subscription.')}`;
  btn.target = "_blank";
  btn.rel = "noopener";
  btn.className = "floating-whatsapp";
  btn.setAttribute("aria-label", "Chat with Abu Hurairah on WhatsApp");
  btn.innerHTML = `
    <svg class="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.599 2.679-.702c.97.53 1.77.822 2.78.822 3.18 0 5.767-2.587 5.768-5.766.001-3.182-2.585-5.806-5.767-5.806zm0 10.455c-.93 0-1.74-.26-2.45-.73l-.18-.11-1.82.48.49-1.77-.12-.19c-.53-.84-.81-1.71-.81-2.61 0-2.66 2.17-4.83 4.88-4.83 2.68 0 4.87 2.17 4.87 4.83 0 2.66-2.19 4.92-4.88 4.92zm2.66-3.66c-.15-.07-.86-.42-.99-.47-.14-.05-.24-.07-.34.07-.1.15-.38.47-.47.57-.09.1-.18.12-.32.05-.72-.36-1.39-.77-1.92-1.3-.43-.44-.72-.94-.85-1.16-.08-.14-.01-.22.06-.29.07-.07.15-.17.22-.25.07-.09.1-.15.15-.25.05-.1.02-.19-.01-.26-.03-.07-.34-.81-.46-1.12-.12-.29-.25-.26-.34-.26h-.29c-.1 0-.26.04-.4.19-.14.15-.53.52-.53 1.27s.55 1.47.62 1.57c.07.1 1.07 1.64 2.6 2.3 1.53.66 1.53.44 1.8.41.28-.03.88-.36 1-.71.13-.35.13-.65.09-.71-.04-.07-.14-.11-.28-.18z"/></svg>
  `;
  document.body.appendChild(btn);
}

/**
 * 5. Global Interactive Order Modal
 */
let currentModalProduct = null;
let currentSelectedPlan = null;

function setupOrderModal() {
  const modalHTML = `
    <div id="order-modal" class="modal-backdrop">
      <div class="modal-content p-6 sm:p-8">
        
        <!-- Header -->
        <div class="flex items-start justify-between pb-4 border-b border-slate-100">
          <div class="flex items-center gap-3">
            <div id="modal-product-icon" class="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center"></div>
            <div>
              <h3 id="modal-product-name" class="font-heading font-bold text-slate-900 text-lg sm:text-xl leading-tight">Product Title</h3>
              <p id="modal-product-type" class="text-xs text-slate-500 font-medium">Official Activation</p>
            </div>
          </div>
          <button id="modal-close-btn" class="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors" aria-label="Close modal">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        <!-- Body -->
        <div class="py-5 space-y-5">
          <!-- Mandatory Warning reminder inside order checkout -->
          <div class="p-3.5 bg-amber-50 rounded-lg border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
            <svg class="w-4 h-4 text-amber-600 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            <div>
              <strong>No-Refund Policy Reminder:</strong> This is an official digital subscription. Once delivered, it cannot be refunded or cancelled.
            </div>
          </div>

          <!-- Select Duration / Plan -->
          <div>
            <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Choose Plan Duration:</label>
            <div id="modal-plans-container" class="grid grid-cols-2 gap-2.5">
              <!-- Dynamically populated -->
            </div>
          </div>

          <!-- Feature Highlights -->
          <div>
            <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">What is included:</label>
            <ul id="modal-features-list" class="space-y-1.5 text-xs sm:text-sm text-slate-600">
              <!-- Dynamically populated -->
            </ul>
          </div>

          <!-- Delivery info -->
          <div class="flex items-center justify-between text-xs py-2 px-3 bg-slate-50 rounded-lg border border-slate-200">
            <span class="text-slate-500">Estimated Delivery:</span>
            <span id="modal-delivery-time" class="font-bold text-slate-800">5 - 15 mins</span>
          </div>
        </div>

        <!-- Footer / Action Buttons -->
        <div class="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
          <a id="modal-whatsapp-cta" href="#" target="_blank" rel="noopener" class="btn-whatsapp w-full py-3 text-sm font-bold justify-center">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.599 2.679-.702c.97.53 1.77.822 2.78.822 3.18 0 5.767-2.587 5.768-5.766.001-3.182-2.585-5.806-5.767-5.806z"/></svg>
            Claim 100% Free on WhatsApp
          </a>
          <button id="modal-cancel-btn" class="btn-secondary w-full sm:w-auto py-3 text-sm justify-center">
            Cancel
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

  closeBtn.addEventListener("click", closeModal);
  cancelBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
}

function openOrderModal(productId, defaultPlanDuration) {
  const product = getProductById(productId);
  if (!product) return;

  currentModalProduct = product;
  const modal = document.getElementById("order-modal");
  const modalName = document.getElementById("modal-product-name");
  const modalType = document.getElementById("modal-product-type");
  const modalIcon = document.getElementById("modal-product-icon");
  const modalDelivery = document.getElementById("modal-delivery-time");
  const plansContainer = document.getElementById("modal-plans-container");
  const featuresList = document.getElementById("modal-features-list");
  const whatsappCta = document.getElementById("modal-whatsapp-cta");

  modalName.textContent = product.name;
  modalType.textContent = `${product.categoryLabel} • ${product.accountType}`;
  modalIcon.innerHTML = product.iconSvg;
  modalDelivery.textContent = product.deliveryTime;

  // Features
  featuresList.innerHTML = product.features.map(f => `
    <li class="flex items-center gap-2">
      <svg class="w-4 h-4 text-emerald-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
      <span>${f}</span>
    </li>
  `).join("");

  // Plans selection
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
    planBtn.className = `text-left p-3 rounded-xl border transition-all ${
      isSelected 
        ? "border-slate-900 bg-slate-900 text-white shadow-sm ring-2 ring-slate-900/10" 
        : "border-slate-200 bg-white text-slate-800 hover:border-slate-300"
    }`;

    planBtn.innerHTML = `
      <div class="flex items-center justify-between text-xs font-semibold mb-1">
        <span class="${isSelected ? 'text-slate-200' : 'text-slate-600'}">${plan.duration}</span>
        ${plan.save ? `<span class="text-[10px] px-1.5 py-0.5 rounded ${isSelected ? 'bg-emerald-500 text-white' : 'bg-emerald-50 text-emerald-700 border border-emerald-200'} font-bold">${plan.save}</span>` : ''}
      </div>
      <div class="text-sm font-bold ${isSelected ? 'text-emerald-300' : 'text-emerald-600'}">${plan.pricePKR}</div>
      <div class="text-[11px] ${isSelected ? 'text-slate-300' : 'text-slate-400'}">${plan.priceUSD} • Free Giveaway</div>
    `;

    planBtn.addEventListener("click", () => {
      currentSelectedPlan = plan;
      openOrderModal(productId, plan.duration);
    });

    plansContainer.appendChild(planBtn);
  });

  // Update WhatsApp link
  whatsappCta.href = getWhatsAppOrderLink(product, currentSelectedPlan.duration);

  modal.classList.add("active");
}
window.openOrderModal = openOrderModal;

/**
 * Abu Hurairah Subscriptions - Centralized Products & Store Configuration
 * 
 * Developer Note:
 * You can easily modify, add, or remove subscriptions below.
 * Change prices, titles, features, or categories in this single file.
 */

const STORE_CONFIG = {
  storeName: "Abu Hurairah Subscriptions",
  ownerName: "Abu Hurairah",
  phoneDisplay: "+92 346 7922243",
  phoneRaw: "923467922243",
  email: "lordsyedabuhurairah@gmail.com",
  currencySymbol: "Rs.",
  currencyCode: "PKR",
  secondaryCurrencySymbol: "$",
  deliveryAverage: "5 - 15 Minutes",
  logoUrl: "assets/logo-icon-transparent.png",
  fullLogoUrl: "assets/logo.jpg",
  isFreePromo: true,
  promoText: "Special Promo: Everything is 100% FREE (Rs. 0)",
  
  // Mandatory Warning displayed on every page
  mandatoryWarning: {
    badge: "100% FREE",
    message: "All subscriptions are 100% official and genuine. We do NOT offer any kind of refund once activated. Never purchase from unauthorized third parties — we will NEVER ask for your personal credentials, passwords, or OTPs.",
    shortMessage: "100% Official Subscriptions • Strictly No Refunds • We Never Ask For Passwords Or Personal Credentials"
  }
};

const CATEGORIES = [
  { id: "all", label: "All Subscriptions" },
  { id: "ai", label: "AI & Smart Tools" },
  { id: "streaming", label: "Streaming & Movies" },
  { id: "productivity", label: "Productivity & Cloud" },
  { id: "design", label: "Design & Creative" },
  { id: "dev", label: "Developer Tools" },
  { id: "security", label: "VPN & Security" }
];

const PRODUCTS = [
  {
    id: "chatgpt-plus",
    name: "ChatGPT Plus (GPT-4o)",
    category: "ai",
    categoryLabel: "AI & Smart Tools",
    badge: "100% FREE",
    badgeClass: "badge-green",
    description: "Full access to GPT-4o, Advanced Voice, Canvas, and DALL-E 3 image generation.",
    officialPrice: "$20.00/mo",
    ourPricePKR: "FREE (Rs. 0)",
    ourPriceUSD: "$0.00",
    duration: "1 Month",
    deliveryTime: "Instant (5-10 mins)",
    accountType: "Private / Email Upgrade",
    plans: [
      { duration: "1 Month", pricePKR: "FREE (Rs. 0)", priceUSD: "$0.00", save: "100% FREE" },
      { duration: "3 Months", pricePKR: "FREE (Rs. 0)", priceUSD: "$0.00", save: "100% FREE" },
      { duration: "6 Months", pricePKR: "FREE (Rs. 0)", priceUSD: "$0.00", save: "100% FREE" },
      { duration: "1 Year", pricePKR: "FREE (Rs. 0)", priceUSD: "$0.00", save: "100% FREE" }
    ],
    features: [
      "Access to latest GPT-4o & GPT-4 models",
      "DALL·E 3 high-definition image generation",
      "Advanced Data Analysis & File uploads",
      "Canvas mode for writing & coding",
      "Faster response times during peak hours",
      "100% Official Subscription Guarantee"
    ],
    iconSvg: `<svg class="w-8 h-8 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12a10 10 0 0 1 10-10z"/><path d="m9 12 2 2 4-4"/></svg>`
  },
  {
    id: "gemini-advanced",
    name: "Google Gemini Advanced",
    category: "ai",
    categoryLabel: "AI & Smart Tools",
    badge: "100% FREE",
    badgeClass: "badge-green",
    description: "Gemini 1.5 Pro with 1M-2M context window, integrated with Google One 2TB cloud storage.",
    officialPrice: "$19.99/mo",
    ourPricePKR: "FREE (Rs. 0)",
    ourPriceUSD: "$0.00",
    duration: "1 Month",
    deliveryTime: "5 - 15 mins",
    accountType: "Direct Google Account Upgrade",
    plans: [
      { duration: "1 Month", pricePKR: "FREE (Rs. 0)", priceUSD: "$0.00", save: "100% FREE" },
      { duration: "3 Months", pricePKR: "FREE (Rs. 0)", priceUSD: "$0.00", save: "100% FREE" },
      { duration: "1 Year", pricePKR: "FREE (Rs. 0)", priceUSD: "$0.00", save: "100% FREE" }
    ],
    features: [
      "Google's most capable AI model (Gemini 1.5 Pro)",
      "2 Million token context window analysis",
      "Included 2TB Google One Cloud Storage",
      "Gemini in Gmail, Docs, Sheets & Slides",
      "Python code execution in-browser",
      "Official Google subscription activation"
    ],
    iconSvg: `<svg class="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07 19.07 4.93"/></svg>`
  },
  {
    id: "claude-pro",
    name: "Anthropic Claude Pro",
    category: "ai",
    categoryLabel: "AI & Smart Tools",
    badge: "100% FREE",
    badgeClass: "badge-green",
    description: "5x more usage of Claude 3.5 Sonnet, interactive Artifacts visualizer and early feature access.",
    officialPrice: "$20.00/mo",
    ourPricePKR: "FREE (Rs. 0)",
    ourPriceUSD: "$0.00",
    duration: "1 Month",
    deliveryTime: "Instant (5-15 mins)",
    accountType: "Private Account",
    plans: [
      { duration: "1 Month", pricePKR: "FREE (Rs. 0)", priceUSD: "$0.00", save: "100% FREE" },
      { duration: "3 Months", pricePKR: "FREE (Rs. 0)", priceUSD: "$0.00", save: "100% FREE" },
      { duration: "6 Months", pricePKR: "FREE (Rs. 0)", priceUSD: "$0.00", save: "100% FREE" }
    ],
    features: [
      "Claude 3.5 Sonnet top-tier coding & reasoning",
      "Interactive Artifacts UI rendering",
      "5x usage limits compared to free tier",
      "Priority access during high-traffic periods",
      "Official Anthropic account"
    ],
    iconSvg: `<svg class="w-8 h-8 text-amber-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>`
  },
  {
    id: "midjourney-standard",
    name: "Midjourney AI",
    category: "ai",
    categoryLabel: "AI & Smart Tools",
    badge: "100% FREE",
    badgeClass: "badge-green",
    description: "Industry standard photorealistic AI art generator with fast GPU generation hours.",
    officialPrice: "$30.00/mo",
    ourPricePKR: "FREE (Rs. 0)",
    ourPriceUSD: "$0.00",
    duration: "1 Month",
    deliveryTime: "10 - 20 mins",
    accountType: "Private / Discord Activated",
    plans: [
      { duration: "1 Month", pricePKR: "FREE (Rs. 0)", priceUSD: "$0.00", save: "100% FREE" },
      { duration: "3 Months", pricePKR: "FREE (Rs. 0)", priceUSD: "$0.00", save: "100% FREE" }
    ],
    features: [
      "15 hours fast GPU generation",
      "Unlimited relaxed generations",
      "Commercial usage rights",
      "General commercial terms",
      "Access to web gallery & Discord bot"
    ],
    iconSvg: `<svg class="w-8 h-8 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z"/><path d="m14 7 3 3"/></svg>`
  },
  {
    id: "canva-pro",
    name: "Canva Pro",
    category: "design",
    categoryLabel: "Design & Creative",
    badge: "100% FREE",
    badgeClass: "badge-green",
    description: "100M+ stock assets, Magic Studio AI tools, brand kits, and 1-click background remover.",
    officialPrice: "$12.99/mo",
    ourPricePKR: "FREE (Rs. 0)",
    ourPriceUSD: "$0.00",
    duration: "1 Month",
    deliveryTime: "Instant (5 mins)",
    accountType: "Personal Email Invite",
    plans: [
      { duration: "1 Month", pricePKR: "FREE (Rs. 0)", priceUSD: "$0.00", save: "100% FREE" },
      { duration: "6 Months", pricePKR: "FREE (Rs. 0)", priceUSD: "$0.00", save: "100% FREE" },
      { duration: "1 Year", pricePKR: "FREE (Rs. 0)", priceUSD: "$0.00", save: "100% FREE" }
    ],
    features: [
      "1-Click Background Remover & Magic Eraser",
      "100+ Million premium photos, videos & audio",
      "Brand Kit with custom logos, fonts & colors",
      "Magic Resize & Social Scheduler",
      "1TB Cloud Storage for your designs",
      "Upgraded directly on your own personal email"
    ],
    iconSvg: `<svg class="w-8 h-8 text-cyan-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`
  },
  {
    id: "netflix-premium",
    name: "Netflix Premium 4K UHD",
    category: "streaming",
    categoryLabel: "Streaming & Movies",
    badge: "100% FREE",
    badgeClass: "badge-green",
    description: "Watch movies & TV series in 4K Ultra HD + HDR with immersive Spatial Audio.",
    officialPrice: "$22.99/mo",
    ourPricePKR: "FREE (Rs. 0)",
    ourPriceUSD: "$0.00",
    duration: "1 Month",
    deliveryTime: "Instant (5 mins)",
    accountType: "Private Profile with PIN",
    plans: [
      { duration: "1 Month", pricePKR: "FREE (Rs. 0)", priceUSD: "$0.00", save: "100% FREE" },
      { duration: "3 Months", pricePKR: "FREE (Rs. 0)", priceUSD: "$0.00", save: "100% FREE" },
      { duration: "6 Months", pricePKR: "FREE (Rs. 0)", priceUSD: "$0.00", save: "100% FREE" }
    ],
    features: [
      "Ultra HD (4K) and HDR resolution",
      "Spatial Audio support",
      "Dedicated Private Profile with personal PIN",
      "Works on Smart TV, Laptop, Mobile & Tablet",
      "Official guarantee for the entire duration"
    ],
    iconSvg: `<svg class="w-8 h-8 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="15" x="2" y="7" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/></svg>`
  },
  {
    id: "spotify-premium",
    name: "Spotify Premium",
    category: "streaming",
    categoryLabel: "Streaming & Movies",
    badge: "100% FREE",
    badgeClass: "badge-green",
    description: "Unlimited ad-free music, offline listening, and high-fidelity 320kbps streaming audio.",
    officialPrice: "$10.99/mo",
    ourPricePKR: "FREE (Rs. 0)",
    ourPriceUSD: "$0.00",
    duration: "1 Month",
    deliveryTime: "Instant (5 mins)",
    accountType: "Personal Email Upgrade",
    plans: [
      { duration: "1 Month", pricePKR: "FREE (Rs. 0)", priceUSD: "$0.00", save: "100% FREE" },
      { duration: "3 Months", pricePKR: "FREE (Rs. 0)", priceUSD: "$0.00", save: "100% FREE" },
      { duration: "6 Months", pricePKR: "FREE (Rs. 0)", priceUSD: "$0.00", save: "100% FREE" },
      { duration: "1 Year", pricePKR: "FREE (Rs. 0)", priceUSD: "$0.00", save: "100% FREE" }
    ],
    features: [
      "Completely Ad-Free Music Streaming",
      "Download songs for offline listening",
      "Highest quality 320 kbps audio",
      "Group sessions with friends",
      "Activated on your own existing Spotify account"
    ],
    iconSvg: `<svg class="w-8 h-8 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 11.5c3.5-1 6.5-.5 8.5.5"/><path d="M7 14c4-1 8-.5 10 .5"/><path d="M9 9c3-1 6-1 7.5-.5"/></svg>`
  },
  {
    id: "youtube-premium",
    name: "YouTube Premium",
    category: "streaming",
    categoryLabel: "Streaming & Movies",
    badge: "100% FREE",
    badgeClass: "badge-green",
    description: "Ad-free YouTube videos, background playback on mobile, and YouTube Music Premium included.",
    officialPrice: "$13.99/mo",
    ourPricePKR: "FREE (Rs. 0)",
    ourPriceUSD: "$0.00",
    duration: "1 Month",
    deliveryTime: "5 - 10 mins",
    accountType: "Personal Gmail Invite",
    plans: [
      { duration: "1 Month", pricePKR: "FREE (Rs. 0)", priceUSD: "$0.00", save: "100% FREE" },
      { duration: "3 Months", pricePKR: "FREE (Rs. 0)", priceUSD: "$0.00", save: "100% FREE" },
      { duration: "6 Months", pricePKR: "FREE (Rs. 0)", priceUSD: "$0.00", save: "100% FREE" },
      { duration: "1 Year", pricePKR: "FREE (Rs. 0)", priceUSD: "$0.00", save: "100% FREE" }
    ],
    features: [
      "Zero ads across all videos",
      "Background play while using other apps or screen locked",
      "Download videos in 1080p & 4K for offline viewing",
      "YouTube Music Premium app included",
      "Upgraded directly on your personal Gmail"
    ],
    iconSvg: `<svg class="w-8 h-8 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><polygon points="10 15 15 12 10 9 10 15"/></svg>`
  },
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    category: "dev",
    categoryLabel: "Developer Tools",
    badge: "100% FREE",
    badgeClass: "badge-green",
    description: "AI pair programmer supporting VS Code, JetBrains, and Neovim with inline completions and chat.",
    officialPrice: "$10.00/mo",
    ourPricePKR: "FREE (Rs. 0)",
    ourPriceUSD: "$0.00",
    duration: "1 Month",
    deliveryTime: "10 - 20 mins",
    accountType: "GitHub Account Direct Activation",
    plans: [
      { duration: "1 Month", pricePKR: "FREE (Rs. 0)", priceUSD: "$0.00", save: "100% FREE" },
      { duration: "3 Months", pricePKR: "FREE (Rs. 0)", priceUSD: "$0.00", save: "100% FREE" },
      { duration: "1 Year", pricePKR: "FREE (Rs. 0)", priceUSD: "$0.00", save: "100% FREE" }
    ],
    features: [
      "Real-time code completions across 20+ languages",
      "GitHub Copilot Chat in IDE & CLI",
      "Unit test generation & bug diagnostics",
      "Pull request summaries & code review assistance",
      "Official GitHub subscription"
    ],
    iconSvg: `<svg class="w-8 h-8 text-slate-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>`
  },
  {
    id: "cursor-ai-pro",
    name: "Cursor AI Pro",
    category: "dev",
    categoryLabel: "Developer Tools",
    badge: "100% FREE",
    badgeClass: "badge-green",
    description: "Next-gen AI code editor with unlimited fast completions, Claude 3.5 Sonnet & GPT-4o codebase search.",
    officialPrice: "$20.00/mo",
    ourPricePKR: "FREE (Rs. 0)",
    ourPriceUSD: "$0.00",
    duration: "1 Month",
    deliveryTime: "5 - 15 mins",
    accountType: "Private Account",
    plans: [
      { duration: "1 Month", pricePKR: "FREE (Rs. 0)", priceUSD: "$0.00", save: "100% FREE" },
      { duration: "3 Months", pricePKR: "FREE (Rs. 0)", priceUSD: "$0.00", save: "100% FREE" }
    ],
    features: [
      "Unlimited fast tab completions",
      "500 fast Claude 3.5 Sonnet & GPT-4o requests/month",
      "Unlimited slow Claude 3.5 requests",
      "Multi-file edit with Composer",
      "Full repo indexing & natural language editing"
    ],
    iconSvg: `<svg class="w-8 h-8 text-cyan-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 3 21 12 12 14 9 21 3 3"/></svg>`
  },
  {
    id: "adobe-creative-cloud",
    name: "Adobe Creative Cloud All Apps",
    category: "design",
    categoryLabel: "Design & Creative",
    badge: "100% FREE",
    badgeClass: "badge-green",
    description: "20+ creative apps including Photoshop, Illustrator, Premiere Pro, After Effects, and Adobe Firefly.",
    officialPrice: "$59.99/mo",
    ourPricePKR: "FREE (Rs. 0)",
    ourPriceUSD: "$0.00",
    duration: "1 Month",
    deliveryTime: "15 - 30 mins",
    accountType: "Personal Adobe ID Activation",
    plans: [
      { duration: "1 Month", pricePKR: "FREE (Rs. 0)", priceUSD: "$0.00", save: "100% FREE" },
      { duration: "3 Months", pricePKR: "FREE (Rs. 0)", priceUSD: "$0.00", save: "100% FREE" },
      { duration: "1 Year", pricePKR: "FREE (Rs. 0)", priceUSD: "$0.00", save: "100% FREE" }
    ],
    features: [
      "Access to Photoshop, Premiere, Illustrator, After Effects, Lightroom",
      "Generative Fill powered by Adobe Firefly AI",
      "100GB Adobe Cloud Storage",
      "Adobe Fonts library & Behance Pro",
      "Upgraded directly onto your official Adobe account"
    ],
    iconSvg: `<svg class="w-8 h-8 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 2 22h20L12 2Z"/><path d="m7.5 13 4.5-9 4.5 9"/></svg>`
  },
  {
    id: "nord-vpn",
    name: "NordVPN Premium",
    category: "security",
    categoryLabel: "VPN & Security",
    badge: "100% FREE",
    badgeClass: "badge-green",
    description: "Ultra-fast VPN with 6000+ servers in 111 countries, Threat Protection, and 10 simultaneous devices.",
    officialPrice: "$12.99/mo",
    ourPricePKR: "FREE (Rs. 0)",
    ourPriceUSD: "$0.00",
    duration: "1 Month",
    deliveryTime: "Instant (5 mins)",
    accountType: "Private / Multi-device Login",
    plans: [
      { duration: "1 Month", pricePKR: "FREE (Rs. 0)", priceUSD: "$0.00", save: "100% FREE" },
      { duration: "6 Months", pricePKR: "FREE (Rs. 0)", priceUSD: "$0.00", save: "100% FREE" },
      { duration: "1 Year", pricePKR: "FREE (Rs. 0)", priceUSD: "$0.00", save: "100% FREE" }
    ],
    features: [
      "6,000+ ultra-fast servers worldwide",
      "NordLynx protocol for top-tier streaming speed",
      "Threat Protection ad & malware blocker",
      "Strict No-Logs policy verified by audit",
      "Works on PC, Mac, Android, iOS & Router"
    ],
    iconSvg: `<svg class="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`
  }
];

// Helper to find a product by ID
function getProductById(id) {
  return PRODUCTS.find(p => p.id === id);
}

// Generate direct WhatsApp link for ordering
function getWhatsAppOrderLink(product, planDuration) {
  const chosenPlan = product.plans ? product.plans.find(p => p.duration === planDuration) : null;
  const priceInfo = chosenPlan ? `${chosenPlan.pricePKR} (${chosenPlan.priceUSD})` : product.ourPricePKR;
  const duration = planDuration || product.duration;
  
  const text = encodeURIComponent(
    `Hello Abu Hurairah,\n\nI want to claim the following FREE official subscription promo:\n` +
    `• Service: ${product.name}\n` +
    `• Plan: ${duration}\n` +
    `• Price: 100% FREE (Rs. 0)\n\n` +
    `Please activate my free access. Thank you!`
  );
  
  return `https://wa.me/${STORE_CONFIG.phoneRaw}?text=${text}`;
}

// Generate general WhatsApp inquiry link
function getWhatsAppGeneralLink(customMessage) {
  const msg = customMessage || `Hello Abu Hurairah, I would like to inquire about your official subscription services.`;
  return `https://wa.me/${STORE_CONFIG.phoneRaw}?text=${encodeURIComponent(msg)}`;
}

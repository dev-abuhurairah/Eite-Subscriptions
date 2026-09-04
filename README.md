# ELite Subscriptions - Official Website (LiteAPKs Design)

A modern, high-conversion app-store website designed for **ELite Subscriptions** to sell premium official digital apps & AI subscriptions (ChatGPT Plus, Google Gemini Advanced, Claude Pro, Netflix, Canva Pro, and more), styled with the signature aesthetic of [LiteAPKs](https://liteapks.com/).

## 🚀 LiteAPKs UI/UX Design System Features

- **LiteAPKs Color Palette**:
  - Primary Android/Store Green (`#7bbf3a`) for brand identity, active pills, install/order buttons, and highlights.
  - Flame & Star Orange (`#e8710a`) for rating stars (`5.0 ★`), alert borders, and section indicators.
  - Google Deep Dark (`#202124`) for ultra-readable headings and high contrast.
  - Clean off-white background (`#fbfbfb`) with elevated card layers.
- **Inter Typography**: Sleek, razor-sharp modern UI typography from Google Fonts.
- **Header & Navigation**:
  - Sticky header (`max-w-[1400px]`) with inline SVG icons for every menu item.
  - Expandable Google-style search pill (`#f1f3f4`) with instant input and clear trigger.
  - Slide-out mobile drawer sidebar (`#sidebar`) with backdrop overlay.
  - Fixed mobile bottom app bar (`fixed bottom-0`) with icon navigation (Home, Store, AI, Guide, WhatsApp).
- **LiteAPKs App Store Cards**:
  - **Trending Snap Carousel**: Horizontal snap carousel with 16:9 banner covers and backdrop-blur frosted glass footer tags.
  - **List Row Cards (`.app-list-card`)**: 48x48 rounded app icon, star rating (`5.0 ★`), category dot, duration badge, and instant WhatsApp order trigger.
  - **Curated Collections (`.collection-card`)**: Aspect-square cards with gradient overlays and bundled app icons.
  - **Article Cards**: Editorial article layouts for ordering tutorials and security notices.
- **Interactive Order Modal**:
  - LiteAPKs-style detail sheet with plan selectors, feature highlights, and direct WhatsApp checkout.
- **Mandatory Guarantee & Safety Notices**:
  - 100% Genuine and official subscriptions.
  - Strict **NO REFUNDS** policy after activation.
  - Anti-fraud warning: ELite Subscriptions will **never** ask for personal passwords or credentials.

---

## 🛠️ Developer Guide: Centralized Configuration

All store configuration, categories, and subscription listings are maintained in:
📁 `js/products.js`

### 1. Store Configuration
```javascript
const STORE_CONFIG = {
  storeName: "ELite Subscriptions",
  brandName: "ELITE SUBSCRIPTIONS",
  ownerName: "ELite Subscriptions",
  phoneDisplay: "+92 346 7922243",
  phoneRaw: "923467922243",
  email: "lordsyedabuhurairah@gmail.com",
  isFreePromo: true, // Set to false when switching back to paid PKR pricing
  // ...
};
```

### 2. Products Data Structure
Each subscription item in `PRODUCTS` array supports:
```javascript
{
  id: "chatgpt-plus",
  name: "ChatGPT Plus (GPT-4o)",
  category: "ai",
  categoryLabel: "AI & Smart Tools",
  badge: "100% FREE",
  rating: "5.0",
  ratingCount: "8.4K",
  coverImg: "https://...",
  description: "Full access to GPT-4o, Voice, and Canvas.",
  officialPrice: "$20.00/mo",
  ourPricePKR: "FREE (Rs. 0)",
  ourPriceUSD: "$0.00",
  duration: "1 Month",
  deliveryTime: "Instant (5-10 mins)",
  accountType: "Private / Email Upgrade",
  plans: [
    { duration: "1 Month", pricePKR: "FREE (Rs. 0)", priceUSD: "$0.00", save: "100% FREE" },
    { duration: "3 Months", pricePKR: "FREE (Rs. 0)", priceUSD: "$0.00", save: "100% FREE" }
  ],
  features: ["Access to GPT-4o", "DALL-E 3", "Canvas mode"],
  iconSvg: `<!-- SVG Code -->`
}
```

---

## 🌐 Local Preview & Testing

To test locally using Python's built-in web server:
```bash
cd C:\Users\abuhu\.gemini\antigravity\scratch\abu-hurairah-subscriptions
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

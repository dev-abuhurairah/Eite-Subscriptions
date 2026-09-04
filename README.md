# Abu Hurairah Subscriptions - Official Website

A minimalist, high-conversion light-mode website designed for **Abu Hurairah** to sell premium app & AI subscriptions (ChatGPT Plus, Google Gemini Advanced, Claude Pro, Netflix, Canva Pro, and more) at affordable rates.

## 🚀 Key Features

- **Minimalist Light Mode UI**: Clean, uncluttered layout with high-contrast text, modern cards, and responsive design across desktop, tablet, and mobile.
- **Mandatory Warning on Every Page**: Persistent top alert banner, in-page callouts, and footer notices highlighting:
  - 100% Genuine and official subscriptions.
  - Strict **NO REFUNDS** policy after activation.
  - Anti-fraud warning: never buy from unauthorized third parties; Abu Hurairah will **never** ask for personal passwords or credentials.
- **Direct Ordering via WhatsApp**: Pre-filled customized WhatsApp messages with selected subscription name, duration, and price.
- **Multi-Page Architecture**:
  - `index.html`: Home page with hero, top deals, category explorer, trust highlights, and FAQ.
  - `catalog.html`: Live searchable and filterable catalog by category (AI, Streaming, Design, Dev, Security).
  - `how-it-works.html`: Step-by-step order guide and supported payment methods (EasyPaisa, JazzCash, SadaPay, Bank, Crypto).
  - `contact.html`: Dedicated contact page with direct WhatsApp, Phone (`+92 346 7922243`), Email (`lordsyedabuhurairah@gmail.com`), and quick message composer.
  - `policy.html`: Official Authenticity Guarantee, No-Refund Policy, and Security Verification guide.

---

## 🛠️ Developer Guide: How to Customize & Add Data

All store configuration and product listings are stored centrally in:
📁 `js/products.js`

### 1. Changing Contact Info or Store Name
Open `js/products.js` and edit the `STORE_CONFIG` object at the top:
```javascript
const STORE_CONFIG = {
  storeName: "Abu Hurairah Subscriptions",
  ownerName: "Abu Hurairah",
  phoneDisplay: "+92 346 7922243",
  phoneRaw: "923467922243",
  email: "lordsyedabuhurairah@gmail.com",
  // ...
};
```

### 2. Adding or Modifying Subscriptions
In `js/products.js`, find the `PRODUCTS` array. Each item follows this simple format:
```javascript
{
  id: "chatgpt-plus",
  name: "ChatGPT Plus (GPT-4o)",
  category: "ai", // "ai" | "streaming" | "productivity" | "design" | "dev" | "security"
  categoryLabel: "AI & Smart Tools",
  badge: "Most Popular",
  badgeClass: "badge-green", // "badge-green" | "badge-blue" | "badge-amber" | "badge-purple"
  description: "Full access to GPT-4o, Voice, and Canvas.",
  officialPrice: "$20.00/mo",
  ourPricePKR: "Rs. 2,150",
  ourPriceUSD: "$7.50",
  duration: "1 Month",
  deliveryTime: "Instant (5-10 mins)",
  accountType: "Private / Email Upgrade",
  plans: [
    { duration: "1 Month", pricePKR: "Rs. 2,150", priceUSD: "$7.50", save: "65% OFF" },
    { duration: "3 Months", pricePKR: "Rs. 5,900", priceUSD: "$21.00", save: "70% OFF" },
    { duration: "1 Year", pricePKR: "Rs. 19,500", priceUSD: "$70.00", save: "80% OFF" }
  ],
  features: [
    "Access to GPT-4o & GPT-4 models",
    "DALL-E 3 image generation",
    "Canvas mode for writing & coding",
    "100% Official Subscription Guarantee"
  ],
  iconSvg: `<!-- SVG Code Here -->`
}
```

---

## 🌐 How to Run or Deploy

### Local Preview:
Simply open `index.html` in any web browser, or start a lightweight local web server using Python:
```bash
cd C:\Users\abuhu\.gemini\antigravity\scratch\abu-hurairah-subscriptions
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

### Free Hosting Options:
- **GitHub Pages**: Push this directory to a GitHub repository and enable GitHub Pages in Settings.
- **Netlify / Vercel**: Drag and drop the folder to Netlify Drop for instant 10-second deployment with custom SSL.
- **cPanel / Apache / Nginx**: Upload the HTML, CSS, and JS files directly to `public_html`.

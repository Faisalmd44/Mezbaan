# Mezbaan — Premium Fast-Food Website

> **Freshly Crafted. Honestly Served.**
> A modern, mobile-first restaurant website built with Next.js 15, Tailwind CSS, and shadcn/ui.
> Black + Yellow + White theme inspired by KFC / McDonald's / Burger King.

**Live demo (Phase 1):** hero, full menu with search + veg filter + category chips, add-to-cart, slide-in cart drawer, one-tap WhatsApp order.

---

## ✨ Features (Phase 1)

- 🎨 Premium **black + yellow + white** theme with smooth animations
- 📱 **Mobile-first responsive** design
- 🍔 **Full menu** — Burgers, Pizza, Pasta, Fries, Wraps, Cheese Burst Nuggets, Combos
- 🔍 **Search** menu items instantly
- 🥬 **Veg-only** filter toggle
- 🏷️ **Category chips** filter (horizontal scroll on mobile)
- 🛒 **Add to Cart** with quantity steppers
- 📦 **Slide-in cart drawer** with running total
- 💬 **One-tap WhatsApp Order** — auto-composes full order with items, quantities & total
- 📞 **Call to Order** button
- 🎯 **Floating WhatsApp** button (always visible)
- 📝 **Editable menu** — change items & prices in a single file: `lib/menu.js`

## 🚀 Quick Start

### Prerequisites
- Node.js **18+**
- Yarn (recommended) or npm

### Install & Run

```bash
# 1. Install dependencies
yarn install

# 2. Copy env file
cp .env.example .env

# 3. Run dev server
yarn dev

# → open http://localhost:3000
```

### Production Build

```bash
yarn build
yarn start
```

---

## 📁 Project Structure

```
mezbaan/
├── app/
│   ├── api/[[...path]]/route.js   # Catch-all API route (Next.js backend)
│   ├── globals.css                # Global styles + theme tokens
│   ├── layout.js                  # Root layout + <html>/<body>
│   └── page.js                    # Main page (Hero + Menu + Cart + Footer)
├── components/
│   └── ui/                        # shadcn/ui components (button, input, badge...)
├── lib/
│   ├── menu.js                    # ⭐ EDIT MENU ITEMS & PRICES HERE
│   └── utils.js                   # cn() helper
├── hooks/                         # React hooks
├── public/                        # Static assets (add your logo here: logo.png)
├── .env.example                   # Environment template
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
├── jsconfig.json
└── README.md
```

---

## 🍽️ Editing the Menu

Open **`lib/menu.js`**. Everything is driven from this one file.

```js
export const MENU = [
  {
    id: 'b1',
    category: 'burgers',
    name: 'Crispy Veg Patty Burger',
    price: 69,           // ₹ Indian Rupees
    veg: true,
    desc: 'Golden crispy veg patty...',
    image: 'https://...jpg',   // optional; falls back to placeholder
    popular: true,             // optional flame badge
  },
  // ...add more items
]
```

**To add a category**, extend `CATEGORIES`:

```js
export const CATEGORIES = [
  { id: 'burgers', name: 'Burgers', emoji: '🍔' },
  // add your new category here
]
```

**Brand details** (address, phone, WhatsApp number) live in the `BRAND` object at the bottom of the file.

---

## 🖼️ Adding Your Real Logo

1. Drop your logo file at `public/logo.png` (or `.svg`)
2. In `app/page.js`, replace the `<Logo />` component's inner JSX with:
   ```jsx
   <img src="/logo.png" alt="Mezbaan" className="h-10" />
   ```

---

## 📞 Contact / Brand Info

Edit the `BRAND` object in `lib/menu.js`:

```js
export const BRAND = {
  name: 'Mezbaan',
  tagline: 'Freshly Crafted. Honestly Served.',
  address: 'Abul Fazal Enclave, Jamia Nagar, New Delhi',
  phone: '+91 8595244548',
  phoneRaw: '918595244548',   // WhatsApp format — no + or spaces
  website: 'mezbaaan.in',
}
```

The WhatsApp order button uses `phoneRaw` and pre-fills a formatted order message.

---

## 🌍 Deployment

### Option A — Vercel (recommended, 1-click)

1. Push this repo to GitHub
2. Go to https://vercel.com/new
3. Import your GitHub repo
4. Vercel auto-detects Next.js — click **Deploy**
5. Done! You'll get a `https://mezbaan.vercel.app` URL

**No env variables needed** for Phase 1.

### Option B — Netlify

1. Push to GitHub
2. https://app.netlify.com → **Add new site → Import from Git**
3. Build command: `yarn build`
4. Publish directory: `.next`
5. Install the **@netlify/plugin-nextjs** plugin

### Option C — Self-hosted (VPS / Docker)

```bash
yarn build
yarn start   # runs on port 3000
```

Put behind Nginx / Caddy with SSL. Sample Nginx snippet:

```nginx
server {
  server_name mezbaaan.in;
  location / {
    proxy_pass http://localhost:3000;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
  }
}
```

---

## 🔧 Tech Stack

| Layer      | Tech                                    |
|------------|-----------------------------------------|
| Framework  | Next.js 15 (App Router)                 |
| Styling    | Tailwind CSS 3                          |
| Components | shadcn/ui + Radix                       |
| Icons      | lucide-react                            |
| Fonts      | Inter (Google Fonts)                    |
| Images     | next/image (unoptimized for Unsplash)   |

---

## 📝 Roadmap (Phase 2)

- [ ] Dedicated `/menu`, `/about`, `/contact`, `/order` routes
- [ ] Checkout page with Delivery/Pickup toggle + address form
- [ ] Google Maps embed
- [ ] Customer reviews carousel
- [ ] Contact form (email integration)
- [ ] Zomato / Swiggy / Instagram social buttons
- [ ] Real Mezbaan logo integration

---

## 📄 License

Copyright © 2025 Mezbaan. All rights reserved.

---

**Address:** Abul Fazal Enclave, Jamia Nagar, New Delhi
**Phone:** +91 8595244548
**Website:** mezbaaan.in

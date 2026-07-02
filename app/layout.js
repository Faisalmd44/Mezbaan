import './globals.css'

export const metadata = {
  title: 'Mezbaan — Freshly Crafted. Honestly Served.',
  description: 'Premium fast food — Burgers, Pizza, Pasta, Wraps, Fries and our signature Chicken Cheese Burst Nuggets. Order now from Mezbaan, Jamia Nagar, New Delhi.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-black text-white">{children}</body>
    </html>
  )
}

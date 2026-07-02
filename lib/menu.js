// Edit menu items and prices from this single file.
// Prices in Indian Rupees (₹).

export const CATEGORIES = [
  { id: 'burgers', name: 'Burgers', emoji: '🍔' },
  { id: 'pizza', name: 'Pizza (8-inch)', emoji: '🍕' },
  { id: 'pasta', name: 'Pasta', emoji: '🍝' },
  { id: 'fries', name: 'French Fries', emoji: '🍟' },
  { id: 'wraps', name: 'Wraps', emoji: '🌯' },
  { id: 'nuggets', name: 'Cheese Burst Nuggets', emoji: '🍗' },
  { id: 'combos', name: 'Combos', emoji: '🥤' },
];

export const MENU = [
  // BURGERS
  { id: 'b1', category: 'burgers', name: 'Crispy Veg Patty Burger', price: 69, veg: true, desc: 'Golden crispy veg patty, lettuce, and Mezbaan sauce.', image: 'https://images.unsplash.com/photo-1646926521204-01c01eae80ac?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxidXJnZXJ8ZW58MHx8fHllbGxvd3wxNzgyOTY5ODA0fDA&ixlib=rb-4.1.0&q=85&w=600' },
  { id: 'b2', category: 'burgers', name: 'Paneer Crunch Burger', price: 139, veg: true, desc: 'Crunchy paneer patty layered with tangy mayo.' },
  { id: 'b3', category: 'burgers', name: 'Classic Chicken Burger', price: 129, veg: false, desc: 'Juicy chicken patty with fresh veggies and cheese.' },
  { id: 'b4', category: 'burgers', name: 'Chicken Zinger Burger', price: 149, veg: false, desc: 'Fiery spiced zinger fillet, extra crunch, extra flavour.', popular: true },

  // PIZZA
  { id: 'p1', category: 'pizza', name: 'Veg Classic Corn & Cheese', price: 149, veg: true, desc: 'Sweet corn, gooey mozzarella on a hand-tossed base.', image: 'https://images.unsplash.com/photo-1617002125368-64d671e9a4cc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwxfHxwaXp6YXxlbnwwfHx8eWVsbG93fDE3ODI5Njk4MDV8MA&ixlib=rb-4.1.0&q=85&w=600' },
  { id: 'p2', category: 'pizza', name: 'Farmhouse Delight', price: 169, veg: true, desc: 'Onion, capsicum, tomato, mushroom & mozzarella.' },
  { id: 'p3', category: 'pizza', name: 'Mezbaan Royal Paneer', price: 189, veg: true, desc: 'Tandoori paneer, onion, capsicum on rich cheesy base.' },
  { id: 'p4', category: 'pizza', name: 'Mezbaan Chicken Supreme', price: 249, veg: false, desc: 'Loaded chicken, onion & extra cheese pull.', popular: true },
  { id: 'p5', category: 'pizza', name: 'Mezbaan Loaded Chicken Feast', price: 299, veg: false, desc: 'Triple chicken toppings — for the true carnivore.' },

  // PASTA
  { id: 'pa1', category: 'pasta', name: 'Creamy White Sauce Pasta', price: 129, veg: true, desc: 'Silky Alfredo sauce with herbs and cheese.' },
  { id: 'pa2', category: 'pasta', name: 'Classic Red Sauce Pasta', price: 129, veg: true, desc: 'Tangy tomato-basil sauce, Italian herbs.' },
  { id: 'pa3', category: 'pasta', name: 'Creamy Chicken White Sauce Pasta', price: 179, veg: false, desc: 'Grilled chicken chunks in creamy Alfredo.' },
  { id: 'pa4', category: 'pasta', name: 'Creamy Chicken Red Sauce Pasta', price: 179, veg: false, desc: 'Chicken tossed in spicy red arrabiata.' },

  // FRIES
  { id: 'f1', category: 'fries', name: 'French Fries', price: 69, veg: true, desc: 'Golden salted classic — crispy outside, fluffy inside.', image: 'https://images.unsplash.com/photo-1716973208261-46f8ee456c43?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDR8MHwxfHNlYXJjaHwxfHxmcmllc3xlbnwwfHx8eWVsbG93fDE3ODI5Njk4MDR8MA&ixlib=rb-4.1.0&q=85&w=600' },
  { id: 'f2', category: 'fries', name: 'Peri Peri Fries', price: 89, veg: true, desc: 'Fiery peri peri seasoning tossed to perfection.' },
  { id: 'f3', category: 'fries', name: 'Loaded Fries', price: 130, veg: true, desc: 'Cheese, jalapeños, sauces — fully loaded.', popular: true },

  // WRAPS
  { id: 'w1', category: 'wraps', name: 'Chicken Wrap', price: 69, veg: false, desc: 'Tender chicken, veggies and creamy sauce wrapped tight.' },
  { id: 'w2', category: 'wraps', name: 'Chicken Fry Wrap', price: 89, veg: false, desc: 'Crispy fried chicken strips in a warm wrap.' },

  // NUGGETS
  { id: 'n1', category: 'nuggets', name: 'Cheese Burst Nuggets — 6 Pieces', price: 109, veg: false, desc: 'Signature cheese burst nuggets. Molten centre.', image: 'https://images.unsplash.com/photo-1715099057761-8a26ed3c64dd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwyfHxjaGlja2VufGVufDB8fHx5ZWxsb3d8MTc4Mjk2OTgyNHww&ixlib=rb-4.1.0&q=85&w=600', popular: true },
  { id: 'n2', category: 'nuggets', name: 'Cheese Burst Nuggets — 9 Pieces', price: 149, veg: false, desc: 'More cheesy goodness for sharing.' },
  { id: 'n3', category: 'nuggets', name: 'Cheese Burst Nuggets — 12 Pieces', price: 189, veg: false, desc: 'The full feast — 12 molten-cheese bombs.' },

  // COMBOS
  { id: 'c1', category: 'combos', name: 'Veg Burger + Fries + Drink', price: 119, veg: true, desc: 'The value combo — burger, fries & drink.' },
  { id: 'c2', category: 'combos', name: 'Chicken Patty Burger + Fries + Drink', price: 169, veg: false, desc: 'Classic chicken combo with all sides.' },
  { id: 'c3', category: 'combos', name: 'Chicken Zinger Burger + Fries + Drink', price: 199, veg: false, desc: 'Spicy zinger combo — hunger, meet fire.', popular: true },
  { id: 'c4', category: 'combos', name: '6 Nuggets + Fries + Drink', price: 149, veg: false, desc: 'Cheese burst nuggets combo — snack heaven.' },
];

export const BRAND = {
  name: 'Mezbaan',
  tagline: 'Freshly Crafted. Honestly Served.',
  address: 'Abul Fazal Enclave, Jamia Nagar, New Delhi',
  phone: '+91 8595244548',
  phoneRaw: '918595244548', // for WhatsApp (no +)
  website: 'mezbaaan.in',
};
